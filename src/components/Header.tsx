"use client";

import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Für Unternehmen", href: "#preise", hasDropdown: true },
  { label: "Leistungen", href: "#vorteile", hasDropdown: true },
  { label: "So funktioniert's", href: "#ablauf" },
  { label: "Über uns", href: "#top" },
  { label: "Wissen", href: "#faq", hasDropdown: true },
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
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-[82px] w-full max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="group flex min-w-0 items-center gap-2.5"
          aria-label="MeinBenefit Startseite"
        >
          <span className="min-w-0">
            <span className="block font-serif text-[36px] font-semibold leading-none tracking-[0.01em] text-[#0D3A2D]">
              MB
            </span>
            <span className="mt-0.5 block text-[10px] font-semibold leading-none text-[#9A6418]">
              MeinBenefit
            </span>
          </span>
        </a>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-9 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1.5 whitespace-nowrap py-2 text-sm font-semibold text-[#2D2922] transition hover:text-[#0D3A2D]"
            >
              {item.label}
              {item.hasDropdown ? (
                <ChevronDown size={14} strokeWidth={2.2} />
              ) : null}
            </a>
          ))}
        </nav>

        <a
          href="/kontakt?type=b2b"
          className="hidden min-h-11 items-center justify-center gap-2 rounded-full bg-[#D6B489] px-5 text-xs font-bold text-[#17130D] shadow-[0_10px_26px_rgba(153,114,72,0.18)] transition hover:bg-[#C8A77D] lg:inline-flex"
        >
          Kostenlose Erstberatung <ArrowRight size={16} strokeWidth={2.4} />
        </a>

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
        <div className="border-t border-[#EFE6DA] bg-white lg:hidden">
          <nav className="mx-auto grid max-w-[1320px] gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center justify-between px-1 text-sm font-semibold text-[#2D271F] transition hover:text-[#0D3A2D]"
                onClick={() => setOpen(false)}
              >
                {item.label}
                {item.hasDropdown ? (
                  <ChevronDown size={15} strokeWidth={2.2} />
                ) : null}
              </a>
            ))}
            <a
              href="/kontakt?type=b2b"
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#D6B489] px-5 text-sm font-bold text-[#17130D] transition hover:bg-[#C8A77D]"
              onClick={() => setOpen(false)}
            >
              Kostenlose Erstberatung <ArrowRight size={16} strokeWidth={2.4} />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
