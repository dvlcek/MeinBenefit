import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./ui/Button";

export function FinalCTA() {
  return (
    <section
      id="kontakt"
      className=" px-5 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2">
        <div className="rounded-[28px] border border-[#E6D8C6] bg-white p-8 shadow-[0_18px_50px_rgba(23,19,13,0.08)]">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E7E0D3] text-[#0D3A2D]">
            <span className="text-lg font-bold">👤</span>
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#B99772]">
            Für Berufstätige
          </p>
          <h3 className="mt-4 font-serif text-3xl font-semibold text-[#17130D]">
            Persönlich starten
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#4A453C]">
            Wir prüfen deine aktuelle Situation und zeigen dir, welche
            persönlichen Potenziale möglich sind.
          </p>
          <ButtonLink
            href="/kontakt?type=b2c"
            variant="secondary"
            size="lg"
            className="mt-8 w-full border border-[#B99772] bg-[#F5E7CB] text-[#17130D] hover:bg-[#E9D3A8]"
          >
            Erstgespräch buchen
            <ArrowRight size={18} />
          </ButtonLink>
        </div>

        <div className="rounded-[28px] border border-[#0D3A2D] bg-white p-8 shadow-[0_18px_50px_rgba(23,19,13,0.08)]">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E6F1E9] text-[#0D3A2D]">
            <span className="text-lg font-bold">🏢</span>
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#0D3A2D]">
            Für Unternehmen
          </p>
          <h3 className="mt-4 font-serif text-3xl font-semibold text-[#17130D]">
            Für Ihr Team prüfen
          </h3>
          <p className="mt-4 text-sm leading-7 text-[#4A453C]">
            Wir zeigen Ihnen, wie MeinBenefit als moderner Mitarbeiter-Benefit
            in Ihrem Unternehmen eingesetzt werden kann.
          </p>
          <ButtonLink
            href="/kontakt?type=b2b"
            size="lg"
            className="mt-8 w-full bg-[#0D3A2D] text-white hover:bg-[#164f3e]"
          >
            Für Ihr Team prüfen
            <ArrowRight size={18} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
