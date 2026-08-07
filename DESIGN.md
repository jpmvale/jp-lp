---
name: JPMV-01
description: A software engineer's portfolio built as the data sheet of the component being evaluated, printed on two plates.
colors:
  stock: "#e7e6e0"
  stock-sunk: "#dedcd4"
  ink: "#16181a"
  ink-secondary: "#4a4f52"
  graphite: "#5f6467"
  rule: "#c3c2ba"
  rule-strong: "#9a9993"
  diazo: "#23368f"
  stamp: "#a33a26"
  blueprint-stock: "#0e2b4a"
  blueprint-stock-sunk: "#0a2340"
  blueprint-ink: "#e9eef4"
  blueprint-ink-secondary: "#b9c8da"
  blueprint-graphite: "#8ba3bd"
  blueprint-rule: "#25476d"
  blueprint-rule-strong: "#3d6390"
  blueprint-diazo: "#a8dcf7"
  blueprint-stamp: "#f2a950"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 10.5vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "wdth 118"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.6vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "wdth 112"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  caption:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  control:
    fontFamily: "Chivo Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.16em"
  micro:
    fontFamily: "Chivo Mono, ui-monospace, monospace"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.14em"
  label:
    fontFamily: "Chivo Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.14em"
  data:
    fontFamily: "Chivo Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.04em"
    fontFeature: "tabular-nums"
rounded:
  none: "0"
  callout: "9999px"
spacing:
  gutter: "clamp(1rem, 4vw, 3.5rem)"
  section: "4rem"
  section-lg: "6rem"
  row: "0.75rem"
components:
  button-primary:
    backgroundColor: "{colors.diazo}"
    textColor: "{colors.stock}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.25rem"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
  button-secondary:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 1.25rem"
    typography: "{typography.label}"
  button-secondary-hover:
    backgroundColor: "{colors.stock-sunk}"
    textColor: "{colors.ink}"
  field-cell:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.625rem 1rem"
  callout-badge:
    backgroundColor: "{colors.diazo}"
    textColor: "{colors.stock}"
    rounded: "{rounded.callout}"
    size: "20px"
---

# Design System: JPMV-01

## Overview

**Creative North Star: "The Component Data Sheet"**

A hiring manager reading this page is doing what an engineer does with a data sheet: deciding whether a part fits their system. So the page *is* the data sheet. It carries a designation and a revision number, a ruled title block, numbered specification sections, a functional block diagram, a characteristics table, and a revision history. Nothing is decorative that could be informational instead.

The title block's revision counts editions of **the sheet**, and `PART.revision` and `PART.lastRevision` move together as one fact — a revision number carrying a stale date is the drawing-office error a title block exists to prevent. It is deliberately *not* the same sequence as the `rev` on each history row: those number the roles (01–07). The two read alike and are meant to disagree, because the sheet gets revised without the career changing.

The material is reprographic, and it exists as **two plates of the same drawing**. The default is whiteprint: the pale, cool-grey stock that engineering drawings were copied onto, printed in diazo blue-black line, read in daylight at a desk. Under `prefers-color-scheme: dark` the sheet reprints as cyanotype: Prussian blue ground, paper-white line, and the amber grease pencil that draughtsmen marked revisions with. Blue stops being the signal and becomes the ground.

This is the load-bearing distinction: the dark scheme is **not an inverted theme**, it is the other printing process for the same document. Neither plate glows, gradients, or floats. Depth comes from hairline rules and tonal recesses, the way it does on paper.

This world was chosen as a replacement for, and anti-reference to, two things: the near-black portfolio with a neon accent and glowing card edges that this project shipped before, and the warm-cream serif-display portfolio that is its predictable opposite. Neither may return — and the cyanotype plate exists precisely so the dark scheme never drifts back into the first one.

**Key Characteristics:**
- Two plates of one drawing: whiteprint by day, cyanotype under a dark scheme, chosen by the OS with no toggle
- One ground, one line colour, one signal colour, one stamp colour — per plate
- Zero corner radius on every surface; only the numbered call-out badge is round
- Hairline rules do the work that cards and shadows do elsewhere
- Monospace is reserved for data: part numbers, dates, stacks, table values, field labels
- Section numbers (1–6) are navigation, not ornament; there are no sub-sections, so no decimal

## Colors

A printed palette: one paper, one ink, one line colour, and two colours that only ever mark something.

### Primary
- **Diazo Blue** (`#23368f`): the reprographic line colour. It marks the live signal path in the block diagram, the primary action, links, active navigation, section numbers, and call-out badges. It never fills a region.

### Secondary
- **Revision Stamp** (`#a33a26`): the red of a revision stamp. Used only to mark what is current: the revision number in the title block and index, the revision code of the active role, the availability marker. Three or four instances on the whole page.

