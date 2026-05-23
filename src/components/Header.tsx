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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D8C7A3] bg-[#FBFAF7]/95 px-5 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between">
        <a href="#top" className="group flex items-center gap-3" aria-label="Mind Benefit Startseite">
          <span className="flex h-12 w-12 items-center justify-center border-2 border-[#C99A38] bg-white font-serif text-lg font-bold text-[#073F2A] shadow-[inset_0_0_0_4px_#F7EFE1]">
            MB
          </span>
          <span>
            <span className="block font-serif text-[22px] leading-none text-[#17130D]">Mind Benefit</span>
            <span className="mt-1 block text-xs font-semibold text-[#9A6418]">Vorteile, die bleiben.</span>
          </span>
        </a>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#2D271F] transition hover:text-[#9A6418]"
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
          className="inline-flex h-11 w-11 items-center justify-center border border-[#CDB98A] text-[#073F2A] lg:hidden"
          aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto max-w-[1180px] pb-5 lg:hidden">
          <nav className="grid gap-2 border border-[#D8C7A3] bg-white p-3 shadow-[0_20px_60px_rgba(17,18,15,0.14)]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-sm font-semibold text-[#2D271F] transition hover:bg-[#FBF7EF] hover:text-[#9A6418]"
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
