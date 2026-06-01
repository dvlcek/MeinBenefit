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

/* Edit icon size here only */
const badgeIconSize = "h-11 w-16 sm:h-24 sm:w-40 lg:h-28 lg:w-48";

/* Optional: edit spacing/style here */
const sectionClass = "bg-white px-4 py-8 text-black sm:px-6 sm:py-14 lg:px-8";
const gridClass =
  "mx-auto grid max-w-[1000px] grid-cols-4 items-center gap-2 px-1 py-3 sm:gap-12 sm:px-6 sm:py-6 lg:px-10";
const badgeClass =
  "flex min-w-0 flex-col items-center justify-center";
const iconClass = `relative shrink-0 opacity-80 sm:opacity-90 ${badgeIconSize}`;

export function TrustSection() {
  return (
    <section className={sectionClass}>
      <div className={gridClass}>
        {badges.map((badge) => (
          <div key={badge.label} className={badgeClass}>
            <span className={iconClass}>
              <Image
                src={badge.icon}
                alt=""
                fill
                sizes="(max-width: 639px) 96px, (max-width: 1023px) 160px, 192px"
                className="object-contain"
                unoptimized
              />
            </span>

            {/* <div className="min-w-0">
              <p className="text-center text-[8px] font-bold uppercase leading-tight tracking-[0.14em] text-[#17130D] sm:text-[11px]">
                {badge.label}
              </p>
              <p className="mt-1 break-words text-center text-[7px] font-medium leading-tight text-[#7E7569] sm:text-[11px]">
                {badge.detail}
              </p>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
