"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { PROJECTS } from "@/lib/record";
import SectionHeading from "@/components/SectionHeading";

const Applications = () => {
  const { d } = useLanguage();
  const s = d.sProjects;

  return (
    <section id="aplicacoes" className="scroll-mt-14 border-t border-rule-strong">
      <div className="mx-auto max-w-[1440px] px-[var(--gutter)] py-16 lg:py-24">
        <SectionHeading id="aplicacoes">{s.title}</SectionHeading>
        <p className="measure mt-6 text-[1.0625rem] leading-[1.65] text-ink-2 sm:text-lg">
          {s.lead}
        </p>

        <ul className="mt-10 border-t border-rule-strong">
          {PROJECTS.map((project) => {
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
      </div>
    </section>
  );
};

export default Applications;
