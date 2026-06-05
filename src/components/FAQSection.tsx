"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const b2bFaqs = [
  {
    q: "Was ist MeinBenefit für Unternehmen?",
    a: "MeinBenefit ist ein persönlicher Mitarbeiterbenefit, den Unternehmen ihren Mitarbeitern anbieten können. Ihre Mitarbeiter erhalten Zugang zu persönlicher Begleitung bei laufenden Verträgen und Ausgaben. Die Teilnahme ist freiwillig und Ihr Unternehmen zahlt keine Kosten.",
  },
  {
    q: "Entstehen für unser Unternehmen Kosten?",
    a: "Nein. Für Ihr Unternehmen entstehen keine Kosten. Sie stellen Ihren Mitarbeitern den Zugang zu MeinBenefit bereit, die Nutzung erfolgt individuell und freiwillig.",
  },
  {
    q: "Müssen alle Mitarbeitenden teilnehmen?",
    a: "Nein. Die Teilnahme ist freiwillig. Ihre Mitarbeiter erhalten eine verständliche Einführung und entscheiden selbst, ob sie MeinBenefit nutzen möchten.",
  },
  {
    q: "Wie viel Aufwand entsteht für HR oder Geschäftsführung?",
    a: "Der interne Aufwand bleibt gering. MeinBenefit unterstützt Sie bei der Einführung, stellt Informationen bereit und begleitet die Kommunikation an Ihre Mitarbeiter. Die persönliche Betreuung der teilnehmenden Mitarbeiter übernehmen wir.",
  },
  {
    q: "Was haben unsere Mitarbeitenden davon?",
    a: "Mitarbeiter erhalten persönliche Orientierung bei laufenden Verträgen und Ausgaben. Sie bekommen Unterstützung dabei, ihre aktuelle Situation besser einzuordnen, mögliche Vorteile zu erkennen und nächste Schritte verständlicher zu entscheiden.",
  },
  {
    q: "Warum ist MeinBenefit ein Vorteil für Arbeitgeber?",
    a: "MeinBenefit hilft Unternehmen, Wertschätzung sichtbar zu machen und einen Benefit anzubieten, der für Mitarbeiter persönlich relevant ist. Dadurch kann Ihr Unternehmen als moderner, mitarbeiterorientierter und attraktiver Arbeitgeber wahrgenommen werden.",
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
