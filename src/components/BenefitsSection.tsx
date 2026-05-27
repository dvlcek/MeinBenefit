import { Gem, Handshake, ScanSearch } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";

const benefits = [
  {
    icon: ScanSearch,
    title: "Persönliche Analyse",
    text: "Deine laufenden Ausgaben, Verträge und Potenziale werden verständlich und individuell sichtbar.",
  },
  {
    icon: Gem,
    title: "Laufende Optimierung",
    text: "MeinBenefit bleibt an deiner Seite und prüft regelmäßig, ob bessere Konditionen möglich sind.",
  },
  {
    icon: Handshake,
    title: "Premium Partnerschaft mit echtem Mehrwert",
    text: "Ein klarer Service, der Entlastung im Alltag mit greifbaren langfristigen Vorteilen verbindet.",
  },
];

export function BenefitsSection() {
  return (
    <Section id="vorteile" className="bg-[#F7F3EA]">
      <SectionHeading
        title="Vorteile, die bleiben — für dich oder dein Unternehmen."
        subtitle="MeinBenefit unterstützt Berufstätige, Familien und Unternehmen dabei, mehr Klarheit, mehr Spielraum und langfristige Vorteile aufzubauen."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <article
              key={benefit.title}
              className="rounded-[28px] border border-[#003D2B]/10 bg-white p-7 shadow-[0_22px_60px_rgba(5,5,5,0.07)] transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-9 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#006039] text-[#F5E7C1]">
                <Icon size={25} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#0B0B0A]">{benefit.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5E5A51]">{benefit.text}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
