"use client";

import {
  Building2,
  Check,
  ChevronDown,
  Pencil,
  Search,
  Trash2,
  UserRound,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { LeadRecord, LeadStatus, LeadType } from "@/lib/leads";

type LeadFilter = "all" | LeadType;
type SortMode = "newest" | "oldest";

type DraftLead = {
  type: LeadType;
  status: LeadStatus;
  fields: Array<{ key: string; value: string }>;
  answers: Array<{ id: string; label: string; value: string }>;
};

const statusLabels: Record<LeadStatus, string> = {
  new: "Neu",
  contacted: "Kontaktiert",
  qualified: "Qualifiziert",
  done: "Erledigt",
  archived: "Archiviert",
};

const statusOptions = Object.keys(statusLabels) as LeadStatus[];

const filterItems: Array<{ label: string; value: LeadFilter }> = [
  { label: "Alle", value: "all" },
  { label: "Privatpersonen", value: "b2c" },
  { label: "Unternehmen", value: "b2b" },
];

function typeLabel(type: LeadType) {
  return type === "b2b" ? "Unternehmen" : "Privatperson";
}

function primaryName(lead: LeadRecord) {
  return lead.fields.unternehmen || lead.fields.name || typeLabel(lead.type);
}

function secondaryLine(lead: LeadRecord) {
  return lead.fields.email || lead.fields.telefon || lead.source;
}

function formatReceivedAt(timestamp: string) {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year}, ${hour}:${minute}`;
}

function createDraft(lead: LeadRecord): DraftLead {
  return {
    type: lead.type,
    status: lead.status,
    fields: Object.entries(lead.fields).map(([key, value]) => ({ key, value })),
    answers: lead.answers.map((answer) => ({ ...answer })),
  };
}

function authHeaders(token?: string) {
  const headers: Record<string, string> = {};
  if (token) headers["x-admin-token"] = token;
  return headers;
}

export function AdminLeadsPanel({
  initialLeads,
  token,
}: {
  initialLeads: LeadRecord[];
  token?: string;
}) {
  const [leads, setLeads] = useState(initialLeads);
  const [filter, setFilter] = useState<LeadFilter>("all");
  const [sort, setSort] = useState<SortMode>("newest");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(initialLeads[0]?.id ?? "");
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<DraftLead | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  const counts = useMemo(
    () => ({
      all: leads.length,
      b2c: leads.filter((lead) => lead.type === "b2c").length,
      b2b: leads.filter((lead) => lead.type === "b2b").length,
    }),
    [leads],
  );

  const visibleLeads = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = leads.filter((lead) => {
      if (filter !== "all" && lead.type !== filter) return false;
      if (!normalizedQuery) return true;

      const searchable = [
        typeLabel(lead.type),
        lead.status,
        lead.source,
        ...Object.values(lead.fields),
        ...lead.answers.flatMap((answer) => [answer.label, answer.value]),
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(normalizedQuery);
    });

    return filtered.toSorted((a, b) => {
      const difference =
        new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime();
      return sort === "newest" ? difference : -difference;
    });
  }, [filter, leads, query, sort]);

  const selectedLead = useMemo(
    () =>
      visibleLeads.find((lead) => lead.id === selectedId) ??
      visibleLeads[0] ??
      null,
    [selectedId, visibleLeads],
  );

  function updateField(index: number, key: "key" | "value", value: string) {
    setDraft((current) =>
      current
        ? {
            ...current,
            fields: current.fields.map((field, fieldIndex) =>
              fieldIndex === index ? { ...field, [key]: value } : field,
            ),
          }
        : current,
    );
  }

  function updateAnswer(index: number, key: "label" | "value", value: string) {
    setDraft((current) =>
      current
        ? {
            ...current,
            answers: current.answers.map((answer, answerIndex) =>
              answerIndex === index ? { ...answer, [key]: value } : answer,
            ),
          }
        : current,
    );
  }

  async function saveLead() {
    if (!selectedLead || !draft) return;

    setBusy(true);
    setMessage("");

    const fields = Object.fromEntries(
      draft.fields
        .map((field) => [field.key.trim(), field.value.trim()])
        .filter(([key]) => key.length > 0),
    );
    const answers = draft.answers
      .map((answer, index) => ({
        id: answer.id || `answer-${index}`,
        label: answer.label.trim(),
        value: answer.value.trim(),
      }))
      .filter((answer) => answer.label.length > 0);

    const response = await fetch(`/api/admin/leads/${selectedLead.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders(token),
      },
      body: JSON.stringify({
        type: draft.type,
        status: draft.status,
        fields,
        answers,
      }),
    });
    const payload = (await response.json()) as {
      success: boolean;
      lead?: LeadRecord;
      error?: string;
    };

    setBusy(false);

    if (!response.ok || !payload.lead) {
      setMessage(payload.error ?? "Lead konnte nicht gespeichert werden.");
      return;
    }

    setLeads((current) =>
      current.map((lead) =>
        lead.id === payload.lead?.id ? payload.lead : lead,
      ),
    );
    setEditing(false);
    setMessage("Gespeichert.");
  }

  async function deleteSelectedLead() {
    if (!selectedLead) return;
    const confirmed = window.confirm("Diesen Lead wirklich löschen?");
    if (!confirmed) return;

    setBusy(true);
    setMessage("");

    const response = await fetch(`/api/admin/leads/${selectedLead.id}`, {
      method: "DELETE",
      headers: authHeaders(token),
    });

    setBusy(false);

    if (!response.ok) {
      setMessage("Lead konnte nicht gelöscht werden.");
      return;
    }

    setLeads((current) =>
      current.filter((lead) => lead.id !== selectedLead.id),
    );
    setSelectedId("");
    setEditing(false);
    setMessage("Gelöscht.");
  }

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[0.38fr_0.62fr]">
      <aside className="min-w-0">
        <div className="flex flex-wrap gap-2">
          {filterItems.map((item) => (
            <button
              key={item.value}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                filter === item.value
                  ? "bg-[#0D3A2D] text-white"
                  : "bg-[#F8F3EC] text-[#4A453C] hover:bg-[#EFE6DA]"
              }`}
              onClick={() => {
                setFilter(item.value);
                setEditing(false);
              }}
            >
              {item.label} · {counts[item.value]}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] lg:grid-cols-1 xl:grid-cols-[1fr_auto]">
          <label className="flex min-h-12 items-center gap-3 rounded-full bg-[#F8F3EC] px-4">
            <Search className="shrink-0 text-[#9A6418]" size={17} />
            <input
              className="w-full bg-transparent text-sm font-semibold text-[#17130D] outline-none placeholder:text-[#8C887D]"
              value={query}
              placeholder="Suchen"
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>

          <label className="flex min-h-12 items-center gap-3 rounded-full bg-[#F8F3EC] px-4">
            <select
              className="appearance-none bg-transparent pr-6 text-sm font-bold text-[#17130D] outline-none"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortMode)}
            >
              <option value="newest">Neueste zuerst</option>
              <option value="oldest">Älteste zuerst</option>
            </select>
            <ChevronDown
              className="pointer-events-none -ml-7 text-[#9A6418]"
              size={16}
            />
          </label>
        </div>

        <div className="mt-6 grid gap-2">
          {visibleLeads.length === 0 ? (
            <p className="bg-[#F8F5EF] p-5 text-sm font-semibold text-[#4A453C]">
              Keine Leads für diese Ansicht.
            </p>
          ) : (
            visibleLeads.map((lead) => {
              const active = lead.id === selectedLead?.id;
              const Icon = lead.type === "b2b" ? Building2 : UserRound;

              return (
                <button
                  key={lead.id}
                  type="button"
                  className={`grid gap-3 p-4 text-left transition ${
                    active
                      ? "bg-[#0D3A2D] text-white"
                      : "bg-[#F8F5EF] text-[#17130D] hover:bg-[#F1E9DD]"
                  }`}
                  onClick={() => {
                    setSelectedId(lead.id);
                    setEditing(false);
                    setDraft(null);
                    setMessage("");
                  }}
                >
                  <span className="flex items-start justify-between gap-4">
                    <span className="flex min-w-0 items-center gap-3">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                          active
                            ? "bg-white/10 text-[#D6B489]"
                            : "bg-white text-[#0D3A2D]"
                        }`}
                      >
                        <Icon size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate font-serif text-xl font-semibold">
                          {primaryName(lead)}
                        </span>
                        <span
                          className={`mt-1 block truncate text-xs font-semibold ${active ? "text-white/70" : "text-[#6B6258]"}`}
                        >
                          {secondaryLine(lead)}
                        </span>
                      </span>
                    </span>
                    <span
                      className={`shrink-0 text-xs font-bold ${active ? "text-[#D6B489]" : "text-[#9A6418]"}`}
                    >
                      {typeLabel(lead.type)}
                    </span>
                  </span>
                  <span
                    className={`text-xs font-semibold ${active ? "text-white/64" : "text-[#7A756B]"}`}
                  >
                    {formatReceivedAt(lead.receivedAt)} ·{" "}
                    {statusLabels[lead.status]}
                  </span>
                </button>
              );
            })
          )}
        </div>
      </aside>

      <section className="min-w-0 bg-white">
        {selectedLead && editing && draft ? (
          <div className="bg-[#F8F5EF] p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B99772]">
                  {typeLabel(selectedLead.type)}
                </p>
                <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#17130D]">
                  {primaryName(selectedLead)}
                </h2>
                <p className="mt-2 text-sm font-semibold text-[#6B6258]">
                  {selectedLead.source} ·{" "}
                  {formatReceivedAt(selectedLead.receivedAt)}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {editing ? (
                  <>
                    <button
                      type="button"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0D3A2D] px-5 text-sm font-bold text-white transition hover:bg-[#174D3D] disabled:opacity-50"
                      disabled={busy}
                      onClick={() => void saveLead()}
                    >
                      <Check size={16} /> Speichern
                    </button>
                    <button
                      type="button"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#17130D] transition hover:bg-[#EFE6DA]"
                      onClick={() => {
                        setEditing(false);
                        setDraft(null);
                      }}
                    >
                      <X size={16} /> Abbrechen
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#17130D] transition hover:bg-[#EFE6DA]"
                    onClick={() => {
                      setDraft(createDraft(selectedLead));
                      setEditing(true);
                    }}
                  >
                    <Pencil size={16} /> Bearbeiten
                  </button>
                )}
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F0DFD9] px-5 text-sm font-bold text-[#8E1E12] transition hover:bg-[#E9D1C9] disabled:opacity-50"
                  disabled={busy}
                  onClick={() => void deleteSelectedLead()}
                >
                  <Trash2 size={16} /> Löschen
                </button>
              </div>
            </div>

            {message ? (
              <p className="mt-5 text-sm font-bold text-[#0D3A2D]">{message}</p>
            ) : null}

            {editing ? (
              <EditLeadForm
                draft={draft}
                setDraft={setDraft}
                updateField={updateField}
                updateAnswer={updateAnswer}
              />
            ) : (
              <LeadDetails lead={selectedLead} />
            )}
          </div>
        ) : selectedLead ? (
          <LeadReadPanel
            lead={selectedLead}
            busy={busy}
            message={message}
            onDelete={() => void deleteSelectedLead()}
            onEdit={() => {
              setDraft(createDraft(selectedLead));
              setEditing(true);
            }}
          />
        ) : (
          <div className="bg-[#F8F5EF] p-8 text-sm font-semibold text-[#4A453C]">
            Wähle einen Lead aus der Liste.
          </div>
        )}
      </section>
    </div>
  );
}

