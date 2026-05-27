import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./ui/Button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#D8C7A3] bg-white px-5 pt-[112px] sm:px-6 lg:px-8"
    >
      <div className="absolute inset-x-0 bottom-0 top-[74px] hidden lg:block">
        <div className="relative mx-auto h-full max-w-[1200px]">
          <Image
            src="/images/Hero.webp"
            alt="Premium MeinBenefit Beratungsmappe auf einem Schreibtisch"
            fill
            priority
            sizes="1200px"
            className="object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 w-[56%] bg-gradient-to-r from-white via-white/86 to-transparent" />
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid min-h-[640px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 pb-12 lg:pb-20">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.36em] text-[#9A6418]">
              Die absolute Klarheit vorteile, die Bleiben.
            </p>
            <h1 className="max-w-2xl font-serif text-[42px] font-semibold leading-[1.03] text-[#17130D] sm:text-6xl lg:text-[66px]">
              Ein Vorteil für Menschen.  <br />
              <span className="block text-[#073F2A]">Ein Benefit für Unternehmen.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#39352E] sm:text-lg">
              Für Menschen bedeutet MeinBenefit mehr Klarheit, persönliche Begleitung und Vorteile, die bleiben. Für Unternehmen entsteht daraus ein Benefit, der Wertschätzung sichtbar macht.
            </p>
            <ButtonLink href="#kontakt" size="lg" className="mt-7">
              Genug Geld verschenkt. Zeit für Vorteile, die bleiben. <ArrowRight size={18} />
            </ButtonLink>
          </div>

          <div className="relative mb-8 block aspect-[16/9] bg-white lg:hidden">
            <Image
              src="/images/Hero.webp"
              alt="Premium MeinBenefit Beratungsmappe auf einem Schreibtisch"
              fill
              priority
              sizes="calc(100vw - 40px)"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
