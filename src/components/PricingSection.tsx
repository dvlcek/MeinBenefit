import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "./ui/Button";

const plans = [
  {
    title: "Für Unternehmen",
    subtitle: "Der Benefit, der Mitarbeiter:innen wirklich erreicht.",
    cta: "Benefit für Unternehmen anfragen",
    variant: "ghost" as const,
    cardClass: "border-[#E6D8C6] bg-[#F8F5EF] text-[#17130D] md:col-span-2 lg:col-span-1",
    accentClass: "text-[#17130D]",
    mutedClass: "text-[#6B6258]",
    featureClass: "text-[#2D271F]",
    buttonClass:
      "!bg-white !text-[#0D3A2D] hover:!bg-[#EEF6F1]",
    // intro:
    //   "MeinBenefit ist ein Mitarbeiter-Benefit für Unternehmen. Arbeitgeber ermöglichen ihren Mitarbeiter:innen Zugang zu einem persönlichen Service, der laufende Ausgaben prüft, Potenziale sichtbar macht und langfristige Vorteile schaffen kann.",
    note: "(smarte Upgrade )",
    extra: "Tarifkartre L´Rechts Text Links was MB ist",
    price: "ab 20 € / Mitarbeiter:in / Monat",
    features: [
      "Mitarbeiter-Benefit ab 20 € / MA / Monat",
      "(Goldauszahlung ab 1g Gold Premium Goldpaket in kooperation mit Münze Österreich )",
      "Persönlicher Service für Mitarbeiter:innen",
      "Unterstützung für Mitarbeiterbindung",
      "Recruiting- und Employer-Branding-Vorteil",
      "Eigenes Firmen Branding",
    ],
  },
  {
    title: "Gold",
    subtitle: "Für Berufstätige",
    cta: "Kostenloses Erstgespräch buchen",
    variant: "secondary" as const,
    recommended: true,
    cardClass: "border-[#0D3A2D] bg-[#0D3A2D] text-white",
    accentClass: "text-[#D6B489]",
    mutedClass: "text-white/68",
    featureClass: "text-white/82",
    buttonClass: "",
    packageLabel: "Premium / monatlich Enthalten:",
    features: [
      "Monatliches Gold Abo ab 20€",
      "(Goldauszahlung ab 1g Gold Premium Goldpaket in kooperation mit Münze Österreich )",
      "Exclusive Mitgliedschaft",
      "Jährliche Vertragsoptimierung",
      "Bis zu 180€ monatliche Entlastung",
      "Personalisierte Betreuung",
      "Ideal für *",
    ],
  },
  {
    title: "Basic",
    subtitle: "Für Berufstätige",
    cta: "Kostenloses Erstgespräch buchen",
    variant: "ghost" as const,
    cardClass: "border-[#17130D] bg-white text-[#17130D]",
    accentClass: "text-[#17130D]",
    mutedClass: "text-[#6B6258]",
    featureClass: "text-[#2D271F]",
    buttonClass:
      "!bg-white !text-[#17130D] border border-[#17130D] hover:!bg-[#17130D] hover:!text-white ",
    packageLabel: "Gold / einmalig Enthalten:",
    features: [
      "Einmalige Gold Auszahlung mit 15g Gold",
      "(Premium Goldpaket in kooperation mit Münze Österreich)",
      "Exclusive Mitgliedschaft",
      "Jährliche Vertragsoptimierung",
      "Bis zu 180€ monatliche Entlastung",
      "Personalisierte Betreuung",
      "Ideal für *",
    ],
  },
  
  
];

export function PricingSection() {
  return (
    <section id="preise" className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B99772]">
              Tarifkarten
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.02] text-[#17130D] sm:text-5xl lg:text-[58px]">
              Für Berufstätige
            </h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-base text-[#17130D]">
              Dein persönlicher Vorteil im Alltag.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#4A453C] sm:text-base">
              Du möchtest mehr Überblick über deine laufenden Ausgaben, aber dich nicht selbst durch
              Verträge und Anbieter kämpfen? MeinBenefit erledigt das für dich! — von der Analyse bis
              zur Umsetzung.
            </p>
          </div>
        </div>
        <div className="mt-9 grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`relative overflow-hidden rounded-[20px] border p-7 transition duration-300 hover:-translate-y-1 ${
                plan.recommended ? "shadow-[0_22px_58px_rgba(13,58,45,0.16)]" : "shadow-[0_16px_42px_rgba(23,19,13,0.045)]"
              } ${plan.cardClass}`}
            >
              {plan.recommended ? (
                <span className="absolute right-4 top-4 rounded-full bg-[#D6B489] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#17130D]">
                  Empfohlen
                </span>
              ) : null}
              <div className="pt-4">
                <h3
                  className={`font-serif text-3xl font-semibold ${plan.accentClass}`}
                >
                  {plan.title}
                </h3>
                <p className={`mt-3 text-sm font-semibold leading-6 ${plan.mutedClass}`}>
                  {"packageLabel" in plan ? plan.packageLabel : plan.subtitle}
                </p>
              </div>
              {"intro" in plan ? (
                <div className="mt-6 grid gap-3 text-sm leading-6 text-[#4A453C]">
                  {/* <p>{plan.intro}</p> */}
                  <p className="font-semibold text-[#9A6418]">{plan.note}</p>
                  <p>{plan.extra}</p>
                  <p className="font-bold text-[#17130D]">Enthalten:</p>
                </div>
              ) : null}
              <ul className="mt-8 grid gap-4">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-3 text-sm ${plan.featureClass}`}>
                    <CheckCircle2 className={`mt-0.5 shrink-0 ${plan.accentClass}`} size={17} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {"price" in plan ? (
                <p className="mt-8 text-sm font-bold text-[#17130D]">{plan.price}</p>
              ) : null}
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
