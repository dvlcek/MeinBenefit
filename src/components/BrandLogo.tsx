import Image from "next/image";
import Link from "next/link";

type BrandLogoTone = "light" | "dark";
type BrandLogoSize = "sm" | "md" | "lg";

const sizeClasses: Record<
  BrandLogoSize,
  { mark: string; name: string; tagline: string; gap: string }
> = {
  sm: {
    mark: "h-9 w-9",
    name: "text-[18px]",
    tagline: "text-[9px]",
    gap: "gap-2.5",
  },
  md: {
    mark: "h-10 w-10 sm:h-11 sm:w-11",
    name: "text-[20px] sm:text-[22px]",
    tagline: "text-[9px] sm:text-[10px]",
    gap: "gap-3",
  },
  lg: {
    mark: "h-12 w-12",
    name: "text-2xl",
    tagline: "text-xs",
    gap: "gap-3.5",
  },
};

export function BrandLogo({
  href,
  tone = "light",
  size = "md",
  showTagline = true,
  className = "",
}: {
  href?: string;
  tone?: BrandLogoTone;
  size?: BrandLogoSize;
  showTagline?: boolean;
  className?: string;
}) {
  const sizes = sizeClasses[size];
  const nameColor = tone === "dark" ? "text-[#F7EFE1]" : "text-[#17130D]";
  const taglineColor = tone === "dark" ? "text-[#F4D184]" : "text-[#9A6418]";
  const logo = (
    <>
      <span
        className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ${
          tone === "dark" ? "ring-white/12" : "ring-[#E8DCCB]"
        } ${sizes.mark}`}
      >
        <Image
          src="/images/logo/logo-256.png"
          alt=""
          width={256}
          height={256}
          sizes="48px"
          loading="eager"
          className="h-[82%] w-[82%] object-contain"
          unoptimized
        />
      </span>

      <span className="min-w-0">
        <span
          className={`block font-serif font-semibold leading-none tracking-[-0.03em] ${nameColor} ${sizes.name}`}
        >
          MeinBenefit
        </span>
        {showTagline ? (
          <span
            className={`mt-1 block font-semibold uppercase leading-none tracking-[0.14em] ${taglineColor} ${sizes.tagline}`}
          >
            Vorteile, die bleiben
          </span>
        ) : null}
      </span>
    </>
  );

  const baseClassName = `inline-flex min-w-0 items-center ${sizes.gap} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClassName} aria-label="MeinBenefit Startseite">
        {logo}
      </Link>
    );
  }

  return <div className={baseClassName}>{logo}</div>;
}
