import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./ui/Button";

export function FinalCTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-y border-[#C99A38]/45 bg-[#073F2A] px-5 py-14 text-center text-white sm:px-6 lg:px-8"
    >
      <div className="absolute bottom-0 left-0 top-0 hidden w-[260px] lg:block">
        <Image
          src="/images/meinbenefit-gold-bars.png"
          alt="Goldbarren als MeinBenefit Mehrwert"
          fill
          sizes="260px"
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#073F2A]/25 to-[#073F2A]" />
      </div>
      <div className="absolute bottom-[-34px] right-8 hidden font-serif text-[180px] font-bold leading-none text-white/[0.08] lg:block">
        MB
      </div>

      <div className="relative mx-auto max-w-4xl">
        <h2 className="font-serif text-3xl font-semibold leading-tight text-[#F7EFE1] sm:text-5xl">
          Bereit für weniger Papierkram und mehr Gold?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base font-semibold text-[#F6E6B8]">
          Vorteile, die bleiben - für dich und deine Zukunft.
        </p>
        <ButtonLink href="mailto:office@meinbenefit.at" variant="secondary" size="lg" className="mt-7">
          Kostenlose Erstanalyse starten <ArrowRight size={18} />
        </ButtonLink>
      </div>
    </section>
  );
}
