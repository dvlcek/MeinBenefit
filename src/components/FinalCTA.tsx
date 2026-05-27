import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./ui/Button";

export function FinalCTA() {
  return (
    <section
      id="kontakt"
      className="bg-white px-5 pb-16 pt-2 text-white sm:px-6 lg:px-8 lg:pb-20"
    >
      <div className="relative mx-auto grid max-w-[1200px] overflow-hidden rounded-[32px] border border-[#214D40] bg-[#0D3A2D] shadow-[0_28px_90px_rgba(13,58,45,0.24)] lg:grid-cols-[0.38fr_0.62fr]">
        <div className="relative hidden min-h-[360px] lg:block">
          <Image
            src="/images/meinbenefit-gold-bars.png"
            alt="Goldbarren als MeinBenefit Mehrwert"
            fill
            sizes="460px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0D3A2D]/20 to-[#0D3A2D]" />
        </div>
        <div className="absolute bottom-[-34px] right-8 hidden font-serif text-[180px] font-bold leading-none text-white/[0.06] lg:block">
          MB
        </div>

        <div className="relative px-6 py-10 text-center sm:px-10 sm:py-14 lg:py-16 lg:text-left">
          <h2 className="font-serif text-3xl font-semibold leading-tight text-[#F7EFE1] sm:text-5xl">
            Bereit für weniger Papierkram und mehr Gold?
          </h2>
          <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-[#E7D7C4] lg:max-w-xl">
            Vorteile, die bleiben - für dich und deine Zukunft.
          </p>
          <ButtonLink href="mailto:office@meinbenefit.at" variant="secondary" size="lg" className="mt-8">
            Kostenlose Erstanalyse starten <ArrowRight size={18} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
