import { BriefcaseBusiness, UserRound } from "lucide-react";
import { Section, SectionHeading } from "./ui/Section";
import { ButtonLink } from "./ui/Button";

const audiences = [
  {
    id: "berufstaetige",
    icon: UserRound,
    title: "Privatperson / Berufstätiger",
    text: "Wir prüfen deine aktuelle Situation und zeigen dir, welche persönlichen Potenziale möglich sind.",
    cta: "Erstgespräch buchen",
    href: "#lead-b2c",
  },
  {
    id: "unternehmen",
    icon: BriefcaseBusiness,
    title: "Unternehmen / Arbeitgeber",
    text: "Wir zeigen, wie Mind Benefit als moderner Mitarbeiter-Benefit eingesetzt werden kann.",
    cta: "Arbeitgebergespräch anfragen",
    href: "#lead-b2b",
  },
];

export function AudienceCards() {
  return (
    <Section className="bg-[#F7F3EA]">
      <SectionHeading title="Wähle aus, was zu dir passt" />
      <div className="grid gap-6 md:grid-cols-2">
        {audiences.map((item) => {
          const Icon = item.icon;
          return (
            <article
              id={item.id}
              key={item.title}
              className="group rounded-[30px] border border-[#003D2B]/10 bg-white p-8 shadow-[0_22px_60px_rgba(5,5,5,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(5,5,5,0.1)] sm:p-10"
            >
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#003D2B] text-[#F5E7C1]">
                <Icon size={27} />
              </div>
              <h3 className="font-serif text-3xl font-semibold text-[#0B0B0A]">{item.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-8 text-[#5E5A51]">{item.text}</p>
              <ButtonLink href={item.href} variant="ghost" className="mt-8">
                {item.cta}
              </ButtonLink>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
