"use client";

import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/contexts/LanguageContext";
import SectionHeading from "@/components/SectionHeading";

/**
 * True while the element is on screen. The diagram's dash is an endless loop and
 * has no business running behind the reader's scroll; the CSS pauses it when this
 * is false. Defaults to true so the flow is already moving if the observer never
 * runs — a diagram frozen by a failed script would read as a rendering bug.
 */
const useOnScreen = <T extends Element>(ref: React.RefObject<T | null>) => {
  const [onScreen, setOnScreen] = useState(true);

  useEffect(() => {
    const alvo = ref.current;
    if (!alvo || typeof IntersectionObserver === "undefined") return;

    const observador = new IntersectionObserver(
      ([entrada]) => setOnScreen(entrada.isIntersecting),
      { rootMargin: "120px" },
    );
    observador.observe(alvo);
    return () => observador.disconnect();
  }, [ref]);

  return onScreen;
};

interface BlockProps {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  tone?: "solid" | "control";
  callout?: number;
}

const Block = ({ x, y, w, h, label, tone = "solid", callout }: BlockProps) => (
  <g>
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      fill={tone === "control" ? "var(--stock-sunk)" : "var(--stock)"}
      stroke={tone === "control" ? "var(--graphite)" : "var(--ink)"}
      strokeWidth={tone === "control" ? 1 : 1.5}
      strokeDasharray={tone === "control" ? "5 4" : undefined}
    />
    <text
      className="mono"
      x={x + w / 2}
      y={y + h / 2}
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={13}
      letterSpacing="0.08em"
      fill="var(--ink)"
      style={{ textTransform: "uppercase" }}
    >
      {label.toUpperCase()}
    </text>
    {callout !== undefined && (
      <g>
        <circle cx={x + w - 1} cy={y + 1} r={10} fill="var(--diazo)" />
        <text
          className="mono"
          x={x + w - 1}
          y={y + 1}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={11}
          fill="var(--stock)"
        >
          {callout}
        </text>
      </g>
    )}
  </g>
);

const AgentDiagram = () => {
  const { d } = useLanguage();
  const figura = useRef<HTMLElement>(null);
  const naTela = useOnScreen(figura);
  const b = d.s2.blocks;

  return (
    <section id="agentes" className="scroll-mt-14 border-t border-rule-strong">
      <div className="mx-auto max-w-[1440px] px-[var(--gutter)] py-16 lg:py-24">
        <SectionHeading id="agentes">{d.s2.title}</SectionHeading>

        <div className="measure mt-6 space-y-5 text-[1.0625rem] leading-[1.65] text-ink-2 sm:text-lg">
          {d.s2.lead.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <figure
          ref={figura}
          data-onscreen={naTela}
          className="corner-ticks relative mt-12 border border-rule-strong"
        >
          <div className="sheet-ground overflow-x-auto">
            <svg
              viewBox="0 0 1000 440"
              role="img"
              aria-label={d.s2.diagramCaption}
              className="block h-auto w-full min-w-[760px]"
            >
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--ink)" />
                </marker>
                <marker
                  id="arrow-control"
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--graphite)" />
                </marker>
              </defs>

              {/* Data plane */}
              <g
                fill="none"
                stroke="var(--ink)"
                strokeWidth={1.5}
                markerEnd="url(#arrow)"
                shapeRendering="crispEdges"
              >
                <path d="M164 208 H252" />
                <path d="M448 196 H536" />
                <path d="M732 196 H820" />
                <path d="M820 220 H732" />
                <path d="M536 220 H448" />
                <path d="M252 232 H208 V362 H164" />
                <path d="M336 168 V104" />
                <path d="M364 104 V168" />
              </g>

              {/* Live signal: the one authored motion on this page. It mirrors the data
                  plane above, leg for leg, so the rule the reader infers is exact — the
                  data plane moves, the control plane does not.

                  ORDER IS LOAD-BEARING. The stagger that makes the signal read as
                  travelling is keyed to sibling position, not to geometry, and these are
                  in the order a request is served: in from the intent, up to the model
                  and back, out through the tools to the systems, then home to the result.
                  Reordering these lines reorders the flow. Adding or removing one
                  requires recomputing the stagger in globals.css — the phase step is
                  derived from the leg count. */}
              <g fill="none" stroke="var(--diazo)" strokeWidth={2.5}>
                <path className="trace-live" d="M164 208 H252" />
                <path className="trace-live" d="M336 168 V104" />
                <path className="trace-live" d="M364 104 V168" />
                <path className="trace-live" d="M448 196 H536" />
                <path className="trace-live" d="M732 196 H820" />
                <path className="trace-live" d="M820 220 H732" />
                <path className="trace-live" d="M536 220 H448" />
                <path className="trace-live" d="M252 232 H208 V362 H164" />
              </g>

              {/* Control plane */}
              <g
                fill="none"
                stroke="var(--graphite)"
                strokeWidth={1}
                strokeDasharray="5 4"
                markerEnd="url(#arrow-control)"
              >
                <path d="M326 336 V248" />
                <path d="M502 336 V300 H400 V248" />
                <path d="M694 336 V300 H660 V248" />
              </g>

              <Block x={16} y={176} w={148} h={64} label={b.input} />
              <Block x={252} y={168} w={196} h={80} label={b.orchestrator} />
              <Block x={252} y={44} w={196} h={60} label={b.model} />
              <Block x={536} y={168} w={196} h={80} label={b.tools} callout={1} />
              <Block x={820} y={168} w={164} h={80} label={b.systems} />
              <Block x={16} y={336} w={148} h={52} label={b.output} />
              <Block x={252} y={336} w={148} h={52} label={b.guardrails} tone="control" callout={4} />
              <Block x={428} y={336} w={148} h={52} label={b.evals} tone="control" callout={2} />
              <Block
                x={604}
                y={336}
                w={180}
                h={52}
                label={b.observability}
                tone="control"
                callout={3}
              />
            </svg>
          </div>
          <figcaption className="field-label border-t border-rule-strong px-4 py-3 text-ink">
            {d.s2.diagramCaption}
          </figcaption>
        </figure>

        <div className="mt-12">
          <h3 className="field-label border-b border-rule-strong pb-2 text-ink">
            {d.s2.notesTitle}
          </h3>
          <ol className="mt-2 grid grid-cols-1 md:grid-cols-2">
            {d.s2.notes.map((note, index) => (
              <li
                key={index}
                className="flex gap-4 border-b border-rule py-5 pr-0 md:odd:pr-8 md:even:pl-8 md:even:border-l"
              >
                <span
                  aria-hidden
                  className="mono mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-diazo text-[0.6875rem] text-stock"
                >
                  {index + 1}
                </span>
                <p className="text-[0.9375rem] leading-relaxed text-ink-2">{note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default AgentDiagram;
