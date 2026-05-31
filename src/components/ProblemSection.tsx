import { ArrowRight } from "lucide-react";
import { Section } from "./ui/Section";

const problems = [
  {
    label: "B2C",
    title: "Inflation frisst Reallöhne.",
    stats: [
      {
        value: "4.170 €",
        label: "im Durchschnitt 4.170 € monatliche Haushaltsausgaben",
      },
      { value: "3,6%", label: "Inflation 2025" },
    ],
    text: "Verträge laufen seit Jahren Versicherungen und Verträge ligen über dem Marktpreis, Der Grund ist nicht zu wenig Lohn sondern Zeitmangel und Überforderung im Alltag.",
    button: {
      label: "Kostenlose Erstberatung starten",
      href: "/kontakt?type=b2c",
    },
  },
  {
    label: "B2B",
    title: "Fachkräftemangel ohne Benefit-Budget.",
    stats: [
      { value: "99,7%", label: "der Unternehmen in Österreich sind KMU" },
      {
        value: "78%",
        label:
          "der Unternehmen sind vom Arbeits- und Fachkräftemangel betroffen",
      },
    ],
    text: "Sie ermöglichen Ihren Mitarbeiter:innen Zugang zu einem persönlichen Benefit-Service, der im Alltag relevant ist und Ihre Arbeitgeberattraktivität stärkt.",
    button: {
      label: "Kostenlose Erstberatung starten",
      href: "/kontakt?type=b2b",
    },
  },
];

export function ProblemSection() {
  return (
    <Section id="vorteile" className="bg-white" innerClassName="max-w-[1180px]">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#B99772]">
          Warum jetzt
        </p>
        <h2 className="mt-2 max-w-4xl font-serif text-3xl font-semibold leading-[1.04] text-[#17130D] sm:text-5xl">
          Zwei Seiten. Ein gemeinsames Problem. Eine Lösung.
        </h2>
        <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-[#6B6258] sm:text-base">
          Viele laufende Kosten verändern sich mit der Zeit. Was früher gepasst
          hat, ist heute vielleicht nicht mehr die beste Lösung. MeinBenefit
          hilft dir, wieder Klarheit zu gewinnen.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-5 lg:gap-7">
        {problems.map((problem) => (
          <article
            key={problem.label}
            className="border-t-2 border-[#B99772] bg-[#FBFAF8] px-3 py-4 sm:px-6 sm:py-7 lg:px-8 lg:py-9"
          >
            <span className="inline-flex border border-[#E2CFAE] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#B99772] sm:px-3 sm:text-[10px]">
              {problem.label}
            </span>
            <h3 className="mt-5 font-serif text-[17px] font-semibold italic leading-tight text-[#0D3A2D] sm:text-3xl">
              {problem.title}
            </h3>
            <div className="mt-5 h-px w-10 bg-[#D6B489]" />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {problem.stats.map((stat) => (
                <div key={stat.value}>
                  <p className="font-serif text-[22px] font-semibold italic leading-none text-[#B99772] sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[9px] font-bold leading-3 text-[#6B6258] sm:text-xs sm:leading-4">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[10px] font-semibold leading-5 text-[#4A453C] sm:text-sm sm:leading-7">
              {problem.text}
            </p>
            <a
              href={problem.button.href}
              className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold text-[#0D3A2D] border border-[#0D3A2D] px-4 py-2 hover:bg-[#0D3A2D] hover:text-white sm:text-sm"
            >
              {problem.button.label} <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </article>
        ))}
      </div>

      <p className="mt-5 border border-[#D6B489] px-4 py-4 text-xs font-semibold leading-6 text-[#4A453C] sm:px-6 sm:text-sm">
        <span className="font-serif text-base font-semibold italic text-[#B99772] sm:text-lg">
          MeinBenefit
        </span>{" "}
        verbindet persönliche Entlastung für Menschen mit einem modernen Benefit
        für Unternehmen.
      </p>
    </Section>
  );
}
