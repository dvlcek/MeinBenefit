"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Was ist MeinBenefit?",
    a: "MeinBenefit ist ein persönlicher Service, der Sie dabei unterstützt, Ihre laufenden Verträge und Ausgaben besser zu verstehen. Wir prüfen gemeinsam Ihre aktuelle Situation, zeigen mögliche Verbesserungen auf und begleiten Sie bei den nächsten Schritten.",
  },
  {
    q: "Was passiert im kostenlosen Erstgespräch?",
    a: "Im Erstgespräch lernen wir Ihre Situation kennen und klären, welche Themen für Sie aktuell wichtig sind. Sie müssen noch keine Unterlagen perfekt vorbereiten und keine Entscheidung treffen. Ziel ist es zuerst, herauszufinden, ob und wie MeinBenefit für Sie sinnvoll sein kann.",
  },
  {
    q: "Muss ich danach etwas abschließen oder wechseln?",
    a: "Nein. Sie entscheiden immer selbst, ob Sie eine Empfehlung annehmen oder einen nächsten Schritt gehen möchten. Das Erstgespräch ist unverbindlich und verpflichtet Sie zu keinem Vertragswechsel.",
  },
  {
    q: "Was kostet MeinBenefit?",
    a: "Sie können zwischen zwei Modellen wählen: einem monatlichen Modell ab 20 € pro Monat oder einer Einmalzahlung von 3.000 €. Der persönliche Service bleibt in beiden Modellen gleich. Der Unterschied liegt darin, wie Sie starten möchten und wie der Goldwert aufgebaut wird.",
  },
  {
    q: "Wie funktioniert die Goldauszahlung?",
    a: "MeinBenefit verbindet persönliche Unterstützung bei laufenden Verträgen mit einem langfristigen Vorteil in Gold. Beim Monatsmodell kann der angesammelte Wert ab dem Gegenwert von 1 g Gold ausgelöst werden. Bei der Einmalzahlung von 3.000 € erhalten Sie 15 g Gold. Die Lieferung des Goldes erfolgt über Münze Österreich als Lieferant.",
  },
];

export function FAQSection() {
  const [openKey, setOpenKey] = useState("faq-0");

  return (
    <section
      id="faq"
      className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1200px] gap-6 sm:gap-9 sm:p-8 lg:p-10">
        <div>
          <h2 className="text-center font-serif text-[31px] font-normal leading-[1.08] text-[#17130D] sm:text-4xl">
            Häufige Fragen
          </h2>
        </div>

        <div className="grid gap-3">
          {faqs.map((item, index) => {
            const key = `faq-${index}`;
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
                    className={`shrink-0 text-[#0D3A2D] transition ${
                      open ? "rotate-45" : ""
                    }`}
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