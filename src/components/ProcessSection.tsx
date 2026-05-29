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
    <section id="ablauf" className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-5">
          <h2 className="font-serif text-[34px] text-center font-semibold leading-[1.04] text-[#17130D] sm:text-5xl lg:text-[58px]">
            So funktioniert MeinBenefit
          </h2>
          <p className="text-sm text-center font-semibold leading-7 text-[#4A453C] sm:text-base">
            Einfach, persönlich und Schritt für Schritt begleitet — vom ersten Gespräch bis zum
            langfristigen Vorteil.
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
