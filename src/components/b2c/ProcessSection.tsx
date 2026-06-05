import {
  CalendarCheck,
  Check,
  Coins,
  Lightbulb,
  Search,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Kostenloses Erstgespräch buchen",
    text: "Sie wählen einen passenden Termin. Im Gespräch klären wir, welche Themen für Sie aktuell wichtig sind.",
  },
  {
    number: "02",
    icon: Search,
    title: "Überblick schaffen",
    text: "Gemeinsam sehen wir uns Ihre bestehenden Verträge an und prüfen, ob diese noch zu Ihrer aktuellen Lebenssituation passen.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Persönliche Möglichkeiten erkennen",
    text: "Wir zeigen Ihnen, wo Verträge noch passen, wo Verbesserungen möglich sein können und welche nächsten Schritte sinnvoll wären.",
  },
  {
    number: "04",
    icon: Coins,
    title: "Goldwert aufbauen",
    text: "Je nach gewähltem Modell entsteht zusätzlich ein langfristiger Vorteil in Gold. Die Lieferung erfolgt über Münze Österreich. Unser Service bleibt langfristig an Ihrer Seite.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="ablauf"
      className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-18 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[780px] text-center">

          <h2 className="mt-2 font-serif text-[31px] leading-[1.04] tracking-[-0.02em] text-[#17130D] sm:text-5xl lg:text-[54px]">
            In vier Schritten zu mehr Klarheit
          </h2>

          <p className="mt-4 text-[13px] font-normal leading-6 sm:text-base sm:leading-7">
            Im kostenlosen Erstgespräch lernen wir Ihre aktuelle Situation kennen. Danach schaffen wir gemeinsam einen Überblick über Ihre laufenden Verträge und zeigen, welche Möglichkeiten für Sie bestehen.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-14 sm:gap-10 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article key={step.number} className="relative pl-10 sm:pl-0">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="absolute left-0 top-0 font-serif text-[24px] font-normal leading-none tracking-[-0.03em] text-[#C8A96A] sm:static sm:text-[30px]">
                    {step.number}
                  </span>

                  <span className="flex size-7 shrink-0 items-center justify-center text-[#7E7569]">
                    <Icon size={16} strokeWidth={1.6} />
                  </span>

                  {index !== steps.length - 1 ? (
                    <span className="hidden h-px flex-1 bg-[repeating-linear-gradient(90deg,rgba(200,169,106,0.6)_0px,rgba(200,169,106,0.6)_2px,transparent_2px,transparent_7px)] lg:block" />
                  ) : null}
                </div>

                {index !== steps.length - 1 ? (
                  <div className="absolute left-[15px] top-10 hidden h-[calc(100%+24px)] w-px bg-[repeating-linear-gradient(180deg,rgba(200,169,106,0.55)_0px,rgba(200,169,106,0.55)_2px,transparent_2px,transparent_7px)] sm:block lg:hidden" />
                ) : null}

                <div className="mt-4 pl-0 lg:mt-6">
                  <h3 className="max-w-[280px] text-[14px] font-bold leading-[1.25] text-[#17130D] sm:max-w-[240px] sm:text-base">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[310px] text-[12px] font-medium leading-5 text-[#4A453C] sm:mt-3 sm:max-w-[260px] sm:text-[13px] sm:leading-6">
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