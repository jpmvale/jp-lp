import { sectionNumber, type SectionId } from "@/lib/record";

/**
 * A specification heading: the section number in mono diazo, then the title on
 * the same baseline. The number is a cross-reference, never a label stacked above.
 */
const SectionHeading = ({ id, children }: { id: SectionId; children: React.ReactNode }) => (
  <h2 className="spec-heading flex items-baseline gap-3">
    <span className="mono text-base font-normal tracking-[0.1em] text-diazo">
      {sectionNumber(id)}
    </span>
    {children}
  </h2>
);

export default SectionHeading;
