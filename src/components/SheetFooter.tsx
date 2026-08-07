"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { PART } from "@/lib/record";

const SheetFooter = () => {
  const { d } = useLanguage();

  return (
    <footer className="border-t border-rule-strong">
      <div className="mx-auto max-w-[1440px] px-[var(--gutter)]">
        <div className="flex flex-col gap-4 border-b border-rule py-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="mono text-[0.6875rem] uppercase tracking-[0.18em] text-graphite">
            {d.footer.end}
          </span>
          <a
            href="#descricao"
            className="mono no-print text-[0.6875rem] uppercase tracking-[0.14em] text-ink-2 underline decoration-rule-strong decoration-1 underline-offset-4 transition-colors hover:text-diazo hover:decoration-diazo"
          >
            {d.footer.top}
          </a>
        </div>

        <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-[0.875rem] text-ink-2">{d.footer.madeBy}</p>
          <p className="mono text-[0.6875rem] tracking-[0.14em] text-graphite">
            {PART.designation} · REV.{PART.revision} · {d.titleBlock.sheetValue}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SheetFooter;
