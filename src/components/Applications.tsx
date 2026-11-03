"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS, PROJECTS_PER_PAGE } from "@/lib/record";
import SectionHeading from "@/components/SectionHeading";

const Applications = () => {
  const { d } = useLanguage();
  const s = d.sProjects;
  const [page, setPage] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const pages = Math.ceil(PROJECTS.length / PROJECTS_PER_PAGE);
  const visible = PROJECTS.slice(page * PROJECTS_PER_PAGE, (page + 1) * PROJECTS_PER_PAGE);
  const pad = (n: number) => String(n).padStart(2, "0");

  /*
   * Turning the page keeps the reader on the list: if its top has scrolled out of
   * view (the pager sits at the bottom of five tall rows), bring it back, so the
   * new first product is what they see rather than the middle of the next page.
   */
  const goTo = (next: number) => {
    setPage(next);
    const top = listRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) {
      listRef.current?.scrollIntoView({ block: "start" });
    }
  };

  return (
    <section id="aplicacoes" className="scroll-mt-14 border-t border-rule-strong">
      <div className="mx-auto max-w-[1440px] px-[var(--gutter)] py-16 lg:py-24">
        <SectionHeading id="aplicacoes">{s.title}</SectionHeading>
        <p className="measure mt-6 text-[1.0625rem] leading-[1.65] text-ink-2 sm:text-lg">
          {s.lead}
        </p>

        <ul
          ref={listRef}
          id="aplicacoes-lista"
          className="mt-10 scroll-mt-20 border-t border-rule-strong"
        >
          {visible.map((project) => {
            const copy = s.projects[project.id];

            return (
              <li
                key={project.id}
                className="grid grid-cols-1 gap-x-10 gap-y-6 border-b border-rule py-8 lg:grid-cols-12 lg:py-10"
              >
                <div className="lg:col-span-3">
                  <p className="mono text-[0.75rem] tracking-[0.14em] text-graphite">
                    {project.code}
                  </p>
                  <h3 className="mt-2 flex items-center gap-2.5 text-[1.375rem] font-semibold leading-tight text-ink [font-stretch:108%]">
                    <Image
                      src={project.logo}
                      alt=""
                      width={24}
                      height={24}
                      unoptimized
                      className="h-6 w-6 shrink-0"
                    />
                    {project.name}
                  </h3>
                  <p className="mt-3 flex items-baseline gap-2">
                    <span aria-hidden className="inline-block h-2 w-2 shrink-0 bg-stamp" />
                    <span className="mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-2">
                      {s.status}
                    </span>
                  </p>
                </div>

                <div className="max-w-[62ch] lg:col-span-6">
                  <p className="text-[1.0625rem] leading-relaxed text-ink">{copy.summary}</p>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-2">{copy.note}</p>
                </div>

                <div className="lg:col-span-3">
                  <p className="field-label">{s.stackLabel}</p>
                  <p className="mono mt-2 text-[0.8125rem] leading-relaxed text-ink">
                    {project.stack.join("  ·  ")}
                  </p>

                  <dl className="mt-5 space-y-2">
                    <div className="flex items-baseline gap-3">
                      <dt className="field-label w-[4.5rem] shrink-0">{s.sourceLabel}</dt>
                      <dd className="mono text-[0.8125rem]">
                        {project.repo ? (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-diazo underline decoration-rule-strong decoration-1 underline-offset-4 transition-colors hover:decoration-diazo"
                          >
                            {project.repo.replace("https://github.com/", "")}
                          </a>
                        ) : (
                          <span className="text-graphite">{s.privateSource}</span>
                        )}
                      </dd>
                    </div>

                    {project.url && (
                      <div className="flex items-baseline gap-3">
                        <dt className="field-label w-[4.5rem] shrink-0">{s.liveLabel}</dt>
                        <dd className="mono text-[0.8125rem]">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-diazo underline decoration-rule-strong decoration-1 underline-offset-4 transition-colors hover:decoration-diazo"
                          >
                            {project.url.replace(/^https?:\/\//, "")}
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </li>
            );
          })}
        </ul>

        {pages > 1 && (
          <nav
            aria-label={s.pager.label}
            className="mt-6 flex flex-wrap items-center justify-between gap-4"
          >
            <p className="mono text-[0.75rem] uppercase tracking-[0.14em] text-graphite" aria-live="polite">
              {s.pager.page} {pad(page + 1)} {s.pager.of} {pad(pages)}
            </p>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => goTo(page - 1)}
                disabled={page === 0}
                aria-controls="aplicacoes-lista"
                className="mono h-9 border border-rule-strong px-3 text-[0.75rem] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-stock-sunk disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-graphite disabled:opacity-50"
              >
                ← {s.pager.prev}
              </button>
              {Array.from({ length: pages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={i === page ? "page" : undefined}
                  aria-controls="aplicacoes-lista"
                  aria-label={`${s.pager.page} ${i + 1}`}
                  className={`mono -ml-px h-9 w-10 border border-rule-strong text-[0.75rem] tracking-[0.14em] transition-colors ${
                    i === page ? "bg-diazo text-stock" : "text-ink hover:bg-stock-sunk"
                  }`}
                >
                  {pad(i + 1)}
                </button>
              ))}
              <button
                type="button"
                onClick={() => goTo(page + 1)}
                disabled={page === pages - 1}
                aria-controls="aplicacoes-lista"
                className="mono -ml-px h-9 border border-rule-strong px-3 text-[0.75rem] uppercase tracking-[0.14em] text-ink transition-colors hover:bg-stock-sunk disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:text-graphite disabled:opacity-50"
              >
                {s.pager.next} →
              </button>
            </div>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Applications;
