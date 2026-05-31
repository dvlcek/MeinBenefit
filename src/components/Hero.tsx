import Image from "next/image";
import { ArrowRight, CheckCircle2, Clock3, Sparkles } from "lucide-react";

const proofItems = [
  {
    value: "100 %",
    label: "kostenlos fürs Unternehmen",
    icon: CheckCircle2,
  },
  {
    value: "0 Aufwand",
    label: "wir übernehmen alles",
    icon: Clock3,
  },
  {
    value: "Mehrwert",
    label: "langfristig & sichtbar",
    icon: Sparkles,
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-white px-4 pt-[82px] sm:px-6 lg:px-8"
    >
      {/* Right open image */}
      <div className="absolute inset-y-0 right-0 top-[82px] -z-20 hidden w-[75%] lg:block">
        <Image
          src="/images/Hero.webp"
          alt="MeinBenefit Beratung mit hochwertigen Unterlagen am Schreibtisch"
          fill
          priority
          sizes="58vw"
          className="object-cover object-center"
          unoptimized
        />
      </div>

      {/* Soft fade from text to image */}
      <div className="absolute inset-y-0 right-[30%] top-[82px] -z-10 hidden w-[55%] bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0.92)_36%,rgba(255,255,255,0.35)_72%,rgba(255,255,255,0)_100%)] lg:block" />

      {/* Mobile background image */}
      <div className="absolute inset-0 -z-30 lg:hidden">
        <Image
          src="/images/Hero.webp"
          alt="MeinBenefit Beratung mit hochwertigen Unterlagen am Schreibtisch"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
          unoptimized
        />
        <div className="absolute inset-0 bg-white/88" />
      </div>

      {/* Page wash */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-[linear-gradient(0deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)]" />

      <div className="mx-auto flex min-h-[calc(100svh-82px)] w-full max-w-[1320px] flex-col justify-center pb-10 pt-10 lg:pb-12">
        <div className="w-full max-w-[800px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#A7824E]">
            MeinBenefit für Unternehmen
          </p>

          <h1 className="mt-5 max-w-[360px] font-serif text-[40px] font-normal leading-[0.96] tracking-[-0.045em] text-[#17130D] sm:max-w-[640px] sm:text-[68px] lg:text-[76px]">
            Ein Benefit für Unternehmen.
            <span className="block text-[#0D3A2D]">
              Ein Vorteil für Menschen.
            </span>
          </h1>

          <p className="mt-6 max-w-[360px] text-[15px] font-medium leading-7 text-[#4A453C] sm:max-w-[560px] sm:text-[17px] sm:leading-8">
            Für Menschen bedeutet MeinBenefit mehr Klarheit, persönliche
            Begleitung und Vorteile, die bleiben. Für Unternehmen entsteht
            daraus ein Benefit, der Wertschätzung sichtbar macht.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/kontakt?type=b2b"
              className="group inline-flex min-h-12 w-full max-w-[340px] items-center justify-center gap-3 rounded-full bg-[#0D3A2D] px-6 text-sm font-bold text-white shadow-[0_16px_38px_rgba(13,58,45,0.22)] transition hover:bg-[#092A21] sm:w-auto sm:max-w-none sm:px-8"
            >
              Für Unternehmen
              <ArrowRight
                size={17}
                strokeWidth={2.5}
                className="transition group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Clean proof row */}
          <div className="mt-8 flex max-w-[800px] flex-wrap items-center gap-y-5">
            {proofItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.value} className="flex items-center">
                  <div className="flex items-center gap-3 pr-5 sm:pr-7">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#E6D7B8] bg-white/70 text-[#A7824E] shadow-[0_10px_24px_rgba(23,19,13,0.04)] backdrop-blur-sm">
                      <Icon size={16} strokeWidth={2} />
                    </span>

                    <div className="min-w-0">
                      <p className="font-serif text-[18px] font-normal leading-none tracking-[-0.03em] text-[#17130D]">
                        {item.value}
                      </p>
                      <p className="mt-1 text-[10px] font-semibold uppercase leading-none tracking-[0.08em] text-[#7E7569]">
                        {item.label}
                      </p>
                    </div>
                  </div>

                  {index !== proofItems.length - 1 ? (
                    <div className="mr-5 hidden h-9 w-px bg-gradient-to-b from-transparent via-[#D8AA3F]/55 to-transparent sm:block" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}