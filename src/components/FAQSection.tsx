"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const b2bFaqs = [
  {
    q: "Was ist MeinBenefit für Unternehmen?",
    a: "MeinBenefit ist ein persönlicher Mitarbeiterbenefit, den Unternehmen ihren Mitarbeitern anbieten können. Die Umsetzung wird begleitet, die Nutzung durch Mitarbeitende erfolgt freiwillig und Ihr Unternehmen zahlt keine Kosten.",
  },
  {
    q: "Entstehen für unser Unternehmen Kosten?",
    a: "Nein. Für Ihr Unternehmen entstehen keine Kosten. MeinBenefit wird als Benefit angeboten, ohne dass Ihr Unternehmen laufende Kosten übernimmt. Die konkrete Nutzung durch Mitarbeiter wird transparent und individuell erklärt.",
  },
  {
    q: "Müssen alle Mitarbeitenden teilnehmen?",
    a: "Nein. Die Teilnahme ist freiwillig. Ihr Unternehmen stellt den Zugang zu MeinBenefit bereit, Mitarbeiter entscheiden selbst, ob sie das Angebot nutzen möchten.",
  },
  {
    q: "Wie viel Aufwand entsteht für HR oder Geschäftsführung?",
    a: "Der interne Aufwand bleibt gering. Wir unterstützen Sie bei der Einführung, stellen Informationen bereit und begleiten die Kommunikation an Ihre Mitarbeiter.",
  },
  {
    q: "Was haben unsere Mitarbeitenden davon?",
    a: "Mitarbeitende erhalten Zugang zu persönlicher Beratung, individueller Analyse und einer langfristigen Begleitung. Ziel ist es, mögliche Vorteile sichtbar zu machen und mögliche Lösungen aufzuzeigen.",
  },
  {
    q: "Warum ist MeinBenefit ein Vorteil für Arbeitgeber?",
    a: "MeinBenefit kann Ihre Arbeitgeberattraktivität stärken, weil Sie Ihren Mitarbeitern dadurch einen persönlichen und wertschätzenden Benefit ermöglichen, ohne intern hohen Aufwand aufzubauen.",
  },
];

export function FAQSection() {
  const [openKey, setOpenKey] = useState("b2b-0");

  return (
    <section id="faq" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-6 sm:gap-9 sm:p-8 lg:p-10">
        <div>
          <h2 className="text-center font-serif text-[31px] font-semibold leading-[1.08] text-[#17130D] sm:text-4xl">
            Häufige Fragen
          </h2>
        </div>
        <div className="grid gap-3">
          {/* <div>
            <h3 className="text-xl font-semibold text-[#17130D]">Für Privatpersonen</h3>
          </div>
          {b2cFaqs.map((item, index) => {
            const key = `b2c-${index}`;
            const open = openKey === key;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-[16px] border border-[#E6D8C6] bg-white shadow-[0_12px_32px_rgba(23,19,13,0.035)] sm:rounded-[18px]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-[13px] font-semibold leading-5 text-[#17130D] transition hover:bg-[#F8F3EC] sm:px-5 sm:py-4 sm:text-sm"
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
                  <p className="px-4 pb-4 text-[13px] leading-6 text-[#4A453C] sm:px-5 sm:pb-5 sm:text-sm sm:leading-7">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })} */}
          {/* <div className="pt-8">
            <h3 className="text-xl font-semibold text-[#17130D]">Für Unternehmen</h3>
          </div> */}
          {b2bFaqs.map((item, index) => {
            const key = `b2b-${index}`;
            const open = openKey === key;
            return (
              <div
                key={item.q}
                className="border-t border-[#E6D8C6] first:border-t-0"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold leading-5 text-[#17130D] transition hover:text-[#0D3A2D] sm:px-5 sm:text-sm"
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
                  <p className="pb-5 text-[13px] leading-7 text-[#4A453C] sm:px-5 sm:text-sm">
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
