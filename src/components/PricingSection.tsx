import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "./ui/Button";

type PricingPlan = {
  label: string;
  name: string;
  smallTitle: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  cta: string;
  variant: "ghost" | "secondary";
  cardClass: string;
  labelClass: string;
  accentClass: string;
  featureClass: string;
  buttonClass: string;
  recommended?: boolean;
};

const b2cPlans: PricingPlan[] = [
  {
    label: "Für Privatpersonen",
    name: "BASIC",
    smallTitle: "Einmalig starten",
    price: "3.000 € einmalig",
    priceNote: "inkl. direktem Goldwert, z. B. 15 g physisches Gold",
    description: "Einmal zahlen. Langfristig begleitet werden.",
    features: [
      "voller MeinBenefit-Service",
      "persönliche Analyse Ihrer laufenden Ausgaben",
      "Begleitung bei der Umsetzung",
      "regelmäßige Betreuung und jährliche Prüfung",
      "langfristige persönliche Begleitung",
      "direkter Goldwert, z. B. 15 g physisches Gold",
      "Goldbezug über Münze Österreich möglich",
    ],
    cta: "Einmalig starten",
    variant: "ghost" as const,
    cardClass: "border-[#D6B489] bg-white text-[#17130D]",
    labelClass: "text-[#B99772]",
    accentClass: "text-[#17130D]",
    featureClass: "text-[#2D271F]",
    buttonClass: "!bg-white !text-[#17130D] border border-[#D6B489]",
  },
  {
    label: "Für Privatpersonen",
    name: "GOLD",
    smallTitle: "Monatlich teilnehmen",
    price: "ab 20 € / Monat",
    priceNote: "Beitrag frei wählbar",
    description:
      "Ihr monatlicher Beitrag baut Ihren persönlichen Goldwert auf. Der MeinBenefit-Service bleibt gleich.",
    features: [
      "voller MeinBenefit-Service",
      "persönliche Analyse Ihrer laufenden Ausgaben",
      "Begleitung bei der Umsetzung",
      "regelmäßige Betreuung und jährliche Prüfung",
      "langfristige persönliche Begleitung",
      "Goldwert baut sich monatlich auf",
      "Goldbezug über Münze Österreich",
    ],
    cta: "Mitgliedschaft starten",
    variant: "secondary" as const,
    cardClass: "border-[#D6B489] bg-white text-[#17130D]",
    labelClass: "text-[#B99772]",
    accentClass: "text-[#D6B489]",
    featureClass: "text-[#2D271F]",
    buttonClass: "",
    recommended: true,
  },
];

const b2bPlans: PricingPlan[] = [
  {
    label: "Für Unternehmen",
    name: "BUSINESS",
    smallTitle: "Für Unternehmen",
    price: "ab 20 € / Mitarbeiter / Monat",
    description:
      "Für Unternehmen, die Mitarbeiterbindung, Arbeitgeberattraktivität und Wertschätzung einfach stärken möchten.",
    features: [
      "Persönlicher MeinBenefit-Service für Mitarbeiter",
      "Analyse laufender Ausgaben der Mitarbeiter",
      "Begleitung bei der Umsetzung",
      "Geringer Aufwand für HR",
      "Unterstützung bei Einführung und Kommunikation",
      "Stärkung von Mitarbeiterbindung und Arbeitgeberattraktivität",
      "Goldbezug über Münze Österreich möglich",
    ],
    cta: "Für Team anfragen",
    variant: "ghost" as const,
    cardClass: "border-[#0D3A2D] bg-white text-[#17130D]",
    labelClass: "text-[#0D3A2D]",
    accentClass: "text-[#17130D]",
    featureClass: "text-[#2D271F]",
    buttonClass: "!bg-[#0D3A2D] !text-white",
  },
];

