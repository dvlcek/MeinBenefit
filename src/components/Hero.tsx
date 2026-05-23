import Image from "next/image";
import { ArrowRight, BarChart3, LockKeyhole, ShieldCheck, UsersRound } from "lucide-react";
import { ButtonLink } from "./ui/Button";

const proofPoints = [
  { label: "Mehr Überblick", icon: ShieldCheck },
  { label: "Langfristiger Mehrwert", icon: BarChart3 },
  { label: "Persönliche Begleitung", icon: UsersRound },
  { label: "100% Vertraulich", icon: LockKeyhole },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#D8C7A3] bg-[#FBFAF7] px-5 pt-[112px] sm:px-6 lg:px-8"
    >
      <div className="absolute bottom-[74px] right-0 top-[72px] hidden w-[58%] lg:block">
        <Image
          src="/images/mind-benefit-hero-desk.png"
          alt="Premium Mind Benefit Beratungsmappe auf einem Schreibtisch"
          fill
          priority
          sizes="58vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#FBFAF7] via-[#FBFAF7]/88 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1180px]">
        <div className="grid min-h-[650px] items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="pb-12 lg:pb-24">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.36em] text-[#9A6418]">
              Die absolute Klarheit
            </p>
            <h1 className="max-w-2xl font-serif text-[42px] font-semibold leading-[1.03] text-[#17130D] sm:text-6xl lg:text-[68px]">
              Ein Vorteil für Menschen.
              <span className="block text-[#073F2A]">Vorteile, die bleiben.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#39352E] sm:text-lg">
              Mind Benefit unterstützt Berufstätige und Familien dabei, mehr Klarheit über
              laufende Kosten zu gewinnen, persönliche Potenziale sichtbar zu machen und
              langfristige Vorteile aufzubauen.
            </p>
            <ButtonLink href="#kontakt" size="lg" className="mt-7">
              Kostenlose Erstanalyse starten <ArrowRight size={18} />
            </ButtonLink>
          </div>

          <div className="relative mb-8 block aspect-[16/9] border border-[#D8C7A3] bg-white shadow-[0_22px_70px_rgba(17,18,15,0.12)] lg:hidden">
            <Image
              src="/images/mind-benefit-hero-desk.png"
              alt="Premium Mind Benefit Beratungsmappe auf einem Schreibtisch"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* <div className="grid border-t border-[#D8C7A3] bg-[#FBFAF7]/94 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 px-3 py-2">
                <Icon className="text-[#B88420]" size={22} strokeWidth={1.7} />
                <span className="text-sm font-semibold text-[#2D271F]">{item.label}</span>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
