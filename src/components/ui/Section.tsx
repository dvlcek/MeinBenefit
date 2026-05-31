import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function Section({
  id,
  children,
  className = "",
  innerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={`px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ${className}`}>
      <div className={`mx-auto w-full max-w-[1200px] ${innerClassName}`}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const titleColor = tone === "dark" ? "text-[#F7F3EA]" : "text-[#0B0B0A]";
  const subtitleColor = tone === "dark" ? "text-white/62" : "text-[#55524B]";

  return (
    <div
      className={`mb-10 max-w-3xl sm:mb-12 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#B68A2C]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-serif text-3xl font-semibold leading-[1.08] sm:text-4xl lg:text-[44px] ${titleColor}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${subtitleColor}`}>{subtitle}</p>
      ) : null}
    </div>
  );
}
