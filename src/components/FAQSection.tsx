"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Bekomme ich garantiert ein Ersparnis?",
    a: "Nein, pauschale Garantien geben wir nicht. Jede Situation ist individuell. Ziel ist eine klare Analyse und nachvollziehbare Empfehlungen.",
  },
  {
    q: "Wie funktioniert der Gold-Check?",
    a: "Wir prüfen laufende Kosten und Potenziale regelmäßig und verbinden mögliche Entlastung mit langfristigem Mehrwert.",
  },
  {
    q: "Sind meine Daten sicher?",
    a: "Ja. Deine Daten werden vertraulich behandelt und nur für Analyse und Betreuung im Rahmen von MeinBenefit verwendet.",
  },
  {
    q: "Bin ich langfristig gebunden?",
    a: "Die Vertragsdetails hängen vom gewählten Modell ab. Der Aufbau ist verständlich, fair und transparent geplant.",
  },
  {
    q: "Für wen ist MeinBenefit geeignet?",
    a: "Für Berufstätige, Familien und Menschen, die mehr Überblick über laufende Ausgaben und persönliche Potenziale möchten.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-9 sm:p-8 lg:p-10">
        <div>
          <h2 className="font-serif text-3xl text-center font-semibold leading-[1.08] text-[#17130D] sm:text-4xl">
            Häufige Fragen
          </h2>
        </div>
        <div className="grid gap-3">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-[18px] border border-[#E6D8C6] bg-white shadow-[0_12px_32px_rgba(23,19,13,0.035)]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold leading-5 text-[#17130D] transition hover:bg-[#F8F3EC]"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  {item.q}
                  <Plus
                    className={`shrink-0 text-[#0D3A2D] transition ${open ? "rotate-45" : ""}`}
                    size={18}
                    strokeWidth={1.8}
                  />
                </button>
                {open ? <p className="px-5 pb-5 text-sm leading-7 text-[#4A453C]">{item.a}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
