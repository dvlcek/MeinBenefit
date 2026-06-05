"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "./ui/Button";

type BenefitPoint = {
  title: string;
  text: string;
};

type PricingPlan = {
  label: string;
  title: string;
  description: string;
  companyPrice: string;
  companyPriceLabel: string;
  companyPriceNote: string;
  employeePrice: string;
  employeePriceLabel: string;
  employeePriceNote: string;
  summary: string;
  features: string[];
  cta: string;
  variant: "ghost" | "secondary";
};

const employeePoints: BenefitPoint[] = [
  {
    title: "Klarheit",
    text: "Mitarbeiter erhalten Unterstützung, laufende Verträge und Ausgaben besser zu verstehen.",
  },
  {
    title: "Orientierung",
    text: "Mögliche Optionen werden verständlich erklärt und auf die persönliche Situation bezogen.",
  },
  {
    title: "Wertschätzung",
    text: "Ihr Unternehmen bietet einen Benefit, der im Alltag persönlich spürbar wird.",
  },
];

const b2bPlan: PricingPlan = {
  label: "FLEXIBEL. PERSÖNLICH. EINFACH UMGESETZT.",
  title:
    "Ein Benefit für Ihre Mitarbeiter. Ohne Zusatzkosten für Ihr Unternehmen.",
  description:
    "MeinBenefit ermöglicht Unternehmen einen persönlichen Mitarbeiterbenefit, der einfach umgesetzt wird und langfristig bei Mitarbeitern ankommt.",
  companyPrice: "0 €",
  companyPriceLabel: "Ihr Unternehmen",
  companyPriceNote: "Ihr Unternehmen zahlt keine zusätzlichen Kosten.",
  employeePrice: "Ab 20 € / Monat",
  employeePriceLabel: "Ihre Mitarbeiter",
  employeePriceNote:
    "Mitarbeiter entscheiden selbst, ob sie MeinBenefit nutzen möchten.",
  summary:
    "Ihr Unternehmen stellt den Benefit bereit. MeinBenefit übernimmt die persönliche Begleitung der Mitarbeiter.",
  features: [
    "Persönliche Begleitung für Mitarbeiter",
    "Einfache Einführung im Unternehmen",
    "Klare Kommunikation für Ihr Team",
    "Geringer Aufwand für HR und Geschäftsführung",
    "Freiwillige Teilnahme der Mitarbeiter",
    "Goldlieferung über Münze Österreich",
  ],
  cta: "Kostenlose Erstberatung buchen",
  variant: "ghost",
};

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

