import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./ui/Button";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-white px-4 pb-10 pt-[96px] sm:px-6 lg:px-8 lg:pb-16"
    >
      <div className="relative mx-auto min-h-[680px] max-w-[1320px] overflow-hidden rounded-[30px] border border-[#E6D8C6] bg-[#11120F] shadow-[0_26px_90px_rgba(23,19,13,0.16)] sm:min-h-[720px] lg:min-h-[820px] lg:rounded-[38px]">
        <Image
          src="/images/Hero.webp"
          alt="Premium MeinBenefit Beratungsmappe auf einem Schreibtisch"
          fill
          priority
          sizes="(min-width: 1440px) 1320px, calc(100vw - 32px)"
          className="object-cover object-[64%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050504]/92 via-[#050504]/24 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050504]/64 via-[#050504]/10 to-transparent" />

        <div className="relative z-10 flex min-h-[680px] items-end px-6 py-8 sm:min-h-[720px] sm:px-10 sm:py-10 lg:min-h-[820px] lg:px-16 lg:py-14">
          <div className="max-w-4xl">
            <p className="mb-5 max-w-[220px] text-[9px] font-bold uppercase leading-5 tracking-[0.18em] text-[#D6B489] sm:max-w-none sm:text-xs sm:tracking-[0.34em]">
              Die absolute Klarheit vorteile, die Bleiben.
            </p>
            <h1 className="max-w-4xl font-serif text-[44px] font-semibold leading-[0.98] text-white sm:text-6xl lg:text-[76px]">
              Ein Vorteil für Menschen.  <br />
              <span className="block text-[#E7D7C4]">Ein Benefit für Unternehmen.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/74 sm:text-lg">
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
