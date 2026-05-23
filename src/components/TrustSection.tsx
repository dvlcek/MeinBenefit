import { Award, Eye, LockKeyhole, ShieldCheck, Timer, UsersRound } from "lucide-react";

const badges = [
  { label: "WKO", detail: "Österreichisches Unternehmen", icon: Award },
  { label: "SSL", detail: "Verschlüsselte Daten", icon: LockKeyhole },
  { label: "Datenschutz", detail: "DSGVO-konform", icon: ShieldCheck },
  { label: "Persönliche", detail: "Beratung", icon: UsersRound },
  { label: "Transparenz", detail: "Ohne Kleingedrucktes", icon: Eye },
];

export function TrustSection() {
  return (
    <section className="bg-[#073F2A] px-5 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1180px] gap-y-6 sm:grid-cols-2 lg:grid-cols-6">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div
              key={badge.label}
              className={`flex items-center gap-4 px-4 ${
                index > 0 ? "lg:border-l lg:border-[#D8AA3F]/45" : ""
              }`}
            >
              <Icon className="shrink-0 text-[#F4D184]" size={28} strokeWidth={1.7} />
              <div>
                <p className="text-sm font-bold text-[#F6E6B8]">{badge.label}</p>
                <p className="mt-1 text-xs font-semibold text-white/74">{badge.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
