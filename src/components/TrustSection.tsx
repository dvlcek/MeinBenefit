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
  }
];

export function TrustSection() {
  return (
    <section className="bg-white px-2 py-6 text-black sm:px-6 sm:py-8 lg:px-8">
      <div className="ml-4 grid w-[360px] max-w-[calc(100%-1rem)] grid-cols-4 items-start gap-1 sm:mx-auto sm:w-auto sm:max-w-[860px] sm:gap-4 lg:max-w-[980px]">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex min-w-0 flex-col items-center justify-start gap-1.5 sm:gap-2"
          >
            <span className="relative h-8 w-12 shrink-0 sm:h-14 sm:w-20 lg:h-16 lg:w-24">
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
              <p className="text-center text-[8px] font-bold leading-tight text-black sm:text-xs">
                {badge.label}
              </p>
              <p className="mt-0.5 break-words text-center text-[7px] font-semibold leading-tight text-black/70 sm:text-[11px]">
                {badge.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
