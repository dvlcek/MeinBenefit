"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "./ui/Button";

const navItems = [
  { label: "Vorteile", href: "#vorteile" },
  { label: "So funktioniert's", href: "#ablauf" },
  { label: "Pakete", href: "#preise" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const downDistance = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const topThreshold = 80;
    const hideAfter = 96;
    const minDelta = 4;

    const updateHeader = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const delta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= topThreshold) {
        downDistance.current = 0;
        setHidden(false);
      } else if (Math.abs(delta) >= minDelta) {
        if (delta > 0) {
          downDistance.current += delta;

          if (downDistance.current >= hideAfter) {
            setHidden(true);
            setOpen(false);
          }
        } else {
          downDistance.current = 0;
          setHidden(false);
        }
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateHeader);
        ticking.current = true;
      }
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 lg:px-8 ${
        hidden && !open ? "-translate-y-[calc(100%+24px)]" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1320px] items-center justify-between rounded-full bg-white/86 px-3 shadow-[0_12px_40px_rgba(23,19,13,0.06)] backdrop-blur-2xl sm:px-5">
        <a href="#top" className="group flex min-w-0 items-center gap-3" aria-label="MeinBenefit Startseite">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F7F1EA] font-serif text-lg font-bold text-[#0D3A2D] transition group-hover:bg-[#EFE6DA]">
            MB
          </span>
          <span className="min-w-0">
            <span className="block font-serif text-[22px] leading-none text-[#17130D]">MeinBenefit</span>
            <span className="mt-1 block text-xs font-semibold text-[#9A6418]">Vorteile, die bleiben.</span>
          </span>
        </a>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center rounded-full bg-[#F8F3EC]/86 p-1.5 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-[#4A453C] transition hover:bg-[#0D3A2D] hover:text-white"
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
          className="ml-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F8F3EC] text-[#0D3A2D] lg:hidden"
          aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="mx-auto max-w-[1320px] pt-3 lg:hidden">
          <nav className="grid gap-2 rounded-[22px] bg-white/96 p-3 shadow-[0_24px_70px_rgba(23,19,13,0.12)] backdrop-blur-2xl">
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
