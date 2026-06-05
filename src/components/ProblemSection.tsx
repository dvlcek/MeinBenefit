import Image from "next/image";
import { BarChart3, HeartHandshake, UsersRound } from "lucide-react";
import { Section } from "./ui/Section";

const insights = [
  {
    value: "01",
    title: "Wird Ihr Benefit aktiv genutzt?",
    text: "Ein Angebot entfaltet erst dann Wirkung, wenn Mitarbeiter den persönlichen Nutzen verstehen und es tatsächlich wahrnehmen.",
    icon: BarChart3,
  },
  {
    value: "02",
    title: "Kommt Ihre Wertschätzung wirklich an?",
    text: "Mitarbeiter sollen nicht nur sehen, dass es einen Benefit gibt, sondern erkennen, welchen konkreten Wert er für sie haben kann.",
    icon: HeartHandshake,
  },
  {
    value: "03",
    title: "Bleibt der Aufwand für Ihr Unternehmen gering?",
    text: "MeinBenefit begleitet den Ablauf persönlich, damit Geschäftsführung und HR entlastet bleiben.",
    icon: UsersRound,
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
            Vorteile mit Wirkung
          </p>

          <h2 className="mt-2 max-w-[680px] font-serif text-[31px] leading-[1.04] text-[#1F1F1F] sm:text-[48px]">
            Viele Benefits werden angeboten. Entscheidend ist, ob sie auch
            ankommen.
          </h2>

          <p className="mt-5 max-w-[650px] text-[13px] font-normal leading-6 text-[#1F1F1F] sm:text-sm sm:leading-7">
            Viele Unternehmen investieren bereits in Mitarbeiterbenefits, um
            Wertschätzung zu zeigen und als Arbeitgeber attraktiv zu bleiben.
            Doch oft bleibt unklar, ob Mitarbeiter den persönlichen Nutzen
            wirklich erkennen.
            <br />
            <br />
            MeinBenefit hilft dabei, diesen Vorteil verständlich, spürbar und
            langfristig relevant zu machen.
          </p>
        </div>
      </div>

      {/* Insight questions */}
      <div className="mt-10 border-y border-[#E8DCCB] py-6 sm:mt-14 sm:py-8">
        <div className="grid gap-6 sm:grid-cols-3 sm:gap-0">
          {insights.map(({ value, title, text, icon: Icon }) => (
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
    </Section>
  );
}