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
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-14">
          {/* Left side */}
          <div className="max-w-[430px]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A] sm:text-[10px] sm:tracking-[0.24em]">
              Ihre Möglichkeiten
            </p>

            <h2 className="mt-2 max-w-[410px] font-serif text-[31px] leading-[1.04] text-[#1F1F1F] sm:text-[44px]">
              Zwei Modelle. Ein persönlicher Service.
            </h2>

            <p className="mt-4 max-w-[400px] text-[13px] font-medium leading-6 text-[#6F6F6F] sm:text-sm">
              Bei MeinBenefit erhalten Sie in beiden Modellen dieselbe
              persönliche Begleitung. Der Unterschied liegt darin, wie Sie
              starten möchten: mit einer Einmalzahlung oder mit einem
              monatlichen Beitrag.
            </p>

            <div className="mt-7 border-y border-[#E8DCCB] py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C8A96A]">
                In beiden Modellen enthalten
              </p>

              <div className="mt-4 grid gap-3">
                {includedFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2.5 text-[12px] font-medium leading-[1.55] text-[#1F1F1F]"
                  >
                    <CheckCircle2
                      size={14}
                      className="mt-[2px] shrink-0 text-[#C8A96A]"
                      strokeWidth={1.8}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <article className="relative overflow-hidden rounded-[30px] bg-white shadow-[0_22px_62px_rgba(23,19,13,0.06)]">
            {/* Desktop image blend */}
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] overflow-hidden lg:block">
              <div
                className="absolute inset-0 scale-[1.04] bg-cover bg-center opacity-[0.58]"
                style={{
                  backgroundImage: "url('/images/pricing-picture.webp')",
                  WebkitMaskImage:
                    "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 24%, rgba(0,0,0,0.48) 54%, black 84%)",
                  maskImage:
                    "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.12) 24%, rgba(0,0,0,0.48) 54%, black 84%)",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-l from-white/10 via-white/55 to-white" />
            </div>

            <div className="relative z-10 px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A] sm:text-[10px] sm:tracking-[0.24em]">
                Modelle im Überblick
              </p>

              <h3 className="mt-2 max-w-[520px] font-serif text-[29px] leading-[1.06] text-[#1F1F1F] sm:text-[39px]">
                Wählen Sie den Einstieg, der zu Ihrer Situation passt.
              </h3>

              <div className="mt-6 grid gap-6 border-y border-[#E8DCCB] py-6 md:grid-cols-2 md:gap-0">
                {pricingModels.map((model, index) => (
                  <div
                    key={model.title}
                    className="border-t border-[#E8DCCB] pt-6 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0 md:pr-7 md:last:pr-0 md:last:pl-7 md:first:border-r md:first:border-[#E8DCCB]"
                  >
                    <p className="text-[15px] font-medium leading-none text-[#1F1F1F]">
                      {model.title}
                    </p>

                    <p className="mt-4 font-serif text-[34px] leading-[1.02] tracking-[-0.04em] text-[#0D3A2D] sm:text-[42px]">
                      {model.price}
                    </p>

                    <p className="mt-4 max-w-[300px] text-[12px] font-medium leading-[1.65] text-[#6F6F6F] sm:text-[13px]">
                      {model.note}
                    </p>

                    <div className="mt-5 grid gap-2.5">
                      {model.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2.5 text-[12px] font-medium leading-[1.55] text-[#1F1F1F]"
                        >
                          <CheckCircle2
                            size={14}
                            className="mt-[2px] shrink-0 text-[#C8A96A]"
                            strokeWidth={1.8}
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 max-w-[620px]">
                <p className="font-serif text-[22px] leading-[1.15] text-[#1F1F1F] sm:text-[26px]">
                  Nicht sicher, welches Modell besser zu Ihnen passt?
                </p>

                <p className="mt-3 max-w-[540px] text-[13px] font-medium leading-6 text-[#6F6F6F] sm:text-sm">
                  Im kostenlosen Erstgespräch klären wir gemeinsam, welche
                  Variante zu Ihrer Situation passt.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonLink
                    href="#kontakt"
                    variant="ghost"
                    className="h-10 w-full rounded-full !bg-[#0D3A2D] px-6 text-[12px] font-semibold !text-white shadow-[0_14px_34px_rgba(13,58,45,0.18)] transition hover:!bg-[#092A21] sm:w-auto"
                  >
                    Erstgespräch buchen
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </ButtonLink>

                  <p className="max-w-[260px] text-[11px] font-medium leading-[1.5] text-[#6F6F6F]">
                    Persönlich. Unverbindlich. Gemeinsam passend entscheiden.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}