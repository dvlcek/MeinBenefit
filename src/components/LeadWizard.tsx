"use client";

import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Loader2,
  UserRound,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "./ui/Button";

type LeadType = "b2c" | "b2b";
type Status = "idle" | "submitting" | "success" | "error";

type Question = {
  id: string;
  label: string;
  helper?: string;
  inputType?: "text" | "email" | "tel" | "number";
  options?: string[];
};

const b2cQuestions: Question[] = [
  {
    id: "lebenssituation",
    label: "In welcher Lebenssituation bist du?",
    helper: "Wir richten den Einstieg direkt an deiner aktuellen Situation aus.",
    options: ["Single", "Paar", "Familie"],
  },
  {
    id: "wohnsituation",
    label: "Wie wohnst du derzeit?",
    options: ["Miete", "Eigentum"],
  },
  {
    id: "kontakt",
    label: "Wie möchtest du kontaktiert werden?",
    options: ["Online-Termin", "Telefonischer Rückruf"],
  },
  { id: "name", label: "Wie heißt du?", inputType: "text" },
  {
    id: "email",
    label: "Unter welcher E-Mail erreichen wir dich?",
    inputType: "email",
  },
  {
    id: "telefon",
    label: "Unter welcher Telefonnummer erreichen wir dich?",
    inputType: "tel",
  },
];

const b2bQuestions: Question[] = [
  {
    id: "mitarbeiter",
    label: "Wie viele Mitarbeiter:innen hat dein Unternehmen?",
    helper: "Diese Information hilft uns, den passenden Benefit-Ansatz vorzubereiten.",
    options: ["5 - 10", "10 - 50", "50 - 100", "100+"],
  },
  {
    id: "branche",
    label: "In welcher Branche ist dein Unternehmen tätig?",
    inputType: "text",
  },
  {
    id: "position",
    label: "Welche Rolle hast du im Unternehmen?",
    options: ["Geschäftsführung", "HR", "Assistenz", "Sonstiges"],
  },
  {
    id: "interesse",
    label: "Wofür möchtest du MeinBenefit anfragen?",
    options: ["Erstgespräch", "Pilotmodell", "Allgemeine Informationen"],
  },
  { id: "unternehmen", label: "Wie heißt das Unternehmen?", inputType: "text" },
  { id: "name", label: "Wie heißt die Ansprechperson?", inputType: "text" },
  {
    id: "email",
    label: "Unter welcher E-Mail erreichen wir euch?",
    inputType: "email",
  },
  {
    id: "telefon",
    label: "Unter welcher Telefonnummer erreichen wir euch?",
    inputType: "tel",
  },
];

const contactFieldIds = new Set([
  "name",
  "email",
  "telefon",
  "unternehmen",
  "mitarbeiter",
]);

