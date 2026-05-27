import { NextResponse } from "next/server";
import {
  formatLeadEmail,
  saveLead,
  updateLeadEmailDelivery,
  type LeadRecord,
  type LeadType,
} from "@/lib/leads";

export const runtime = "nodejs";

const b2cRequired = [
  "lebenssituation",
  "wohnsituation",
  "bereiche",
  "kontakt",
  "name",
  "email",
  "telefon",
] as const;

const b2bRequired = [
  "name",
  "unternehmen",
  "position",
  "mitarbeiter",
  "branche",
  "email",
  "telefon",
  "interesse",
  "kontakt",
] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadAnswer = {
  id?: unknown;
  label?: unknown;
  value?: unknown;
};

async function sendLeadEmail(lead: LeadRecord) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL ?? "office@meinbenefit.at";
  const from = process.env.RESEND_FROM_EMAIL ?? "MeinBenefit <onboarding@resend.dev>";

  if (!apiKey) {
    return {
      provider: "resend" as const,
      status: "skipped" as const,
      message: "RESEND_API_KEY is not configured.",
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `Neuer MeinBenefit Lead: ${lead.type === "b2b" ? "Unternehmen" : "Privatperson"}`,
        text: formatLeadEmail(lead),
      }),
    });

    if (!response.ok) {
      return {
        provider: "resend" as const,
        status: "failed" as const,
        message: await response.text(),
      };
    }

    return { provider: "resend" as const, status: "sent" as const };
  } catch (error) {
    return {
      provider: "resend" as const,
      status: "failed" as const,
      message: error instanceof Error ? error.message : "Unknown email error",
    };
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const type = body?.type;
    const wizardAnswers = Array.isArray(body?.answers) ? (body.answers as LeadAnswer[]) : null;

    if ((type === "b2b" || type === "b2c") && wizardAnswers) {
      const fields = typeof body?.fields === "object" && body.fields ? body.fields : {};
      const requiredFields = ["name", "email", "telefon"] as const;
      const missing = requiredFields.filter((field) => !String(fields?.[field] ?? "").trim());

      if (missing.length > 0) {
        return NextResponse.json(
          { success: false, error: "Missing required fields", fields: missing },
          { status: 400 },
        );
      }

      if (!emailPattern.test(String(fields.email))) {
        return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });
      }

      const answers = wizardAnswers
        .map((answer) => ({
          id: String(answer.id ?? ""),
          label: String(answer.label ?? ""),
          value: String(answer.value ?? ""),
        }))
        .filter((answer) => answer.id && answer.label && answer.value);

      if (answers.length !== wizardAnswers.length) {
        return NextResponse.json({ success: false, error: "Invalid answers" }, { status: 400 });
      }

      const lead = await saveLead({
        type: type as LeadType,
        source: String(body?.source ?? "lead-wizard"),
        fields: Object.fromEntries(
          Object.entries(fields).map(([key, value]) => [key, String(value ?? "")]),
        ),
        answers,
      });
      const emailDelivery = await sendLeadEmail(lead);
      await updateLeadEmailDelivery(lead.id, emailDelivery);

      return NextResponse.json({
        success: true,
        leadId: lead.id,
        emailDelivery: emailDelivery.status,
      });
    }

    const required = type === "b2b" ? b2bRequired : type === "b2c" ? b2cRequired : null;

    if (!required) {
      return NextResponse.json({ success: false, error: "Invalid lead type" }, { status: 400 });
    }

    const missing = required.filter((field) => !String(body?.[field] ?? "").trim());

    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, error: "Missing required fields", fields: missing },
        { status: 400 },
      );
    }

    if (!emailPattern.test(String(body.email))) {
      return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });
    }

    const fields = Object.fromEntries(
      Object.entries(body)
        .filter(([key]) => key !== "type")
        .map(([key, value]) => [key, String(value ?? "")]),
    );
    const lead = await saveLead({
      type,
      source: "legacy-lead-form",
      fields,
      answers: Object.entries(fields).map(([key, value]) => ({
        id: key,
        label: key,
        value,
      })),
    });
    const emailDelivery = await sendLeadEmail(lead);
    await updateLeadEmailDelivery(lead.id, emailDelivery);

    return NextResponse.json({ success: true, leadId: lead.id, emailDelivery: emailDelivery.status });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