function LeadReadPanel({
  lead,
  busy,
  message,
  onDelete,
  onEdit,
}: {
  lead: LeadRecord;
  busy: boolean;
  message: string;
  onDelete: () => void;
  onEdit: () => void;
}) {
  return (
    <div className="bg-[#F8F5EF] p-6 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B99772]">
            {typeLabel(lead.type)}
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#17130D]">
            {primaryName(lead)}
          </h2>
          <p className="mt-2 text-sm font-semibold text-[#6B6258]">
            {lead.source} · {formatReceivedAt(lead.receivedAt)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#17130D] transition hover:bg-[#EFE6DA]"
            onClick={onEdit}
          >
            <Pencil size={16} /> Bearbeiten
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#F0DFD9] px-5 text-sm font-bold text-[#8E1E12] transition hover:bg-[#E9D1C9] disabled:opacity-50"
            disabled={busy}
            onClick={onDelete}
          >
            <Trash2 size={16} /> Löschen
          </button>
        </div>
      </div>

      {message ? (
        <p className="mt-5 text-sm font-bold text-[#0D3A2D]">{message}</p>
      ) : null}
      <LeadDetails lead={lead} />
    </div>
  );
}

function LeadDetails({ lead }: { lead: LeadRecord }) {
  return (
    <div className="mt-8 grid gap-8 xl:grid-cols-2">
      <DetailGroup title="Kontakt">
        {Object.entries(lead.fields).map(([key, value]) => (
          <DetailRow key={key} label={key} value={value} />
        ))}
      </DetailGroup>

      <DetailGroup title="Antworten">
        {lead.answers.map((answer) => (
          <DetailRow
            key={`${lead.id}-${answer.id}`}
            label={answer.label}
            value={answer.value}
          />
        ))}
      </DetailGroup>

      <DetailGroup title="System">
        <DetailRow label="Status" value={statusLabels[lead.status]} />
        <DetailRow label="Lead-ID" value={lead.id} />
        <DetailRow
          label="E-Mail"
          value={lead.emailDelivery?.status ?? "pending"}
        />
      </DetailGroup>
    </div>
  );
}

function DetailGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B99772]">
        {title}
      </p>
      <dl className="mt-4 grid gap-4">{children}</dl>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[#6B6258]">
        {label}
      </dt>
      <dd className="mt-1 break-words text-sm font-semibold leading-6 text-[#17130D]">
        {value}
      </dd>
    </div>
  );
}

