import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "../ui/Button";

const ctaImage = "/images/final-cta-business.webp";

export function FinalCTA() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-white py-10 sm:py-16 lg:py-20"
    >
      <div className="relative min-h-[300px] overflow-hidden border-y border-[#E7DCCB] bg-[#FBFAF7] sm:min-h-[360px]">
        {/* Right image */}
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <Image
            src={ctaImage}
            alt="Persönliche Beratung zu laufenden Verträgen"
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
          <div className="absolute inset-0 bg-white/88" />
        </div>

        {/* Ornament background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-28 -top-32 h-[520px] w-[520px] rounded-full border border-[#D8AA3F]/35" />
          <div className="absolute -left-20 -top-24 h-[420px] w-[420px] rounded-full border border-[#D8AA3F]/18" />

          <div className="absolute -right-20 top-[-170px] hidden h-[360px] w-[760px] rounded-[50%] border-t border-[#D8AA3F]/45 lg:block" />
          <div className="absolute right-[-120px] top-[-125px] hidden h-[310px] w-[720px] rounded-[50%] border-t border-[#0D3A2D]/25 lg:block" />

          <div className="absolute right-0 top-0 hidden h-full w-[42%] bg-[radial-gradient(circle_at_70%_20%,rgba(13,58,45,0.20),transparent_48%)] lg:block" />

          <div className="absolute bottom-0 left-0 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(216,170,63,0.55),transparent)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[300px] max-w-[1320px] items-center px-4 py-10 sm:min-h-[360px] sm:px-6 sm:py-12 lg:px-8">
          <div className="max-w-[590px]">
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#A7824E] sm:text-[10px] sm:tracking-[0.28em]">
              Mehr Klarheit gewinnen
            </p>

            <h2 className="mt-3 max-w-[560px] font-serif text-[32px] font-normal leading-[1.03] tracking-[-0.04em] text-[#17130D] sm:mt-4 sm:text-[50px] sm:tracking-[-0.045em] lg:text-[58px]">
              Finden Sie heraus, welche Möglichkeiten in Ihren laufenden
              Verträgen stecken.
            </h2>

            <p className="mt-4 max-w-[500px] text-[13px] font-medium leading-6 text-[#4A453C] sm:mt-5 sm:text-base sm:leading-8">
              Wir nehmen uns Zeit, schaffen gemeinsam einen Überblick und zeigen
              Ihnen, welche Möglichkeiten bestehen.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center">
              <ButtonLink
                href="/kontakt?type=b2c"
                size="lg"
                className="group w-full rounded-full bg-[#0D3A2D] px-7 text-[13px] text-white shadow-[0_16px_38px_rgba(13,58,45,0.22)] transition hover:bg-[#092A21] sm:w-auto sm:text-sm"
              >
                Termin vereinbaren
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-0.5"
                />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}