import { NextResponse } from "next/server";

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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const type = body?.type;
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

    const lead = {
      receivedAt: new Date().toISOString(),
      ...body,
    };

    // TODO: Connect Resend, Brevo, HubSpot, or the selected CRM here.
    // TODO: Store lead consent and source attribution before production launch.
    console.log("MeinBenefit lead", lead);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