function EditLeadForm({
  draft,
  setDraft,
  updateField,
  updateAnswer,
}: {
  draft: DraftLead;
  setDraft: Dispatch<SetStateAction<DraftLead | null>>;
  updateField: (index: number, key: "key" | "value", value: string) => void;
  updateAnswer: (index: number, key: "label" | "value", value: string) => void;
}) {
  return (
    <div className="mt-8 grid gap-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <FieldLabel label="Typ">
          <select
            className="min-h-12 w-full rounded-full bg-white px-4 text-sm font-bold text-[#17130D] outline-none focus:ring-4 focus:ring-[#0D3A2D]/10"
            value={draft.type}
            onChange={(event) =>
              setDraft(
                (current) =>
                  current && {
                    ...current,
                    type: event.target.value as LeadType,
                  },
              )
            }
          >
            <option value="b2c">Privatperson</option>
            <option value="b2b">Unternehmen</option>
          </select>
        </FieldLabel>

        <FieldLabel label="Status">
          <select
            className="min-h-12 w-full rounded-full bg-white px-4 text-sm font-bold text-[#17130D] outline-none focus:ring-4 focus:ring-[#0D3A2D]/10"
            value={draft.status}
            onChange={(event) =>
              setDraft(
                (current) =>
                  current && {
                    ...current,
                    status: event.target.value as LeadStatus,
                  },
              )
            }
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {statusLabels[status]}
              </option>
            ))}
          </select>
        </FieldLabel>
      </div>

      <EditableGroup
        title="Kontakt"
        addLabel="Feld hinzufügen"
        onAdd={() =>
          setDraft((current) =>
            current
              ? {
                  ...current,
                  fields: [...current.fields, { key: "notiz", value: "" }],
                }
              : current,
          )
        }
      >
        {draft.fields.map((field, index) => (
          <div
            key={`${field.key}-${index}`}
            className="grid gap-3 sm:grid-cols-[0.34fr_1fr_auto]"
          >
            <input
              className="min-h-12 rounded-full bg-white px-4 text-sm font-bold text-[#17130D] outline-none focus:ring-4 focus:ring-[#0D3A2D]/10"
              value={field.key}
              aria-label="Feldname"
              onChange={(event) =>
                updateField(index, "key", event.target.value)
              }
            />
            <input
              className="min-h-12 rounded-full bg-white px-4 text-sm font-semibold text-[#17130D] outline-none focus:ring-4 focus:ring-[#0D3A2D]/10"
              value={field.value}
              aria-label="Feldwert"
              onChange={(event) =>
                updateField(index, "value", event.target.value)
              }
            />
            <RemoveButton
              onClick={() =>
                setDraft((current) =>
                  current
                    ? {
                        ...current,
                        fields: current.fields.filter(
                          (_, fieldIndex) => fieldIndex !== index,
                        ),
                      }
                    : current,
                )
              }
            />
          </div>
        ))}
      </EditableGroup>

      <EditableGroup
        title="Antworten"
        addLabel="Antwort hinzufügen"
        onAdd={() =>
          setDraft((current) =>
            current
              ? {
                  ...current,
                  answers: [
                    ...current.answers,
                    {
                      id: `answer-${current.answers.length + 1}`,
                      label: "",
                      value: "",
                    },
                  ],
                }
              : current,
          )
        }
      >
        {draft.answers.map((answer, index) => (
          <div
            key={`${answer.id}-${index}`}
            className="grid gap-3 sm:grid-cols-[0.46fr_1fr_auto]"
          >
            <input
              className="min-h-12 rounded-full bg-white px-4 text-sm font-bold text-[#17130D] outline-none focus:ring-4 focus:ring-[#0D3A2D]/10"
              value={answer.label}
              aria-label="Frage"
              onChange={(event) =>
                updateAnswer(index, "label", event.target.value)
              }
            />
            <input
              className="min-h-12 rounded-full bg-white px-4 text-sm font-semibold text-[#17130D] outline-none focus:ring-4 focus:ring-[#0D3A2D]/10"
              value={answer.value}
              aria-label="Antwort"
              onChange={(event) =>
                updateAnswer(index, "value", event.target.value)
              }
            />
            <RemoveButton
              onClick={() =>
                setDraft((current) =>
                  current
                    ? {
                        ...current,
                        answers: current.answers.filter(
                          (_, answerIndex) => answerIndex !== index,
                        ),
                      }
                    : current,
                )
              }
            />
          </div>
        ))}
      </EditableGroup>
    </div>
  );
}

function FieldLabel({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label>
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#B99772]">
        {label}
      </span>
      {children}
    </label>
  );
}

function EditableGroup({
  title,
  addLabel,
  onAdd,
  children,
}: {
  title: string;
  addLabel: string;
  onAdd: () => void;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B99772]">
          {title}
        </p>
        <button
          type="button"
          className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#0D3A2D] transition hover:bg-[#EFE6DA]"
          onClick={onAdd}
        >
          {addLabel}
        </button>
      </div>
      <div className="grid gap-3">{children}</div>
    </div>
  );
}

function RemoveButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className="min-h-12 rounded-full bg-[#F0DFD9] px-4 text-sm font-bold text-[#8E1E12] transition hover:bg-[#E9D1C9]"
      onClick={onClick}
    >
      Entfernen
    </button>
  );
}
