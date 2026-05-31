import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./ui/Button";

const ctaImage = "/images/final-cta-business.webp";

export function FinalCTA() {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-white py-16 lg:py-20">
      <div className="relative min-h-[360px] overflow-hidden border-y border-[#E7DCCB] bg-[#FBFAF7]">
        {/* Right image */}
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <Image
            src={ctaImage}
            alt="Modernes Unternehmen mit professioneller Beratung"
            fill
            sizes="58vw"
            className="object-cover object-center"
            unoptimized
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#FBFAF7_0%,rgba(251,250,247,0.88)_20%,rgba(251,250,247,0.34)_48%,rgba(251,250,247,0)_78%)]" />
        </div>

        {/* Mobile image wash */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src={ctaImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-[0.16]"
            unoptimized
          />
          <div className="absolute inset-0 bg-white/84" />
        </div>

        {/* Ornament background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Large gold curve left */}
          <div className="absolute -left-28 -top-32 h-[520px] w-[520px] rounded-full border border-[#D8AA3F]/35" />
          <div className="absolute -left-20 -top-24 h-[420px] w-[420px] rounded-full border border-[#D8AA3F]/18" />

          {/* Thin premium top curves */}
          <div className="absolute -right-20 top-[-170px] hidden h-[360px] w-[760px] rounded-[50%] border-t border-[#D8AA3F]/45 lg:block" />
          <div className="absolute right-[-120px] top-[-125px] hidden h-[310px] w-[720px] rounded-[50%] border-t border-[#0D3A2D]/25 lg:block" />

          {/* Soft green depth */}
          <div className="absolute right-0 top-0 hidden h-full w-[42%] bg-[radial-gradient(circle_at_70%_20%,rgba(13,58,45,0.20),transparent_48%)] lg:block" />

          {/* Bottom gold hairline */}
          <div className="absolute bottom-0 left-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(216,170,63,0.55),transparent)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[360px] max-w-[1320px] items-center px-5 py-12 sm:px-6 lg:px-8">
          <div className="max-w-[590px]">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A7824E]">
              Für Unternehmen
            </p>

            <h2 className="mt-4 max-w-[540px] font-serif text-[36px] font-normal leading-[1.02] tracking-[-0.045em] text-[#17130D] sm:text-[50px] lg:text-[58px]">
              Für Ihr Team prüfen
            </h2>

            <p className="mt-5 max-w-[500px] text-[15px] font-medium leading-7 text-[#4A453C] sm:text-base sm:leading-8">
              Wir zeigen Ihnen, wie MeinBenefit als moderner Mitarbeiter-Benefit
              in Ihrem Unternehmen eingesetzt werden kann.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href="/kontakt?type=b2b"
                size="lg"
                className="group w-full rounded-full bg-[#0D3A2D] px-7 text-white shadow-[0_16px_38px_rgba(13,58,45,0.22)] transition hover:bg-[#092A21] sm:w-auto"
              >
                Für Ihr Team prüfen
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-0.5"
                />
              </ButtonLink>

              {/* Optional second button for later */}
              {/*
              <ButtonLink
                href="#preise"
                size="lg"
                variant="secondary"
                className="w-full rounded-full border border-[#E2D5C0] bg-white/80 text-[#17130D] hover:bg-white sm:w-auto"
              >
                Preise ansehen
              </ButtonLink>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}