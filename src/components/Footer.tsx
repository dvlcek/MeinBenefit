import { Camera, Mail, MapPin, Phone, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const nav = ["Vorteile", "So funktioniert's", "Pakete", "FAQ"];
const legal = ["Impressum", "Datenschutz", "AGB"];

export function Footer() {
  return (
    <footer className="bg-[#11120F] px-4 pt-9 text-white sm:px-6 sm:pt-12 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] gap-7 pb-8 sm:gap-10 sm:pb-10 lg:grid-cols-[1.25fr_0.7fr_0.8fr_1.2fr_0.75fr]">
        <div>
          <BrandLogo href="#top" tone="dark" size="lg" />
          <p className="mt-4 max-w-xs text-[13px] leading-6 text-white/64 sm:mt-5 sm:text-sm sm:leading-7">
            MeinBenefit unterstützt Berufstätige dabei, mehr Klarheit über
            laufende Kosten zu gewinnen und langfristige Vorteile aufzubauen.
          </p>
        </div>

        <FooterColumn title="Navigation" items={nav} />
        <FooterColumn title="Rechtliches" items={legal} />

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#F6E6B8]">Kontakt</p>
          <div className="mt-4 grid gap-2.5 text-[13px] text-white/68 sm:gap-3 sm:text-sm">
            <ContactLine icon={MapPin} text="Schottenring 20, Top 30, 1010 Wien, Österreich" />
            <ContactLine icon={Mail} text="office@meinbenefit.at" />
            <ContactLine icon={Phone} text="+43 1 234 56 07" />
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#F6E6B8]">Folge uns</p>
          <div className="mt-5 flex gap-3">
            <a
              href="#top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-[#F4D184] transition hover:bg-[#D6B489] hover:text-[#11120F]"
              aria-label="Instagram"
            >
              <Camera size={18} />
            </a>
            <a
              href="#top"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-[#F4D184] transition hover:bg-[#D6B489] hover:text-[#11120F]"
              aria-label="Facebook"
            >
              <Send size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] py-4 text-center text-[11px] text-white/48 sm:text-xs">
        © 2024 MeinBenefit GmbH. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#F6E6B8]">{title}</p>
      <div className="mt-3 grid gap-2 sm:mt-4 sm:gap-3">
        {items.map((item) => (
          <a key={item} href="#top" className="text-[13px] text-white/64 transition hover:text-[#F4D184] sm:text-sm">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

function ContactLine({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <p className="flex items-start gap-3">
      <Icon className="mt-0.5 shrink-0 text-[#F4D184]" size={16} />
      <span>{text}</span>
    </p>
  );
}
