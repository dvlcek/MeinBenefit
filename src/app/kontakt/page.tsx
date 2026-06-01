import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { LeadWizard } from "@/components/LeadWizard";

type KontaktPageProps = {
  searchParams: Promise<{ type?: string }>;
};

export default async function KontaktPage({ searchParams }: KontaktPageProps) {
  const params = await searchParams;

  const initialType =
    params.type === "b2b" || params.type === "b2c"
      ? (params.type as "b2b" | "b2c")
      : null;

  const eyebrow =
    initialType === "b2b"
      ? "Für Unternehmen"
      : initialType === "b2c"
        ? "Für Privatpersonen"
        : "Anfrage starten";

  const headline =
    initialType === "b2b"
      ? "MeinBenefit für Ihr Unternehmen prüfen."
      : initialType === "b2c"
        ? "Ihren persönlichen Vorteil prüfen."
        : "Zuerst kurz einordnen.";

  const description =
    initialType === "b2b"
      ? "Beantworten Sie kurz die wichtigsten Fragen. Danach melden wir uns persönlich mit den nächsten Schritten."
      : initialType === "b2c"
        ? "Beantworten Sie kurz die wichtigsten Fragen. Danach prüfen wir, welche Vorteile für Sie relevant sein können."
        : "Wählen Sie, ob Sie als Privatperson oder Unternehmen anfragen. Danach führen wir Sie durch die passenden Fragen.";

  return (
    <main
      data-motion-skip
      className="min-h-[100svh] bg-white px-5 py-5 text-[#17130D] sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex min-h-[calc(100svh-40px)] max-w-[920px] flex-col">
        <div className="flex shrink-0 items-center justify-between gap-4">
          <BrandLogo href="/" size="sm" showTagline={false} />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#4A453C] transition hover:text-[#0D3A2D]"
          >
            <ArrowLeft size={15} strokeWidth={2} />
            Zur Startseite
          </Link>
        </div>

        {/* Content */}
        <section className="flex flex-1 flex-col justify-center py-5 sm:py-6">
          <div className="mx-auto mb-6 max-w-[650px] text-center sm:mb-7">
            <p className="text-[9px] font-bold uppercase tracking-[0.26em] text-[#A7824E]">
              {eyebrow}
            </p>

            <h1 className="mt-3 font-serif text-[32px] font-normal leading-[0.98] tracking-[-0.045em] text-[#17130D] sm:text-[46px] lg:text-[54px]">
              {headline}
            </h1>

            <p className="mx-auto mt-4 max-w-[560px] text-[13px] font-medium leading-6 text-[#4A453C] sm:text-[14px] sm:leading-7">
              {description}
            </p>
          </div>

          <div className="mx-auto w-full max-w-[820px] border-t border-[#E7DCCB] pt-5">
            <LeadWizard
              key={initialType ?? "choose-lead-type"}
              initialType={initialType}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
