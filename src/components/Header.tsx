"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "./ui/Button";

const navItems = [
  { label: "Vorteile", href: "#vorteile" },
  { label: "So funktioniert's", href: "#ablauf" },
  { label: "Pakete", href: "#preise" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-[68px] w-full max-w-[1320px] items-center justify-between rounded-full border border-[#E6D8C6]/80 bg-white/88 px-3 shadow-[0_18px_56px_rgba(23,19,13,0.08)] backdrop-blur-2xl sm:px-5">
        <a href="#top" className="group flex min-w-0 items-center gap-3" aria-label="MeinBenefit Startseite">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8C8B5] bg-white font-serif text-lg font-bold text-[#0D3A2D] shadow-[inset_0_0_0_5px_#F7F1EA] transition group-hover:border-[#B99772]">
            MB
          </span>
          <span className="min-w-0">
            <span className="block font-serif text-[22px] leading-none text-[#17130D]">MeinBenefit</span>
            <span className="mt-1 block text-xs font-semibold text-[#9A6418]">Vorteile, die bleiben.</span>
          </span>
        </a>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center rounded-full bg-[#B99772]/88 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#17130D]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="#kontakt" size="md">
            Kostenlose Erstanalyse starten <ArrowRight size={16} />
          </ButtonLink>
        </div>

        <button
          type="button"
          className="ml-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D8C8B5] bg-white text-[#0D3A2D] lg:hidden"
          aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto max-w-[1320px] pt-3 lg:hidden">
          <nav className="grid gap-2 rounded-[28px] border border-[#E6D8C6] bg-white/96 p-3 shadow-[0_24px_70px_rgba(23,19,13,0.16)] backdrop-blur-2xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-3 text-sm font-semibold text-[#2D271F] transition hover:bg-[#F8F3EC] hover:text-[#9A6418]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <ButtonLink href="#kontakt" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Kostenlose Erstanalyse starten
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
