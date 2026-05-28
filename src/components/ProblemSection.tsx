import { Section } from "./ui/Section";

const problems = [
  {
    label: "B2C",
    title: "Inflation frisst Reallöhne.",
    stats: [
      { value: "4,1 Mio.", label: "Berufstätige in Österreich" },
      { value: "Ø 180 €", label: "ungenutztes Sparpotential pro Monat" },
    ],
    text:
      "Versicherungen laufen seit Jahren ungeprüft. Strom- und Mobilfunktarife liegen über Marktpreis. Der Grund ist nicht zu wenig Geld - sondern Zeitmangel und Überforderung im Alltag.",
  },
  {
    label: "B2B",
    title: "Fachkräftemangel ohne Benefit-Budget.",
    stats: [
      { value: "95.000", label: "Kleinbetriebe in Österreich (2-19 MA)" },
      { value: "0 €", label: "Lohnnebenkosten beim MeinBenefit-Modell" },
    ],
    text:
      "Klassische Benefits wie Obstkorb oder Sodexo-Gutscheine wirken austauschbar. KMU haben kein Budget für Konzern-Benefit-Modelle - aber denselben Bindungs-Druck.",
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
            Inflation drückt private Haushalte - Fachkräftemangel drückt KMU.
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
          </article>
        ))}
      </div>

      <p className="mt-5 border border-[#D6B489] px-4 py-4 text-xs font-semibold leading-6 text-[#4A453C] sm:px-6 sm:text-sm">
        <span className="font-serif text-base font-semibold italic text-[#B99772] sm:text-lg">
          MeinBenefit
        </span>{" "}
        schließt beide Lücken gleichzeitig: Erst entlasten wir Berufstätige privat - dann
        werden zufriedene Mitarbeiter zur Eintrittskarte in Unternehmen.
      </p>
    </Section>
  );
}
