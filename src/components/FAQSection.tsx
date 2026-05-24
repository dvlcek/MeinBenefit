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
    a: "Ja. Deine Daten werden vertraulich behandelt und nur für Analyse und Betreuung im Rahmen von Mind Benefit verwendet.",
  },
  {
    q: "Bin ich langfristig gebunden?",
    a: "Die Vertragsdetails hängen vom gewählten Modell ab. Der Aufbau ist verständlich, fair und transparent geplant.",
  },
  {
    q: "Für wen ist Mind Benefit geeignet?",
    a: "Für Berufstätige, Familien und Menschen, die mehr Überblick über laufende Ausgaben und persönliche Potenziale möchten.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1180px] gap-8 border-t border-[#D8C7A3] pt-8 lg:grid-cols-[0.22fr_0.78fr]">
        <h2 className="font-serif text-3xl font-semibold text-[#17130D]">Häufige Fragen</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.q} className="border border-[#D8C7A3] bg-white">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-3 text-left text-sm font-semibold text-[#17130D]"
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
