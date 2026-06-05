import Image from "next/image";
import { Home, TrendingUp, WalletCards } from "lucide-react";
import { Section } from "../ui/Section";

const insights = [
  {
    value: "4.170 €",
    title: "monatliche Ausgaben",
    text: "So viel geben private Haushalte in Österreich durchschnittlich pro Monat aus.",
    icon: WalletCards,
  },
  {
    value: "1.100 €",
    title: "für Wohnen & Energie",
    text: "Der größte Ausgabenblock betrifft laufende Kosten rund um Wohnen und Energie.",
    icon: Home,
  },
  {
    value: "+31,4 %",
    title: "bei Versicherungen",
    text: "Im Vergleich zu 2019/20 sind diese Ausgaben von 150 € auf 197 € gestiegen.",
    icon: TrendingUp,
  },
];

export function ProblemSection() {
  return (
    <Section
      id="vorteile"
      className="bg-white"
      innerClassName="max-w-[1240px]"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        {/* Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[34px] bg-[#F7F3EC] shadow-[0_22px_58px_rgba(23,19,13,0.08)] sm:rounded-[44px]">
            <Image
              src="/images/Hero2.webp"
              alt=""
              width={760}
              height={520}
              sizes="(max-width: 1023px) 100vw, 48vw"
              className="h-[230px] w-full object-cover object-center sm:h-[390px]"
              unoptimized
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,6,0.02)_0%,rgba(7,8,6,0.08)_100%)]" />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A] sm:text-[10px] sm:tracking-[0.24em]">
            Warum ein Check sinnvoll ist
          </p>

          <h2 className="mt-2 max-w-[680px] font-serif text-[31px] leading-[1.04] text-[#1F1F1F] sm:text-[48px]">
            Ihre Verträge laufen jeden Monat weiter. Aber passen sie noch zu
            Ihrem Leben?
          </h2>

          <p className="mt-5 max-w-[650px] text-[13px] font-normal leading-6 text-[#1F1F1F] sm:text-sm sm:leading-7">
            Private Haushalte in Österreich geben durchschnittlich rund 4.170 €
            pro Monat aus. Ein großer Teil davon entfällt auf laufende Bereiche
            wie Wohnen, Energie, Versicherungen, Finanzdienstleistungen und
            Kommunikation. Viele dieser Verträge werden einmal abgeschlossen und
            jahrelang nicht mehr geprüft.
            <br />
            <br />
            MeinBenefit hilft Ihnen dabei, wieder Überblick zu gewinnen und
            mögliche Vorteile zu erkennen.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-10 border-y border-[#E8DCCB] py-6 sm:mt-14 sm:py-8">
        <div className="grid gap-6 sm:grid-cols-3 sm:gap-0">
          {insights.map(({ value, title, text, icon: Icon }, index) => (
            <div
              key={title}
              className="flex gap-4 border-t border-[#E8DCCB] pt-5 first:border-t-0 first:pt-0 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8 sm:pr-8 sm:first:border-l-0 sm:first:pl-0 sm:last:pr-0"
            >
              <Icon
                size={20}
                strokeWidth={1.6}
                className="mt-1 shrink-0 text-[#C8A96A]"
              />

              <div>
                <p className="font-serif text-[32px] leading-none tracking-[-0.04em] text-[#0D3A2D] sm:text-[40px]">
                  {value}
                </p>

                <p className="mt-2 text-[13px] font-semibold leading-5 text-[#1F1F1F] sm:text-[14px]">
                  {title}
                </p>

                <p className="mt-2 max-w-[280px] text-[11px] font-medium leading-[1.6] text-[#6F6F6F] sm:text-[12px]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-[10px] font-medium leading-5 text-[#8B8174] sm:text-[11px]">
        Quelle: Statistik Austria, Konsumerhebung. Angaben gerundet.
      </p>
    </Section>
  );
}