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
    <section id="ablauf" className="bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px] border-t border-[#E6D8C6] pt-12">
        <h2 className="mx-auto max-w-[330px] text-center font-serif text-[28px] font-semibold leading-[1.08] text-[#17130D] sm:max-w-none sm:text-4xl lg:text-[46px]">
          So funktioniert MeinBenefit
        </h2>
        <p className="mx-auto mt-4 max-w-[760px] text-center text-sm font-semibold leading-6 text-[#4A453C] sm:text-base">
          Einfach, persönlich und Schritt für Schritt begleitet — vom ersten Gespräch bis zum
          langfristigen Vorteil.
        </p>

        <div className="relative mt-12 grid gap-5 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-[46px] hidden h-px bg-[#E6D8C6] lg:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="relative rounded-[26px] border border-[#E6D8C6] bg-white p-5 shadow-[0_16px_42px_rgba(23,19,13,0.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(23,19,13,0.08)]"
              >
                {index < steps.length - 1 ? (
                  <ArrowRight
                    className="absolute -right-6 top-9 z-20 hidden h-8 w-8 rounded-full bg-white p-1 text-[#B99772] lg:block"
                    strokeWidth={1.6}
                  />
                ) : null}

                <div className="flex items-center gap-3 border-b border-[#E6D8C6] pb-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E6D8C6] bg-[#FBFAF8] font-serif text-lg font-semibold text-[#B99772]">
                    {step.number}
                  </span>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0D3A2D] text-[#E7D7C4]">
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
