"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-3 rounded-full border font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99772]";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-[#0D3A2D] bg-[#0D3A2D] text-white shadow-[0_18px_42px_rgba(13,58,45,0.22)] hover:border-[#174D3D] hover:bg-[#174D3D]",
  secondary:
    "border-[#C8A77D] bg-[#C8A77D] text-[#17130D] shadow-[0_16px_36px_rgba(153,114,72,0.18)] hover:border-[#B99772] hover:bg-[#B99772]",
  ghost:
    "border-[#D8C8B5] bg-white/86 text-[#17130D] backdrop-blur hover:border-[#B99772] hover:bg-[#F8F3EC]",
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
  const renderedHref = opensLeadForm ? "/kontakt" : href;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
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
