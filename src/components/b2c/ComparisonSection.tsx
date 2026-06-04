import { Check, X } from "lucide-react";
import { Section } from "../ui/Section";

type Status = "check" | "x";

type ComparisonRow = {
  label: string;
  meinBenefit: Status;
  makler: Status;
  portal: Status;
};

const rows: ComparisonRow[] = [
  {
    label: "Persönliche Analyse Ihrer Situation",
    meinBenefit: "check",
    makler: "check",
    portal: "x",
  },
  {
    label: "Transparenter Ablauf",
    meinBenefit: "check",
    makler: "check",
    portal: "check",
  },
  {
    label: "Begleitung bei den nächsten Schritten",
    meinBenefit: "check",
    makler: "check",
    portal: "x",
  },
  {
    label: "Persönlicher Ansprechpartner",
    meinBenefit: "check",
    makler: "check",
    portal: "x",
  },
  {
    label: "Langfristiger Vorteil durch Gold",
    meinBenefit: "check",
    makler: "x",
    portal: "x",
  },
];

export function ComparisonSection() {
  return (
    <Section className="bg-white" innerClassName="max-w-[1240px]">
      <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:items-start lg:gap-14">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A] sm:text-[10px] sm:tracking-[0.24em]">
            Vergleich
          </p>

          <h2 className="mt-2 max-w-[420px] font-serif text-[31px] font-normal leading-[1.04] text-[#1F1F1F] sm:text-[44px]">
            Mehr als ein Vergleich. Persönlich begleitet.
          </h2>

          <p className="mt-4 max-w-[390px] text-[13px] font-normal leading-6  sm:text-sm">
            MeinBenefit verbindet persönliche Begleitung, verständliche
            Empfehlungen und langfristige Unterstützung. So erhalten Sie nicht
            nur einen Überblick, sondern auch Hilfe bei den nächsten Schritten.
          </p>
        </div>

        {/* Mobile */}
        <div className="rounded-[30px] bg-white px-5 py-6 shadow-[0_24px_70px_rgba(31,31,31,0.08)] sm:hidden">
          <div className="grid grid-cols-[1fr_52px_62px_62px] items-end gap-2 border-b border-[#1F1F1F]/10 pb-4 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#1F1F1F]/60">
            <div />
            <div className="text-center text-[#0D3A2D]">MB</div>
            <div className="text-center">Makler</div>
            <div className="text-center">Portale</div>
          </div>

          <div>
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1fr_52px_62px_62px] items-center gap-2 border-b border-[#1F1F1F]/8 py-4 last:border-b-0"
              >
                <p className="text-[12px] font-semibold leading-5 text-[#1F1F1F]">
                  {row.label}
                </p>

                <MobileCell value={row.meinBenefit} highlight />
                <MobileCell value={row.makler} />
                <MobileCell value={row.portal} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="relative hidden overflow-hidden rounded-[32px] bg-white px-7 py-7 shadow-[0_28px_90px_rgba(31,31,31,0.08)] sm:block">
          <div className="grid grid-cols-[38%_22%_20%_20%] items-center border-b border-[#1F1F1F]/10 pb-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1F1F1F]/60">
            <div />

            <div className="text-center text-[#0D3A2D]">
              <span className="block text-[12px] font-bold">
                MeinBenefit
              </span>
            </div>

            <div className="text-center">Makler</div>

            <div className="text-center">Vergleichsportale</div>
          </div>

          <div>
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid min-h-[54px] grid-cols-[38%_22%_20%_20%] items-center border-b border-[#1F1F1F]/8 py-3.5 last:border-b-0"
              >
                <div className="pr-5 text-[13px] font-semibold leading-5 text-[#1F1F1F]">
                  {row.label}
                </div>

                <Cell value={row.meinBenefit} highlight />
                <Cell value={row.makler} />
                <Cell value={row.portal} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Cell({
  value,
  highlight = false,
}: {
  value: Status;
  highlight?: boolean;
}) {
  const isCheck = value === "check";
  const Icon = isCheck ? Check : X;

  return (
    <div className="flex items-center justify-center">
      <Icon
        size={19}
        strokeWidth={isCheck ? 2.4 : 2}
        className={
          !isCheck
            ? "text-[#1F1F1F]/32"
            : highlight
              ? "text-[#0D3A2D]"
              : "text-[#1F1F1F]"
        }
      />
    </div>
  );
}

function MobileCell({
  value,
  highlight = false,
}: {
  value: Status;
  highlight?: boolean;
}) {
  const isCheck = value === "check";
  const Icon = isCheck ? Check : X;

  return (
    <div className="flex items-center justify-center">
      <Icon
        size={16}
        strokeWidth={isCheck ? 2.4 : 2}
        className={
          !isCheck
            ? "text-[#1F1F1F]/32"
            : highlight
              ? "text-[#0D3A2D]"
              : "text-[#1F1F1F]"
        }
      />
    </div>
  );
}