export function LeadWizard({ initialType }: { initialType: LeadType | null }) {
  const [type, setType] = useState<LeadType | null>(initialType);
  const [index, setIndex] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const questions = type === "b2b" ? b2bQuestions : b2cQuestions;
  const isSummaryStep = type ? index >= questions.length : false;
  const current = isSummaryStep ? null : questions[index];
  const value = current ? (values[current.id] ?? "") : "";
  const answeredCount = useMemo(
    () =>
      questions.filter((question) => values[question.id]?.trim().length > 0)
        .length,
    [questions, values],
  );
  const progress = type ? Math.round((answeredCount / questions.length) * 100) : 0;

  const summary = useMemo(
    () =>
      questions.map((question) => ({
        id: question.id,
        label: question.label,
        value: values[question.id] ?? "",
      })),
    [questions, values],
  );

  function chooseType(nextType: LeadType) {
    setType(nextType);
    setIndex(0);
    setValues({});
    setStatus("idle");
    setError("");
  }

  function updateValue(nextValue: string) {
    if (!current) return;

    setValues((currentValues) => ({
      ...currentValues,
      [current.id]: nextValue,
    }));
  }

  function goBack() {
    setStatus("idle");
    setError("");

    if (index === 0) {
      setType(null);
      return;
    }

    setIndex((currentIndex) => Math.max(0, currentIndex - 1));
  }

  async function submit() {
    if (!type) return;
    setStatus("submitting");
    setError("");

    const fields = Object.fromEntries(
      Object.entries(values).filter(([key]) => contactFieldIds.has(key)),
    );

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          source: "kontakt-wizard",
          fields,
          answers: summary,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        setError("Bitte prüfe deine Angaben und versuche es erneut.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setError("Bitte prüfe deine Angaben und versuche es erneut.");
    }
  }

  if (!type) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        <ChoiceCard
          icon={UserRound}
          title="Privatperson"
          text="Für Berufstätige, Familien und persönliche Vorteile im Alltag."
          onClick={() => chooseType("b2c")}
        />
        <ChoiceCard
          icon={Building2}
          title="Unternehmen"
          text="Für Arbeitgeber, Mitarbeiter-Benefits und langfristige Bindung."
          onClick={() => chooseType("b2b")}
        />
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="rounded-[30px] border border-[#E6D8C6] bg-white p-7 text-center shadow-[0_24px_70px_rgba(23,19,13,0.08)] sm:p-10">
        <CheckCircle2
          className="mx-auto text-[#0D3A2D]"
          size={42}
          strokeWidth={1.8}
        />
        <h2 className="mt-5 font-serif text-3xl font-semibold text-[#17130D]">
          Anfrage ist vorbereitet
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#4A453C] sm:text-base">
          Danke. Deine Angaben wurden an MeinBenefit übermittelt und im CRM
          gespeichert.
        </p>
      </div>
    );
  }

  const isLast = index === questions.length - 1;
  const canContinue = value.trim().length > 0 && status !== "submitting";
  const canSubmit = answeredCount === questions.length && status !== "submitting";

  return (
    <div className="rounded-[30px] border border-[#E6D8C6] bg-white p-5 shadow-[0_24px_70px_rgba(23,19,13,0.08)] sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-[#E6D8C6] px-4 py-2 text-sm font-semibold text-[#17130D] transition hover:bg-[#F8F3EC]"
          disabled={status === "submitting"}
          onClick={goBack}
        >
          <ArrowLeft size={16} />
          Zurück
        </button>
        <span className="text-sm font-bold text-[#B99772]">
          {progress}% · {answeredCount}/{questions.length}
        </span>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#F1E8DC]">
        <div
          className="h-full rounded-full bg-[#0D3A2D] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {isSummaryStep ? (
        <div className="mt-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B99772]">
            Prüfen
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#17130D] sm:text-4xl">
            Stimmen diese Angaben?
          </h1>
          <p className="mt-4 text-sm leading-7 text-[#4A453C] sm:text-base">
            Bitte prüfe deine Antworten. Wenn alles passt, senden wir deine
            Anfrage an MeinBenefit.
          </p>

          <div className="mt-7 divide-y divide-[#EFE6DA] rounded-[22px] border border-[#E6D8C6]">
            {summary.map((answer, answerIndex) => (
              <div
                key={answer.id}
                className="grid gap-3 px-5 py-4 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#B99772]">
                    {answer.label}
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#17130D]">
                    {answer.value}
                  </p>
                </div>
                <button
                  type="button"
                  className="justify-self-start rounded-full border border-[#E6D8C6] px-4 py-2 text-sm font-semibold text-[#17130D] transition hover:bg-[#F8F3EC] sm:justify-self-end"
                  disabled={status === "submitting"}
                  onClick={() => {
                    setStatus("idle");
                    setError("");
                    setIndex(answerIndex);
                  }}
                >
                  Bearbeiten
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : current ? (
        <div className="mt-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B99772]">
            {type === "b2b" ? "Unternehmen" : "Privatperson"} · Frage{" "}
            {index + 1} von {questions.length}
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#17130D] sm:text-4xl">
            {current.label}
          </h1>
          {current.helper ? (
            <p className="mt-4 text-sm leading-7 text-[#4A453C] sm:text-base">
              {current.helper}
            </p>
          ) : null}

          {current.options ? (
            <div className="mt-7 grid gap-3">
              {current.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`rounded-[18px] border px-5 py-4 text-left text-sm font-semibold transition ${
                    value === option
                      ? "border-[#0D3A2D] bg-[#0D3A2D] text-white"
                      : "border-[#E6D8C6] bg-white text-[#17130D] hover:border-[#B99772] hover:bg-[#F8F3EC]"
                  }`}
                  onClick={() => updateValue(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <input
              className="mt-7 min-h-14 w-full rounded-full border border-[#E6D8C6] bg-white px-5 text-base font-semibold text-[#17130D] outline-none transition placeholder:text-[#8C887D] focus:border-[#0D3A2D] focus:ring-4 focus:ring-[#0D3A2D]/10"
              type={current.inputType ?? "text"}
              value={value}
              placeholder="Antwort eingeben"
              onChange={(event) => updateValue(event.target.value)}
            />
          )}
        </div>
      ) : null}

      {error ? (
        <p className="mt-5 text-sm font-semibold text-red-700">{error}</p>
      ) : null}

      <div className="mt-8 flex justify-end">
        <Button
          type="button"
          disabled={isSummaryStep ? !canSubmit : !canContinue}
          className="disabled:cursor-not-allowed disabled:opacity-45"
          onClick={() => {
            if (isSummaryStep) {
              if (canSubmit) void submit();
              return;
            }

            if (!canContinue) return;
            if (isLast) setIndex(questions.length);
            else setIndex((currentIndex) => currentIndex + 1);
          }}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Wird gesendet
            </>
          ) : isSummaryStep ? (
            <>
              Angaben senden <ArrowRight size={18} />
            </>
          ) : isLast ? (
            <>
              Zusammenfassung <ArrowRight size={18} />
            </>
          ) : (
            <>
              Weiter <ArrowRight size={18} />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

function ChoiceCard({
  icon: Icon,
  title,
  text,
  onClick,
}: {
  icon: typeof UserRound;
  title: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="group rounded-[30px] border border-[#E6D8C6] bg-white p-7 text-left shadow-[0_18px_54px_rgba(23,19,13,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#B99772] hover:shadow-[0_24px_70px_rgba(23,19,13,0.10)]"
      onClick={onClick}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D3A2D] text-[#E7D7C4]">
        <Icon size={22} strokeWidth={1.8} />
      </span>
      <span className="mt-6 block font-serif text-3xl font-semibold text-[#17130D]">
        {title}
      </span>
      <span className="mt-3 block text-sm leading-7 text-[#4A453C]">
        {text}
      </span>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0D3A2D]">
        Starten <ArrowRight size={16} />
      </span>
    </button>
  );
}
