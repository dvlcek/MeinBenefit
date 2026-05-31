"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

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
