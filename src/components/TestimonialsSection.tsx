import { Star } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";

const testimonials = [
  "Endlich Klarheit über meine laufenden Kosten.",
  "Ein Benefit, der für Mitarbeiter wirklich greifbar ist.",
  "Professionell, persönlich und verständlich.",
];

export function TestimonialsSection() {
  return (
    <Section className="bg-[#F7F3EA]">
      <SectionHeading title="Vertrauen, das bleibt" />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((quote) => (
          <figure
            key={quote}
            className="rounded-[28px] border border-[#003D2B]/10 bg-white p-8 shadow-[0_18px_54px_rgba(5,5,5,0.06)]"
          >
            <div className="mb-8 flex gap-1 text-[#D4AF37]" aria-label="5 von 5 Sternen">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} size={18} fill="currentColor" />
              ))}
            </div>
            <blockquote className="font-serif text-2xl leading-snug text-[#0B0B0A]">
              “{quote}”
            </blockquote>
          </figure>
        ))}
      </div>
      <div className="mt-8 rounded-[28px] border border-[#D4AF37]/35 bg-[#0B0B0A] p-7 text-center text-[#F5E7C1]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
          Trustpilot / Bewertung
        </p>
        <p className="mt-3 font-serif text-3xl">Premium Service. Persönlich geprüft.</p>
      </div>
    </Section>
  );
}
