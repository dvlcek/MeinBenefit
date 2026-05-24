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
      <div className="grid overflow-hidden border border-[#D8C7A3] bg-white shadow-[0_22px_70px_rgba(17,18,15,0.08)] lg:grid-cols-[0.74fr_1fr]">
        <div className="relative min-h-[280px] border-b border-[#D8C7A3] lg:border-b-0 lg:border-r">
          <Image
            src="/images/mind-benefit-family-consultation.png"
            alt="Familie bei einer persönlichen Mind Benefit Beratung"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="p-7 sm:p-10 lg:p-12">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#17130D] sm:text-4xl">
            Zwei Seiten. Ein gemeinsames Problem. Eine Lösung.
          </h2>
          <p className="mt-2 font-serif text-2xl text-[#073F2A]">Für Berufstätige & Familien</p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#4A453C] sm:text-base">
            Viele laufende Kosten verändern sich mit der Zeit. Was früher gepasst hat, ist
            heute vielleicht nicht mehr die beste Lösung. Mind Benefit hilft dir, deine Finanzen
            zu optimieren und Potenziale freizusetzen.
          </p>

          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 text-sm font-semibold text-[#2D271F]">
                <CheckCircle2 className="shrink-0 text-[#B88420]" size={19} strokeWidth={1.8} />
                {bullet}
              </li>
            ))}
          </ul>

          <p className="mt-8 border-t border-[#CDB98A] pt-5 text-sm font-semibold leading-7 text-[#17130D]">
            Mit Mind Benefit mehr Klarheit gewinnen, Potenziale nutzen und langfristige Vorteile
            aufbauen.
          </p>
        </div>
      </div>
    </Section>
  );
}
