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
    text: "Bestehende Verträge und laufende Ausgaben besser einordnen",
  },
  {
    title: "Orientierung",
    text: "Mögliche Optionen je nach persönlicher Situation prüfen",
  },
  {
    title: "Begleitung",
    text: "Persönliche Unterstützung bei den nächsten Schritten",
  },
];

const b2bPlan: PricingPlan = {
  label: "FLEXIBEL. PERSÖNLICH. EINFACH UMGESETZT.",
  title: "Was Ihr Unternehmen erhält",
  description:
    "MeinBenefit unterstützt Unternehmen dabei, ihren Mitarbeitern einen persönlichen Vorteil anzubieten — ohne zusätzliche Gebühr für das Unternehmen und mit persönlicher Begleitung im gesamten Ablauf.",
  companyPrice: "0 €",
  companyPriceLabel: "Ihr Unternehmen",
  companyPriceNote: "Ihr Unternehmen zahlt keine zusätzliche Gebühr.",
  employeePrice: "Ab 20 € / Monat",
  employeePriceLabel: "Ihre Mitarbeiter",
  employeePriceNote:
    "Mitarbeiter entscheiden individuell, ob sie teilnehmen möchten.",
  summary:
    "Kurz gesagt: Ihr Unternehmen stellt den Zugang bereit — die Teilnahme erfolgt individuell über die Mitarbeiter.",
  features: [
    "Persönlicher Service für Mitarbeiter",
    "Einfache Einführung im Unternehmen",
    "Klare Kommunikation für Ihr Team",
    "Geringer Aufwand für HR und Geschäftsführung",
    "Individuelle Begleitung statt Standardlösung",
    "Kooperation mit Münze Österreich",
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
      className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-14">
          {/* Left side */}
          <div className="max-w-[430px]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A] sm:text-[10px] sm:tracking-[0.24em]">
              FÜR IHRE MITARBEITER
            </p>

            <h2 className="mt-2 max-w-[410px] font-serif text-[31px] leading-[1.04] text-[#1F1F1F] sm:text-[44px]">
              Echte Wertschätzung für Ihre Mitarbeiter.
            </h2>

            <p className="mt-4 max-w-[400px] text-[13px] font-medium leading-6 text-[#6F6F6F] sm:text-sm">
              MeinBenefit unterstützt teilnehmende Mitarbeiter, ihre Finanzen
              besser zu verstehen, mögliche Vorteile zu erkennen und
              langfristige Werte aufzubauen. Ihr Unternehmen stellt den Zugang
              bereit – die persönliche Betreuung übernehmen wir.
            </p>

            <div className="mt-7 border-y border-[#E8DCCB]">
              {employeePoints.map((point, index) => (
                <div
                  key={point.title}
                  className="grid grid-cols-[34px_1fr] gap-4 border-b border-[#E8DCCB] py-4 last:border-b-0"
                >
                  <span className="font-serif text-[18px] font-semibold leading-6 text-[#C8A96A]">
                    0{index + 1}
                  </span>

                  <div>
                    <p className="font-serif text-[18px]  leading-6 text-[#1F1F1F] sm:text-[20px]">
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
          <article className="relative overflow-hidden rounded-[30px] bg-[#ffffff] shadow-[0_22px_62px_rgba(23,19,13,0.06)]">
            {/* Mobile image */}
            <div className="relative h-[190px] overflow-hidden border-b border-[#E8DCCB] lg:hidden">
              <div
                className="absolute inset-0 scale-[1.03] bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/pricing-picture.webp')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFCF8] via-[#FFFCF8]/45 to-transparent" />
            </div>

            {/* Desktop image blend */}
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] overflow-hidden lg:block">
              <div
                className="absolute inset-0 scale-[1.03] bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/pricing-picture.webp')",
                  WebkitMaskImage:
                    "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.4) 46%, black 78%)",
                  maskImage:
                    "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.4) 46%, black 78%)",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FFFCF8]/10 to-[#FFFCF8]" />
            </div>

            <div className="relative z-10 max-w-[620px] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A] sm:text-[10px] sm:tracking-[0.24em]">
                {plan.label}
              </p>

              <h3 className="mt-2 max-w-[450px] font-serif text-[29px] leading-[1.06] text-[#1F1F1F] sm:text-[39px]">
                {plan.title}
              </h3>

              <p className="mt-4 max-w-[455px] text-[13px] font-medium leading-6 text-[#6F6F6F] sm:text-sm">
                {plan.description}
              </p>

              {/* Pricing */}
              <div className="mt-6 max-w-[500px] border-y border-[#E8DCCB] py-5">
                <div className="grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-end sm:gap-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C8A96A]">
                      {plan.companyPriceLabel}
                    </p>

                    <div className="mt-1 flex flex-wrap items-end gap-x-2 gap-y-1">
                      <p
                        ref={priceRef}
                        className="font-serif text-[52px] font-semibold leading-none tracking-[-0.06em] text-[#0D3A2D] sm:text-[60px]"
                        aria-label="0 Euro zahlt das Unternehmen"
                      >
                        {companyPriceValue} €
                      </p>

                      <p className="pb-1.5 text-[11px] font-semibold leading-tight text-[#1F1F1F]">
                        zahlt das Unternehmen
                      </p>
                    </div>

                    <p className="mt-2 max-w-[210px] text-[11px] font-medium leading-[1.55] text-[#6F6F6F] sm:text-[12px]">
                      {plan.companyPriceNote}
                    </p>
                  </div>

                  <div className="hidden h-[82px] w-px bg-[#E8DCCB] sm:block" />

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C8A96A]">
                      {plan.employeePriceLabel}
                    </p>

                    <p className="mt-2 font-serif text-[28px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#1F1F1F] sm:text-[32px]">
                      {plan.employeePrice}
                    </p>

                    <p className="mt-2 max-w-[230px] text-[11px] font-medium leading-[1.55] text-[#6F6F6F] sm:text-[12px]">
                      {plan.employeePriceNote}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3 border-t border-[#EEE4D7] pt-4">
                  <CheckCircle2
                    size={15}
                    className="mt-[2px] shrink-0 text-[#0D3A2D]"
                    strokeWidth={1.8}
                  />

                  <p className="max-w-[430px] text-[12px] font-semibold leading-[1.6] text-[#0D3A2D]">
                    {plan.summary}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mt-5 max-w-[500px]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C8A96A]">
                  Leistungen für Ihr Unternehmen
                </p>

                <div className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 text-[12px] font-medium leading-[1.55] text-[#1F1F1F]"
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-[2px] shrink-0 text-[#C8A96A]"
                        strokeWidth={1.8}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
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
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}