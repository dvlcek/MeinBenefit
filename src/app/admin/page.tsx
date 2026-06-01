import { AdminLeadsPanel } from "@/components/AdminLeadsPanel";
import { BrandLogo } from "@/components/BrandLogo";
import { readLeads } from "@/lib/leads";

export const dynamic = "force-dynamic";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const params = await searchParams;
  const adminToken = process.env.ADMIN_TOKEN;
  const locked = Boolean(adminToken && params.token !== adminToken);
  const leads = locked ? [] : await readLeads();

  return (
    <main className="min-h-screen bg-[#FAFAF8] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-6 border-b border-[#E8E2D8] pb-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <BrandLogo href="/" size="sm" className="mb-5" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9B7A56]">
                MeinBenefit CRM
              </p>

              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#17130D] sm:text-4xl">
                Admin Panel
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#5F584D]">
                Übersicht aller eingehenden Lead-Anfragen.
              </p>
            </div>

            {!locked && (
              <div className="rounded-xl border border-[#E2D8C8] bg-white px-5 py-3 text-right shadow-sm">
                <p className="text-xs font-medium uppercase tracking-wide text-[#7A7166]">
                  Gesamt
                </p>
                <p className="mt-1 text-2xl font-semibold text-[#17130D]">
                  {leads.length}
                </p>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        {locked ? (
          <section className="rounded-2xl border border-[#E2D8C8] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[#17130D]">
              Zugriff geschützt
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#5F584D]">
              Öffne diese Seite mit einem gültigen Admin-Token, um die Leads zu
              sehen.
            </p>
          </section>
        ) : (
          <section className="rounded-2xl border border-[#E8E2D8] bg-white p-4 shadow-sm sm:p-5">
            <AdminLeadsPanel initialLeads={leads} token={params.token} />
          </section>
        )}
      </div>
    </main>
  );
}
