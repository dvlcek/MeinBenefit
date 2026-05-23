import { ArrowRight, Check, Phone, Search, UsersRound } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Kostenlose Erstanalyse",
    text: "Erste Einschätzung deiner Situation",
  },
  {
    number: "02",
    icon: Search,
    title: "Analyse deiner Ausgaben",
    text: "Wir zeigen große Ziele und Geldfresser auf",
  },
  {
    number: "03",
    icon: Check,
    title: "Dein persönliches Vorteilskonzept",
    text: "Klare Übersicht mit Potenzialen und Möglichkeiten",
  },
  {
    number: "04",
    icon: UsersRound,
    title: "Laufende Optimierung",
    text: "Umsetzung, Begleitung und langfristige Optimierung",
  },
];

export function ProcessSection() {
  return (
    <section id="ablauf" className="bg-[#FBFAF7] px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="text-center font-serif text-3xl font-semibold text-[#17130D]">
          So funktioniert Mind Benefit
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.number} className="relative border-t border-[#D8C7A3] pt-5">
                {index < steps.length - 1 ? (
                  <ArrowRight
                    className="absolute right-4 top-8 hidden text-[#B88420] lg:block"
                    size={22}
                    strokeWidth={1.6}
                  />
                ) : null}
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D8C7A3] bg-white font-serif text-xl text-[#B88420]">
                    {step.number}
                  </span>
                  <div>
                    <Icon className="mb-3 text-[#073F2A]" size={21} strokeWidth={1.7} />
                    <h3 className="max-w-[220px] text-sm font-bold leading-5 text-[#17130D]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-[230px] text-sm leading-6 text-[#4A453C]">{step.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
