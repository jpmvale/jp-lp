# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: technical recruiters and hiring managers (Brazil and international, remote roles) evaluating João Pedro Vale for a senior software engineering position. They arrive from LinkedIn or a job application, scan for seniority, scale of systems handled, and stack fit, usually in under a minute.

Secondary: prospective clients for project work and consulting, who need proof of delivery and an obvious way to make contact.

Order of priority confirmed by the owner: recruiter first, client second.

## Product Purpose

A single-page professional portfolio for João Pedro Vale. Success is a recruiter or client finishing the page understanding his seniority, what kinds of systems he builds, and reaching out — by email, WhatsApp, or LinkedIn.

## Positioning

Confirmed by the owner: position him as a **Software Engineer / Architect** — a broad senior position (distributed systems, scale, architecture), with AI agent engineering as one of the fronts he works in, not as the sole identity.

## Operating Context

Visitors read the page on desktop and mobile, often between other tabs, sometimes in English or Spanish rather than Portuguese. The page must survive being skimmed. It is the destination of a LinkedIn profile link and of direct job-application links.

## Capabilities and Constraints

- Next.js 15 (App Router) + React 19 + Tailwind CSS v4 + shadcn/ui, framer-motion, lucide-react. Deployed on Vercel.
- Trilingual: Portuguese (default), English, Spanish, via a custom `LanguageContext` with a flat key/value dictionary. All three languages must be kept.
- Static site: no backend, no database, no contact form submission endpoint. Contact happens through mailto/tel/external links.
- The owner asked for an aggressive content cut: fewer sections, condensed timeline, no soft-skills section, no percentage skill bars.
- The page carries a projects section (§3, "Typical applications") covering the owner's **own products only**. Client work is deliberately excluded from it.
- **Client naming is not permitted.** Where client work is ever described, it is described by sector ("a management system for an allergy clinic"), never by the client's name. Confirmed by the owner on 2026-08-07.

## Brand Commitments

- Name: João Pedro Vale.
- Existing owner-supplied assets: `public/profile.jpg`, `public/profile_2.jpg`, `public/favicon.svg`.
- Binding visual constraint stated by the owner for this redesign: the current look is too bright, too colorful, and feels like information dumped on the screen. Restraint and clarity are requirements, not preferences.

## Evidence on Hand

