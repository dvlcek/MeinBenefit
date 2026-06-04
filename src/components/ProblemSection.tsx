import Image from "next/image";
import { BarChart3, HeartHandshake } from "lucide-react";
import { Section } from "./ui/Section";

const insights = [
  {
    title: "Wie viele Ihrer Angebote werden aktiv genutzt?",
    text: "Benefits wirken nur dann, wenn Mitarbeiter den persönlichen Nutzen verstehen und das Angebot tatsächlich wahrnehmen.",
    icon: BarChart3,
  },
  {
    title: "Wird Ihre Wertschätzung wahrgenommen?",
    text: "Entscheidend ist nicht nur, dass ein Benefit existiert, sondern ob er für Mitarbeiter spürbar und langfristig relevant ist.",
    icon: HeartHandshake,
  },
];

export function ProblemSection() {
  return (
    <Section
      id="vorteile"
      className="bg-[#ffffff]"
      innerClassName="max-w-[1180px]"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative">
          <div className="absolute -left-3 -top-3 h-[86%] w-[84%] rounded-[50%] border border-[#C8A96A]/60 sm:-left-6 sm:-top-5 sm:h-[92%] sm:w-[88%]" />

          <Image
            src="/images/Hero2.webp"
            alt=""
            width={760}
            height={480}
            sizes="(max-width: 1023px) 100vw, 48vw"
            className="relative h-[220px] w-full rounded-l-[72px] object-cover shadow-[0_18px_42px_rgba(23,19,13,0.08)] sm:h-[360px] sm:rounded-l-[120px]"
            unoptimized
          />
        </div>

        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A] sm:text-[10px] sm:tracking-[0.24em]">
            VORTEILE MIT WIRKUNG
          </p>

          <h2 className="mt-2 max-w-[620px] font-serif text-[31px] leading-[1.04] text-[#1F1F1F] sm:text-[48px]">
            Was Sie anbieten, sollte auch wirklich ankommen.
          </h2>

          <p className="mt-4 max-w-[620px] text-[13px] font-normal leading-6 text-[#1F1F1F] sm:text-sm">
            Viele Unternehmen investieren bereits in Benefits. Doch entscheidend
            ist, ob Mitarbeiter den persönlichen Wert dahinter erkennen.
            MeinBenefit hilft dabei, diesen Vorteil spürbar und langfristig zu
            machen.
          </p>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
            {insights.map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="flex items-start gap-3 border-t border-[#E8DCCB] pt-4 sm:border-y-0 sm:border-l-0 sm:border-r sm:pt-0 sm:pr-5 sm:last:border-r-0"
              >
                <Icon
                  size={20}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-[#C8A96A]"
                />

                <div>
                  <p className="font-serif text-[18px] leading-6 text-[#1F1F1F] sm:text-[20px]">
                    {title}
                  </p>

                  <p className="mt-2 text-[11px] font-medium leading-[1.55] text-[#6F6F6F] sm:text-[12px]">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}