### Neutral
- **Whiteprint Stock** (`#e7e6e0`): the page ground. Every surface is this colour unless it is deliberately recessed.
- **Sunk Stock** (`#dedcd4`): tonal recess. Table zebra striping, row hover, the well behind the portrait, control-plane blocks in the diagram.
- **Ink** (`#16181a`): headings, names, table values, data-plane strokes.
- **Secondary Ink** (`#4a4f52`): body prose and field labels (7.4:1 on stock).
- **Graphite** (`#5f6467`): small mono metadata — symbol codes, locations, past revision numbers, control-plane strokes (4.8:1 on stock; it was lightened once and failed contrast, so this value is a floor, not a preference).
- **Rule** (`#c3c2ba`) and **Strong Rule** (`#9a9993`): hairline dividers and sheet borders. Lines only, never text.

### Plate 2 — Cyanotype

Every role above is re-cast, never inverted mechanically. The whole flip happens by redefining the same nine custom properties inside one `@media (prefers-color-scheme: dark)` block; no component carries a dark variant.

- **Prussian Ground** (`#0e2b4a`) and **Sunk Ground** (`#0a2340`): the exposed blue of a cyanotype. Takes over the `stock` roles.
- **Paper Line** (`#e9eef4`, 12.2:1) and **Soft Line** (`#b9c8da`, 8.3:1): where the emulsion washed out. Takes over `ink` and secondary ink.
- **Blue Graphite** (`#8ba3bd`, 5.5:1): small mono metadata and the diagram's control plane.
- **Chalk Cyan** (`#a8dcf7`, 9.6:1): the signal role. Blue is the ground now, so the highlighted line is the palest one.
- **Grease Pencil Amber** (`#f2a950`, 7.2:1): the revision mark. Red would vanish into Prussian blue; amber is what was actually used on blueprints.
- **Blue Rule** (`#25476d`) and **Strong Blue Rule** (`#3d6390`): hairlines, at the same low ratios their whiteprint counterparts hold.

### Named Rules

**The Marking Rule.** Diazo and Stamp mark; they never fill. No coloured panel, no coloured section background, no tinted card. If a colour is covering area rather than pointing at something, it is wrong.

**The Borrowed Colour Rule.** Exactly two things on this sheet carry colour that is not the system's: the portrait, and the product favicons at 24px. Both are borrowed identity, not decoration — they belong to something that exists outside this page, they stay small, they stay bounded, and nothing else earns the exemption.

**The Inked Mark Rule.** An organisation's logo is never borrowed colour. It ships as a CSS `mask-image` painted with `currentColor`, so it prints in whichever ink the plate is using and needs no second variant, no white knockout, and no chip behind it. That admits only real vectors: a raster cannot be masked, so an organisation with no published vector gets its initials instead, and the sheet never mixes an inked logo with a colour one.

**The One Stamp Rule.** The stamp colour — red on whiteprint, amber on cyanotype — appears only on what is currently true. The moment it decorates, it stops meaning "current".

**The Two Plates Rule.** A new colour is not a colour until it exists on both plates and both values have been measured against their own ground. The dark scheme is reached only by redefining the nine root custom properties; a `dark:` utility or a second component variant means the plate metaphor has been abandoned.

## Typography

**Display Font:** Archivo (variable, `wdth` axis enabled)
**Body Font:** Archivo
**Label/Mono Font:** Chivo Mono

**Character:** Two faces from one drawing office. Archivo is a workhorse grotesk with a width axis, so headings widen (`wdth` 112–118) rather than reaching for a second family; it gives the sheet its industrial, drawn-with-a-straightedge voice. Chivo Mono, its monospaced sibling, carries every value an engineer would read off the page.

### Hierarchy
- **Display** (600, `clamp(2.75rem, 10.5vw, 6rem)`, 0.92, `-0.035em`, `wdth` 118, uppercase): the name, once, at the top of sheet 1.
- **Headline** (600, `clamp(1.375rem, 2.6vw, 2rem)`, 1.05, `-0.02em`, `wdth` 112, uppercase): specification section titles, always preceded on the same baseline by their mono section number.
- **Body** (400, 1.0625–1.125rem, 1.65): prose, held to a 68ch measure. Also the expanded summary inside a revision row.
- **Title** (500, 0.9375rem): row headers in the characteristics table, feature-list items, the position line in a revision row, application notes.
- **Caption** (400, 0.875rem): the figure note beside the portrait, footer prose, the base size of table cells.
- **Data** (400, 0.8125rem, tabular figures): Chivo Mono. Table values, dates, stacks, addresses.
- **Control** (400, 0.75rem, `0.16em`, uppercase): Chivo Mono on buttons and symbol codes.
- **Label** (400, 0.6875rem, `0.14em`, uppercase): Chivo Mono field labels and figure captions.
- **Micro** (500, 0.625rem, `0.14em`, uppercase): Chivo Mono table column headers, the smallest type on the sheet.

