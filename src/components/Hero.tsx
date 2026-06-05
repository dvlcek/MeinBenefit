import { ArrowRight, CheckCircle2, Clock3, Sparkles } from "lucide-react";

const proofItems = [
  {
    value: "Wertschätzender Arbeitgeber",
    label: "Ein Benefit, der bei Mitarbeitern ankommt",
    icon: Sparkles,
  },
  {
    value: "0€ Kosten",
    label: "Für Ihr Unternehmen",
    icon: CheckCircle2,
  },
  {
    value: "Geringer HR Aufwand",
    label: "MeinBenefit begleitet den Ablauf",
    icon: Clock3,
  },
  
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-white px-4 pt-[68px] sm:min-h-[100svh] sm:px-6 sm:pt-[82px] lg:px-8"
    >
      <style>
        {`
          @keyframes proofStripRise {
            from {
              opacity: 0;
              transform: translate3d(0, 34px, 0);
            }

            to {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          .hero-proof-strip {
            animation: proofStripRise 900ms cubic-bezier(0.22, 1, 0.36, 1) 420ms both;
            will-change: transform, opacity;
          }

          .hero-proof-strip * {
            animation: none !important;
            transition: none !important;
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-proof-strip {
              animation: none;
              opacity: 1;
              transform: none;
            }
          }
        `}
      </style>

      <div className="absolute inset-0 -z-30">
        <video
          className="h-full w-full object-cover object-center opacity-[0.9] saturate-[0.82] contrast-110"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/Hero2.webp"
          aria-hidden="true"
        >
          <source src="/images/HERO.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main video overlay */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(7,8,6,0.9)_0%,rgba(7,8,6,0.68)_42%,rgba(7,8,6,0.32)_72%,rgba(7,8,6,0.7)_100%)] sm:bg-[linear-gradient(90deg,rgba(7,8,6,0.88)_0%,rgba(7,8,6,0.62)_36%,rgba(7,8,6,0.26)_64%,rgba(7,8,6,0.68)_100%)]" />

      {/* Soft bottom transition */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[220px] bg-[linear-gradient(180deg,rgba(7,8,6,0)_0%,rgba(7,8,6,0.08)_34%,rgba(7,8,6,0.2)_68%,rgba(7,8,6,0.3)_100%)] sm:h-[280px]" />

      <div className="mx-auto flex min-h-[calc(100svh-68px)] w-full max-w-[1320px] flex-col justify-end pb-0 pt-6 sm:min-h-[calc(100svh-82px)] sm:pt-12">
        <div className="grid w-full gap-8 pb-8 sm:pb-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(300px,0.32fr)] lg:items-end lg:pb-14">
          <div className="w-full max-w-[820px]">
            <h1 className="max-w-[350px] font-serif text-[36px] font-normal leading-[0.98] tracking-[.01em] text-[#FFF9EF] drop-shadow-[0_18px_34px_rgba(0,0,0,0.28)] sm:max-w-[680px] sm:text-[68px] sm:leading-[0.96] lg:text-[78px]">
              Ein Benefit, <br /> der Wertschätzung 
              <span className="block text-[#D8C49E]">
              sichtbar macht.
              </span>
            </h1>

            <p className="mt-5 max-w-[340px] text-[14px] font-medium leading-6 text-[#F3EADF]/[0.84] sm:mt-6 sm:max-w-[560px] sm:text-[17px] sm:leading-8">
              MeinBenefit ermöglicht Ihrem Unternehmen einen persönlichen Mitarbeiterbenefit, der Wertschätzung sichtbar macht, Arbeitgeberattraktivität stärkt und Ihre Mitarbeiter langfristig begleitet.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <a
                href="/kontakt?type=b2b"
                className="group inline-flex min-h-11 w-full max-w-[320px] items-center justify-center gap-3 rounded-full bg-[#D6B489] px-6 text-[13px] font-bold text-[#17130D] shadow-[0_18px_42px_rgba(0,0,0,0.28)] ring-1 ring-white/15 transition hover:bg-[#E1C39B] sm:min-h-12 sm:w-auto sm:max-w-none sm:px-8 sm:text-sm"
              >
                Für Unternehmen
                <ArrowRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="max-w-[330px] border-l border-white/[0.22] pl-6">
              <p className="font-serif text-[24px] leading-[1.05] text-[#FFF9EF]">
                Persönlich. Hochwertig. Einfach integrierbar.
              </p>
              <p className="mt-3 text-sm font-medium leading-6 text-[#F3EADF]/[0.68]">
                Ein Arbeitgeber-Benefit, der nicht im Alltag untergeht.
              </p>
            </div>
          </div>
        </div>

        {/* Glass proof strip */}
        <div className="hero-proof-strip relative z-10 rounded-t-[28px] bg-[rgba(7,8,6,0.3)] px-4 py-4 shadow-[0_-18px_52px_rgba(0,0,0,0.16)] ring-1 ring-white/10 backdrop-blur-md sm:rounded-t-[36px] sm:bg-[rgba(7,8,6,0.26)] sm:px-7 sm:py-6 lg:px-8">
          <div className="grid gap-0 sm:grid-cols-3">
            {proofItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.value}
                  className="flex items-start gap-3 border-t border-white/14 py-3 first:border-t-0 first:pt-0 last:pb-0 sm:border-t-0 sm:border-r sm:py-0 sm:pr-6 sm:last:border-r-0 sm:[&:not(:first-child)]:pl-6"
                >
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                    className="mt-1 shrink-0 text-[#D8C49E] sm:size-[19px]"
                  />

                  <div>
                    <p className="text-[16px] font-normal leading-5 text-[#FFF9EF] sm:text-[21px] sm:leading-6">
                      {item.value}
                    </p>

                    <p className="mt-1 max-w-[260px] text-[11px] font-medium leading-[1.5] text-[#F3EADF]/75 sm:text-[13px] sm:leading-[1.55]">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}