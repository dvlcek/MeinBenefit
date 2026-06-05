import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "../ui/Button";

type PricingModel = {
  title: string;
  price: string;
  intro: string;
  valueExplanation: string;
  features: string[];
  goldNote: string;
};

const pricingModels: PricingModel[] = [
  {
    title: "Einmalmodell",
    price: "3.000 € einmalig",
    intro: "Für alle, die direkt mit einem festen Betrag starten möchten.",
    valueExplanation:
      "Sie erhalten den persönlichen MeinBenefit Service und zusätzlich 15 g Gold. Dieses Modell eignet sich, wenn Sie ohne laufenden Monatsbeitrag starten möchten.",
    features: [
      "Persönliche Analyse Ihrer aktuellen Situation",
      "Verständlicher Überblick über laufende Verträge",
      "Unterstützung bei nächsten Schritten",
      "15 g Gold über Münze Österreich",
      "Langfristige persönliche Begleitung",
    ],
    goldNote: "Goldvorteil: 15 g Gold sind im Einmalmodell enthalten.",
  },
  {
    title: "Monatsmodell",
    price: "ab 20 € / Monat",
    intro: "Für alle, die flexibel monatlich starten möchten.",
    valueExplanation:
      "Sie erhalten denselben persönlichen MeinBenefit Service und bauen Schritt für Schritt einen langfristigen Vorteil in Gold auf.",
    features: [
      "Persönliche Analyse Ihrer aktuellen Situation",
      "Verständlicher Überblick über laufende Verträge",
      "Unterstützung bei nächsten Schritten",
      "Goldauslösung ab dem Gegenwert von 1 g Gold",
      "Langfristige persönliche Begleitung",
    ],
    goldNote:
      "Goldvorteil: Eine Auslösung ist ab dem Gegenwert von 1 g Gold möglich.",
  },
];

const includedFeatures = [
  "Kostenloses Erstgespräch",
  "Persönliche Begleitung",
  "Analyse Ihrer aktuellen Situation",
  "Überblick über bestehende Verträge",
  "Verständliche Erklärung möglicher Optionen",
  "Unterstützung bei den nächsten Schritten",
  "Langfristige Betreuung",
  "Goldlieferung über Münze Österreich",
];

export function PricingSection() {
  return (
    <section
      id="preise"
      className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Heading */}
        <div className="mx-auto max-w-[780px] text-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A] sm:text-[10px] sm:tracking-[0.24em]">
            Ihre Möglichkeiten
          </p>

          <h2 className="mx-auto mt-3 max-w-[720px] font-serif text-[32px] leading-[1.04] text-[#1F1F1F] sm:text-[50px]">
            Zwei Modelle. Ein persönlicher Service.
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[13px] font-normal leading-6 text-[#6F6F6F] sm:text-sm sm:leading-7">
            Sie wählen, wie Sie starten möchten. Der persönliche Service bleibt
            in beiden Modellen gleich: Wir prüfen gemeinsam Ihre aktuelle
            Situation, klären mögliche Optionen und begleiten Sie bei den
            nächsten Schritten.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-8">
          {pricingModels.map((model) => (
            <article
              key={model.title}
              className="flex h-full flex-col rounded-[34px] bg-white px-5 py-7 shadow-[0_24px_70px_rgba(23,19,13,0.07)] ring-1 ring-[#1F1F1F]/5 sm:px-8 sm:py-9 lg:px-10"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8A96A]">
                  {model.title}
                </p>

                <p className="mt-5 font-serif text-[38px] leading-[1.02] tracking-[-0.04em] text-[#0D3A2D] sm:text-[50px]">
                  {model.price}
                </p>

                <p className="mt-4 max-w-[520px] text-[13px] font-semibold leading-6 text-[#1F1F1F] sm:text-sm">
                  {model.intro}
                </p>

                <p className="mt-3 max-w-[540px] text-[13px] font-medium leading-6 text-[#6F6F6F] sm:text-sm sm:leading-7">
                  {model.valueExplanation}
                </p>
              </div>

              <div className="mt-7 border-y border-[#E8DCCB] py-6">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C8A96A]">
                  Enthalten
                </p>

                <div className="grid gap-3.5">
                  {model.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 text-[12px] font-medium leading-[1.6] text-[#1F1F1F] sm:text-[13px]"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-[3px] shrink-0 text-[#C8A96A]"
                        strokeWidth={1.8}
                      />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-1 flex-col justify-between">
                <p className="max-w-[520px] text-[12px] font-semibold leading-6 text-[#0D3A2D] sm:text-[13px]">
                  {model.goldNote}
                </p>

                <ButtonLink
                  href="#kontakt"
                  variant="ghost"
                  className="mt-7 h-11 w-full rounded-full !bg-[#0D3A2D] px-6 text-[12px] font-semibold !text-white shadow-[0_14px_34px_rgba(13,58,45,0.18)] transition hover:!bg-[#092A21] sm:w-auto"
                >
                  Erstgespräch buchen
                  <ArrowRight size={14} strokeWidth={2.5} />
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>

        {/* Included in both */}
        <div className="mt-12 border-t border-[#E8DCCB] pt-8 sm:mt-16 sm:pt-10">
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-start lg:gap-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C8A96A]">
                In beiden Modellen enthalten
              </p>

              <h3 className="mt-3 max-w-[420px] font-serif text-[28px] leading-[1.08] text-[#1F1F1F] sm:text-[38px]">
                Derselbe Service. Unterschiedlicher Einstieg.
              </h3>

              <p className="mt-4 max-w-[430px] text-[13px] font-medium leading-6 text-[#6F6F6F] sm:text-sm sm:leading-7">
                Nicht sicher, welches Modell besser zu Ihnen passt? Im
                kostenlosen Erstgespräch klären wir gemeinsam Ihre Situation und
                zeigen Ihnen, welche Variante für Sie am besten passt.
              </p>
            </div>

            <div>
              <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {includedFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2.5 text-[12px] font-medium leading-[1.6] text-[#1F1F1F] sm:text-[13px]"
                  >
                    <CheckCircle2
                      size={15}
                      className="mt-[3px] shrink-0 text-[#C8A96A]"
                      strokeWidth={1.8}
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ButtonLink
                  href="#kontakt"
                  variant="ghost"
                  className="h-11 w-full rounded-full !bg-white px-6 text-[12px] font-semibold !text-[#0D3A2D] shadow-[0_14px_34px_rgba(13,58,45,0.12)] ring-1 ring-[#0D3A2D]/15 transition hover:!bg-[#0D3A2D] hover:!text-white sm:w-auto"
                >
                  Kostenloses Erstgespräch buchen
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
