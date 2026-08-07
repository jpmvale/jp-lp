import type { Metadata } from "next";
import { Archivo, Chivo_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
  display: "swap",
});

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-chivo-mono",
  display: "swap",
});

const DIRECTION_CONTRACT = `<!--
impeccable direction contract · seed e07f7b84
THESIS: A recruiter is evaluating a component for their system, so this page is that
component's data sheet. It refuses the dark-neon developer portfolio and its cream-serif opposite.
OWN-WORLD: Two plates of one drawing. Whiteprint (#e7e6e0 stock, #23368f diazo line, #a33a26
stamp); cyanotype under prefers-color-scheme dark (#0e2b4a ground, paper-white line, amber stamp).
Hairline rules, corner ticks, Archivo with width axis, Chivo Mono for data. No cards, no glow.
STORY: A senior engineer with nine years of range, agents in production, reachable in one click.
FIRST VIEWPORT: Ruled title block (part no., rev, sheet 1/6), name at display scale, general
description beside a features column, portrait as FIG. 1 PACKAGE, contact stamped in the block.
FORM: Component datasheet, candidate 5 of the grounded list, assigned by seed e07f7b84.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e7e6e0" },
    { media: "(prefers-color-scheme: dark)", color: "#0e2b4a" },
  ],
};

export const metadata: Metadata = {
  title: "João Pedro Vale — Engenheiro de Software",
  description:
    "Folha de dados de João Pedro Vale: engenheiro e arquiteto de software com experiência em sistemas distribuídos, arquitetura orientada a eventos e engenharia de agentes de IA.",
  keywords: [
    "engenheiro de software",
    "arquiteto de software",
    "engenharia de agentes",
    "agentes de IA",
    "MCP",
    "arquitetura orientada a eventos",
    "node",
    "golang",
  ],
  authors: [{ name: "João Pedro Vale" }],
  creator: "João Pedro Vale",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "João Pedro Vale — Engenheiro de Software",
    description:
      "Folha de dados de um engenheiro de software: sistemas distribuídos, arquitetura orientada a eventos e agentes de IA em produção.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Pedro Vale — Engenheiro de Software",
    description:
      "Folha de dados de um engenheiro de software: sistemas distribuídos, arquitetura orientada a eventos e agentes de IA em produção.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${archivo.variable} ${chivoMono.variable} antialiased`}>
        <div hidden dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
