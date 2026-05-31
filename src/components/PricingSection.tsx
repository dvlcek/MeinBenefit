import { ArrowRight, CheckCircle2 } from "lucide-react";
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
  const plan = b2bPlans[0];

  const priceMain = plan.price.replace("ab ", "").replace(" / Mitarbeiter / Monat", "");
  const priceSuffix = plan.price.includes("/ Mitarbeiter / Monat")
    ? "/ Mitarbeiter / Monat"
    : "";

  return (
    <section
      id="preise"
      className="relative overflow-hidden px-5 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid items-center gap-10 lg:grid-cols-[0.70fr_1.3fr] lg:gap-8">
          {/* Left side */}
          <div className="relative z-10 max-w-[430px]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#B99772]">
              Flexibel. Fair. Planbar.
            </p>

            <h2 className="mt-3 max-w-[390px] font-serif text-[34px] font-normal leading-[1.03] tracking-[-0.045em] text-[#17130D] sm:text-[42px] lg:text-[45px]">
              Wähle deinen persönlichen MeinBenefit-Start
            </h2>

            <div className="mt-10 flex items-center gap-6">
              <div className="relative flex size-[92px] shrink-0 items-center justify-center rounded-full border border-[#E8DDCB] bg-white shadow-[0_20px_60px_rgba(23,19,13,0.06)]">
                <div className="flex size-[58px] items-center justify-center rounded-full border border-[#E2D2BB] text-[#0D3A2D]">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="10" cy="10.5" r="3.1" stroke="currentColor" strokeWidth="1.35" />
                    <circle cx="20" cy="10.5" r="3.1" stroke="currentColor" strokeWidth="1.35" />
                    <path
                      d="M4.5 23.5c1-4 3.5-6 7.2-6 3.5 0 5.9 2 6.8 6"
                      stroke="currentColor"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11.5 23.5c1-4 3.5-6 7.2-6 3.5 0 5.9 2 6.8 6"
                      stroke="currentColor"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <p className="max-w-[190px] text-[13px] font-medium leading-[1.6] text-[#4A453C]">
                Ob einmalig oder monatlich: Wir prüfen deine aktuelle Situation,
                zeigen mögliche Potenziale und begleiten dich persönlich bei der
                Umsetzung.
              </p>
            </div>
          </div>

          {/* Pricing card */}
          <article className="relative min-h-[355px] overflow-hidden rounded-[20px] border border-[#E4D8C8] bg-white shadow-[0_26px_90px_rgba(23,19,13,0.08)]">
            {/* Diagonal blended image */}
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[50%] overflow-hidden lg:block">
              <div
                className="absolute inset-0 scale-[1.04] bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/pricing-picture.webp')",
                  clipPath: "polygon(28% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  WebkitMaskImage:
                    "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.18) 16%, rgba(0,0,0,0.72) 34%, black 52%)",
                  maskImage:
                    "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.18) 16%, rgba(0,0,0,0.72) 34%, black 52%)",
                }}
              />

              {/* Very soft premium wash, not strong gradient */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(28% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(13,58,45,0.05) 100%)",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-[560px] px-7 py-7 sm:px-9 sm:py-8 lg:px-10 lg:py-9">
              <p className="text-[16px] font-medium leading-none text-[#17130D]">
                {plan.smallTitle}
              </p>

              <div className="mt-4 flex flex-wrap items-end gap-x-2 gap-y-1">
                <p className="font-serif text-[48px] font-normal leading-none tracking-[-0.06em] text-[#0D3A2D] sm:text-[54px]">
                  {priceMain}
                </p>

                {priceSuffix ? (
                  <p className="pb-1.5 text-[13px] font-medium text-[#4A453C]">
                    {priceSuffix}
                  </p>
                ) : null}
              </div>

              <p className="mt-2 text-[12px] font-medium text-[#4A453C]">
                ein lösungsorientiertes Angebot für moderne Arbeitgeber.
              </p>

              <ul className="mt-5 grid max-w-[430px] gap-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[12px] font-medium leading-[1.55] text-[#2D271F]"
                  >
                    <CheckCircle2
                      size={14}
                      className="mt-[2px] shrink-0 text-[#B99772]"
                      strokeWidth={1.8}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href="#kontakt"
                variant={plan.variant}
                className="mt-6 h-10 rounded-full !bg-[#0D3A2D] px-6 text-[12px] font-semibold !text-white shadow-[0_14px_34px_rgba(13,58,45,0.22)] transition hover:!bg-[#092A21]"
              >
                MB Testzugang <ArrowRight size={14} strokeWidth={2.5} />
              </ButtonLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}