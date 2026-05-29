import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const proofItems = [
  "100 % kostenlos für Ihr Unternehmen",
  "Kein Aufwand - wir übernehmen alles",
  "Langfristiger Mehrwert",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-white px-4 pt-[82px] sm:px-6 lg:px-8"
    >
      <Image
        src="/images/Hero.webp"
        alt="MeinBenefit Beratung mit hochwertigen Unterlagen am Schreibtisch"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[61%_center]"
        unoptimized
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/88 to-white/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-white to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-82px)] w-full max-w-[1320px] min-w-0 flex-col justify-center pb-8 pt-10 sm:pb-10 lg:pb-9">
        <div className="w-full min-w-0 max-w-[660px]">
          <p className="max-w-[340px] text-[9px] font-bold uppercase leading-5 tracking-[0.14em] text-[#B99772] sm:max-w-full sm:text-xs sm:tracking-[0.34em]">
            MeinBenefit - der Gold-Benefit für Ihr Unternehmen
          </p>
          <h1 className="mt-5 max-w-[340px] font-serif text-[36px] font-semibold leading-[1] text-[#17130D] sm:max-w-[640px] sm:text-[64px] sm:leading-[0.98] lg:text-[74px]">
            Ein Benefit für Unternehmen.
            <span className="block">Ein Vorteil für Mitarbeitende.</span>
          </h1>
          <p className="mt-6 max-w-[340px] text-sm font-semibold leading-7 text-[#4A453C] sm:max-w-[620px] sm:text-base sm:leading-8">
            MeinBenefit schenkt Ihrem Team einen echten Mehrwert - mit einem klaren,
            wertstabilen Benefit, persönlicher Begleitung und maximaler Transparenz. Für
            mehr Motivation, Bindung und Zukunftssicherheit.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#kontakt"
              className="inline-flex min-h-12 w-full max-w-[340px] items-center justify-center gap-3 rounded-full bg-[#0D3A2D] px-5 text-sm font-bold text-white shadow-[0_14px_34px_rgba(13,58,45,0.16)] transition hover:bg-[#174D3D] sm:w-auto sm:max-w-none sm:px-7"
            >
              Kostenlose Erstberatung starten <ArrowRight size={17} strokeWidth={2.5} />
            </a>
            <a
              href="#preise"
              className="inline-flex min-h-12 w-full max-w-[340px] items-center justify-center rounded-full border border-[#C9C0B5] bg-white/72 px-5 text-sm font-bold text-[#2D2922] transition hover:border-[#0D3A2D] hover:text-[#0D3A2D] sm:w-auto sm:max-w-none sm:px-7"
            >
              Für Unternehmen entdecken
            </a>
          </div>
        </div>

        <div className="mt-8 grid max-w-[340px] gap-3 sm:max-w-[760px] sm:grid-cols-3 lg:mt-12">
          {proofItems.map((item) => (
            <div
              key={item}
              className="flex min-h-11 min-w-0 items-center gap-2 rounded-full bg-white/72 px-4 text-[11px] font-bold text-[#2D2922] shadow-[0_10px_28px_rgba(23,19,13,0.05)] backdrop-blur-sm"
            >
              <CheckCircle2 className="shrink-0 text-[#A7824E]" size={16} strokeWidth={2.3} />
              <span className="min-w-0">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
