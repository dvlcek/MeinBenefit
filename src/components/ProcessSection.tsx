import { ArrowRight, Check, Phone, Search, UsersRound } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Unverbindliches / Kostenloses Erstgespräch",
    text: "Kostenloses persönliches Gespräch und erste Einschätzung deiner Lebenssituation.",
  },
  {
    number: "02",
    icon: Search,
    title: "Analyse deiner Ausgaben",
    text: "Wir zeigen in wenigen Minuten die großen Zeit- und Geldfresser auf. Erstes Potenzial wird sichtbar gemacht.",
  },
  {
    number: "03",
    icon: Check,
    title: "Dein persönliches Vorteilskonzept",
    text: "Du bekommst eine klare Übersicht mit deinen persönlichen Potenzialen / Möglichkeiten.",
  },
  {
    number: "04",
    icon: UsersRound,
    title: "Laufende premium Partnerschaft / Mitgliedschaft",
    text: "Wir unterstützen dich bei der Umsetzung und bleiben langfristig an deiner Seite.",
  },
];

export function ProcessSection() {
  return (
    <section id="ablauf" className="bg-white px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-[1200px] border-y border-[#D8C7A3] py-12">
        <h2 className="text-center font-serif text-3xl font-semibold leading-[1.08] text-[#17130D] sm:text-4xl">
          So funktioniert MeinBenefit
        </h2>
        <p className="mx-auto mt-4 max-w-[760px] text-center text-sm font-semibold leading-6 text-[#4A453C] sm:text-base">
          Einfach, persönlich und Schritt für Schritt begleitet — vom ersten Gespräch bis zum
          langfristigen Vorteil.
        </p>

        <div className="relative mt-10 grid gap-4 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-[38px] hidden h-px bg-[#D8C7A3] lg:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="relative border border-[#D8C7A3] bg-white p-5 shadow-[0_12px_32px_rgba(17,18,15,0.04)]"
              >
                {index < steps.length - 1 ? (
                  <ArrowRight
                    className="absolute -right-6 top-9 z-20 hidden h-8 w-8 bg-white p-1 text-[#B88420] lg:block"
                    strokeWidth={1.6}
                  />
                ) : null}

                <div className="flex items-center gap-3 border-b border-[#E6D8BA] pb-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#D8C7A3] bg-[#FFFCF4] font-serif text-lg font-semibold text-[#B88420]">
                    {step.number}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#073F2A] text-[#F6E6B8]">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="pt-5">
                  <h3 className="text-sm font-bold leading-5 text-[#17130D]">{step.title}</h3>
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
