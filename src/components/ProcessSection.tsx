import { ArrowRight, Check, Phone, Search, UsersRound } from "lucide-react";

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
    <section id="ablauf" className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-5">
          <h2 className="font-serif text-[34px] text-center font-semibold leading-[1.04] text-[#17130D] sm:text-5xl lg:text-[58px]">
            So funktioniert MeinBenefit
          </h2>
          <p className="text-sm text-center font-semibold leading-7 text-[#4A453C] sm:text-base">
            Ob Sie MeinBenefit privat nutzen oder als Unternehmen Ihrem Team anbieten: Wir begleiten Sie
            persönlich, prüfen ihre laufende Ausgaben und bleiben langfristig an Ihrer Seite.
          </p>
        </div>

        <div className="relative mt-8 grid gap-10 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="group relative py-4 transition duration-300 lg:px-4"
              >
                {index < steps.length - 1 ? (
                  <ArrowRight
                    className="absolute -right-4 top-9 z-20 hidden h-8 w-8 rounded-full bg-white p-1 text-[#B99772] lg:block"
                    strokeWidth={1.6}
                  />
                ) : null}

                <div className="flex items-center gap-4">
                  <span className="font-serif text-5xl font-semibold text-[#D6B489]">
                    {step.number}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F8F3EC] text-[#0D3A2D] transition group-hover:bg-[#0D3A2D] group-hover:text-[#E7D7C4]">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="pt-7">
                  <h3 className="max-w-[230px] text-base font-bold leading-6 text-[#17130D]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#4A453C]">{step.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
