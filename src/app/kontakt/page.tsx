import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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

  return (
    <main className="min-h-screen bg-white px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[980px]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[#E6D8C6] bg-white px-4 py-2 text-sm font-semibold text-[#17130D] transition hover:bg-[#F8F3EC]"
        >
          <ArrowLeft size={16} />
          Zur Startseite
        </Link>

        <section className="pt-12">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B99772]">
              Anfrage starten
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.02] text-[#17130D] sm:text-6xl">
              Zuerst kurz einordnen.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#4A453C]">
              Wähle, ob du als Privatperson oder Unternehmen anfragst. Danach
              führen wir dich Schritt für Schritt durch die passenden Fragen.
            </p>
          </div>

          <LeadWizard
            key={initialType ?? "choose-lead-type"}
            initialType={initialType}
          />
        </section>
      </div>
    </main>
  );
}
