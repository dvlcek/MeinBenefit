import { Check, Phone, Search, UsersRound } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Unverbindliches Erstgespräch",
    text: "Wir lernen Ihre Situation kennen und klären gemeinsam, wie MeinBenefit für Sie oder Ihr Unternehmen sinnvoll eingesetzt werden kann.",
  },
  {
    number: "02",
    icon: Search,
    title: "Analyse der laufenden Ausgaben",
    text: "Wir prüfen bestehende Ausgaben, erkennen mögliche Potenziale und machen sichtbar, wo Vorteile entstehen können.",
  },
  {
    number: "03",
    icon: Check,
    title: "Ihr persönliches Vorteilskonzept",
    text: "Sie erhalten eine klare Übersicht mit Empfehlungen, nächsten Schritten und einem Modell, das zu Ihrer Situation passt.",
  },
  {
    number: "04",
    icon: UsersRound,
    title: "Langfristige Begleitung",
    text: "Wir unterstützen Sie bei der Umsetzung, prüfen regelmäßig neue Möglichkeiten und bleiben langfristig an Ihrer Seite.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="ablauf"
      className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-18 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-serif text-[31px] font-normal leading-[1.04] tracking-[-0.04em] text-[#17130D] sm:text-5xl lg:text-[54px]">
            So funktioniert MeinBenefit
          </h2>

          <p className="mt-4 text-[13px] font-medium leading-6 text-[#4A453C] sm:text-base sm:leading-7">
            Ob Sie MeinBenefit privat nutzen oder als Unternehmen Ihrem Team
            anbieten: Wir begleiten Sie persönlich, prüfen ihre laufende
            Ausgaben und bleiben langfristig an Ihrer Seite.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-14 sm:gap-10 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative pl-10 sm:pl-0"
              >
                {/* Top number / icon / connector */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="absolute left-0 top-0 font-serif text-[24px] font-normal leading-none tracking-[-0.03em] text-[#B99772] sm:static sm:text-[30px]">
                    {step.number}
                  </span>

                  <span className="flex size-7 shrink-0 items-center justify-center text-[#7E7569]">
                    <Icon size={16} strokeWidth={1.6} />
                  </span>

                  {index !== steps.length - 1 ? (
                    <span className="hidden h-px flex-1 bg-[repeating-linear-gradient(90deg,rgba(216,170,63,0.55)_0px,rgba(216,170,63,0.55)_2px,transparent_2px,transparent_7px)] lg:block" />
                  ) : null}
                </div>

                {/* Mobile connector */}
                {index !== steps.length - 1 ? (
                  <div className="absolute left-[15px] top-10 hidden h-[calc(100%+24px)] w-px bg-[repeating-linear-gradient(180deg,rgba(216,170,63,0.5)_0px,rgba(216,170,63,0.5)_2px,transparent_2px,transparent_7px)] sm:block lg:hidden" />
                ) : null}

                <div className="mt-4 pl-0 lg:mt-6">
                  <h3 className="max-w-[280px] text-[14px] font-bold leading-[1.25] text-[#17130D] sm:max-w-[240px] sm:text-base">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[310px] text-[12px] font-medium leading-5 text-[#4A453C] sm:mt-3 sm:max-w-[260px] sm:leading-6 sm:text-[13px]">
                    {step.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
