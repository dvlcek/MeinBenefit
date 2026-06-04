import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "../ui/Button";

type PricingModel = {
  title: string;
  price: string;
  note: string;
  features: string[];
};

const pricingModels: PricingModel[] = [
  {
    title: "Einmalmodell",
    price: "3.000 € einmalig",
    note: "Sie entscheiden sich für eine einmalige Zahlung und erhalten 15 g Gold. Dieses Modell eignet sich für alle, die einen festen Einstieg ohne laufenden Monatsbeitrag bevorzugen.",
    features: [
      "Einmalige Zahlung",
      "15 g Gold",
      "Persönliche Begleitung",
      "Unterstützung bei den nächsten Schritten",
    ],
  },
  {
    title: "Monatsmodell",
    price: "ab 20 € / Monat",
    note: "Sie starten flexibel mit einem monatlichen Beitrag. Sobald der Gegenwert von 1 g Gold erreicht ist, kann dieser in Gold ausgelöst werden.",
    features: [
      "Einstieg ab 20 € / Monat",
      "Goldauslösung ab 1 g",
      "Persönliche Begleitung",
      "Unterstützung bei den nächsten Schritten",
    ],
  },
];

const includedFeatures = [
  "Persönliche Begleitung",
  "Unterstützung bei der Prüfung Ihrer aktuellen Situation",
  "Verständliche Erklärung möglicher Optionen",
  "Unterstützung bei den nächsten Schritten",
  "Langfristige Betreuung",
  "Goldlieferung über Münze Österreich",
];

export function PricingSection() {
  return (
    <section
      id="preise"
      className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A] sm:text-[10px] sm:tracking-[0.24em]">
            Ihre Möglichkeiten
          </p>

          <h2 className="mx-auto mt-2 max-w-[680px] font-serif text-[31px] leading-[1.04] text-[#1F1F1F] sm:text-[48px]">
            Zwei Modelle. Ein persönlicher Service.
          </h2>

          <p className="mx-auto mt-4 max-w-[640px] text-[13px] font-normal leading-6 text-[#6F6F6F] sm:text-sm">
            Bei MeinBenefit erhalten Sie in beiden Modellen dieselbe persönliche
            Begleitung. Der Unterschied liegt darin, wie Sie starten möchten:
            mit einer Einmalzahlung oder mit einem monatlichen Beitrag.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-2 lg:gap-6">
          {pricingModels.map((model) => (
            <article
              key={model.title}
              className="relative overflow-hidden rounded-[30px] bg-white px-5 py-6 shadow-[0_22px_62px_rgba(23,19,13,0.06)] ring-1 ring-[#1F1F1F]/5 sm:px-7 sm:py-8 lg:px-8"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8A96A]">
                {model.title}
              </p>

              <p className="mt-5 font-serif text-[36px] leading-[1.02] tracking-[-0.04em] text-[#0D3A2D] sm:text-[46px]">
                {model.price}
              </p>

              <p className="mt-4 max-w-[500px] text-[13px] font-medium leading-6 text-[#6F6F6F] sm:text-sm">
                {model.note}
              </p>

              <div className="mt-6 border-y border-[#E8DCCB] py-5">
                <div className="grid gap-3">
                  {model.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 text-[12px] font-medium leading-[1.55] text-[#1F1F1F] sm:text-[13px]"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-[2px] shrink-0 text-[#C8A96A]"
                        strokeWidth={1.8}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <ButtonLink
                href="#kontakt"
                variant="ghost"
                className="mt-6 h-10 w-full rounded-full !bg-[#0D3A2D] px-6 text-[12px] font-semibold !text-white shadow-[0_14px_34px_rgba(13,58,45,0.18)] transition hover:!bg-[#092A21] sm:w-auto"
              >
                Erstgespräch buchen
                <ArrowRight size={14} strokeWidth={2.5} />
              </ButtonLink>
            </article>
          ))}
        </div>

        {/* Included in both */}
        <div className="mt-6 px-5 py-6 sm:px-7 sm:py-7 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8A96A]">
                In beiden Modellen enthalten
              </p>

              <h3 className="mt-3 max-w-[380px] font-serif text-[26px] leading-[1.08] text-[#1F1F1F] sm:text-[34px]">
                Derselbe Service. Unterschiedlicher Einstieg.
              </h3>

              <p className="mt-4 max-w-[390px] text-[13px] font-medium leading-6 text-[#6F6F6F] sm:text-sm">
                Nicht sicher, welches Modell besser zu Ihnen passt? Im
                kostenlosen Erstgespräch klären wir gemeinsam, welche Variante zu
                Ihrer Situation passt.
              </p>
            </div>

            <div>
              <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {includedFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2.5 text-[12px] font-medium leading-[1.55] text-[#1F1F1F] sm:text-[13px]"
                  >
                    <CheckCircle2
                      size={15}
                      className="mt-[2px] shrink-0 text-[#C8A96A]"
                      strokeWidth={1.8}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <ButtonLink
                  href="#kontakt"
                  variant="ghost"
                  className="h-10 w-full rounded-full border !bg-[#ffffff] px-6 text-[12px] font-semibold !text-[#0D3A2D] shadow-[0_14px_34px_rgba(13,58,45,0.18)] transition hover:!bg-[#0D3A2D] hover:!text-white sm:w-auto"
                >
                  Erstgespräch buchen
                  <ArrowRight size={14} strokeWidth={2.5} />
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}