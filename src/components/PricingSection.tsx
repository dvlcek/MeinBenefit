import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "./ui/Button";

const plans = [
  {
    title: "Basic",
    subtitle: "Für Berufstätige",
    cta: "Basic wählen",
    variant: "ghost" as const,
    features: [
      "10 Jahre Mitgliedschaft einmalig",
      "5x Gold-Check",
      "Analyse und Umsetzung",
      "Persönliche Beratung",
      "0% Verwaltungsgebühr",
    ],
  },
  {
    title: "Gold",
    subtitle: "Für Berufstätige",
    cta: "Gold starten",
    variant: "primary" as const,
    recommended: true,
    features: [
      "Monatliche Gold-Mitgliedschaft ab 20 €",
      "12x Gold-Check",
      "Jährliche Vertragsoptimierung",
      "Bis zu 180 € monatliche Entlastung",
      "Persönlicher Betreuungsservice",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="preise" className="bg-white px-5 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px] border-b border-[#D8C7A3] pb-9">
        <h2 className="text-center font-serif text-3xl font-semibold text-[#17130D] sm:text-4xl">
          Wähle das Modell, das zu dir passt
        </h2>
        <div className="mx-auto mt-6 grid max-w-[720px] gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`relative border bg-white p-7 shadow-[0_16px_44px_rgba(17,18,15,0.07)] ${
                plan.recommended ? "border-[#073F2A]" : "border-[#D8C7A3]"
              }`}
            >
              {plan.recommended ? (
                <span className="absolute right-0 top-0 bg-[#F4D184] px-4 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#17130D]">
                  Empfohlen
                </span>
              ) : null}
              <div className="text-center">
                <h3
                  className={`font-serif text-3xl font-semibold uppercase ${
                    plan.recommended ? "text-[#073F2A]" : "text-[#B88420]"
                  }`}
                >
                  {plan.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#4A453C]">{plan.subtitle}</p>
              </div>
              <ul className="mt-7 grid gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#2D271F]">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#B88420]" size={17} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink href="#kontakt" variant={plan.variant} className="mt-7 w-full">
                {plan.cta}
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