Real, verified facts (from the owner's own site content):

**Employment history**
- Trafilea — AI Expert, remote (Montevideo/UY, foreign company), Mar 2026 – present (confirmed by the owner 2026-11-02). Works on Trafiflow, Trafilea's multi-tenant e-commerce SaaS platform: automated store provisioning (per-store Resource Groups via GitHub Actions + Terraform/Terragrunt, readiness checks, bind integrating CloudFront SaaS Manager, ALB, ECS and auth); tenancy/onboarding orchestration service (Outbox pattern, async workers, concurrency control, pool of pre-provisioned RGs); core domain microservices (carts, pricing — BOGO, volume discounts, promotion priority —, auth with Cognito + RBAC, Shopify OAuth connector); Terraform platform stacks, ECS deploys, AWS quotas, go-live readiness; observability with Datadog/CloudWatch. Stack: Go, TypeScript/Node.js, gRPC (Buf/Protobuf), AWS, Terraform/Terragrunt, GitHub Actions, PostgreSQL, Shopify API, Datadog, EDA. Internal repository/service names are not published on the site.
- Melhor Envio (LWSA) — Senior Developer, remote (Pelotas/RS), May 2024 – Mar 2026. Tracking of millions of daily e-commerce deliveries; event-driven architecture for asynchronous communication; robust services integrating private carrier APIs; highly scalable system. Stack: NestJS, MongoDB, AWS, Golang, Laravel, event-driven, async.
- Tegra — Backend Developer, remote (São Paulo/SP), May 2023 – May 2024. Software house; projects from scratch; crawlers, APIs, microservices, monoliths, serverless; frontend when needed. Stack: NestJS, AWS, PostgreSQL, MongoDB, React, web scraping.
- Jazida — Backend Developer, remote (Brasília/DF), May 2021 – May 2023. Product centralizing Brazil's public mining data; Node.js monolith plus microservices; scrapers for the Diário Oficial da União; extraction of mining-process records from government sources. Stack: Node.js, Python, Golang, Azure, web scraping, data mining.
- Vale S/A — Full Stack Developer, São Luís/MA, Jan 2020 – May 2021. Management systems for railway engineers; railway data analysis with Python/Pandas; Node.js + React; maintenance of .NET Framework/Core systems.
- Vale S/A — Development Intern, São Luís/MA, Jan 2019 – Jan 2020. .NET Framework applications; plain HTML/CSS/JS interfaces; applications for third parties; data analysis with Python.
- Senac Maranhão — Game Development Teacher, São Luís/MA, Apr 2018 – Jan 2019. Unity 3D classes; talks at malls, schools and colleges; fixed classes building games from scratch.
- EducVR — Freelance Game Developer, São Luís/MA, Mar 2017 – Nov 2018. VR scenarios in Unity 3D with Google Cardboard; Physics I/II/III lab simulations.

**Background**
- Self-taught developer; started Computer Engineering at UEMA in 2016; first languages C and Java; participated in game-development labs.
- 7+ years of professional experience; 7 years of undergraduate and master's study.
- Languages: Portuguese (native), English (fluent), Spanish (intermediate).

**AI agent engineering** — confirmed by the owner in the redesign interview:
- Has built and operates agents running in production at work.
- Has built agent systems in his own and freelance projects.
- Works with MCP (Model Context Protocol), tool calling, and agent orchestration.
- Open/undecided: no specific company, client, project name, or metric has been authorized for the agent work. Describe it by capability. Do **not** attribute agents to Melhor Envio or any other named employer, and do not invent agent project names, user counts, or benchmarks.

**Own products in operation** — confirmed by the owner on 2026-08-07 as running with real users; descriptions drawn from the owner's own repository READMEs:
- **coda** (private repo) — a social network for rating media, "a Letterboxd for music": scores 0.0–10.0, reviews, the history of how an opinion on a work changes, and a feed of what the people you follow are rating. Starts with music at three granularities (artist, album, track), designed to become multi-media. NestJS API plus a background worker sharing domain modules, Next.js front end, canonical catalogue imported on demand from MusicBrainz, metrics and logs through Grafana Alloy.
- **kindred** (public: github.com/jpmvale/kindred) — a register of people and their ties that derives everyone's degree of kinship from one central person, draws a navigable family tree, and collects birthdays into a calendar. Monorepo: NestJS + Prisma over PostgreSQL, React/Vite front end, schema and API contract in shared packages.
- **expense-analyzer** (public: github.com/jpmvale/expense-analyzer) — a credit-card spending dashboard: CSV statements into MongoDB, a NestJS API aggregating by month and category, a React front end with tables and charts. The parser is issuer-agnostic (any CSV with date, description, amount); developed against Nubank exports. Separate extractor, API and web apps with versioned infrastructure.

All three run on the owner's own infrastructure under `imp-software.cloud` (see the private `vps-infra` repository), not on a PaaS. Production URLs supplied by the owner on 2026-08-07 and verified returning HTTP 200: coda.imp-software.cloud, kindred.imp-software.cloud, expenses.imp-software.cloud.

**Contact**
- Email jpmvale@gmail.com · Phone/WhatsApp +55 (98) 99245-1236 · São Luís, MA, available for remote.
- GitHub github.com/jpmvale · LinkedIn linkedin.com/in/joao-pedro-vale · Twitter twitter.com/jpmvale.

**Absences future work must not fabricate:** no testimonials, no client logos, no case studies, no published open-source showcase, no CV file currently in `public/`, no percentage-based skill proficiencies that mean anything (the existing 79–96% numbers are invented and should not be carried forward).

## Product Principles

1. **Recruiter-scannable first.** A visitor who reads only headings and the first line of each section must still get the correct picture of his seniority and range.
2. **Every claim traceable.** Only facts the owner has confirmed appear on the page. Capability language over invented metrics.
3. **Range without noise.** Seven roles across eleven years, from VR to distributed delivery tracking, is the asset — but it must be presented as a coherent arc, not a wall of cards.
4. **Agents are a front, not a costume.** AI agent engineering gets real estate proportional to it being one of several senior competencies, framed by the engineering rigor behind it.
5. **Three languages, one voice.** Every string ships in PT, EN and ES; nothing hardcoded into a component.

## Accessibility & Inclusion

No product-specific standard was established by the owner. Baseline expectation: readable contrast (the current forced `#d1d5db` on near-black is a workaround, not a decision), keyboard-reachable navigation and links, and respect for `prefers-reduced-motion` given how much motion the incumbent page carries.
