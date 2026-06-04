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

type QuestionStep = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  questions: Question[];
};

const b2cSteps: QuestionStep[] = [
  {
    id: "situation",
    eyebrow: "Ihre Situation",
    title: "Damit wir Ihre Situation besser einordnen können.",
    description:
      "Diese Angaben helfen uns, den Einstieg direkt auf Ihre aktuelle Lebenssituation auszurichten.",
    questions: [
      {
        id: "lebenssituation",
        label: "In welcher Lebenssituation sind Sie?",
        options: ["Single", "Paar", "Familie"],
      },
      {
        id: "wohnsituation",
        label: "Wie wohnen Sie derzeit?",
        options: ["Miete", "Eigentum"],
      },
    ],
  },
  {
    id: "kontaktwunsch",
    eyebrow: "Kontaktwunsch",
    title: "Wie möchten Sie den nächsten Schritt gehen?",
    description:
      "Wählen Sie aus, wie wir Sie am besten für das kostenlose Erstgespräch erreichen.",
    questions: [
      {
        id: "kontakt",
        label: "Wie möchten Sie kontaktiert werden?",
        options: ["Online-Termin", "Telefonischer Rückruf"],
      },
    ],
  },
  {
    id: "kontaktdaten",
    eyebrow: "Kontaktdaten",
    title: "Wohin dürfen wir uns persönlich melden?",
    description:
      "Bitte geben Sie Ihre Kontaktdaten ein, damit wir Ihre Anfrage zuordnen und Sie erreichen können.",
    questions: [
      {
        id: "name",
        label: "Wie heißen Sie?",
        inputType: "text",
      },
      {
        id: "email",
        label: "Unter welcher E-Mail erreichen wir Sie?",
        inputType: "email",
      },
      {
        id: "telefon",
        label: "Unter welcher Telefonnummer erreichen wir Sie?",
        inputType: "tel",
      },
    ],
  },
];

const b2bSteps: QuestionStep[] = [
  {
    id: "unternehmen",
    eyebrow: "Unternehmen",
    title: "Damit wir Ihr Unternehmen richtig einordnen können.",
    description:
      "Diese Informationen helfen uns, den passenden Benefit-Ansatz für Ihr Unternehmen vorzubereiten.",
    questions: [
      {
        id: "unternehmen",
        label: "Wie heißt das Unternehmen?",
        inputType: "text",
      },
      {
        id: "branche",
        label: "In welcher Branche ist Ihr Unternehmen tätig?",
        inputType: "text",
      },
      {
        id: "mitarbeiter",
        label: "Wie viele Mitarbeiter:innen hat Ihr Unternehmen?",
        options: ["5 - 10", "10 - 50", "50 - 100", "100+"],
      },
    ],
  },
  {
    id: "anfrage",
    eyebrow: "Anfrage",
    title: "Worum geht es bei Ihrer Anfrage?",
    description:
      "So können wir besser einschätzen, ob es zuerst um ein Erstgespräch, ein Pilotmodell oder allgemeine Informationen geht.",
    questions: [
      {
        id: "position",
        label: "Welche Rolle haben Sie im Unternehmen?",
        options: ["Geschäftsführung", "HR", "Assistenz", "Sonstiges"],
      },
      {
        id: "interesse",
        label: "Wofür möchten Sie MeinBenefit anfragen?",
        options: ["Erstgespräch", "Pilotmodell", "Allgemeine Informationen"],
      },
    ],
  },
  {
    id: "kontakt",
    eyebrow: "Kontaktdaten",
    title: "Wer ist die richtige Ansprechperson?",
    description:
      "Bitte geben Sie die Kontaktdaten an, damit wir uns persönlich mit den nächsten Schritten melden können.",
    questions: [
      {
        id: "name",
        label: "Wie heißt die Ansprechperson?",
        inputType: "text",
      },
      {
        id: "email",
        label: "Unter welcher E-Mail erreichen wir Sie?",
        inputType: "email",
      },
      {
        id: "telefon",
        label: "Unter welcher Telefonnummer erreichen wir Sie?",
        inputType: "tel",
      },
    ],
  },
];

const contactFieldIds = new Set([
  "name",
  "email",
  "telefon",
  "unternehmen",
  "mitarbeiter",
]);

function getSteps(type: LeadType | null) {
  if (type === "b2b") return b2bSteps;
  if (type === "b2c") return b2cSteps;
  return [];
}

