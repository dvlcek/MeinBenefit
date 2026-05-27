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
    <section id="faq" className="bg-white px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-[1200px] gap-8 border-t border-[#D8C7A3] pt-10 lg:grid-cols-1 text-center">
        <h2 className="font-serif text-3xl font-semibold text-[#17130D]">Häufige Fragen</h2>
        <div className="grid gap-4 md:grid-cols-1">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.q} className="border border-[#D8C7A3] bg-white shadow-[0_10px_28px_rgba(17,18,15,0.035)]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold leading-5 text-[#17130D]"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  {item.q}
                  <Plus
                    className={`shrink-0 text-[#17130D] transition ${open ? "rotate-45" : ""}`}
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
