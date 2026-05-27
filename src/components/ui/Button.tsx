"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-3 border font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B88420]";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-[#073F2A] bg-[#073F2A] text-white shadow-[0_14px_34px_rgba(7,63,42,0.22)] hover:bg-[#0F5137]",
  secondary:
    "border-[#B88420] bg-[#F4D184] text-[#10261B] hover:bg-[#E9C16A]",
  ghost:
    "border-[#CDB98A] bg-white text-[#073F2A] hover:border-[#B88420] hover:bg-[#FBF7EF]",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-sm sm:px-8",
};

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  ...props
}: LinkProps) {
  const opensLeadForm = href === "#kontakt" || href === "mailto:office@meinbenefit.at";
  const renderedHref = opensLeadForm ? "#lead-form-modal" : href;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (!event.defaultPrevented && opensLeadForm) {
      event.preventDefault();
      window.dispatchEvent(new CustomEvent("meinbenefit:open-lead-form"));
    }
  }

  return (
    <a
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      href={renderedHref}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