export function LeadWizard({ initialType }: { initialType: LeadType | null }) {
  const [type, setType] = useState<LeadType | null>(initialType);
  const [index, setIndex] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const steps = useMemo(() => getSteps(type), [type]);
  const allQuestions = useMemo(
    () => steps.flatMap((step) => step.questions),
    [steps],
  );

  const isSummaryStep = type ? index >= steps.length : false;
  const currentStep = isSummaryStep ? null : steps[index];

  const progressStep = type
    ? isSummaryStep
      ? steps.length
      : Math.min(index + 1, steps.length)
    : 0;

  const progress = type
    ? Math.round((progressStep / steps.length) * 100)
    : 0;

  const summary = useMemo(
    () =>
      steps.flatMap((step) =>
        step.questions.map((question) => ({
          id: question.id,
          label: question.label,
          value: values[question.id] ?? "",
          stepIndex: steps.findIndex((item) => item.id === step.id),
        })),
      ),
    [steps, values],
  );

  const answeredCount = useMemo(
    () =>
      allQuestions.filter((question) => values[question.id]?.trim().length > 0)
        .length,
    [allQuestions, values],
  );

  const currentStepComplete =
    currentStep?.questions.every(
      (question) => values[question.id]?.trim().length > 0,
    ) ?? false;

  const canContinue = currentStepComplete && status !== "submitting";
  const canSubmit =
    answeredCount === allQuestions.length && status !== "submitting";

  function chooseType(nextType: LeadType) {
    setType(nextType);
    setIndex(0);
    setValues({});
    setStatus("idle");
    setError("");
  }

  function updateValue(questionId: string, nextValue: string) {
    setValues((currentValues) => ({
      ...currentValues,
      [questionId]: nextValue,
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
        setError("Bitte prüfen Sie Ihre Angaben und versuchen Sie es erneut.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setError("Bitte prüfen Sie Ihre Angaben und versuchen Sie es erneut.");
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
          Danke. Ihre Angaben wurden an MeinBenefit übermittelt und im CRM
          gespeichert.
        </p>
      </div>
    );
  }

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
          {progress}% · Schritt {progressStep}/{steps.length}
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
            Bitte prüfen Sie Ihre Antworten. Wenn alles passt, senden wir Ihre
            Anfrage an MeinBenefit.
          </p>

          <div className="mt-7 divide-y divide-[#EFE6DA] rounded-[22px] border border-[#E6D8C6]">
            {summary.map((answer) => (
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
                    setIndex(answer.stepIndex);
                  }}
                >
                  Bearbeiten
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : currentStep ? (
        <div className="mt-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B99772]">
            {type === "b2b" ? "Unternehmen" : "Privatperson"} ·{" "}
            {currentStep.eyebrow}
          </p>

          <h1 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#17130D] sm:text-4xl">
            {currentStep.title}
          </h1>

          {currentStep.description ? (
            <p className="mt-4 max-w-[650px] text-sm leading-7 text-[#4A453C] sm:text-base">
              {currentStep.description}
            </p>
          ) : null}

          <div className="mt-7 grid gap-6">
            {currentStep.questions.map((question) => {
              const value = values[question.id] ?? "";

              return (
                <div key={question.id}>
                  <p className="text-sm font-bold leading-5 text-[#17130D]">
                    {question.label}
                  </p>

                  {question.helper ? (
                    <p className="mt-1 text-xs font-medium leading-5 text-[#6F675D]">
                      {question.helper}
                    </p>
                  ) : null}

                  {question.options ? (
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {question.options.map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={`rounded-[16px] border px-4 py-3 text-left text-sm font-semibold transition ${
                            value === option
                              ? "border-[#0D3A2D] bg-[#0D3A2D] text-white"
                              : "border-[#E6D8C6] bg-white text-[#17130D] hover:border-[#B99772] hover:bg-[#F8F3EC]"
                          }`}
                          onClick={() => updateValue(question.id, option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <input
                      className="mt-3 min-h-12 w-full rounded-full border border-[#E6D8C6] bg-white px-5 text-sm font-semibold text-[#17130D] outline-none transition placeholder:text-[#8C887D] focus:border-[#0D3A2D] focus:ring-4 focus:ring-[#0D3A2D]/10"
                      type={question.inputType ?? "text"}
                      value={value}
                      placeholder="Antwort eingeben"
                      onChange={(event) =>
                        updateValue(question.id, event.target.value)
                      }
                    />
                  )}
                </div>
              );
            })}
          </div>
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

            if (index === steps.length - 1) {
              setIndex(steps.length);
            } else {
              setIndex((currentIndex) => currentIndex + 1);
            }
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
          ) : index === steps.length - 1 ? (
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