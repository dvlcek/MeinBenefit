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
    <main className="min-h-screen bg-[#FBFAF8] px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-[30px] border border-[#E6D8C6] bg-white p-6 shadow-[0_20px_64px_rgba(23,19,13,0.06)] sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B99772]">
            MeinBenefit CRM
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-[#17130D]">
            Admin Panel
          </h1>
          <p className="mt-3 text-sm leading-7 text-[#4A453C]">
            Lokale CRM-Übersicht für eingehende Lead-Anfragen.
          </p>
        </div>

        {locked ? (
          <div className="mt-6 rounded-[24px] border border-[#E6D8C6] bg-white p-6 text-sm font-semibold text-[#17130D]">
            Admin-Zugriff ist geschützt. Öffne die Seite mit gültigem Token.
          </div>
        ) : (
          <div className="mt-6 grid gap-4">
            {leads.length === 0 ? (
              <div className="rounded-[24px] border border-[#E6D8C6] bg-white p-6 text-sm text-[#4A453C]">
                Noch keine Leads gespeichert.
              </div>
            ) : (
              leads.map((lead) => (
                <article
                  key={lead.id}
                  className="rounded-[24px] border border-[#E6D8C6] bg-white p-5 shadow-[0_14px_42px_rgba(23,19,13,0.045)]"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="font-serif text-2xl font-semibold text-[#17130D]">
                        {lead.type === "b2b" ? "Unternehmen" : "Privatperson"}
                      </h2>
                      <p className="mt-1 text-xs font-semibold text-[#6B6258]">
                        {new Date(lead.receivedAt).toLocaleString("de-AT")} · {lead.source}
                      </p>
                    </div>
                    <span className="w-fit rounded-full bg-[#0D3A2D] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
                      {lead.status}
                    </span>
                  </div>

                  <div className="mt-5 grid gap-5 lg:grid-cols-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B99772]">
                        Kontakt
                      </p>
                      <dl className="mt-3 grid gap-2 text-sm">
                        {Object.entries(lead.fields).map(([key, value]) => (
                          <div key={key} className="grid grid-cols-[120px_1fr] gap-3">
                            <dt className="font-bold text-[#17130D]">{key}</dt>
                            <dd className="text-[#4A453C]">{value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B99772]">
                        Antworten
                      </p>
                      <dl className="mt-3 grid gap-3 text-sm">
                        {lead.answers.map((answer) => (
                          <div key={`${lead.id}-${answer.id}`}>
                            <dt className="font-bold text-[#17130D]">{answer.label}</dt>
                            <dd className="mt-1 text-[#4A453C]">{answer.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>

                  <p className="mt-5 text-xs font-semibold text-[#6B6258]">
                    E-Mail: {lead.emailDelivery?.status ?? "pending"}
                  </p>
                </article>
              ))
            )}
          </div>
        )}
      </div>
    </main>
  );
}
