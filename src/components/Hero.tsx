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
      className="relative isolate min-h-[92svh] overflow-hidden bg-white px-4 pt-[72px] sm:min-h-[100svh] sm:px-6 sm:pt-[82px] lg:px-8"
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

      {/* Page wash */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-[linear-gradient(0deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)]" />

      <div className="mx-auto flex min-h-[calc(92svh-72px)] w-full max-w-[1320px] flex-col justify-center pb-8 pt-5 sm:min-h-[calc(100svh-82px)] sm:pb-10 sm:pt-10 lg:pb-12">
        <div className="w-full max-w-[800px]">
          <div className="relative mb-6 h-[220px] overflow-hidden rounded-br-[92px] rounded-tl-[30px] lg:hidden">
            <Image
              src="/images/Hero.webp"
              alt="MeinBenefit Beratung mit hochwertigen Unterlagen am Schreibtisch"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[62%_center]"
              unoptimized
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(0deg,rgba(255,255,255,0.78),rgba(255,255,255,0))]" />
          </div>

          <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#A7824E] sm:text-[10px] sm:tracking-[0.28em]">
            MeinBenefit für Unternehmen
          </p>

          <h1 className="mt-3 max-w-[340px] font-serif text-[36px] font-normal leading-[0.98] tracking-[-0.04em] text-[#17130D] sm:mt-5 sm:max-w-[640px] sm:text-[68px] sm:tracking-[-0.045em] lg:text-[76px]">
            Ein Benefit für Unternehmen.
            <span className="block text-[#0D3A2D]">
              Ein Vorteil für Menschen.
            </span>
          </h1>

          <p className="mt-4 max-w-[340px] text-[14px] font-medium leading-6 text-[#4A453C] sm:mt-6 sm:max-w-[560px] sm:text-[17px] sm:leading-8">
            Für Menschen bedeutet MeinBenefit mehr Klarheit, persönliche
            Begleitung und Vorteile, die bleiben. Für Unternehmen entsteht
            daraus ein Benefit, der Wertschätzung sichtbar macht.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <a
              href="/kontakt?type=b2b"
              className="group inline-flex min-h-12 w-full max-w-[340px] items-center justify-center gap-3 rounded-full bg-[#0D3A2D] px-6 text-[13px] font-bold text-white shadow-[0_16px_38px_rgba(13,58,45,0.22)] transition hover:bg-[#092A21] sm:w-auto sm:max-w-none sm:px-8 sm:text-sm"
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
          <div className="mt-6 grid max-w-[340px] gap-3 sm:mt-8 sm:flex sm:max-w-[800px] sm:flex-wrap sm:items-center sm:gap-y-5">
            {proofItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.value} className="flex items-center">
                  <div className="flex items-center gap-3 pr-5 sm:pr-7">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full text-[#A7824E] sm:size-9 sm:border sm:border-[#E6D7B8] sm:bg-white/76 sm:shadow-[0_10px_24px_rgba(23,19,13,0.04)] sm:backdrop-blur-sm">
                      <Icon size={16} strokeWidth={2} />
                    </span>

                    <div className="min-w-0">
                      <p className="font-serif text-[17px] font-normal leading-none tracking-[-0.03em] text-[#17130D] sm:text-[18px]">
                        {item.value}
                      </p>
                      <p className="mt-1 text-[9px] font-semibold uppercase leading-none tracking-[0.08em] text-[#7E7569] sm:text-[10px]">
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
