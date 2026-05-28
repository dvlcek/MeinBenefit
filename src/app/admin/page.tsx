import { AdminLeadsPanel } from "@/components/AdminLeadsPanel";
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
    <main className="min-h-screen bg-white px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B99772]">
              MeinBenefit CRM
            </p>
            <h1 className="mt-3 font-serif text-5xl font-semibold leading-none text-[#17130D]">
              Admin Panel
            </h1>
            <p className="mt-3 text-sm leading-7 text-[#4A453C]">
              Sortierte Übersicht für eingehende Lead-Anfragen.
            </p>
          </div>

          {!locked ? (
            <p className="w-fit bg-[#F8F3EC] px-5 py-3 text-sm font-bold text-[#0D3A2D]">
              {leads.length} Leads
            </p>
          ) : null}
        </div>

        {locked ? (
          <div className="mt-8 bg-[#F8F5EF] p-6 text-sm font-semibold text-[#17130D]">
            Admin-Zugriff ist geschützt. Öffne die Seite mit gültigem Token.
          </div>
        ) : (
          <AdminLeadsPanel initialLeads={leads} token={params.token} />
        )}
      </div>
    </main>
  );
}
