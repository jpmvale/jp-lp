"use client";

import { useEffect, useState } from "react";
import { LANGUAGES, useLanguage } from "@/contexts/LanguageContext";
import { PART, SECTIONS } from "@/lib/record";

const SheetIndex = () => {
  const { d, language, setLanguage } = useLanguage();
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-rule-strong bg-stock/95 backdrop-blur-[2px]">
      <a
        href="#descricao"
        className="mono sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-10 focus:bg-stock focus:px-3 focus:py-2 focus:text-xs focus:uppercase focus:tracking-[0.14em]"
      >
        {d.nav.skip}
      </a>

      <div className="mx-auto flex max-w-[1440px] items-stretch gap-4 px-[var(--gutter)]">
        <div className="hidden shrink-0 items-center gap-2 border-r border-rule py-2.5 pr-4 md:flex">
          <span className="mono text-[0.6875rem] font-medium tracking-[0.16em] text-ink">
            {PART.designation}
          </span>
          <span className="mono text-[0.6875rem] tracking-[0.14em] text-stamp">
            REV.{PART.revision}
          </span>
        </div>

        <nav
          aria-label={d.nav.label}
          className="min-w-0 flex-1 [mask-image:linear-gradient(to_right,#000_88%,transparent)] md:[mask-image:none]"
        >
          <ul className="flex h-full items-stretch gap-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SECTIONS.map((section) => {
              const isActive = active === section.id;
              return (
                <li key={section.id} className="shrink-0">
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`mono flex h-full items-center gap-1.5 border-b-2 px-2.5 text-[0.6875rem] uppercase tracking-[0.12em] transition-colors sm:px-3 ${
                      isActive
                        ? "border-diazo text-ink"
                        : "border-transparent text-ink-2 hover:text-ink"
                    }`}
                  >
                    <span className={`hidden md:inline ${isActive ? "text-diazo" : "text-graphite"}`}>
                      {section.n}
                    </span>
                    <span>{d.nav.sections[section.id]}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className="flex shrink-0 items-center border-l border-rule py-2.5 pl-4"
          role="group"
          aria-label={d.nav.languageLabel}
        >
          {LANGUAGES.map((entry, index) => (
            <button
              key={entry.code}
              type="button"
              onClick={() => setLanguage(entry.code)}
              aria-pressed={language === entry.code}
              className={`mono px-1.5 text-[0.6875rem] tracking-[0.14em] transition-colors ${
                index > 0 ? "border-l border-rule" : ""
              } ${
                language === entry.code
                  ? "font-semibold text-diazo underline decoration-diazo decoration-1 underline-offset-4"
                  : "text-ink-2 hover:text-ink"
              }`}
            >
              {entry.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default SheetIndex;
