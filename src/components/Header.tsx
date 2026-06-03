"use client";

import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./BrandLogo";

const navItems = [
  { label: "Für Unternehmen", href: "#preise"},
  { label: "Leistungen", href: "#vorteile"},
  { label: "So funktioniert's", href: "#ablauf" },
  { label: "Über uns", href: "#top" },
  { label: "Wissen", href: "#faq"},
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
      <div className="mx-auto flex h-[72px] w-full max-w-[1320px] items-center justify-between px-4 sm:h-[82px] sm:px-6 lg:px-8">
        <BrandLogo href="#top" size="md" className="max-w-[210px]" />

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
          Kostenlose Erstberatung buchen <ArrowRight size={16} strokeWidth={2.4} />
        </a>

        <button
          type="button"
          className="ml-4 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8F3EC] text-[#0D3A2D] ring-1 ring-[#E8DCCB] lg:hidden"
          aria-label={open ? "Navigation schließen" : "Navigation öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#EFE6DA] bg-white/96 shadow-[0_18px_42px_rgba(23,19,13,0.08)] backdrop-blur-md lg:hidden">
          <nav className="mx-auto grid max-w-[1320px] gap-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-10 items-center justify-between rounded-xl px-2 text-[13px] font-semibold text-[#2D271F] transition hover:bg-[#F8F3EC] hover:text-[#0D3A2D]"
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
              className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#D6B489] px-5 text-[13px] font-bold text-[#17130D] transition hover:bg-[#C8A77D]"
              onClick={() => setOpen(false)}
            >
              Kostenlose Erstberatung buchen <ArrowRight size={16} strokeWidth={2.4} />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
