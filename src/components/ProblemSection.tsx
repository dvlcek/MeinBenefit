import Image from "next/image";
import { Building2, UsersRound } from "lucide-react";
import { Section } from "./ui/Section";

const stats = [
  { value: "99,7%", label: "der Unternehmen in Österreich sind KMU", icon: Building2 },
  {
    value: "78%",
    label: "der Unternehmen sind vom Arbeits- und Fachkräftemangel betroffen",
    icon: UsersRound,
  },
];

export function ProblemSection() {
  return (
    <Section
      id="vorteile"
      className="bg-[#ffffff]"
      // className="bg-[#FAF8F3]" 
      innerClassName="max-w-[1180px]"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative">
          <div className="absolute -left-3 -top-3 h-[86%] w-[84%] rounded-[50%] border border-[#C8A96A]/60 sm:-left-6 sm:-top-5 sm:h-[92%] sm:w-[88%]" />

          <Image
            src="/images/b2b-problem.jpg"
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
            Warum jetzt
          </p>

          <h2 className="mt-2 max-w-[620px] font-serif text-[31px] font-semibold leading-[1.04] text-[#1F1F1F] sm:text-[48px]">
            Zwei Seiten. Ein gemeinsames Problem. Eine Lösung.
          </h2>

          <p className="mt-4 max-w-[620px] text-[13px] font-medium leading-6 text-[#6F6F6F] sm:text-sm">
            Viele laufende Kosten verändern sich mit der Zeit. Was früher gepasst
            hat, ist heute vielleicht nicht mehr die beste Lösung. MeinBenefit
            hilft dir, wieder Klarheit zu gewinnen.
          </p>

          <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={value}
                className="flex items-start gap-3 border-t border-[#E8DCCB] pt-4 sm:border-y-0 sm:border-l-0 sm:border-r sm:pt-0 sm:pr-5 sm:last:border-r-0"
              >
                <Icon
                  size={20}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-[#C8A96A]"
                />

                <div>
                  <p className="font-serif text-[21px] font-semibold leading-none text-[#1F1F1F] sm:text-[22px]">
                    {value}
                  </p>
                  <p className="mt-1 text-[10px] font-medium leading-4 text-[#6F6F6F]">
                    {label}
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
