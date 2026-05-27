"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/Button";

type Status = "idle" | "success" | "error";
type FormType = "b2c" | "b2b";

const inputClass =
  "min-h-12 border border-[#D8C7A3] bg-white px-4 text-sm text-[#17130D] outline-none transition placeholder:text-[#8C887D] focus:border-[#073F2A] focus:ring-4 focus:ring-[#073F2A]/10";

const selectClass = `${inputClass} appearance-none`;

export function LeadForms() {
  const [open, setOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<FormType>("b2c");

  useEffect(() => {
    function openLeadForm() {
      setActiveForm("b2c");
      setOpen(true);
    }

    function handleClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>(
        'a[href="#kontakt"], a[href="mailto:office@meinbenefit.at"]',
      );

      if (!link) return;

      event.preventDefault();
      openLeadForm();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("meinbenefit:open-lead-form", openLeadForm);
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("meinbenefit:open-lead-form", openLeadForm);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div
      id="lead-form-modal"
      className={`lead-modal fixed inset-0 z-[100] overflow-y-auto bg-[#11120F]/58 px-5 py-6 backdrop-blur-sm sm:px-6 ${
        open ? "!block" : ""
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-form-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <div className="mx-auto min-h-full max-w-3xl content-center">
        <div className="relative border border-[#D8C7A3] bg-white shadow-[0_28px_80px_rgba(17,18,15,0.28)]">
          <div className="flex items-start justify-between gap-5 border-b border-[#D8C7A3] p-5 sm:p-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#B88420]">
                Kostenlose Erstanalyse
              </p>
              <h2
                id="lead-form-title"
                className="mt-2 font-serif text-3xl font-semibold leading-[1.08] text-[#17130D] sm:text-4xl"
              >
                Anfrage starten
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#4A453C]">
                Wähle den passenden Bereich und sende uns deine wichtigsten Informationen.
              </p>
            </div>
            <a
              href="#"
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#CDB98A] text-[#073F2A] transition hover:border-[#073F2A]"
              aria-label="Formular schließen"
              onClick={() => setOpen(false)}
            >
              <X size={19} strokeWidth={1.8} />
            </a>
          </div>

          <div className="grid grid-cols-2 border-b border-[#D8C7A3]">
            <FormTab active={activeForm === "b2c"} onClick={() => setActiveForm("b2c")}>
              Privatpersonen
            </FormTab>
            <FormTab active={activeForm === "b2b"} onClick={() => setActiveForm("b2b")}>
              Unternehmen
            </FormTab>
          </div>

          <div className="p-5 sm:p-7">
            {activeForm === "b2c" ? <LeadFormB2C /> : <LeadFormB2B />}
          </div>
        </div>
      </div>
    </div>
  );
}

function LeadFormB2C() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("idle");
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "b2c", ...payload }),
    });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) form.reset();
  }

  return (
    <FormShell
      id="lead-b2c"
      title="Dein persönliches Potenzial prüfen"
      cta="Kostenloses Erstgespräch buchen"
      status={status}
      onSubmit={handleSubmit}
    >
      <Select name="lebenssituation" label="Lebenssituation" options={["Single", "Paar", "Familie"]} />
      <Select name="wohnsituation" label="Wohnsituation" options={["Miete", "Eigentum"]} />
      <Select
        name="bereiche"
        label="Bereiche"
        options={["Versicherungen", "Energie", "Mobilfunk", "Internet", "Sonstiges"]}
      />
      <Select
        name="kontakt"
        label="Bevorzugter Kontakt"
        options={["Online-Termin", "Telefonischer Rückruf"]}
      />
      <Input name="name" label="Name" autoComplete="name" />
      <Input name="email" label="E-Mail" type="email" autoComplete="email" />
      <Input name="telefon" label="Telefonnummer" type="tel" autoComplete="tel" />
    </FormShell>
  );
}

function LeadFormB2B() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("idle");
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "b2b", ...payload }),
    });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) form.reset();
  }

  return (
    <FormShell
      id="lead-b2b"
      title="Benefit für dein Unternehmen anfragen"
      cta="Arbeitgebergespräch anfragen"
      status={status}
      onSubmit={handleSubmit}
    >
      <Input name="name" label="Name" autoComplete="name" />
      <Input name="unternehmen" label="Unternehmen" autoComplete="organization" />
      <Input name="position" label="Position" />
      <Input name="mitarbeiter" label="Anzahl Mitarbeiter:innen" type="number" min="1" />
      <Input name="branche" label="Branche" />
      <Input name="email" label="E-Mail" type="email" autoComplete="email" />
      <Input name="telefon" label="Telefonnummer" type="tel" autoComplete="tel" />
      <Select
        name="interesse"
        label="Interesse"
        options={["Erstgespräch", "Pilotmodell", "Allgemeine Informationen"]}
      />
      <Select
        name="kontakt"
        label="Bevorzugter Kontakt"
        options={["Online-Termin", "Telefonischer Rückruf"]}
      />
    </FormShell>
  );
}

function FormShell({
  id,
  title,
  cta,
  status,
  onSubmit,
  children,
}: {
  id: string;
  title: string;
  cta: string;
  status: Status;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}) {
  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="bg-white"
    >
      <h3 className="font-serif text-2xl font-semibold leading-tight text-[#17130D] sm:text-3xl">
        {title}
      </h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">{children}</div>
      <Button type="submit" className="mt-7 w-full sm:w-auto">
        {cta}
      </Button>
      {status === "success" ? (
        <p className="mt-5 border border-[#073F2A]/20 bg-[#F5FAF6] px-4 py-3 text-sm font-medium text-[#073F2A]">
          Danke. Deine Anfrage wurde erfolgreich übermittelt.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-5 border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Bitte prüfe deine Angaben und versuche es erneut.
        </p>
      ) : null}
    </form>
  );
}

function Input({
  label,
  name,
  type = "text",
  ...props
}: {
  label: string;
  name: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[#2D2922]">
      {label}
      <input className={inputClass} name={name} type={type} required {...props} />
    </label>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[#2D2922]">
      {label}
      <select className={selectClass} name={name} required defaultValue="">
        <option value="" disabled>
          Bitte wählen
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function FormTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={`min-h-12 px-4 text-sm font-bold transition ${
        active
          ? "bg-[#073F2A] text-[#F6E6B8]"
          : "bg-white text-[#4A453C] hover:bg-[#FFFCF4] hover:text-[#073F2A]"
      }`}
      aria-pressed={active}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
