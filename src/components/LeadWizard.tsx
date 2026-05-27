"use client";

import { ArrowLeft, ArrowRight, Building2, CheckCircle2, Loader2, UserRound } from "lucide-react";
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
    id: "ziel",
    label: "Was ist dir bei MeinBenefit am wichtigsten?",
    helper: "Die Fragen richten sich auf persönliche Vorlieben und den passenden Einstieg.",
    options: [
      "Mehr Überblick über laufende Ausgaben",
      "Persönliche Vorteile entdecken",
      "Zeit sparen und nicht selbst vergleichen",
      "Langfristig begleitet werden",
    ],
  },
  {
    id: "begleitung",
    label: "Welche Art von Begleitung passt zu dir?",
    options: [
      "Persönliches Erstgespräch",
      "Telefonischer Rückruf",
      "Online-Termin",
      "Erst Informationen per E-Mail",
    ],
  },
  {
    id: "vorliebe",
    label: "Was soll im Gespräch besonders berücksichtigt werden?",
    options: [
      "Einfacher Einstieg",
      "Konkrete monatliche Entlastung",
      "Premium Goldpaket",
      "Persönliche Betreuung",
    ],
  },
  { id: "name", label: "Wie heißt du?", inputType: "text" },
  { id: "email", label: "Unter welcher E-Mail erreichen wir dich?", inputType: "email" },
  { id: "telefon", label: "Unter welcher Telefonnummer erreichen wir dich?", inputType: "tel" },
];

const b2bQuestions: Question[] = [
  {
    id: "ziel",
    label: "Was ist für dein Unternehmen am wichtigsten?",
    helper: "Für Unternehmen bereiten wir die Anfrage als B2B Benefit-Anfrage vor.",
    options: [
      "Mitarbeiter-Benefit ab 20 € / MA / Monat",
      "Mitarbeiterbindung stärken",
      "Recruiting- und Employer-Branding-Vorteil",
      "Eigenes Firmen Branding",
    ],
  },
  {
    id: "interesse",
    label: "Wie soll MeinBenefit vorgestellt werden?",
    options: [
      "Benefit für Unternehmen anfragen",
      "Pilotmodell besprechen",
      "Rückruf vereinbaren",
      "Informationen per E-Mail erhalten",
    ],
  },
  { id: "unternehmen", label: "Wie heißt das Unternehmen?", inputType: "text" },
  { id: "mitarbeiter", label: "Wie viele Mitarbeiter:innen gibt es ungefähr?", inputType: "number" },
  { id: "name", label: "Wie heißt die Ansprechperson?", inputType: "text" },
  { id: "email", label: "Unter welcher E-Mail erreichen wir euch?", inputType: "email" },
  { id: "telefon", label: "Unter welcher Telefonnummer erreichen wir euch?", inputType: "tel" },
];

const contactFieldIds = new Set(["name", "email", "telefon", "unternehmen", "mitarbeiter"]);

export function LeadWizard() {
  const [type, setType] = useState<LeadType | null>(null);
  const [index, setIndex] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const questions = type === "b2b" ? b2bQuestions : b2cQuestions;
  const current = questions[index];
  const value = current ? values[current.id] ?? "" : "";
  const progress = type ? Math.round(((index + 1) / questions.length) * 100) : 0;

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
    setValues((currentValues) => ({ ...currentValues, [current.id]: nextValue }));
  }

  async function submit() {
    if (!type) return;
    setStatus("submitting");
    setError("");

    const fields = Object.fromEntries(
      Object.entries(values).filter(([key]) => contactFieldIds.has(key)),
    );

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
        <CheckCircle2 className="mx-auto text-[#0D3A2D]" size={42} strokeWidth={1.8} />
        <h2 className="mt-5 font-serif text-3xl font-semibold text-[#17130D]">
          Anfrage ist vorbereitet
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#4A453C] sm:text-base">
          Danke. Deine Angaben wurden an MeinBenefit übermittelt und im CRM gespeichert.
        </p>
      </div>
    );
  }

  const isLast = index === questions.length - 1;
  const canContinue = value.trim().length > 0 && status !== "submitting";

  return (
    <div className="rounded-[30px] border border-[#E6D8C6] bg-white p-5 shadow-[0_24px_70px_rgba(23,19,13,0.08)] sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-[#E6D8C6] px-4 py-2 text-sm font-semibold text-[#17130D] transition hover:bg-[#F8F3EC]"
          onClick={() => {
            if (index === 0) setType(null);
            else setIndex((currentIndex) => currentIndex - 1);
          }}
        >
          <ArrowLeft size={16} />
          Zurück
        </button>
        <span className="text-sm font-bold text-[#B99772]">{progress}%</span>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-[#F1E8DC]">
        <div
          className="h-full rounded-full bg-[#0D3A2D] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B99772]">
          {type === "b2b" ? "Unternehmen" : "Privatperson"}
        </p>
        <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#17130D] sm:text-4xl">
          {current.label}
        </h1>
        {current.helper ? (
          <p className="mt-4 text-sm leading-7 text-[#4A453C] sm:text-base">{current.helper}</p>
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

      {error ? <p className="mt-5 text-sm font-semibold text-red-700">{error}</p> : null}

      <div className="mt-8 flex justify-end">
        <Button
          type="button"
          disabled={!canContinue}
          className="disabled:cursor-not-allowed disabled:opacity-45"
          onClick={() => {
            if (!canContinue) return;
            if (isLast) void submit();
            else setIndex((currentIndex) => currentIndex + 1);
          }}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Wird gesendet
            </>
          ) : isLast ? (
            <>
              Anfrage senden <ArrowRight size={18} />
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
      <span className="mt-6 block font-serif text-3xl font-semibold text-[#17130D]">{title}</span>
      <span className="mt-3 block text-sm leading-7 text-[#4A453C]">{text}</span>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0D3A2D]">
        Starten <ArrowRight size={16} />
      </span>
    </button>
  );
}
