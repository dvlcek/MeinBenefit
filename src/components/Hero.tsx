import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./ui/Button";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-white px-4 pb-14 pt-[96px] sm:px-6 lg:px-8 lg:pb-20"
    >
      <div className="relative mx-auto min-h-[660px] max-w-[1320px] overflow-hidden rounded-[22px] bg-[#11120F] shadow-[0_22px_80px_rgba(23,19,13,0.12)] sm:min-h-[720px] lg:min-h-[800px] lg:rounded-[28px]">
        <Image
          src="/images/Hero.webp"
          alt="Premium MeinBenefit Beratungsmappe auf einem Schreibtisch"
          fill
          priority
          sizes="(min-width: 1440px) 1320px, calc(100vw - 32px)"
          className="object-cover object-[66%_center]"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050504]/76 via-[#050504]/16 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050504]/78 via-[#050504]/30 to-transparent" />

        <div className="relative z-10 flex min-h-[660px] items-end px-6 py-8 sm:min-h-[720px] sm:px-10 sm:py-10 lg:min-h-[800px] lg:px-16 lg:py-14">
          <div className="min-w-0 max-w-full sm:max-w-4xl">
            <p className="mb-5 max-w-[220px] text-[9px] font-bold uppercase leading-5 tracking-[0.18em] text-[#D6B489] sm:max-w-none sm:text-xs sm:tracking-[0.34em]">
              Die absolute Klarheit vorteile, die Bleiben.
            </p>
            <h1 className="max-w-full font-serif text-[40px] font-semibold leading-[1.02] text-white sm:text-6xl lg:max-w-4xl lg:text-[76px]">
              Ein Vorteil für Menschen.  <br />
              <span className="block text-[#E7D7C4]">Ein Benefit für Unternehmen.</span>
            </h1>
            <p className="mt-6 max-w-full text-base font-medium leading-8 text-white/78 sm:max-w-2xl sm:text-lg">
              Für Menschen bedeutet MeinBenefit mehr Klarheit, persönliche Begleitung und Vorteile, die bleiben. Für Unternehmen entsteht daraus ein Benefit, der Wertschätzung sichtbar macht.
            </p>
            <div className="mt-8 flex">
              <ButtonLink
                href="#kontakt"
                variant="secondary"
                size="lg"
                className="w-full max-w-[330px] whitespace-normal px-5 text-center leading-5 sm:w-auto sm:max-w-none sm:px-8"
              >
                Genug Geld verschenkt. Zeit für Vorteile, die bleiben. <ArrowRight size={18} />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
