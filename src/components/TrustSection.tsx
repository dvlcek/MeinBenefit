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
  {
    label: "DSVGO",
    detail: "Datenschutzkonform",
    icon: "/images/trust-dsvgo.webp",
  },
];

export function TrustSection() {
  return (
    <section className="bg-white px-4 py-8 text-black sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-4 items-start gap-2 rounded-[28px] border border-[#E6D8C6] bg-white px-3 py-7 shadow-[0_18px_54px_rgba(23,19,13,0.045)] sm:gap-4 sm:px-8 lg:px-12">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex min-w-0 flex-col items-center justify-start gap-2"
          >
            <span className="relative h-9 w-12 shrink-0 sm:h-14 sm:w-20 lg:h-16 lg:w-24">
              <Image
                src={badge.icon}
                alt=""
                fill
                sizes="(max-width: 639px) 48px, (max-width: 1023px) 80px, 96px"
                className="object-contain"
                unoptimized
              />
            </span>
            <div className="min-w-0">
              <p className="text-center text-[9px] font-bold leading-tight text-[#17130D] sm:text-xs">
                {badge.label}
              </p>
              <p className="mt-0.5 break-words text-center text-[7px] font-semibold leading-tight text-[#6B6258] sm:text-[11px]">
                {badge.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
