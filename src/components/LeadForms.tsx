"use client";

import { FormEvent, useState } from "react";
import { Button } from "./ui/Button";

type Status = "idle" | "success" | "error";

const inputClass =
  "min-h-12 rounded-2xl border border-[#003D2B]/14 bg-white px-4 text-sm text-[#0B0B0A] outline-none transition placeholder:text-[#8C887D] focus:border-[#006039] focus:ring-4 focus:ring-[#006039]/10";

const selectClass = `${inputClass} appearance-none`;

export function LeadForms() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <LeadFormB2C />
        <LeadFormB2B />
      </div>
    </section>
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
  children: React.ReactNode;
}) {
  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="rounded-[34px] border border-[#003D2B]/12 bg-[#F7F3EA] p-7 shadow-[0_24px_70px_rgba(5,5,5,0.07)] sm:p-9"
    >
      <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0B0B0A] sm:text-4xl">
        {title}
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">{children}</div>
      <Button type="submit" className="mt-8 w-full sm:w-auto">
        {cta}
      </Button>
      {status === "success" ? (
        <p className="mt-5 rounded-2xl bg-[#006039]/10 px-4 py-3 text-sm font-medium text-[#003D2B]">
          Danke. Deine Anfrage wurde erfolgreich übermittelt.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
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