### Named Rules

**The Measurement Rule.** Monospace is for things that are measured, counted, coded, or dated. It is never used for prose, and never as a costume for "technical".

**The Numbered Heading Rule.** Every specification heading is a plain integer in mono diazo followed by the title on the same baseline, rendered by the shared `SectionHeading` component and numbered from the `SECTIONS` record. The number is a cross-reference, so it is never stacked above the heading as a label — and it stays an integer until the sheet actually grows sub-sections.

## Layout

A single centred sheet, `max-width: 1440px`, with a fluid gutter (`clamp(1rem, 4vw, 3.5rem)`). Sections are separated by a full-bleed strong hairline and breathe at `4rem` vertical (`6rem` from `lg`), with the space above a heading always exceeding the space below it.

Within a section the working grid is 12 columns from `lg`. The title sheet runs 7/5 (prose and actions against features and the package figure); contact runs 8/4 (channel table against the availability block). Below `lg` everything stacks in source order; nothing is reordered on the way down.

The title block is a `grid` of field cells: five across at `lg`, three at `sm`, two on phones, with cells carrying both a right and a bottom hairline so the strip reads as a ruled block at every width.

Wide content never widens the page. Tables and the block diagram sit in their own `overflow-x: auto` containers with a `min-width`; the document itself has no horizontal scroll at 390px.

## Elevation & Depth

**There are no shadows in this system.** Not one. Depth is drawn, exactly as it is on a print: a hairline (`1px solid var(--rule)`) separates, a strong hairline (`var(--rule-strong)`) bounds, a tonal recess (`var(--stock-sunk)`) sinks, and corner registration ticks mark a bounded figure. Anything that needs to feel raised is instead bounded.

### Named Rules

**The Drawn-Depth Rule.** If an element needs separating, draw a line or sink the tone. Never add a shadow, a glow, a blur, or a gradient. A `box-shadow` anywhere in this project is a defect.

## Shapes

Zero radius, universally: buttons, figures, tables, blocks in the diagram, the nav bar. The single exception is the numbered call-out badge, a full circle, because it is a call-out and circles are what call-outs are. Bounded regions carry the `corner-ticks` treatment — 10px registration marks at the top-left and bottom-right — which is the system's signature silhouette.

Borders come in two weights only: `1px var(--rule)` for internal division and `1px var(--rule-strong)` for the edge of a bounded object. Control-plane elements in the diagram use `1px dashed var(--graphite)` — dashing, not colour, is what makes something secondary here.

## Components

### Buttons
- **Shape:** square (0 radius), never full-width.
- **Primary:** Diazo Blue fill, stock text, `0.75rem 1.25rem` padding, mono uppercase at `0.16em` tracking.
- **Hover / Focus:** background shifts to Ink on hover; focus shows a 2px Diazo outline offset 2px. No transform, no lift.
- **Secondary:** stock ground with a strong hairline border; hover darkens the border to Ink and sinks the fill to Sunk Stock.

### Tables (`.spec-table`)
The system's workhorse; it replaces cards entirely. Mono uppercase column headers at `0.625rem` over a strong hairline; rows divided by hairlines; even rows tinted with Sunk Stock at 55%. Row headers are set in Archivo at `0.9375rem`; values in Chivo Mono. Minimum width plus a scrolling container, never reflowed into stacked cards.

### Figures
A bounded region with a strong hairline border, `corner-ticks`, and a mono caption reading `Fig. N — Title` either below (diagram) or beside (portrait). Photography ships **unfiltered, in its original colour, on both plates** — an owner decision that overrides the earlier halftone and cyanotype treatments. The photograph is the one element allowed to be full colour; the hairline frame and the mono caption are what hold it inside the sheet.

### Navigation (`SheetIndex`)
A sticky ruled strip, not a floating bar: stock ground, strong hairline underneath, hairline dividers around the designation block and the language stamp. Items are mono uppercase; the active item carries a 2px Diazo bottom border and its section number turns Diazo. Section numbers hide below `md`; the designation block hides below `md`; the item strip scrolls horizontally under a right-edge mask so a cut item reads as scrollable rather than broken.

### Disclosure rows (`RevisionHistory`)
Full-width hairline-divided rows that expand in place. The toggle is a drawn SVG plus/minus in hairline weight, never a glyph or an icon-font character. Expanding a row reveals a **manufacturer mark**: a hairline box 44px tall, holding either the organisation's logo — inked through a CSS mask, width following the logo's own aspect — or, where no vector exists, its initials in mono in a 44px square. The location sits beneath it. Marks are revealed one at a time, which is what makes a mixed set legible: no two marks are ever compared side by side.

