import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Section } from "./ui/Section";

const bullets = [
  "Inflation frisst Rendite",
  "Laufende Kosten steigen",
  "Verträge werden selten optimiert",
  "Zu wenig Überblick über Potenziale",
];

export function ProblemSection() {
  return (
    <Section id="vorteile" className="bg-white">
      <div className="grid items-center gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12">
        <div className="order-2 lg:order-1">
          <h2 className="font-serif text-3xl font-semibold leading-[1.08] text-[#17130D] sm:text-4xl">
            Zwei Seiten. Ein gemeinsames Problem. Eine Lösung.
          </h2>
          <p className="mt-3 font-serif text-2xl text-[#0D3A2D]">Für Berufstätige & Familien</p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#4A453C] sm:text-base">
            Viele laufende Kosten verändern sich mit der Zeit. Was früher gepasst hat, ist
            heute vielleicht nicht mehr die beste Lösung. MeinBenefit hilft dir, deine Finanzen
            zu optimieren und Potenziale freizusetzen.
          </p>

          <ul className="mt-9 grid gap-4 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-center gap-3 rounded-full border border-[#E6D8C6] bg-white px-4 py-3 text-sm font-semibold text-[#2D271F] shadow-[0_10px_28px_rgba(23,19,13,0.035)]"
              >
                <CheckCircle2 className="shrink-0 text-[#B99772]" size={19} strokeWidth={1.8} />
                {bullet}
              </li>
            ))}
          </ul>

          <p className="mt-9 rounded-[24px] border border-[#E6D8C6] bg-[#FBFAF8] px-5 py-4 text-sm font-semibold leading-7 text-[#17130D]">
            Mit MeinBenefit mehr Klarheit gewinnen, Potenziale nutzen und langfristige Vorteile
            aufbauen.
          </p>
        </div>

        <div className="relative order-1 min-h-[360px] overflow-hidden rounded-[32px] border border-[#E6D8C6] bg-[#F8F3EC] shadow-[0_24px_70px_rgba(23,19,13,0.10)] lg:order-2 lg:min-h-[520px]">
          <Image
            src="/images/meinbenefit-family-consultation.png"
            alt="Familie bei einer persönlichen MeinBenefit Beratung"
            fill
            sizes="(min-width: 1024px) 48vw, calc(100vw - 40px)"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#17130D]/38 to-transparent" />
        </div>
      </div>
    </Section>
  );
}
