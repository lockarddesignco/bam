#!/usr/bin/env node

/**
 * SEO Uniqueness Gate — Level 2 (Jaccard + Structural)
 *
 * Reads all location Markdown files from src/content/locations/ and enforces:
 *   1. Pairwise body-text Jaccard similarity < threshold (bigrams)
 *   2. No duplicate H2 heading sets across pages
 *   3. No duplicate FAQ questions across pages
 *   4. No duplicate meta titles or descriptions
 *
 * Exit 0 = pass, Exit 1 = fail. Zero npm dependencies.
 *
 * Usage:
 *   node scripts/seo-uniqueness-gate.mjs [--threshold 0.85] [--verbose]
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { argv, exit } from 'node:process';

// ── Config ──────────────────────────────────────────────────────────────────
const LOCATIONS_DIR = join(import.meta.dirname, '..', 'src', 'content', 'locations');
const DEFAULT_THRESHOLD = 0.85;
const MIN_WORD_COUNT = 600;

const STOP_WORDS = new Set([
  'a','an','the','and','or','but','in','on','at','to','for','of','with','by',
  'from','is','it','its','are','was','were','be','been','being','have','has',
  'had','do','does','did','will','would','shall','should','could','may','might',
  'can','this','that','these','those','i','you','he','she','we','they','me',
  'him','her','us','them','my','your','his','our','their','what','which','who',
  'whom','where','when','why','how','not','no','nor','if','then','than','so',
  'as','up','out','about','into','over','after','before','between','under',
  'again','further','once','all','each','every','both','few','more','most',
  'other','some','such','only','own','same','too','very','just','also','now',
]);

// ── CLI args ────────────────────────────────────────────────────────────────
const verbose = argv.includes('--verbose') || argv.includes('-v');
const thresholdIdx = argv.indexOf('--threshold');
const THRESHOLD = thresholdIdx !== -1 ? parseFloat(argv[thresholdIdx + 1]) : DEFAULT_THRESHOLD;

// ── Helpers ─────────────────────────────────────────────────────────────────

function parseFrontmatterAndBody(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const meta = {};
  const fmLines = match[1].split('\n');
  let currentKey = null;
  let inArray = false;
  let currentObj = null;

  for (const line of fmLines) {
    const topLevel = line.match(/^(\w[\w\s]*?):\s*(.*)$/);
    if (topLevel && !inArray) {
      const [, key, val] = topLevel;
      const trimKey = key.trim();
      const trimVal = val.trim();
      if (trimVal === '' || trimVal === '[]') {
        meta[trimKey] = [];
        currentKey = trimKey;
      } else {
        meta[trimKey] = trimVal.replace(/^["']|["']$/g, '');
        currentKey = trimKey;
      }
      continue;
    }

    if (line.match(/^\s+-\s+\w+:/)) {
      inArray = true;
      if (currentObj) {
        if (!Array.isArray(meta[currentKey])) meta[currentKey] = [];
        meta[currentKey].push(currentObj);
      }
      currentObj = {};
      const kv = line.match(/^\s+-\s+(\w+):\s*(.*)$/);
      if (kv) currentObj[kv[1].trim()] = kv[2].trim().replace(/^["']|["']$/g, '');
      continue;
    }

    if (inArray && line.match(/^\s+\w+:/)) {
      const kv = line.match(/^\s+(\w+):\s*(.*)$/);
      if (kv && currentObj) {
        currentObj[kv[1].trim()] = kv[2].trim().replace(/^["']|["']$/g, '');
      }
      continue;
    }

    if (inArray && !line.match(/^\s/) && line.trim() !== '') {
      if (currentObj) {
        if (!Array.isArray(meta[currentKey])) meta[currentKey] = [];
        meta[currentKey].push(currentObj);
        currentObj = null;
      }
      inArray = false;
      const topLevel2 = line.match(/^(\w[\w\s]*?):\s*(.*)$/);
      if (topLevel2) {
        const [, key, val] = topLevel2;
        meta[key.trim()] = val.trim().replace(/^["']|["']$/g, '');
        currentKey = key.trim();
      }
    }
  }

  if (inArray && currentObj) {
    if (!Array.isArray(meta[currentKey])) meta[currentKey] = [];
    meta[currentKey].push(currentObj);
  }

  return { meta, body: match[2] };
}

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP_WORDS.has(w));
}

function bigrams(tokens) {
  const grams = new Set();
  for (let i = 0; i < tokens.length - 1; i++) {
    grams.add(`${tokens[i]} ${tokens[i + 1]}`);
  }
  return grams;
}

function jaccard(setA, setB) {
  if (setA.size === 0 && setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  return intersection / (setA.size + setB.size - intersection);
}

function extractH2s(body) {
  const matches = body.match(/^##\s+(.+)$/gm) || [];
  return matches.map((m) => m.replace(/^##\s+/, '').trim().toLowerCase());
}

function extractFaqQuestions(meta) {
  if (!Array.isArray(meta.faqs)) return [];
  return meta.faqs
    .map((f) => (f.question || '').trim().toLowerCase())
    .filter(Boolean);
}

// ── Main ────────────────────────────────────────────────────────────────────

function main() {
  console.log('\n╔══════════════════════════════════════════════╗');
  console.log('║   SEO UNIQUENESS GATE — Level 2              ║');
  console.log(`║   Threshold: ${(THRESHOLD * 100).toFixed(0)}% Jaccard (bigrams)           ║`);
  console.log('╚══════════════════════════════════════════════╝\n');

  if (!existsSync(LOCATIONS_DIR)) {
    console.log('⚠  No locations directory found. Nothing to check.');
    exit(0);
  }

  const files = readdirSync(LOCATIONS_DIR).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

  if (files.length === 0) {
    console.log('⚠  No location files found. Nothing to check.');
    exit(0);
  }

  if (files.length === 1) {
    console.log(`ℹ  Only 1 location file (${files[0]}). Pairwise checks skipped.`);
    console.log('   Running single-file quality checks...\n');
  }

  // Parse all files
  const pages = files.map((file) => {
    const raw = readFileSync(join(LOCATIONS_DIR, file), 'utf-8');
    const { meta, body } = parseFrontmatterAndBody(raw);
    const tokens = tokenize(body);
    const grams = bigrams(tokens);
    const h2s = extractH2s(body);
    const faqs = extractFaqQuestions(meta);
    const rawWordCount = body.replace(/[#*_\-\[\]()>|]/g, ' ').split(/\s+/).filter((w) => w.length > 0).length;
    return { file, meta, body, tokens, grams, h2s, faqs, rawWordCount };
  });

  const failures = [];
  const warnings = [];

  // ── Check 1: Pairwise Jaccard similarity on body bigrams ────────────────
  console.log('─── Check 1: Body Text Similarity (Jaccard Bigrams) ───\n');

  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const sim = jaccard(pages[i].grams, pages[j].grams);
      const pct = (sim * 100).toFixed(1);
      const pair = `${pages[i].file} ↔ ${pages[j].file}`;

      if (sim >= THRESHOLD) {
        failures.push(`FAIL  Jaccard ${pct}% — ${pair}`);
        console.log(`  ✗ ${pct}% — ${pair}  [EXCEEDS ${(THRESHOLD * 100).toFixed(0)}%]`);
      } else if (sim >= THRESHOLD - 0.10) {
        warnings.push(`WARN  Jaccard ${pct}% — ${pair}`);
        console.log(`  ⚠ ${pct}% — ${pair}  [WARNING: approaching threshold]`);
      } else if (verbose) {
        console.log(`  ✓ ${pct}% — ${pair}`);
      }
    }
  }

  if (pages.length > 1 && failures.length === 0) {
    console.log('  ✓ All pairs below threshold.\n');
  } else {
    console.log('');
  }

  // ── Check 2: H2 heading uniqueness ─────────────────────────────────────
  console.log('─── Check 2: H2 Heading Uniqueness ───\n');

  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const setA = new Set(pages[i].h2s);
      const setB = new Set(pages[j].h2s);
      if (setA.size === 0 || setB.size === 0) continue;

      const shared = [...setA].filter((h) => setB.has(h));
      const overlapRatio = shared.length / Math.min(setA.size, setB.size);

      if (overlapRatio >= 0.75) {
        const pair = `${pages[i].file} ↔ ${pages[j].file}`;
        const sharedStr = shared.map((s) => `"${s}"`).join(', ');
        failures.push(`FAIL  H2 overlap ${(overlapRatio * 100).toFixed(0)}% — ${pair}: ${sharedStr}`);
        console.log(`  ✗ ${(overlapRatio * 100).toFixed(0)}% H2 overlap — ${pair}`);
        console.log(`    Shared: ${sharedStr}`);
      } else if (shared.length > 0 && verbose) {
        console.log(`  ⚠ ${shared.length} shared H2(s) — ${pages[i].file} ↔ ${pages[j].file}`);
      }
    }
  }

  if (failures.filter((f) => f.includes('H2 overlap')).length === 0) {
    console.log('  ✓ H2 headings are sufficiently unique.\n');
  } else {
    console.log('');
  }

  // ── Check 3: FAQ question uniqueness ────────────────────────────────────
  console.log('─── Check 3: FAQ Question Uniqueness ───\n');

  const faqMap = new Map();
  for (const page of pages) {
    for (const q of page.faqs) {
      if (!faqMap.has(q)) faqMap.set(q, []);
      faqMap.get(q).push(page.file);
    }
  }

  const dupeQuestions = [...faqMap.entries()].filter(([, files]) => files.length > 1);
  if (dupeQuestions.length > 0) {
    for (const [question, dupeFiles] of dupeQuestions) {
      failures.push(`FAIL  Duplicate FAQ: "${question}" in ${dupeFiles.join(', ')}`);
      console.log(`  ✗ "${question}"`);
      console.log(`    Found in: ${dupeFiles.join(', ')}`);
    }
  } else {
    console.log('  ✓ All FAQ questions are unique across pages.\n');
  }

  // ── Check 4: Meta title & description uniqueness ────────────────────────
  console.log('─── Check 4: Meta Title & Description Uniqueness ───\n');

  const titleMap = new Map();
  const descMap = new Map();

  for (const page of pages) {
    const t = (page.meta.title || '').toLowerCase().trim();
    const d = (page.meta.description || '').toLowerCase().trim();

    if (t) {
      if (!titleMap.has(t)) titleMap.set(t, []);
      titleMap.get(t).push(page.file);
    }

    if (d) {
      if (!descMap.has(d)) descMap.set(d, []);
      descMap.get(d).push(page.file);
    }
  }

  const dupeTitles = [...titleMap.entries()].filter(([, f]) => f.length > 1);
  const dupeDescs = [...descMap.entries()].filter(([, f]) => f.length > 1);

  if (dupeTitles.length > 0) {
    for (const [title, dupeFiles] of dupeTitles) {
      failures.push(`FAIL  Duplicate title: "${title}" in ${dupeFiles.join(', ')}`);
      console.log(`  ✗ Duplicate title: "${title}"`);
      console.log(`    Found in: ${dupeFiles.join(', ')}`);
    }
  }

  if (dupeDescs.length > 0) {
    for (const [desc, dupeFiles] of dupeDescs) {
      failures.push(`FAIL  Duplicate description in ${dupeFiles.join(', ')}`);
      console.log(`  ✗ Duplicate description in: ${dupeFiles.join(', ')}`);
    }
  }

  if (dupeTitles.length === 0 && dupeDescs.length === 0) {
    console.log('  ✓ All titles and descriptions are unique.\n');
  } else {
    console.log('');
  }

  // ── Check 5: Per-page quality minimums ──────────────────────────────────
  console.log('─── Check 5: Per-Page Quality Minimums ───\n');

  for (const page of pages) {
    const wordCount = page.rawWordCount;
    const h2Count = page.h2s.length;
    const faqCount = page.faqs.length;
    const hasTitle = !!page.meta.title;
    const hasDesc = !!page.meta.description;

    const issues = [];
    if (wordCount < MIN_WORD_COUNT) issues.push(`body only ${wordCount} words (min ${MIN_WORD_COUNT})`);
    if (h2Count < 3) issues.push(`only ${h2Count} H2 headings (min 3)`);
    if (faqCount < 3) issues.push(`only ${faqCount} FAQs (min 3)`);
    if (!hasTitle) issues.push('missing meta title');
    if (!hasDesc) issues.push('missing meta description');

    if (issues.length > 0) {
      failures.push(`FAIL  ${page.file}: ${issues.join('; ')}`);
      console.log(`  ✗ ${page.file}`);
      for (const issue of issues) console.log(`    - ${issue}`);
    } else if (verbose) {
      console.log(`  ✓ ${page.file} — ${wordCount} words, ${h2Count} H2s, ${faqCount} FAQs`);
    }
  }

  if (failures.filter((f) => !f.includes('Jaccard') && !f.includes('H2 overlap') && !f.includes('Duplicate')).length === 0) {
    console.log('  ✓ All pages meet quality minimums.\n');
  } else {
    console.log('');
  }

  // ── Summary ─────────────────────────────────────────────────────────────
  console.log('═══════════════════════════════════════════════');
  console.log(`  Files checked:  ${pages.length}`);
  console.log(`  Failures:       ${failures.length}`);
  console.log(`  Warnings:       ${warnings.length}`);
  console.log('═══════════════════════════════════════════════\n');

  if (failures.length > 0) {
    console.log('RESULT: ✗ GATE FAILED\n');
    if (!verbose) console.log('  Run with --verbose for full details.\n');
    for (const f of failures) console.log(`  ${f}`);
    console.log('');
    exit(1);
  }

  console.log('RESULT: ✓ GATE PASSED — All location pages are sufficiently unique.\n');
  exit(0);
}

main();
