"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-3 rounded-full font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99772]";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0D3A2D] text-white shadow-[0_14px_34px_rgba(13,58,45,0.16)] hover:bg-[#174D3D]",
  secondary:
    "bg-[#C8A77D] text-[#17130D] shadow-[0_12px_28px_rgba(153,114,72,0.14)] hover:bg-[#B99772]",
  ghost:
    "bg-[#F8F3EC] text-[#17130D] backdrop-blur hover:bg-[#EFE6DA]",
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
  ...props
}: LinkProps) {
  return (
    <a
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}
