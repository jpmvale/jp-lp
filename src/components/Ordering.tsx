"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { CHANNELS, PART } from "@/lib/record";
import SectionHeading from "@/components/SectionHeading";

const Ordering = () => {
  const { d } = useLanguage();

  return (
    <section id="contato" className="scroll-mt-14 border-t border-rule-strong">
      <div className="mx-auto max-w-[1440px] px-[var(--gutter)] py-16 lg:py-24">
        <SectionHeading id="contato">{d.s5.title}</SectionHeading>
        <p className="measure mt-6 text-[1.0625rem] leading-[1.65] text-ink-2 sm:text-lg">
          {d.s5.lead}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="overflow-x-auto border-y border-rule-strong">
              <table className="spec-table min-w-[520px]">
                <thead>
                  <tr>
                    <th scope="col" className="w-[16%]">
                      {d.s5.columns.code}
                    </th>
                    <th scope="col" className="w-[26%]">
                      {d.s5.columns.channel}
                    </th>
                    <th scope="col">{d.s5.columns.address}</th>
                  </tr>
                </thead>
                <tbody>
                  {CHANNELS.map((channel) => (
                    <tr key={channel.id}>
                      <td className="mono text-[0.75rem] tracking-[0.12em] text-graphite">
                        {channel.code}
                      </td>
                      <th scope="row" className="text-ink">
                        {d.s5.channels[channel.id]}
                      </th>
                      <td>
                        <a
                          href={channel.href}
                          target={channel.href.startsWith("http") ? "_blank" : undefined}
                          rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="mono text-[0.8125rem] text-diazo underline decoration-rule-strong decoration-1 underline-offset-4 transition-colors hover:decoration-diazo"
                        >
                          {channel.value}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="corner-ticks relative border border-rule-strong lg:col-span-4">
            <div className="border-b border-rule-strong px-4 py-3">
              <span className="field-label text-ink">{d.s5.availability}</span>
            </div>
            <div className="px-4 py-5">
              <p className="flex items-baseline gap-2 text-[1.0625rem] font-medium text-ink">
                <span aria-hidden className="inline-block h-2 w-2 shrink-0 bg-stamp" />
                {PART.location}
              </p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">
                {d.s5.availabilityNote}
              </p>
              <a
                href="mailto:jpmvale@gmail.com"
                className="mono mt-6 inline-block bg-diazo px-5 py-3 text-[0.75rem] uppercase tracking-[0.16em] text-stock transition-colors hover:bg-ink"
              >
                {d.titleBlock.contact}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Ordering;
