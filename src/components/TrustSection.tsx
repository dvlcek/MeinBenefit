import Image from "next/image";

const badges = [
  {
    label: "WKO",
    detail: "Österreichisches Unternehmen",
    icon: "/images/trust-wko.webp",
  },
  {
    label: "SSL",
    detail: "Verschlüsselte Daten",
    icon: "/images/trust-ssl.webp",
  },
  {
    label: "Münze Österreich",
    detail: "Gold von Münze Österreich",
    icon: "/images/trust-muenze-oesterreich.webp",
  },
];

export function TrustSection() {
  return (
    <section className="bg-white px-5 py-7 text-black sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[960px] flex-wrap items-center justify-center gap-4">
        {badges.map((badge) => (
          <div key={badge.label} className="flex min-w-0 items-center justify-center gap-3">
            <span className="relative h-20 w-30 shrink-0">
              <Image
                src={badge.icon}
                alt=""
                fill
                sizes="98px"
                className="object-contain"
              />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-black">{badge.label}</p>
              <p className="truncate text-xs font-semibold text-black/70">{badge.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
