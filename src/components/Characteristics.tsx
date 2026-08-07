"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { CHARACTERISTICS } from "@/lib/record";
import SectionHeading from "@/components/SectionHeading";

const Characteristics = () => {
  const { d } = useLanguage();

  return (
    <section id="caracteristicas" className="scroll-mt-14 border-t border-rule-strong">
      <div className="mx-auto max-w-[1440px] px-[var(--gutter)] py-16 lg:py-24">
        <SectionHeading id="caracteristicas">{d.s3.title}</SectionHeading>
        <p className="measure mt-6 text-[1.0625rem] leading-[1.65] text-ink-2 sm:text-lg">
          {d.s3.lead}
        </p>

        <div className="mt-10 overflow-x-auto border-y border-rule-strong">
          <table className="spec-table min-w-[640px]">
            <thead>
              <tr>
                <th scope="col" className="w-[22%]">
                  {d.s3.columns.parameter}
                </th>
                <th scope="col" className="w-[10%]">
                  {d.s3.columns.symbol}
                </th>
                <th scope="col">{d.s3.columns.values}</th>
              </tr>
            </thead>
            <tbody>
              {CHARACTERISTICS.map((row) => (
                <tr key={row.id}>
                  <th scope="row" className="text-ink">
                    {d.s3.rows[row.id]}
                  </th>
                  <td className="mono text-[0.75rem] tracking-[0.1em] text-graphite">
                    {row.symbol}
                  </td>
                  <td>
                    <span className="mono text-[0.8125rem] leading-relaxed text-ink">
                      {row.values.join("  ·  ")}
                    </span>
                  </td>
                </tr>
              ))}
              <tr>
                <th scope="row" className="text-ink">
                  {d.s3.languagesRow}
                </th>
                <td className="mono text-[0.75rem] tracking-[0.1em] text-graphite">LNG</td>
                <td>
                  <span className="mono text-[0.8125rem] leading-relaxed text-ink">
                    {d.s3.languagesValue.join("  ·  ")}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Characteristics;
