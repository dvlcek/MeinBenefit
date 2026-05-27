import { Check, Minus } from "lucide-react";
import { Section } from "./ui/Section";

const rows = [
  ["Persönliche / individuelle Analyse", "check", "check", "minus"],
  ["Begleitung bei der Umsetzung", "check", "check", "minus"],
  ["Laufende Optimierung", "check", "check", "minus"],
  ["Premium Partnerschaft & Konditionen", "check", "minus", "minus"],
  ["Langfristiger persönlicher Mehrwert", "check", "minus", "minus"],
  ["Vorteile werden sichtbar und greifbar", "check", "minus", "check"],
];

export function ComparisonSection() {
  return (
    <Section className="bg-white" innerClassName="max-w-[1240px]">
      <div className="grid gap-9 lg:grid-cols-[0.24fr_0.76fr] lg:items-start">
        <div>
          <h2 className="font-serif text-3xl font-semibold leading-[1.08] text-[#17130D] sm:text-4xl">
            Mehr als ein Vergleich. Persönlich begleitet.
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#4A453C] sm:text-base">
            MeinBenefit verbindet persönliche Analyse, klare Empfehlungen und langfristige
            Begleitung, damit aus laufenden Ausgaben echte Vorteile entstehen.
          </p>
        </div>

        <div className="relative border border-[#D8C7A3] bg-white shadow-[0_18px_46px_rgba(17,18,15,0.06)]">
          <div className="pointer-events-none absolute inset-y-0 left-[38%] z-10 w-[22%] border-2 border-[#073F2A]" />
          <div className="pointer-events-none absolute inset-y-0 left-[78%] z-10 w-px bg-[#D8C7A3]" />
          <table className="w-full table-fixed border-separate border-spacing-0 text-[11px] sm:text-sm">
            <colgroup>
              <col className="w-[38%]" />
              <col className="w-[22%]" />
              <col className="w-[18%]" />
              <col className="w-[22%]" />
            </colgroup>
            <thead>
              <tr className="text-[9px] font-bold uppercase tracking-[0.04em] text-[#4A453C] sm:text-xs sm:tracking-[0.08em]">
                <th className="border-b border-[#D8C7A3] bg-white px-2 py-4 text-left font-bold sm:px-5" />
                <th className="border-b border-[#D8C7A3] bg-[#073F2A] px-2 py-4 text-center font-bold text-[#F6E6B8] sm:px-5">
                  <span className="block text-[10px] leading-tight sm:text-[13px]">MeinBenefit</span>
                  <span className="mt-1 hidden text-[10px] font-semibold tracking-[0.14em] text-[#EAC871] sm:block">
                    Beste Wahl
                  </span>
                </th>
                <th className="border-b border-r border-[#D8C7A3] bg-white px-2 py-4 text-center font-bold sm:px-5">
                  Makler
                </th>
                <th className="border-b border-[#D8C7A3] bg-white px-2 py-4 text-center font-bold sm:px-5">
                  Vergleichsportale
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]}>
                  <td className="h-[58px] border-b border-[#E6D8BA] bg-white px-2 py-3 align-middle font-semibold leading-5 text-[#2D271F] sm:px-5 sm:py-4 sm:leading-6">
                    {row[0]}
                  </td>
                  <Cell value={row[1]} highlight />
                  <Cell value={row[2]} />
                  <Cell value={row[3]} end />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

function Cell({
  value,
  highlight = false,
  end = false,
}: {
  value: string;
  highlight?: boolean;
  end?: boolean;
}) {
  const Icon = value === "check" ? Check : Minus;

  return (
    <td
      className={`h-[58px] px-2 py-3 text-center align-middle sm:px-5 ${
        highlight
          ? "border-b border-[#E6D8BA] bg-[#F5FAF6] text-[#073F2A]"
          : `border-b border-[#E6D8BA] bg-white text-[#7A756B] ${end ? "" : "border-r border-[#EEE2C9]"}`
      }`}
    >
      <span
        className={`mx-auto flex h-8 w-8 items-center justify-center border ${
          highlight
            ? "border-[#073F2A] bg-[#073F2A] text-[#F6E6B8]"
            : "border-transparent text-[#8A857A]"
        }`}
      >
        <Icon size={18} strokeWidth={highlight ? 2.6 : 2} />
      </span>
    </td>
  );
}