export function PricingSection() {
  return (
    <section
      id="preise"
      className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* B2C Group */}
        <div className="grid gap-8 lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B99772]">
              Wähle deinen persönlichen MeinBenefit-Start
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.02] text-[#17130D] sm:text-5xl lg:text-[42px]">
              Wähle deinen persönlichen MeinBenefit-Start
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-base text-[#17130D]">
              Ob einmalig oder monatlich: Wir prüfen deine aktuelle Situation,
              zeigen mögliche Potenziale und begleiten dich persönlich bei der
              Umsetzung.
            </p>
          </div>
        </div>

        {/* Combined single-line layout: BASIC | GOLD | BUSINESS */}
        <div className="mt-9 grid items-stretch justify-center gap-8 sm:grid-cols-1 md:grid-cols-3 lg:gap-10">
          {/* B2C - BASIC */}
          {b2cPlans.slice(0, 1).map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] border p-7 transition duration-300 hover:-translate-y-1 ${plan.cardClass}`}
            >
              <p
                className={`text-[10px] font-bold uppercase tracking-[0.12em] ${plan.labelClass ?? "text-[#B99772]"}`}
              >
                {plan.label}
              </p>
              <h3
                className={`mt-3 font-serif text-3xl font-semibold ${plan.accentClass}`}
              >
                {plan.smallTitle}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#4A453C]">
                {plan.name}
              </p>
              <p className="mt-4 text-2xl font-serif font-bold text-[#17130D]">
                {plan.price}
              </p>
              {plan.priceNote ? (
                <p className="mt-2 text-sm font-semibold text-[#17130D]">
                  {plan.priceNote}
                </p>
              ) : null}
              <p className="mt-4 text-sm leading-6 text-[#4A453C]">
                {plan.description}
              </p>
              <ul className="mt-6 grid gap-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-sm ${plan.featureClass}`}
                  >
                    <CheckCircle2
                      className={`mt-0.5 shrink-0 ${plan.accentClass}`}
                      size={17}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#kontakt"
                variant={plan.variant}
                className={`mt-8 w-full ${plan.buttonClass}`}
              >
                {plan.cta}
              </ButtonLink>
            </article>
          ))}

          {/* B2C - GOLD */}
          {b2cPlans.slice(1, 2).map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] border p-7 transition duration-300 hover:-translate-y-1 ${plan.cardClass}`}
            >
              <p
                className={`text-[10px] font-bold uppercase tracking-[0.12em] ${plan.labelClass ?? "text-[#B99772]"}`}
              >
                {plan.label}
              </p>
              <h3
                className={`mt-3 font-serif text-3xl font-semibold ${plan.accentClass}`}
              >
                {plan.smallTitle}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#4A453C]">
                {plan.name}
              </p>
              <p className="mt-4 text-2xl font-serif font-bold text-[#17130D]">
                {plan.price}
              </p>
              {plan.priceNote ? (
                <p className="mt-2 text-sm font-semibold text-[#17130D]">
                  {plan.priceNote}
                </p>
              ) : null}
              <p className="mt-4 text-sm leading-6 text-[#4A453C]">
                {plan.description}
              </p>
              <ul className="mt-6 grid gap-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-sm ${plan.featureClass}`}
                  >
                    <CheckCircle2
                      className={`mt-0.5 shrink-0 ${plan.accentClass}`}
                      size={17}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#kontakt"
                variant={plan.variant}
                className={`mt-8 w-full ${plan.buttonClass}`}
              >
                {plan.cta}
              </ButtonLink>
            </article>
          ))}

          {/* B2B - BUSINESS */}
          {b2bPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] border p-7 transition duration-300 hover:-translate-y-1 ${plan.cardClass}`}
            >
              <p
                className={`text-[10px] font-bold uppercase tracking-[0.12em] ${plan.labelClass ?? "text-[#0D3A2D]"}`}
              >
                {plan.label}
              </p>
              <h3
                className={`mt-3 font-serif text-3xl font-semibold ${plan.accentClass}`}
              >
                {plan.smallTitle}
              </h3>
              <p className="mt-2 text-sm font-medium text-[#4A453C]">
                {plan.name}
              </p>
              <p className="mt-4 text-2xl font-serif font-bold text-[#17130D]">
                {plan.price}
              </p>
              {plan.priceNote ? (
                <p className="mt-2 text-sm font-semibold text-[#17130D]">
                  {plan.priceNote}
                </p>
              ) : null}
              <p className="mt-4 text-sm leading-6 text-[#4A453C]">
                {plan.description}
              </p>
              <ul className="mt-6 grid gap-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-sm ${plan.featureClass}`}
                  >
                    <CheckCircle2
                      className={`mt-0.5 shrink-0 ${plan.accentClass}`}
                      size={17}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#kontakt"
                variant={plan.variant}
                className={`mt-8 w-full ${plan.buttonClass}`}
              >
                {plan.cta}
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
