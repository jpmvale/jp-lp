/**
 * Language-independent facts. Proper nouns, dates, stacks and addresses live
 * here so they are stated once; only prose is translated.
 * Every entry is confirmed product truth (see PRODUCT.md).
 */

/**
 * `revision` and `lastRevision` are ONE fact in two fields: the sheet's own
 * revision and the month it was cut. Never move one without the other — a
 * revision number with a stale date is the drawing-office error the whole title
 * block exists to prevent.
 *
 * The revision counts editions of THIS DOCUMENT, not jobs. It used to shadow the
 * newest role (both read 07) and the two drifted apart the moment the sheet was
 * revised without the career changing — which is exactly what happened in
 * 08/2026. Roles keep their own `rev` (01–08) for the history rows; that
 * sequence is unrelated to this one and they are meant to disagree.
 *
 * Bumping: next edit of substance is 10, and `lastRevision` moves to its month.
 */
export const PART = {
  designation: "JPMV-01",
  revision: "09",
  lastRevision: "2026-11",
  sheets: 6,
  location: "São Luís, MA — BR",
  since: 2017,
} as const;

export type RoleId =
  | "trafilea"
  | "melhorEnvio"
  | "tegra"
  | "jazida"
  | "valeFullStack"
  | "valeIntern"
  | "senac"
  | "educvr";

export interface Role {
  id: RoleId;
  rev: string;
  /**
   * Manufacturer mark, used wherever no vector exists. EducVR falls back here
   * because its domain is gone; Trafilea only until its mark is lifted from
   * the live DOM of trafilea.com (see the note on `logo`).
   */
  initials: string;
  /**
   * Organisation mark, used as a CSS mask and painted with currentColor, so it
   * prints in the plate's own ink on both schemes. Null for EducVR, and for
   * Trafilea until its vector is added.
   *
   * Vale and Jazida were both written off as "publishes no vector" — wrongly.
   * The search had looked for a *file*: asset paths, the JS bundle, Wikimedia.
   * Both sites inline the logo as `<svg>` in the DOM, so no path exists to
   * return 200 and none returns 404 either; the vector is there, rendered, and
   * invisible to a search for files. Read the rendered DOM before concluding an
   * organisation publishes nothing.
   *
   * Masking flattens every path to one colour, which is safe here only because
   * neither mark uses a white shape to knock a counter out of a darker one —
   * Vale's yellow stroke sits *over* the teal V rather than cutting into it, so
   * flattened it gives the solid V of Vale's own monochrome lockup. Check that
   * before adding a mark: a knockout survives as a blob.
   */
  logo: { src: string; aspect: number } | null;
  from: string;
  to: string | null;
  company: string;
  location: string;
  tech: string[];
}

export const ROLES: Role[] = [
  {
    id: "trafilea",
    initials: "TF",
    logo: null,
    rev: "08",
    from: "2026-03",
    to: null,
    company: "Trafilea",
    location: "Montevidéu, UY — remoto",
    tech: ["Golang", "TypeScript", "gRPC", "AWS", "Terraform", "Terragrunt", "PostgreSQL", "Datadog", "Event-driven"],
  },
  {
    id: "melhorEnvio",
    initials: "ME",
    logo: { src: "/logos/orgs/melhor-envio.svg", aspect: 2.17 },
    rev: "07",
    from: "2024-05",
    to: "2026-03",
    company: "Melhor Envio",
    location: "Pelotas, RS",
    tech: ["NestJS", "Golang", "MongoDB", "AWS", "Laravel", "Event-driven"],
  },
  {
    id: "tegra",
    initials: "TG",
    logo: { src: "/logos/orgs/tegra.svg", aspect: 1.09 },
    rev: "06",
    from: "2023-05",
    to: "2024-05",
    company: "Tegra",
    location: "São Paulo, SP",
    tech: ["NestJS", "AWS", "PostgreSQL", "MongoDB", "React", "Serverless"],
  },
  {
    id: "jazida",
    initials: "JZ",
    logo: { src: "/logos/orgs/jazida.svg", aspect: 0.94 },
    rev: "05",
    from: "2021-05",
    to: "2023-05",
    company: "Jazida",
    location: "Brasília, DF",
    tech: ["Node.js", "Python", "Golang", "Azure", "Web scraping", "Data mining"],
  },
  {
    id: "valeFullStack",
    initials: "VS",
    logo: { src: "/logos/orgs/vale.svg", aspect: 1.96 },
    rev: "04",
    from: "2020-01",
    to: "2021-05",
    company: "Vale S/A",
    location: "São Luís, MA",
    tech: ["React", "Node.js", "Python", "Pandas", "C#", ".NET"],
  },
  {
    id: "valeIntern",
    initials: "VS",
    logo: { src: "/logos/orgs/vale.svg", aspect: 1.96 },
    rev: "03",
    from: "2019-01",
    to: "2020-01",
    company: "Vale S/A",
    location: "São Luís, MA",
    tech: ["C#", ".NET Framework", "JavaScript", "jQuery", "Python"],
  },
  {
    id: "senac",
    initials: "SN",
    logo: { src: "/logos/orgs/senac.svg", aspect: 1.71 },
    rev: "02",
    from: "2018-04",
    to: "2019-01",
    company: "Senac Maranhão",
    location: "São Luís, MA",
    tech: ["Unity", "C#", "Blender"],
  },
  {
    id: "educvr",
    initials: "EV",
    logo: null,
    rev: "01",
    from: "2017-03",
    to: "2018-11",
    company: "EducVR",
    location: "São Luís, MA",
    tech: ["Unity", "C#", "Google Cardboard", "VR"],
  },
];

