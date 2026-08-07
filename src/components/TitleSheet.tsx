"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { PART } from "@/lib/record";
import SectionHeading from "@/components/SectionHeading";

const Field = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div className="border-b border-r border-rule px-3 py-2.5 last:border-r-0 sm:px-4 lg:border-b-0">
    <dt className="field-label">{label}</dt>
    <dd
      className={`mono mt-1 text-[0.8125rem] font-medium tracking-[0.04em] ${
        accent ? "text-stamp" : "text-ink"
      }`}
    >
      {value}
    </dd>
  </div>
);

const TitleSheet = () => {
  const { d } = useLanguage();
  const tb = d.titleBlock;

  return (
    <section id="descricao" className="scroll-mt-14">
      <div className="mx-auto max-w-[1440px] px-[var(--gutter)]">
        {/* Part name and designation — the thesis of the sheet. */}
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <h1 className="text-[clamp(2.75rem,10.5vw,6rem)] font-semibold uppercase leading-[0.92] tracking-[-0.035em] [font-stretch:118%]">
            João Pedro
            <br />
            Vale
          </h1>
          <p className="mono mt-5 max-w-[42ch] text-sm uppercase leading-relaxed tracking-[0.12em] text-ink-2 sm:text-[0.9375rem]">
            {tb.role}
          </p>
        </div>

        {/* Title block: the ruled field strip off a drawing sheet. */}
        <dl className="mt-10 grid grid-cols-2 border-y border-rule-strong [&>*:nth-last-child(-n+1)]:border-b-0 sm:grid-cols-3 sm:[&>*:nth-last-child(-n+3)]:border-b-0 lg:grid-cols-5">
          <Field label={tb.designation} value={PART.designation} />
          <Field label={tb.revision} value={PART.revision} accent />
          <Field label={tb.sheet} value={tb.sheetValue} />
          <Field label={tb.location} value={PART.location} />
          <Field label={tb.lastRevision} value={tb.lastRevisionValue} />
        </dl>

        {/* §1 General description · Features · Fig. 1 */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 pb-16 pt-12 lg:grid-cols-12 lg:pb-24">
          <div className="lg:col-span-7">
            <SectionHeading id="descricao">{d.s1.title}</SectionHeading>
            <div className="measure mt-6 space-y-5 text-[1.0625rem] leading-[1.65] text-ink-2 sm:text-lg">
              {d.s1.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="mono bg-diazo px-5 py-3 text-[0.75rem] uppercase tracking-[0.16em] text-stock transition-colors hover:bg-ink"
              >
                {tb.contact}
              </a>
              <a
                href="/cv.pdf"
                className="mono border border-rule-strong px-5 py-3 text-[0.75rem] uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink hover:bg-stock-sunk"
              >
                {tb.downloadCv}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="field-label border-b border-rule-strong pb-2 text-ink">
              {d.s1.featuresTitle}
            </h2>
            <ul className="mt-4">
              {d.s1.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex gap-3 border-b border-rule py-3 text-[0.9375rem] leading-snug text-ink"
                >
                  <span className="mono shrink-0 pt-0.5 text-[0.6875rem] tracking-[0.1em] text-graphite">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Fig. 1 — the portrait as the component's package photo. */}
            <figure className="corner-ticks relative mt-10 flex min-h-[186px] max-w-[26rem] items-stretch border border-rule-strong">
              <div className="relative w-[136px] shrink-0 self-stretch overflow-hidden border-r border-rule-strong bg-stock-sunk">
                <Image
                  src="/portrait.jpg"
                  alt="João Pedro Vale"
                  fill
                  sizes="136px"
                  className="object-cover object-[50%_38%]"
                  priority
                />
              </div>
              <figcaption className="flex flex-col justify-center px-4 py-4">
                <span className="field-label text-ink">{tb.figCaption}</span>
                <span className="mt-2 block text-[0.875rem] leading-snug text-ink-2">
                  {tb.figNote}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleSheet;
