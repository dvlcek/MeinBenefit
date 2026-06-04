"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./BrandLogo";

const b2bNavItems = [
  { label: "Vorteile", href: "#vorteile" },
  { label: "Angebot", href: "#preise" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "FAQ", href: "#faq" },
];

const b2cNavItems = [
  { label: "Vertragscheck", href: "#vorteile" },
  { label: "Modelle", href: "#preise" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "FAQ", href: "#faq" },
];

const audienceItems = [
  {
    label: "Unternehmen",
    href: "/",
    key: "b2b",
  },
  {
    label: "Privatkunden",
    href: "/b2c",
    key: "b2c",
  },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const downDistance = useRef(0);
  const ticking = useRef(false);

  const isB2C = pathname?.startsWith("/b2c");
  const navItems = isB2C ? b2cNavItems : b2bNavItems;

  const logoHref = isB2C ? "/b2c#top" : "/#top";
  const ctaHref = isB2C ? "/kontakt?type=b2c" : "/kontakt?type=b2b";
  const ctaLabel = isB2C
    ? "Kostenloses Erstgespräch buchen"
    : "Kostenlose Erstberatung buchen";

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
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#EFE6DA]/70 bg-white/95 backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1320px] items-center justify-between px-4 sm:h-[82px] sm:px-6 lg:px-8">
        <BrandLogo href={logoHref} size="md" className="max-w-[210px]" />

        <div className="hidden items-center gap-7 lg:flex">
          <nav
            aria-label={
              isB2C
                ? "Navigation für Privatkunden"
                : "Navigation für Unternehmen"
            }
            className="flex items-center gap-8"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center whitespace-nowrap py-2 text-sm font-semibold text-[#2D2922] transition hover:text-[#0D3A2D]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="h-5 w-px bg-[#E8DCCB]" />

          <div className="flex items-center gap-3 text-[11px] font-semibold text-[#8B8174]">
            {audienceItems.map((item, index) => {
              const active =
                item.key === "b2c" ? isB2C : pathname === "/" || !isB2C;

              return (
                <div key={item.key} className="flex items-center gap-3">
                  {index !== 0 ? (
                    <span className="h-3 w-px bg-[#E8DCCB]" />
                  ) : null}

                  <a
                    href={item.href}
                    className={`relative py-1 transition hover:text-[#0D3A2D] ${
                      active ? "text-[#0D3A2D]" : "text-[#8B8174]"
                    }`}
                  >
                    {item.label}

                    {active ? (
                      <span className="absolute inset-x-0 -bottom-[2px] mx-auto h-px w-full bg-[#C8A96A]" />
                    ) : null}
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <a
          href={ctaHref}
          className="hidden min-h-11 items-center justify-center gap-2 rounded-full bg-[#D6B489] px-5 text-xs font-bold text-[#17130D] shadow-[0_10px_26px_rgba(153,114,72,0.14)] transition hover:bg-[#C8A77D] xl:inline-flex"
        >
          {ctaLabel}
          <ArrowRight size={16} strokeWidth={2.4} />
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
            <div className="mb-2 flex items-center justify-between border-b border-[#EFE6DA] pb-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A7824E]">
                Bereich
              </span>

              <div className="flex items-center gap-3 text-[12px] font-bold">
                {audienceItems.map((item, index) => {
                  const active =
                    item.key === "b2c" ? isB2C : pathname === "/" || !isB2C;

                  return (
                    <div key={item.key} className="flex items-center gap-3">
                      {index !== 0 ? (
                        <span className="h-3 w-px bg-[#E8DCCB]" />
                      ) : null}

                      <a
                        href={item.href}
                        className={`relative py-1 transition ${
                          active ? "text-[#0D3A2D]" : "text-[#8B8174]"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}

                        {active ? (
                          <span className="absolute inset-x-0 -bottom-[2px] h-px bg-[#C8A96A]" />
                        ) : null}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex min-h-10 items-center justify-between rounded-xl px-2 text-[13px] font-semibold text-[#2D271F] transition hover:bg-[#F8F3EC] hover:text-[#0D3A2D]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href={ctaHref}
              className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#D6B489] px-5 text-[13px] font-bold text-[#17130D] transition hover:bg-[#C8A77D]"
              onClick={() => setOpen(false)}
            >
              {ctaLabel}
              <ArrowRight size={16} strokeWidth={2.4} />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}