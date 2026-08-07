"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ROLES } from "@/lib/record";
import SectionHeading from "@/components/SectionHeading";

const formatMonth = (value: string) => {
  const [year, month] = value.split("-");
  return `${month}/${year}`;
};

const RevisionHistory = () => {
  const { d } = useLanguage();
  const [open, setOpen] = useState<string | null>(ROLES[0].id);

  return (
    <section id="historico" className="scroll-mt-14 border-t border-rule-strong">
      <div className="mx-auto max-w-[1440px] px-[var(--gutter)] py-16 lg:py-24">
        <SectionHeading id="historico">{d.s4.title}</SectionHeading>
        <p className="measure mt-6 text-[1.0625rem] leading-[1.65] text-ink-2 sm:text-lg">
          {d.s4.lead}
        </p>

        <div className="mt-10 border-t border-rule-strong">
          {/* Column headers, mirrored by the fields inside each row on mobile. */}
          <div className="hidden grid-cols-[3.5rem_11rem_1fr_1fr_2rem] gap-4 border-b border-rule-strong px-1 py-2 md:grid">
            <span className="field-label">{d.s4.columns.rev}</span>
            <span className="field-label">{d.s4.columns.period}</span>
            <span className="field-label">{d.s4.columns.company}</span>
            <span className="field-label">{d.s4.columns.role}</span>
            <span className="sr-only">{d.s4.expand}</span>
          </div>

          <ul>
            {ROLES.map((role) => {
              const copy = d.s4.roles[role.id];
              const isOpen = open === role.id;
              const period = `${formatMonth(role.from)} — ${
                role.to ? formatMonth(role.to) : d.s4.present
              }`;

              return (
                <li key={role.id} className="border-b border-rule">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : role.id)}
                      aria-expanded={isOpen}
                      aria-controls={`rev-${role.id}`}
                      className="group grid w-full grid-cols-[3rem_1fr_1.5rem] items-baseline gap-x-4 px-1 py-4 text-left transition-colors hover:bg-stock-sunk md:grid-cols-[3.5rem_11rem_1fr_1fr_2rem]"
                    >
                      <span
                        className={`mono text-[0.8125rem] tracking-[0.1em] ${
                          role.to === null ? "text-stamp" : "text-graphite"
                        }`}
                      >
                        {role.rev}
                      </span>
                      <span className="mono hidden whitespace-nowrap text-[0.8125rem] tracking-[0.04em] text-ink-2 md:block">
                        {period}
                      </span>
                      <span className="min-w-0 md:contents">
                        <span className="block text-[1.0625rem] font-medium leading-tight text-ink [font-stretch:105%]">
                          {role.company}
                        </span>
                        <span className="mt-1 block text-[0.9375rem] leading-tight text-ink-2 md:mt-0">
                          {copy.title}
                        </span>
                        <span className="mono mt-1.5 block whitespace-nowrap text-[0.8125rem] tracking-[0.04em] text-ink-2 md:hidden">
                          {period}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className="relative top-1 justify-self-end text-graphite transition-colors group-hover:text-diazo"
                      >
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden>
                          <path d="M0.5 5.5H10.5" stroke="currentColor" strokeWidth="1.25" />
                          {!isOpen && (
                            <path d="M5.5 0.5V10.5" stroke="currentColor" strokeWidth="1.25" />
                          )}
                        </svg>
                      </span>
                    </button>
                  </h3>

                  {isOpen && (
                    <div
                      id={`rev-${role.id}`}
                      className="grid grid-cols-1 gap-x-4 gap-y-6 px-1 pb-8 pt-1 md:grid-cols-[3.5rem_11rem_1fr] md:pb-10"
                    >
                      <div className="hidden md:block" aria-hidden />
                      <p className="mono self-start text-[0.6875rem] uppercase leading-relaxed tracking-[0.12em] text-graphite">
                        {role.location}
                      </p>
                      <div className="max-w-[62ch]">
                        <p className="text-[1.0625rem] leading-relaxed text-ink-2">{copy.summary}</p>
                        <p className="field-label mt-5">{d.s4.techLabel}</p>
                        <p className="mono mt-2 text-[0.8125rem] leading-relaxed text-ink">
                          {role.tech.join("  ·  ")}
                        </p>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RevisionHistory;
