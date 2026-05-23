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
    <Section className="bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
        <div>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#17130D] sm:text-4xl">
            Mehr als ein Vergleich. Persönlich begleitet.
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#4A453C] sm:text-base">
            Mind Benefit verbindet persönliche Analyse, klare Empfehlungen und langfristige
            Begleitung, damit aus laufenden Ausgaben echte Vorteile entstehen.
          </p>
        </div>

        <div className="overflow-x-auto border border-[#D8C7A3]">
          <div className="min-w-[700px]">
            <div className="grid grid-cols-[1.45fr_0.8fr_0.8fr_0.9fr] border-b border-[#D8C7A3] bg-[#FBFAF7] text-xs font-bold uppercase tracking-[0.08em] text-[#4A453C]">
              <div className="px-5 py-4" />
              <div className="bg-[#073F2A] px-5 py-4 text-center text-[#F6E6B8]">Mind Benefit</div>
              <div className="px-5 py-4 text-center">Makler</div>
              <div className="px-5 py-4 text-center">Vergleichsportale</div>
            </div>
            {rows.map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-[1.45fr_0.8fr_0.8fr_0.9fr] border-b border-[#E6D8BA] last:border-b-0"
              >
                <div className="px-5 py-3 text-sm font-semibold text-[#2D271F]">{row[0]}</div>
                <Cell value={row[1]} highlight />
                <Cell value={row[2]} />
                <Cell value={row[3]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Cell({ value, highlight = false }: { value: string; highlight?: boolean }) {
  const Icon = value === "check" ? Check : Minus;

  return (
    <div
      className={`flex items-center justify-center px-5 py-3 ${
        highlight ? "bg-[#FBFAF7] text-[#B88420]" : "text-[#7A756B]"
      }`}
    >
      <Icon size={18} strokeWidth={2} />
    </div>
  );
}
