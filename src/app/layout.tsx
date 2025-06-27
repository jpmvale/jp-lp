import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "João Pedro Vale - Desenvolvedor Full Stack",
  description: "Portfólio de João Pedro Vale - Desenvolvedor Full Stack especializado em React, Next.js, Node.js e tecnologias modernas.",
  keywords: ["desenvolvedor", "full stack", "react", "nextjs", "nodejs", "javascript", "typescript"],
  authors: [{ name: "João Pedro Vale" }],
  creator: "João Pedro Vale",
  openGraph: {
    title: "João Pedro Vale - Desenvolvedor Full Stack",
    description: "Portfólio de João Pedro Vale - Desenvolvedor Full Stack especializado em React, Next.js, Node.js e tecnologias modernas.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Pedro Vale - Desenvolvedor Full Stack",
    description: "Portfólio de João Pedro Vale - Desenvolvedor Full Stack especializado em React, Next.js, Node.js e tecnologias modernas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased tech-bg`}>
        {children}
      </body>
    </html>
  );
}
