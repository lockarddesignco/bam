// Netlify Serverless Function: submission-created.js
// Triggers automatically on every Netlify form submission.
// Upserts contact in GHL, applies tags, creates opportunity in pipeline.

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_TOKEN = process.env.GHL_TOKEN;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || "edRx0be5SWTKBSn4YphV";

// Pipeline & Stage IDs
const PIPELINE_ID = "MWdPozWuyhZcDBT4Qysy"; // BAM New Lead Pipeline
const STAGE_NEW_LEAD = "8a350dc7-937e-4dbf-9d1c-63e01be367a8";

// Custom Field IDs (GHL field key → GHL field ID)
const CUSTOM_FIELD_IDS = {
  job_title: "NZPfjnw1pBDtP6yhu4lt",
  facility_type: "NfkeL2I68RJxAkfDTtr7",
  inquiry_type: "Vwh68cHCKaPQTRud4q6Z",
  describe_your_needs: "deYHRkDHu9gEv521bwpD",
  on_site_auditor: "ksmurxmRSVhP0bsYP7dg",
  facility_location: "KGtsWhZBTB0mrLDN9P23",
  square_footage: "2A8mYEatHH4MkxEvhtPm",
  systems: "dTiJ12sn4AYEqekFG4tw",
  timeline: "oROYx6KWyv7bHbNEWywV",
  hvac_units: "O9bUDLC1Gq6xwNKQXPjI",
  time_in_role: "nG1XTgSEziHATgo5A7us",
  summary: "g3335HnDthne66kxozAo",
  calculator_facility_type: "qPGawi7BQ7EV3CUKdzug",
  calculator_asset_focus: "YybKXs6M3Q6CHNmFCVkl",
  calculator_estimated_savings: "kKb3rnGWH8NAL6TzzAvw",
};

// GHL User IDs (assign all leads to both)
const OWNER_IDS = {
  travis: "E8JF1A5dT945voLWuiWN",
  britney: "nWj4P1zeFxTuGxXS8Hwa",
};

// Tag mapping by form name
const FORM_TAGS = {
  contact: ["website", "form:contact"],
  "pilot-program": ["website", "form:pilot-program"],
  "site-visit": ["website", "form:site-visit"],
  "roi-validation": ["website", "form:roi-validation"],
  "exit-intent-intake": ["website", "form:exit-intent"],
};

// Standard GHL fields — these go at the top level of the upsert payload
const STANDARD_FIELDS = new Set([
  "name",
  "firstName",
  "lastName",
  "email",
  "phone",
  "companyName",
]);

// ─── Helpers ───────────────────────────────────────────────

function splitName(fullName) {
  if (!fullName) return { firstName: "", lastName: "" };
  const trimmed = fullName.trim();
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ");
  return { firstName, lastName };
}

function formatPhone(phone) {
  if (!phone) return "";
  // Strip everything except digits and leading +
  const cleaned = phone.replace(/[^\d+]/g, "");
  // If it's 10 digits (US), prepend +1
  if (/^\d{10}$/.test(cleaned)) return `+1${cleaned}`;
  // If it starts with 1 and is 11 digits, prepend +
  if (/^1\d{10}$/.test(cleaned)) return `+${cleaned}`;
  // Otherwise return as-is
  return cleaned;
}

