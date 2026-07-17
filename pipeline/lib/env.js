import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

export const PROJECT_ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "..",
);

function parseList(value) {
  return (value ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function loadConfig() {
  const envPath = path.join(PROJECT_ROOT, ".env");
  if (fs.existsSync(envPath)) {
    process.loadEnvFile(envPath);
  }

  const sequenceIds = parseList(process.env.APOLLO_SEQUENCE_IDS);
  // Blank or "auto" means: discover all active sequences from Apollo at runtime.
  const autoDiscover =
    sequenceIds.length === 0 || sequenceIds.some((id) => id.toLowerCase() === "auto");

  const config = {
    apolloApiKey: process.env.APOLLO_API_KEY,
    sequenceIds: autoDiscover ? [] : sequenceIds,
    autoDiscover,
    anthropicApiKey: process.env.ANTHROPIC_API_KEY,
    smtp: {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    reportEmails: parseList(process.env.REPORT_EMAILS),
    autoApply: (process.env.AUTO_APPLY ?? "true").toLowerCase() === "true",
  };

  const missing = [];
  if (!config.apolloApiKey) missing.push("APOLLO_API_KEY");
  if (!config.anthropicApiKey) missing.push("ANTHROPIC_API_KEY");
  if (missing.length > 0) {
    throw new Error(
      `Missing required .env values: ${missing.join(", ")}. Fill them in at ${envPath}`,
    );
  }

  config.emailEnabled = Boolean(
    config.smtp.host && config.smtp.user && config.smtp.pass && config.reportEmails.length,
  );

  return config;
}

export function todayStamp() {
  return new Date().toISOString().slice(0, 10);
}
