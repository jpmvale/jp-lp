/**
 * Language-independent facts. Proper nouns, dates, stacks and addresses live
 * here so they are stated once; only prose is translated.
 * Every entry is confirmed product truth (see PRODUCT.md).
 */

export const PART = {
  designation: "JPMV-01",
  revision: "07",
  lastRevision: "2024-05",
  sheets: 6,
  location: "São Luís, MA — BR",
  since: 2017,
} as const;

export type RoleId =
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
   * Manufacturer mark. Company logos were studied and rejected: two of the six
   * organisations no longer publish a usable asset (EducVR's domain is gone,
   * Senac Maranhao's site is down), and a set with holes reads worse than no
   * set at all. Initials complete the set, survive both plates untouched, and
   * are the datasheet's own way of stamping a maker.
   */
  initials: string;
  from: string;
  to: string | null;
  company: string;
  location: string;
  tech: string[];
}

export const ROLES: Role[] = [
  {
    id: "melhorEnvio",
    initials: "ME",
    rev: "07",
    from: "2024-05",
    to: null,
    company: "Melhor Envio",
    location: "Pelotas, RS",
    tech: ["NestJS", "Golang", "MongoDB", "AWS", "Laravel", "Event-driven"],
  },
  {
    id: "tegra",
    initials: "TG",
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
    values: ["AWS", "Azure", "GCP", "Docker", "CI/CD", "Kafka"],
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