async function ghlRequest(endpoint, method, body) {
  const url = `${GHL_API_BASE}${endpoint}`;
  const options = {
    method,
    headers: {
      Authorization: `Bearer ${GHL_TOKEN}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      Version: "2021-07-28",
    },
  };
  if (body) options.body = JSON.stringify(body);

  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok) {
    console.error(`GHL API error [${response.status}] ${endpoint}:`, JSON.stringify(data));
  }

  return { status: response.status, data };
}

// ─── Main Handler ──────────────────────────────────────────

export async function handler(event) {
  try {
    const payload = JSON.parse(event.body).payload;

    if (!payload) {
      console.log("No payload found in event body");
      return { statusCode: 400, body: "No payload" };
    }

    const formName = payload.form_name || payload.data?.["form-name"] || "unknown";
    const formData = payload.data || {};

    console.log(`Processing form: ${formName}`);
    console.log(`Form data keys: ${Object.keys(formData).join(", ")}`);

    // Skip honeypot submissions
    if (formData["bot-field"]) {
      console.log("Bot submission detected, skipping");
      return { statusCode: 200, body: "OK" };
    }

    // ── Build contact payload ──

    const { firstName, lastName } = splitName(formData.name);
    const email = formData.email || "";
    const phone = formatPhone(formData.phone || "");
    const companyName = formData.companyName || "";

    // GHL upsert requires email or phone as a dedup key.
    if (!email && !phone) {
      console.log("No email or phone provided — cannot create contact");
      return { statusCode: 200, body: "No email or phone, skipped" };
    }

    // Build custom fields array
    const customFields = [];
    for (const [fieldKey, fieldId] of Object.entries(CUSTOM_FIELD_IDS)) {
      const value = formData[fieldKey];
      if (value !== undefined && value !== "" && value !== null) {
        customFields.push({ id: fieldId, field_value: value });
      }
    }

    // Build tags
    const tags = FORM_TAGS[formName] || ["website"];

    // Contact upsert payload
    const contactPayload = {
      locationId: GHL_LOCATION_ID,
      firstName,
      lastName,
      email,
      phone,
      companyName,
      tags,
      source: "website",
      customFields,
      assignedTo: OWNER_IDS.travis, // Primary owner — Britney added as follower via GHL workflow
    };

    // Remove empty standard fields
    if (!email) delete contactPayload.email;
    if (!phone) delete contactPayload.phone;
    if (!companyName) delete contactPayload.companyName;
    if (!firstName && !lastName) {
      delete contactPayload.firstName;
      delete contactPayload.lastName;
    }

    console.log("Upserting contact:", JSON.stringify(contactPayload, null, 2));

    // ── Upsert contact ──

    const contactResult = await ghlRequest("/contacts/upsert", "POST", contactPayload);

    if (contactResult.status !== 200 && contactResult.status !== 201) {
      console.error("Contact upsert failed:", JSON.stringify(contactResult.data));
      return { statusCode: 500, body: "Contact upsert failed" };
    }

    const contactId = contactResult.data.contact?.id;
    const isNew = contactResult.data.new || false;
    console.log(`Contact ${isNew ? "created" : "updated"}: ${contactId}`);

    // ── Create opportunity ──

    if (contactId) {
      const opportunityName = `${firstName} ${lastName}`.trim() || formData.name || "New Lead";

      const oppPayload = {
        pipelineId: PIPELINE_ID,
        locationId: GHL_LOCATION_ID,
        name: `${opportunityName} — ${formatFormName(formName)}`,
        pipelineStageId: STAGE_NEW_LEAD,
        status: "open",
        contactId,
        assignedTo: OWNER_IDS.travis, // Primary owner — Britney added as follower via GHL workflow
      };

      console.log("Creating opportunity:", JSON.stringify(oppPayload, null, 2));

      const oppResult = await ghlRequest("/opportunities/", "POST", oppPayload);

      if (oppResult.status === 200 || oppResult.status === 201) {
        console.log(`Opportunity created: ${oppResult.data.opportunity?.id}`);
      } else {
        console.error("Opportunity creation failed:", JSON.stringify(oppResult.data));
        // Don't fail the whole function — contact was already created
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Success",
        contactId,
        isNew,
        form: formName,
      }),
    };
  } catch (error) {
    console.error("Function error:", error.message, error.stack);
    return { statusCode: 500, body: `Error: ${error.message}` };
  }
};

// ─── Utility ───────────────────────────────────────────────

function formatFormName(formName) {
  const names = {
    contact: "Contact Inquiry",
    "pilot-program": "Pilot Program",
    "site-visit": "Site Visit Request",
    "roi-validation": "ROI Validation",
    "exit-intent-intake": "Exit Intent",
  };
  return names[formName] || formName;
}
