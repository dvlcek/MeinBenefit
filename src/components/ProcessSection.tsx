import { Check, Phone, Search, UsersRound } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Kostenloses Erstgespräch",
    text: "Wir klären, welche Ziele Sie mit einem Mitarbeiterbenefit verfolgen und wie MeinBenefit in Ihrem Unternehmen sinnvoll eingeführt werden kann.",
  },
  {
    number: "02",
    icon: Search,
    title: "Umsetzung vorbereiten",
    text: "Gemeinsam stimmen wir den Ablauf mit Geschäftsführung oder HR ab und bereiten die Kommunikation für Ihre Mitarbeiter verständlich vor.",
  },
  {
    number: "03",
    icon: Check,
    title: "Mitarbeiter informieren",
    text: "Ihre Mitarbeiter erhalten eine klare Einführung in MeinBenefit und entscheiden freiwillig, ob sie das Angebot nutzen möchten.",
  },
  {
    number: "04",
    icon: UsersRound,
    title: "Persönliche Begleitung",
    text: "Teilnehmende Mitarbeiter werden von MeinBenefit persönlich betreut. Ihr Unternehmen bleibt entlastet und zahlt keine zusätzliche Kosten.",
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
          <h2 className="font-serif text-[31px] leading-[1.04] tracking-[-0.02em] text-[#17130D] sm:text-5xl lg:text-[54px]">
            So einfach wird MeinBenefit in Ihrem Unternehmen umgesetzt.
          </h2>

          <p className="mt-4 text-[13px] font-medium leading-6 text-[#4A453C] sm:text-base sm:leading-7">
            In vier simplen Schritten wird MeinBenefit in Ihr Unternehmen etabliert mit geringem Aufwand für Geschäftsführung und HR, persönlich begleitet für Ihre Mitarbeiter.
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
