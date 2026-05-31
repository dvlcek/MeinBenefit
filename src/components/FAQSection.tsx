"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/Button";

const b2cFaqs = [
  {
    q: "Bekomme ich garantiert eine Ersparnis? Wie viel Erspart man sich im Durchschnitt?",
    a: "Nein, pauschale Garantien geben wir nicht. Jede Situation ist individuell. Ziel ist es, mögliche Potenziale sichtbar zu machen und dir klar zu zeigen, welche Optionen für dich sinnvoll sein können.",
  },
  {
    q: "Wie funktioniert der Gold-Benefit?",
    a: "Kund:innen leisten einen monatlichen Beitrag, der in einen persönlichen Goldwert umgewandelt wird. Sobald der definierte Mindestwert für eine Lieferung erreicht ist, wird physisches Gold über Münze Österreich bezogen und direkt geliefert.",
  },
  {
    q: "Sind meine Daten sicher?",
    a: "Ja. Deine Daten werden vertraulich behandelt und nur für die Analyse und Betreuung im Rahmen von MeinBenefit verwendet. Transparenz und Datenschutz sind ein zentraler Bestandteil unseres Services.",
  },
  {
    q: "Bin ich langfristig gebunden?",
    a: "Die genauen Vertragsdetails hängen vom gewählten Modell ab. Wichtig ist: MeinBenefit soll verständlich, fair und transparent aufgebaut sein — ohne versteckte Kosten.",
  },
  {
    q: "Für wen ist MeinBenefit geeignet?",
    a: "MeinBenefit eignet sich besonders für Berufstätige, Familien und Menschen, die mehr Überblick über ihre laufenden Ausgaben möchten, aber keine Zeit oder Lust haben, alles selbst zu prüfen.",
  },
];

const b2bFaqs = [
  {
    q: "Was ist MeinBenefit für Unternehmen?",
    a: "MeinBenefit ist ein Mitarbeiter-Benefit für Unternehmen. Arbeitgeber:innen ermöglichen ihren Mitarbeiter:innen Zugang zu einem persönlichen Service, der laufende Ausgaben prüft, Potenziale sichtbar macht und langfristige Vorteile schaffen kann.",
  },
  {
    q: "Fallen zusätzliche Kosten an für Unternehmen?",
    a: "Nein, der Arbeitgeber zahlt einen monatlichen Beitrag pro Mitarbeiter:in. Der Mindestbeitrag beträgt 20 € pro Mitarbeiter:in und Monat.",
  },
  {
    q: "Wie hoch ist der Aufwand für Unternehmen?",
    a: "Der Aufwand bleibt gering. MeinBenefit übernimmt Beratung, Kommunikation, Ablauf und Betreuung. Das Unternehmen erhält ein einfach integrierbares Benefit-Modell.",
  },
];

export function FAQSection() {
  const [openKey, setOpenKey] = useState("b2c-0");

  return (
    <section id="faq" className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-9 sm:p-8 lg:p-10">
        <div>
          <h2 className="font-serif text-3xl text-center font-semibold leading-[1.08] text-[#17130D] sm:text-4xl">
            Häufige Fragen
          </h2>
        </div>
        <div className="grid gap-3">
          <div>
            <h3 className="text-xl font-semibold text-[#17130D]">Für Privatpersonen</h3>
          </div>
          {b2cFaqs.map((item, index) => {
            const key = `b2c-${index}`;
            const open = openKey === key;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-[18px] border border-[#E6D8C6] bg-white shadow-[0_12px_32px_rgba(23,19,13,0.035)]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold leading-5 text-[#17130D] transition hover:bg-[#F8F3EC]"
                  aria-expanded={open}
                  onClick={() => setOpenKey(open ? "" : key)}
                >
                  {item.q}
                  <Plus
                    className={`shrink-0 text-[#0D3A2D] transition ${open ? "rotate-45" : ""}`}
                    size={18}
                    strokeWidth={1.8}
                  />
                </button>
                {open ? (
                  <p className="px-5 pb-5 text-sm leading-7 text-[#4A453C]">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
          <div className="pt-8">
            <h3 className="text-xl font-semibold text-[#17130D]">Für Unternehmen</h3>
          </div>
          {b2bFaqs.map((item, index) => {
            const key = `b2b-${index}`;
            const open = openKey === key;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-[18px] border border-[#E6D8C6] bg-white shadow-[0_12px_32px_rgba(23,19,13,0.035)]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold leading-5 text-[#17130D] transition hover:bg-[#F8F3EC]"
                  aria-expanded={open}
                  onClick={() => setOpenKey(open ? "" : key)}
                >
                  {item.q}
                  <Plus
                    className={`shrink-0 text-[#0D3A2D] transition ${open ? "rotate-45" : ""}`}
                    size={18}
                    strokeWidth={1.8}
                  />
                </button>
                {open ? (
                  <p className="px-5 pb-5 text-sm leading-7 text-[#4A453C]">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