export function PricingSection() {
  const plan = b2bPlan;
  const priceRef = useRef<HTMLParagraphElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const [companyPriceValue, setCompanyPriceValue] = useState(99);

  useEffect(() => {
    const priceElement = priceRef.current;

    if (!priceElement) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setCompanyPriceValue(0);
      return;
    }

    const animatePrice = () => {
      if (hasAnimatedRef.current) return;

      hasAnimatedRef.current = true;

      const duration = 2000;
      const startValue = 50;
      const endValue = 0;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);

        const currentValue = Math.round(
          startValue - (startValue - endValue) * easedProgress,
        );

        setCompanyPriceValue(currentValue);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setCompanyPriceValue(0);
        }
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animatePrice();
          observer.disconnect();
        }
      },
      {
        threshold: 0.45,
      },
    );

    observer.observe(priceElement);

    return () => {
      observer.disconnect();

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      id="preise"
      className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          {/* Left side */}
          <div className="max-w-[430px]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A] sm:text-[10px] sm:tracking-[0.24em]">
              FÜR IHRE MITARBEITER
            </p>

            <h2 className="mt-2 max-w-[410px] font-serif text-[31px] leading-[1.04] text-[#1F1F1F] sm:text-[44px]">
              Ein Benefit, der persönlich relevant ist.
            </h2>

            <p className="mt-4 max-w-[400px] text-[13px] font-normal leading-6 text-[#4A453C] sm:text-sm sm:leading-7">
              MeinBenefit gibt Ihren Mitarbeitern persönliche Orientierung bei
              laufenden Verträgen und Ausgaben. Dadurch entsteht ein Benefit,
              der nicht nur angeboten wird, sondern im Alltag verstanden und
              wahrgenommen wird.
            </p>

            <div className="mt-8 grid gap-5">
              {employeePoints.map((point, index) => (
                <div
                  key={point.title}
                  className="grid grid-cols-[34px_1fr] gap-4"
                >
                  <span className="font-serif text-[18px] font-semibold leading-6 text-[#C8A96A]">
                    0{index + 1}
                  </span>

                  <div>
                    <p className="font-serif text-[18px] leading-6 text-[#1F1F1F] sm:text-[20px]">
                      {point.title}
                    </p>

                    <p className="mt-1 max-w-[330px] text-[12px] font-medium leading-[1.65] text-[#6F6F6F] sm:text-[13px]">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <article className="rounded-[36px] bg-white px-5 py-7 shadow-[0_26px_78px_rgba(23,19,13,0.065)] ring-1 ring-[#1F1F1F]/[0.05] sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A] sm:text-[10px] sm:tracking-[0.24em]">
                {plan.label}
              </p>

              <h3 className="mt-3 max-w-[620px] font-serif text-[30px] leading-[1.06] text-[#1F1F1F] sm:text-[40px]">
                {plan.title}
              </h3>

              <p className="mt-4 max-w-[580px] text-[13px] font-normal leading-6 text-[#4A453C] sm:text-sm sm:leading-7">
                {plan.description}
              </p>
            </div>

            {/* Pricing */}
            <div className="mt-9 grid gap-8 sm:grid-cols-2 sm:gap-12">
              <div className="flex flex-col">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C8A96A]">
                  {plan.companyPriceLabel}
                </p>

                <p
                  ref={priceRef}
                  className="mt-4 font-serif text-[64px] font-semibold leading-none tracking-[-0.065em] text-[#0D3A2D] sm:text-[78px]"
                  aria-label="0 Kosten für Ihr Unternehmen"
                >
                  {companyPriceValue} €
                </p>

                <p className="mt-3 text-[12px] font-semibold leading-5 text-[#1F1F1F]">
                  Kosten für Ihr Unternehmen
                </p>

                <p className="mt-2 max-w-[260px] text-[12px] font-medium leading-[1.6] text-[#6F6F6F]">
                  {plan.companyPriceNote}
                </p>
              </div>

              <div className="flex flex-col">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C8A96A]">
                  {plan.employeePriceLabel}
                </p>

                <p className="mt-5 max-w-[300px] font-serif text-[36px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1F1F1F] sm:text-[44px]">
                  {plan.employeePrice}
                </p>

                <p className="mt-4 max-w-[280px] text-[12px] font-medium leading-[1.6] text-[#6F6F6F]">
                  {plan.employeePriceNote}
                </p>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-9 flex max-w-[620px] items-start gap-3">
              <CheckCircle2
                size={16}
                className="mt-[3px] shrink-0 text-[#0D3A2D]"
                strokeWidth={1.8}
              />

              <p className="text-[12px] font-semibold leading-[1.65] text-[#0D3A2D] sm:text-[13px]">
                {plan.summary}
              </p>
            </div>

            {/* Features */}
            <div className="mt-9">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C8A96A]">
                Leistungen für Ihr Unternehmen
              </p>

              <div className="mt-4 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-2.5 text-[12px] font-medium leading-[1.6] text-[#1F1F1F] sm:text-[13px]"
                  >
                    <CheckCircle2
                      size={14}
                      className="mt-[3px] shrink-0 text-[#C8A96A]"
                      strokeWidth={1.8}
                    />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href="#kontakt"
                variant={plan.variant}
                className="h-10 w-full rounded-full !bg-[#0D3A2D] px-6 text-[12px] font-semibold !text-white shadow-[0_14px_34px_rgba(13,58,45,0.18)] transition hover:!bg-[#092A21] sm:w-auto"
              >
                {plan.cta}
                <ArrowRight size={14} strokeWidth={2.5} />
              </ButtonLink>

              <p className="max-w-[240px] text-[11px] font-medium leading-[1.5] text-[#6F6F6F]">
                Unverbindlich. Persönlich. Einfach erklärbar.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}