import { NextResponse } from "next/server";
import {
  deleteLead,
  updateLead,
  type LeadRecord,
  type LeadStatus,
  type LeadType,
} from "@/lib/leads";

export const runtime = "nodejs";

const leadTypes = new Set<LeadType>(["b2c", "b2b"]);
const leadStatuses = new Set<LeadStatus>(["new", "contacted", "qualified", "done", "archived"]);

type LeadAnswerInput = {
  id?: unknown;
  label?: unknown;
  value?: unknown;
};

function isAuthorized(request: Request) {
  const adminToken = process.env.ADMIN_TOKEN;
  if (!adminToken) return true;

  const url = new URL(request.url);
  const providedToken = request.headers.get("x-admin-token") ?? url.searchParams.get("token");
  return providedToken === adminToken;
}

function normalizeFields(fields: unknown) {
  if (!fields || typeof fields !== "object" || Array.isArray(fields)) return null;

  return Object.fromEntries(
    Object.entries(fields)
      .map(([key, value]) => [key.trim(), String(value ?? "").trim()])
      .filter(([key]) => key.length > 0),
  );
}

function normalizeAnswers(answers: unknown) {
  if (!Array.isArray(answers)) return null;

  return answers
    .map((answer: LeadAnswerInput, index) => ({
      id: String(answer.id ?? `answer-${index}`).trim(),
      label: String(answer.label ?? "").trim(),
      value: String(answer.value ?? "").trim(),
    }))
    .filter((answer) => answer.id && answer.label);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const updates: Partial<Pick<LeadRecord, "type" | "status" | "fields" | "answers">> = {};

    if (body.type !== undefined) {
      if (!leadTypes.has(body.type)) {
        return NextResponse.json({ success: false, error: "Invalid lead type" }, { status: 400 });
      }
      updates.type = body.type;
    }

    if (body.status !== undefined) {
      if (!leadStatuses.has(body.status)) {
        return NextResponse.json({ success: false, error: "Invalid lead status" }, { status: 400 });
      }
      updates.status = body.status;
    }

    if (body.fields !== undefined) {
      const fields = normalizeFields(body.fields);
      if (!fields) {
        return NextResponse.json({ success: false, error: "Invalid fields" }, { status: 400 });
      }
      updates.fields = fields;
    }

    if (body.answers !== undefined) {
      const answers = normalizeAnswers(body.answers);
      if (!answers) {
        return NextResponse.json({ success: false, error: "Invalid answers" }, { status: 400 });
      }
      updates.answers = answers;
    }

    const lead = await updateLead(id, updates);
    if (!lead) {
      return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const deleted = await deleteLead(id);

  if (!deleted) {
    return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
