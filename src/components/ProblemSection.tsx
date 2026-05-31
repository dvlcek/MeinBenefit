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
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative">
          <div className="absolute -left-6 -top-5 h-[92%] w-[88%] rounded-[50%] border border-[#C8A96A]/70" />

          <img
            src="/images/b2b-problem.jpg"
            alt=""
            className="relative h-[300px] w-full rounded-l-[120px] object-cover sm:h-[360px]"
          />
        </div>

        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C8A96A]">
            Warum jetzt
          </p>

          <h2 className="mt-2 max-w-[620px] font-serif text-[34px] font-semibold leading-[1.03] text-[#1F1F1F] sm:text-[48px]">
            Zwei Seiten. Ein gemeinsames Problem. Eine Lösung.
          </h2>

          <p className="mt-4 max-w-[620px] text-sm font-medium leading-6 text-[#6F6F6F]">
            Viele laufende Kosten verändern sich mit der Zeit. Was früher gepasst
            hat, ist heute vielleicht nicht mehr die beste Lösung. MeinBenefit
            hilft dir, wieder Klarheit zu gewinnen.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={value}
                className="flex items-start gap-3 border-r border-[#D8C7AA] pr-5 last:border-r-0"
              >
                <Icon
                  size={20}
                  strokeWidth={1.6}
                  className="mt-1 shrink-0 text-[#C8A96A]"
                />

                <div>
                  <p className="font-serif text-[22px] font-semibold leading-none text-[#1F1F1F]">
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