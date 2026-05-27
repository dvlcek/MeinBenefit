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
      <div className="grid gap-9 lg:grid-cols-[0.28fr_0.72fr] lg:items-start">
        <div>
          <h2 className="font-serif text-3xl font-semibold leading-[1.08] text-[#17130D] sm:text-4xl lg:text-[44px]">
            Mehr als ein Vergleich. Persönlich begleitet.
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#4A453C] sm:text-base">
            MeinBenefit verbindet persönliche Analyse, klare Empfehlungen und langfristige
            Begleitung, damit aus laufenden Ausgaben echte Vorteile entstehen.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-[#E6D8C6] bg-white shadow-[0_24px_70px_rgba(23,19,13,0.075)]">
          <div className="pointer-events-none absolute inset-y-0 left-[38%] z-10 w-[22%] border-x border-[#0D3A2D]/40" />
          <div className="pointer-events-none absolute inset-y-0 left-[78%] z-10 w-px bg-[#E6D8C6]" />
          <table className="w-full table-fixed border-separate border-spacing-0 text-[11px] sm:text-sm">
            <colgroup>
              <col className="w-[38%]" />
              <col className="w-[22%]" />
              <col className="w-[18%]" />
              <col className="w-[22%]" />
            </colgroup>
            <thead>
              <tr className="text-[9px] font-bold uppercase tracking-[0.04em] text-[#4A453C] sm:text-xs sm:tracking-[0.08em]">
                <th className="border-b border-[#E6D8C6] bg-white px-2 py-5 text-left font-bold sm:px-5" />
                <th className="border-b border-[#0D3A2D] bg-[#0D3A2D] px-2 py-5 text-center font-bold text-[#E7D7C4] sm:px-5">
                  <span className="block text-[10px] leading-tight sm:text-[13px]">MeinBenefit</span>
                  <span className="mt-1 hidden text-[10px] font-semibold tracking-[0.14em] text-[#D6B489] sm:block">
                    Beste Wahl
                  </span>
                </th>
                <th className="border-b border-r border-[#E6D8C6] bg-white px-2 py-5 text-center font-bold sm:px-5">
                  Makler
                </th>
                <th className="border-b border-[#E6D8C6] bg-white px-2 py-5 text-center font-bold sm:px-5">
                  Vergleichsportale
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]}>
                  <td className="h-[58px] border-b border-[#EFE5D7] bg-white px-2 py-3 align-middle font-semibold leading-5 text-[#2D271F] sm:px-5 sm:py-4 sm:leading-6">
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
          ? "border-b border-[#214D40] bg-[#0D3A2D] text-[#E7D7C4]"
          : `border-b border-[#EFE5D7] bg-white text-[#7A756B] ${end ? "" : "border-r border-[#EEE2C9]"}`
      }`}
    >
      <span
        className={`mx-auto flex h-8 w-8 items-center justify-center border ${
          highlight
            ? "rounded-full border-[#D6B489]/40 bg-white/8 text-[#D6B489]"
            : "border-transparent text-[#8A857A]"
        }`}
      >
        <Icon size={18} strokeWidth={highlight ? 2.6 : 2} />
      </span>
    </td>
  );
}