Logo provenance (`public/logos/orgs/`): Melhor Envio and Tegra from each company's own site; Senac from Wikimedia Commons (`Senac logo.svg`, public domain as to copyright, trademark retained); Vale and Jazida lifted from the live DOM of their own sites, where each is inlined as `<svg>` rather than served as a file — which is why an earlier hunt through asset paths and JS bundles concluded, wrongly, that neither published a vector. Only EducVR takes initials now, its domain having stopped resolving. Use is nominative — identifying a former employer — and each file is stored verbatim minus authoring metadata. On phones the row restacks to company, position, then period, each on its own line; the period never wraps mid-range.

### Application entries (`Applications`)
Hairline-divided rows on a 3/6/3 grid, never cards. Left holds the part-style designation (`APP-01`) in mono graphite, then the product's own favicon at 24px in **full colour** beside the project name at 1.375rem widened to 108%, and a stamp-coloured square beside the operating status. The favicons are copied verbatim from each product's repository (`public/logos/`), so the mark on this sheet is the same mark in the product's browser tab; only their internal comments are stripped. Centre holds two paragraphs: what it is, then the engineering that is actually interesting about it. Right holds the stack in mono and a small definition list of references. A reference with no address renders as a plain graphite word ("closed") instead of a dead link, and the live-URL row is omitted entirely until a real URL exists — the sheet never shows a link it cannot honour.

### Block diagram (signature)
An inline SVG on a 5mm drafting grid, in two planes. The **data plane** is `1.5px` solid Ink with solid arrowheads. The **control plane** is `1px` dashed Graphite with matching dashed blocks. Blocks are square, labelled in mono uppercase at 13px with `0.08em` tracking, and carry circular Diazo call-out badges keyed to the numbered application notes below.

### Named Rules

**The One Motion Rule.** The page has exactly one authored motion: a Diazo dash travelling the block diagram's **data plane**, leg for leg — in from the intent, up to the model and back, out through the tools to the systems, then home to the result (`stroke-dashoffset`, 1.8s linear). The overlay mirrors the data plane exactly, so the rule the reader infers is exact: the data plane moves, the control plane does not. The legs are staggered so the signal reads as travelling rather than every edge pulsing at once, by the dash period divided by the leg count — 12 units / 8 legs = 1.5, or 0.1125s — which puts exactly one wave on the circuit and no two legs in the same phase. **Adding or removing a leg requires recomputing that step**; carrying an old one over lands two legs in identical phase and visibly breaks the flow mid-circuit. The loop is paused by `animation-play-state` whenever the figure is off screen, and holds its position rather than resetting. There are no scroll reveals, no entrance animations, no hover lifts. `prefers-reduced-motion` freezes every leg into a static dashed line.

## Do's and Don'ts

### Do:
- **Do** carry every new value in a ruled table or a title-block field cell; the table is this system's card.
- **Do** bound a new figure with a strong hairline plus `corner-ticks`, and caption it `Fig. N — Title` in a mono label.
- **Do** widen Archivo (`font-stretch` 112–118%) for display and headline weight instead of introducing a second display family.
- **Do** keep body prose inside the 68ch measure and set every measured value in Chivo Mono with tabular figures.
- **Do** keep small mono metadata at Graphite (`#5f6467` on whiteprint, `#8ba3bd` on cyanotype); those values are the 4.5:1 floor on their own ground.
- **Do** give any new wide element its own `overflow-x: auto` container with a `min-width`.
- **Do** reach the dark scheme only by redefining the root custom properties, and re-measure contrast on the blue ground whenever one changes.
- **Do** ship photographs in their original colour on both plates, framed by a hairline and a mono caption.
- **Do** ink an organisation's logo through a CSS mask with `currentColor`, and fall back to initials the moment only a raster exists.

### Don't:
- **Don't** add a shadow, glow, blur, gradient, or gradient text anywhere. The previous identity was built from them and was replaced for it.
- **Don't** introduce a corner radius. Square is the form language; the call-out badge is the only circle.
- **Don't** fill a region with Diazo or Stamp. They mark; they do not cover.
- **Don't** rebuild content as same-size icon-plus-heading-plus-text cards. Rows, tables and ruled blocks carry structure here.
- **Don't** set prose in Chivo Mono, or use monospace to signal "technical".
- **Don't** use a Unicode glyph or emoji as an icon; draw it as inline SVG at hairline weight.
- **Don't** add a second animation. The diagram's travelling dash is the page's one motion.
- **Don't** render the dark scheme as neutral greys with a coloured accent. That is the identity this page replaced; the cyanotype exists so the dark plate cannot drift back into it.
- **Don't** ship a theme toggle. The plate follows `prefers-color-scheme`; the reader's system already answered.
