import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

export type LeadType = "b2c" | "b2b";

export type LeadRecord = {
  id: string;
  type: LeadType;
  receivedAt: string;
  status: "new";
  source: string;
  fields: Record<string, string>;
  answers: Array<{
    id: string;
    label: string;
    value: string;
  }>;
  emailDelivery?: {
    provider: "resend";
    status: "skipped" | "sent" | "failed";
    message?: string;
  };
};

const crmDir = path.join(process.cwd(), "data");
const leadsFile = path.join(crmDir, "leads.json");

export async function readLeads() {
  try {
    const content = await readFile(leadsFile, "utf8");
    const parsed = JSON.parse(content) as LeadRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function saveLead(
  lead: Omit<LeadRecord, "id" | "receivedAt" | "status">,
) {
  await mkdir(crmDir, { recursive: true });
  const leads = await readLeads();
  const record: LeadRecord = {
    id: randomUUID(),
    receivedAt: new Date().toISOString(),
    status: "new",
    ...lead,
  };

  leads.unshift(record);
  await writeFile(leadsFile, JSON.stringify(leads, null, 2), "utf8");
  return record;
}

export async function updateLeadEmailDelivery(
  id: string,
  emailDelivery: NonNullable<LeadRecord["emailDelivery"]>,
) {
  await mkdir(crmDir, { recursive: true });
  const leads = await readLeads();
  const updated = leads.map((lead) =>
    lead.id === id ? { ...lead, emailDelivery } : lead,
  );
  await writeFile(leadsFile, JSON.stringify(updated, null, 2), "utf8");
}

export function formatLeadEmail(lead: LeadRecord) {
  const typeLabel = lead.type === "b2b" ? "Unternehmen" : "Privatperson";
  const fields = Object.entries(lead.fields)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  const answers = lead.answers
    .map((answer) => `${answer.label}: ${answer.value}`)
    .join("\n");

  return [
    `Neuer MeinBenefit Lead (${typeLabel})`,
    "",
    "Kontaktdaten:",
    fields,
    "",
    "Antworten:",
    answers,
    "",
    `Quelle: ${lead.source}`,
    `Eingang: ${lead.receivedAt}`,
    `Lead-ID: ${lead.id}`,
  ].join("\n");
}