export type ProjectId = "coda" | "kindred" | "expenseAnalyzer";

export interface Project {
  id: ProjectId;
  code: string;
  name: string;
  /** The product's own favicon, copied from its repository. */
  logo: string;
  stack: string[];
  /** Public repository, or null when the source is private. */
  repo: string | null;
  /** Live production URL. Null until a real one is confirmed — never invent one. */
  url: string | null;
}

export const PROJECTS: Project[] = [
  {
    id: "coda",
    code: "APP-01",
    name: "coda",
    logo: "/logos/coda.svg",
    stack: ["TypeScript", "NestJS", "Next.js", "Worker", "Docker", "Grafana Alloy", "MusicBrainz"],
    repo: null,
    url: "https://coda.imp-software.cloud",
  },
  {
    id: "kindred",
    code: "APP-02",
    name: "kindred",
    logo: "/logos/kindred.svg",
    stack: ["TypeScript", "NestJS", "Prisma", "PostgreSQL", "React", "Vite"],
    repo: "https://github.com/jpmvale/kindred",
    url: "https://kindred.imp-software.cloud",
  },
  {
    id: "expenseAnalyzer",
    code: "APP-03",
    name: "expense-analyzer",
    logo: "/logos/expense-analyzer.svg",
    stack: ["TypeScript", "NestJS", "MongoDB", "React", "Docker"],
    repo: "https://github.com/jpmvale/expense-analyzer",
    url: "https://expenses.imp-software.cloud",
  },
];

export type CharacteristicId =
  | "backend"
  | "frontend"
  | "data"
  | "infra"
  | "agents"
  | "architecture"
  | "extraction";

export const CHARACTERISTICS: { id: CharacteristicId; symbol: string; values: string[] }[] = [
  {
    id: "backend",
    symbol: "BE",
    values: ["Node.js", "NestJS", "Golang", "Python", "PHP/Laravel", "C#/.NET"],
  },
  {
    id: "frontend",
    symbol: "FE",
    values: ["React", "Next.js", "Vue.js", "React Native", "Tailwind", "TypeScript"],
  },
  {
    id: "data",
    symbol: "DB",
    values: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "SQL Server", "Elasticsearch"],
  },
  {
    id: "infra",
    symbol: "OPS",
    values: ["AWS", "Terraform", "Azure", "GCP", "Docker", "CI/CD", "Kafka"],
  },
  {
    id: "agents",
    symbol: "AI",
    values: ["MCP", "Tool calling", "RAG", "Evals", "OpenAI", "Claude", "Gemini"],
  },
  {
    id: "architecture",
    symbol: "ARCH",
    values: [
      "Event-driven",
      "Microservices",
      "Modular monolith",
      "Serverless",
      "Observability",
    ],
  },
  {
    id: "extraction",
    symbol: "ETL",
    values: ["Crawlers", "Web scraping", "Pandas", "Pipelines"],
  },
];

export type ChannelId = "email" | "whatsapp" | "linkedin" | "github" | "cv";

export const CHANNELS: { id: ChannelId; code: string; value: string; href: string }[] = [
  {
    id: "email",
    code: "EML",
    value: "jpmvale@gmail.com",
    href: "mailto:jpmvale@gmail.com",
  },
  {
    id: "whatsapp",
    code: "WPP",
    value: "+55 98 99245-1236",
    href: "https://wa.me/5598992451236",
  },
  {
    id: "linkedin",
    code: "LKD",
    value: "/in/joao-pedro-vale",
    href: "https://www.linkedin.com/in/joao-pedro-vale/",
  },
  {
    id: "github",
    code: "GHB",
    value: "/jpmvale",
    href: "https://github.com/jpmvale",
  },
  {
    id: "cv",
    code: "PDF",
    value: "cv.pdf",
    href: "/cv.pdf",
  },
];

/**
 * The sheet's section index. There are no sub-sections, so the numbers are
 * plain integers; both the index rail and every heading read from here.
 */
export const SECTIONS = [
  { n: "1", id: "descricao" },
  { n: "2", id: "agentes" },
  { n: "3", id: "aplicacoes" },
  { n: "4", id: "caracteristicas" },
  { n: "5", id: "historico" },
  { n: "6", id: "contato" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export const sectionNumber = (id: SectionId) =>
  SECTIONS.find((section) => section.id === id)?.n ?? "";
