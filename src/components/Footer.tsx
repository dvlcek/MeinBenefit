import { Camera, Mail, MapPin, Phone, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const nav = ["Vorteile", "So funktioniert's", "Pakete", "FAQ"];
const legal = ["Impressum", "Datenschutz", "AGB"];

export function Footer() {
  return (
    <footer className="bg-[#11120F] px-5 pt-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1200px] gap-10 pb-10 lg:grid-cols-[1.25fr_0.7fr_0.8fr_1.2fr_0.75fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D6B489] bg-white/5 font-serif text-lg font-bold text-[#E7D7C4]">
              MB
            </span>
            <div>
              <p className="font-serif text-2xl leading-none text-[#F7EFE1]">MeinBenefit</p>
              <p className="mt-1 text-xs font-semibold text-[#F4D184]">Vorteile, die bleiben.</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/64">
            MeinBenefit unterstützt Berufstätige und Familien dabei, mehr Klarheit über laufende
            Kosten zu gewinnen und langfristige Vorteile aufzubauen.
          </p>
        </div>

        <FooterColumn title="Navigation" items={nav} />
        <FooterColumn title="Rechtliches" items={legal} />

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#F6E6B8]">Kontakt</p>
          <div className="mt-4 grid gap-3 text-sm text-white/68">
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6B489] text-[#F4D184] transition hover:bg-[#D6B489] hover:text-[#11120F]"
              aria-label="Instagram"
            >
              <Camera size={18} />
            </a>
            <a
              href="#top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6B489] text-[#F4D184] transition hover:bg-[#D6B489] hover:text-[#11120F]"
              aria-label="Facebook"
            >
              <Send size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] border-t border-white/10 py-4 text-center text-xs text-white/48">
        © 2024 MeinBenefit GmbH. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#F6E6B8]">{title}</p>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <a key={item} href="#top" className="text-sm text-white/64 transition hover:text-[#F4D184]">
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
