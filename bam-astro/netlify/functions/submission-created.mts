// Netlify Serverless Function: submission-created
// Triggers automatically on every Netlify form submission.
// Upserts contact in GHL, applies tags, creates opportunity in pipeline.

const GHL_API_BASE = "https://services.leadconnectorhq.com";
const GHL_TOKEN = process.env.GHL_TOKEN;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || "edRx0be5SWTKBSn4YphV";

// Pipeline & Stage IDs
const PIPELINE_ID = "MWdPozWuyhZcDBT4Qysy"; // BAM New Lead Pipeline
const STAGE_NEW_LEAD = "8a350dc7-937e-4dbf-9d1c-63e01be367a8";

// Custom Field IDs (GHL field key to GHL field ID)
const CUSTOM_FIELD_IDS: Record<string, string> = {
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

// GHL User IDs
const OWNER_IDS = {
  travis: "E8JF1A5dT945voLWuiWN",
  britney: "nWj4P1zeFxTuGxXS8Hwa",
};

// Tag mapping by form name
const FORM_TAGS: Record<string, string[]> = {
  contact: ["website", "form:contact"],
  "pilot-program": ["website", "form:pilot-program"],
  "site-visit": ["website", "form:site-visit"],
  "roi-validation": ["website", "form:roi-validation"],
  "exit-intent-intake": ["website", "form:exit-intent"],
};

// Helpers

function splitName(fullName: string) {
  if (!fullName) return { firstName: "", lastName: "" };
  const trimmed = fullName.trim();
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

function formatPhone(phone: string) {
  if (!phone) return "";
  const cleaned = phone.replace(/[^\d+]/g, "");
  if (/^\d{10}$/.test(cleaned)) return `+1${cleaned}`;
  if (/^1\d{10}$/.test(cleaned)) return `+${cleaned}`;
  return cleaned;
}

function formatFormName(formName: string) {
  const names: Record<string, string> = {
    contact: "Contact Inquiry",
    "pilot-program": "Pilot Program",
    "site-visit": "Site Visit Request",
    "roi-validation": "ROI Validation",
    "exit-intent-intake": "Exit Intent",
  };
  return names[formName] || formName;
}

async function ghlRequest(endpoint: string, method: string, body?: object) {
  const url = `${GHL_API_BASE}${endpoint}`;
  const options: RequestInit = {
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

// Main Handler - Netlify Functions v2 API

export default async (req: Request) => {
  try {
    const body = await req.json();
    const payload = body.payload;

    if (!payload) {
      console.log("No payload found in request body");
      return new Response("No payload", { status: 400 });
    }

    const formName = payload.form_name || payload.data?.["form-name"] || "unknown";
    const formData = payload.data || {};

    console.log(`Processing form: ${formName}`);
    console.log(`Form data keys: ${Object.keys(formData).join(", ")}`);

    // Skip honeypot submissions
    if (formData["bot-field"]) {
      console.log("Bot submission detected, skipping");
      return new Response("OK", { status: 200 });
    }

    // Build contact payload
    const { firstName, lastName } = splitName(formData.name);
    const email = formData.email || "";
    const phone = formatPhone(formData.phone || "");
    const companyName = formData.companyName || "";

    if (!email && !phone) {
      console.log("No email or phone provided, cannot create contact");
      return new Response("No email or phone, skipped", { status: 200 });
    }

    // Build custom fields array
    const customFields: { id: string; field_value: string }[] = [];
    for (const [fieldKey, fieldId] of Object.entries(CUSTOM_FIELD_IDS)) {
      const value = formData[fieldKey];
      if (value !== undefined && value !== "" && value !== null) {
        customFields.push({ id: fieldId, field_value: value });
      }
    }

    const tags = FORM_TAGS[formName] || ["website"];

    const contactPayload: Record<string, unknown> = {
      locationId: GHL_LOCATION_ID,
      firstName,
      lastName,
      email,
      phone,
      companyName,
      tags,
      source: "website",
      customFields,
      assignedTo: OWNER_IDS.travis,
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

    // Upsert contact
    const contactResult = await ghlRequest("/contacts/upsert", "POST", contactPayload);

    if (contactResult.status !== 200 && contactResult.status !== 201) {
      console.error("Contact upsert failed:", JSON.stringify(contactResult.data));
      return new Response("Contact upsert failed", { status: 500 });
    }

    const contactId = contactResult.data.contact?.id;
    const isNew = contactResult.data.new || false;
    console.log(`Contact ${isNew ? "created" : "updated"}: ${contactId}`);

    // Create opportunity
    if (contactId) {
      const opportunityName = `${firstName} ${lastName}`.trim() || formData.name || "New Lead";

      const oppPayload = {
        pipelineId: PIPELINE_ID,
        locationId: GHL_LOCATION_ID,
        name: `${opportunityName} - ${formatFormName(formName)}`,
        pipelineStageId: STAGE_NEW_LEAD,
        status: "open",
        contactId,
        assignedTo: OWNER_IDS.travis,
      };

      console.log("Creating opportunity:", JSON.stringify(oppPayload, null, 2));

      const oppResult = await ghlRequest("/opportunities/", "POST", oppPayload);

      if (oppResult.status === 200 || oppResult.status === 201) {
        console.log(`Opportunity created: ${oppResult.data.opportunity?.id}`);
      } else {
        console.error("Opportunity creation failed:", JSON.stringify(oppResult.data));
      }
    }

    return new Response(
      JSON.stringify({ message: "Success", contactId, isNew, form: formName }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    console.error("Function error:", msg);
    return new Response(`Error: ${msg}`, { status: 500 });
  }
};
