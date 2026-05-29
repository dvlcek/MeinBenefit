import Image from "next/image";

const badges = [
  {
    label: "Münze Österreich",
    detail: "Gold von Münze Österreich",
    icon: "/images/trust-muenze-oesterreich.webp",
  },
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
    label: "DSVGO",
    detail: "Datenschutzkonform",
    icon: "/images/trust-dsvgo.webp",
  },
];

export function TrustSection() {
  return (
    <section className="bg-white px-4 py-12 text-black sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] grid-cols-4 items-start gap-3 px-1 py-4 sm:gap-10 sm:px-6 lg:px-10">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex min-w-0 flex-col items-center justify-start gap-3"
          >
            <span className="relative h-8 w-12 shrink-0 opacity-85 sm:h-12 sm:w-20 lg:h-14 lg:w-24">
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
              <p className="text-center text-[8px] font-bold uppercase leading-tight tracking-[0.14em] text-[#17130D] sm:text-[11px]">
                {badge.label}
              </p>
              <p className="mt-1 break-words text-center text-[7px] font-medium leading-tight text-[#7E7569] sm:text-[11px]">
                {badge.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
