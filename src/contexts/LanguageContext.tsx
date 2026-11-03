"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { CharacteristicId, ChannelId, ProjectId, RoleId } from "@/lib/record";

export type Language = "pt" | "en" | "es";

export const LANGUAGES: { code: Language; label: string; htmlLang: string }[] = [
  { code: "pt", label: "PT", htmlLang: "pt-BR" },
  { code: "en", label: "EN", htmlLang: "en" },
  { code: "es", label: "ES", htmlLang: "es" },
];

interface RoleCopy {
  title: string;
  summary: string;
}

export interface Dict {
  nav: {
    label: string;
    skip: string;
    languageLabel: string;
    sections: Record<string, string>;
  };
  titleBlock: {
    designation: string;
    revision: string;
    sheet: string;
    sheetValue: string;
    location: string;
    lastRevision: string;
    lastRevisionValue: string;
    role: string;
    contact: string;
    downloadCv: string;
    figCaption: string;
    figNote: string;
  };
  s1: {
    title: string;
    body: string[];
    featuresTitle: string;
    features: string[];
  };
  s2: {
    title: string;
    lead: string[];
    diagramCaption: string;
    blocks: {
      input: string;
      orchestrator: string;
      model: string;
      tools: string;
      systems: string;
      guardrails: string;
      evals: string;
      observability: string;
      output: string;
    };
    notesTitle: string;
    notes: string[];
  };
  sProjects: {
    title: string;
    lead: string;
    status: string;
    stackLabel: string;
    sourceLabel: string;
    liveLabel: string;
    privateSource: string;
    projects: Record<ProjectId, { summary: string; note: string }>;
  };
  s3: {
    title: string;
    lead: string;
    columns: { parameter: string; symbol: string; values: string };
    rows: Record<CharacteristicId, string>;
    languagesRow: string;
    languagesValue: string[];
  };
  s4: {
    title: string;
    lead: string;
    columns: { rev: string; period: string; company: string; role: string };
    present: string;
    expand: string;
    collapse: string;
    techLabel: string;
    roles: Record<RoleId, RoleCopy>;
  };
  s5: {
    title: string;
    lead: string;
    columns: { code: string; channel: string; address: string };
    channels: Record<ChannelId, string>;
    availability: string;
    availabilityNote: string;
    cvPending: string;
  };
  footer: {
    end: string;
    madeBy: string;
    top: string;
  };
}

const pt: Dict = {
  nav: {
    label: "Índice do documento",
    skip: "Ir para o conteúdo",
    languageLabel: "Idioma do documento",
    sections: {
      descricao: "Descrição",
      agentes: "Agentes",
      aplicacoes: "Projetos",
      caracteristicas: "Características",
      historico: "Histórico",
      contato: "Contato",
    },
  },
  titleBlock: {
    designation: "Designação",
    revision: "Revisão",
    sheet: "Folha",
    sheetValue: "1 de 6",
    location: "Local",
    lastRevision: "Últ. revisão",
    lastRevisionValue: "Nov 2026",
    role: "Engenheiro e arquiteto de software",
    contact: "Falar comigo",
    downloadCv: "Baixar CV",
    figCaption: "Fig. 1 — Encapsulamento",
    figNote: "São Luís, MA. Trabalho remoto desde 2021.",
  },
  s1: {
    title: "Descrição geral",
    body: [
      "Construo software profissionalmente desde 2017. Comecei montando cenários de realidade virtual no Maranhão e hoje trabalho numa plataforma SaaS multi-tenant de e-commerce: infraestrutura isolada provisionada automaticamente para cada loja, microsserviços em Go e TypeScript sobre AWS e a disciplina chata de manter tudo isso de pé, do ambiente de desenvolvimento até a produção.",
      "Passei por software house, produto de dados públicos, mineradora, logística e e-commerce. Isso me deu repertório em diferentes camadas da stack — o back end é minha especialidade, o front end é terreno familiar, e a arquitetura vem antes de escrever qualquer um dos dois.",
    ],
    featuresTitle: "Características",
    features: [
      "Arquitetura orientada a eventos em escala de dezenas de milhões de eventos por mês",
      "Agentes de IA em produção: MCP, tool calling e orquestração",
      "Back end em Node.js/NestJS, Golang, Python, PHP e C#",
      "Coleta e extração de dados de fontes públicas em larga escala",
      "Nove posições em oito organizações desde 2017",
      "Português nativo, inglês avançado, espanhol intermediário",
    ],
  },
  s2: {
    title: "Diagrama funcional — engenharia de agentes",
    lead: [
      "Uma parte crescente do meu trabalho é engenharia de agentes: sistemas em que o modelo decide o próximo passo e a engenharia garante que ele possa errar sem derrubar nada. Construo e opero agentes em produção no trabalho, e também em projetos próprios e de clientes.",
      "O diagrama abaixo é como eu monto. O modelo é um componente, não o sistema. O que sustenta um agente é a camada de ferramentas, o loop de avaliação e a observabilidade — a mesma disciplina que se usa para manter uma integração crítica de pé.",
    ],
    diagramCaption: "Fig. 2 — Topologia típica de um agente em produção",
    blocks: {
      input: "Intenção",
      orchestrator: "Orquestrador",
      model: "Modelo",
      tools: "Ferramentas · MCP",
      systems: "Sistemas",
      guardrails: "Guardrails",
      evals: "Avaliação",
      observability: "Observabilidade",
      output: "Resultado",
    },
    notesTitle: "Notas de aplicação",
    notes: [
      "A camada de ferramentas é o contrato. Cada ferramenta tem escopo fechado, validação de entrada e um modo de falha previsível — o agente não decide o que pode fazer, a ferramenta decide.",
      "Sem avaliação, mudar um prompt é mudar sem teste. Cada alteração passa por casos registrados antes de ir para produção.",
      "Observabilidade por execução: traço de cada chamada, custo por passo e o motivo de cada decisão. Sem isso, depurar um agente é adivinhação.",
      "Guardrails definem o que é irreversível. Ação destrutiva pede confirmação humana; o resto o agente resolve sozinho.",
    ],
  },
  sProjects: {
    title: "Aplicações típicas",
    lead: "Produtos que projetei, construí e opero sozinho, do domínio ao deploy. Não são exercícios: rodam, têm usuário e continuam recebendo commit.",
    status: "Em operação",
    stackLabel: "Stack",
    sourceLabel: "Código",
    liveLabel: "No ar",
    privateSource: "Fechado",
    projects: {
      coda: {
        summary:
          "Rede social de avaliação de mídias — um Letterboxd da música. Notas de 0,0 a 10,0, resenhas e o histórico de como a sua opinião sobre uma obra muda com o tempo, num feed do que quem você segue está avaliando.",
        note: "API e worker em NestJS compartilhando os mesmos módulos de domínio, front em Next.js. O catálogo é canônico e cresce guiado por interesse real: importa discografias da MusicBrainz sob demanda e enriquece com capas e biografias. Métricas e logs em Grafana Alloy.",
      },
      kindred: {
        summary:
          "Cadastro de pessoas e dos vínculos entre elas. A partir de uma pessoa central, calcula sozinho o grau de parentesco de todo mundo — avó, tio, primo em 2º grau —, desenha a árvore genealógica navegável e reúne os aniversários num calendário.",
        note: "O cálculo de parentesco é o coração do domínio e roda sobre um grafo de vínculos em PostgreSQL. Monorepo com o schema e o contrato da API isolados em pacotes compartilhados entre a API e o front.",
      },
      expenseAnalyzer: {
        summary:
          "Dashboard de gastos de cartão de crédito: as faturas em CSV viram um banco de compras, a API agrega por mês e por categoria, e o front mostra em tabelas e gráficos como o gasto evolui.",
        note: "O parser não é acoplado a nenhum emissor — lê qualquer CSV com data, descrição e valor. Extractor, API e front são aplicações separadas no mesmo monorepo, com a infraestrutura versionada junto.",
      },
    },
  },
  s3: {
    title: "Características técnicas",
    lead: "Ferramentas que uso em produção, agrupadas por função. A lista é o que eu abriria hoje sem consultar documentação.",
    columns: { parameter: "Parâmetro", symbol: "Símb.", values: "Valores" },
    rows: {
      backend: "Back end",
      frontend: "Front end",
      data: "Dados",
      infra: "Infraestrutura",
      agents: "IA e agentes",
      architecture: "Arquitetura",
      extraction: "Extração de dados",
    },
    languagesRow: "Idiomas",
    languagesValue: ["Português (nativo)", "Inglês (avançado)", "Espanhol (intermediário)"],
  },
  s4: {
    title: "Histórico de revisões",
    lead: "Nove posições desde 2017. Abra uma linha para ver o que ela envolveu.",
    columns: { rev: "Rev.", period: "Período", company: "Organização", role: "Posição" },
    present: "atual",
    expand: "Abrir detalhes",
    collapse: "Fechar detalhes",
    techLabel: "Stack",
    roles: {
      trafilea: {
        title: "AI Expert",
        summary:
          "Trafiflow, a plataforma SaaS multi-tenant de e-commerce da Trafilea. Provisionamento automatizado de lojas, do cadastro à loja publicada com infraestrutura isolada via Terraform, e os microsserviços do core: onboarding, carrinho, precificação e autenticação.",
      },
      alergocenter: {
        title: "Consultor de Software Sênior",
        summary:
          "Consultoria para uma clínica: três sistemas full stack projetados do zero para automatizar os fluxos administrativos que o software legado não cobria, incluindo uma ferramenta de geração e gestão de orçamentos em PDF. Ciclo completo, do levantamento com os usuários internos até o deploy.",
      },
      melhorEnvio: {
        title: "Desenvolvedor Sênior",
        summary:
          "Motor de rastreio da Melhor Envio, com mais de 25 milhões de atualizações de entregas por mês. Integrações com 8 grandes transportadoras e um dicionário de eventos que normaliza as mensagens de cada uma em status únicos, sobre uma arquitetura orientada a eventos em AWS.",
      },
      tegra: {
        title: "Desenvolvedor Back End",
        summary:
          "Software house: projetos do zero, um atrás do outro. Crawlers, APIs, microsserviços, monolitos e aplicações serverless — com front end quando o projeto pedia.",
      },
      jazida: {
        title: "Desenvolvedor Back End",
        summary:
          "Produto que centraliza os dados públicos de mineração do Brasil. Monolito Node.js e microsserviços, com coleta automatizada do Diário Oficial da União e extração de processos minerários de fontes governamentais.",
      },
      valeFullStack: {
        title: "Desenvolvedor Full Stack",
        summary:
          "Sistemas de gestão para engenheiros ferroviários e análise de dados ferroviários com Python e Pandas, em paralelo à manutenção dos sistemas .NET existentes.",
      },
      valeIntern: {
        title: "Estagiário de Desenvolvimento",
        summary:
          "Primeiro contato profissional com desenvolvimento: aplicações em .NET Framework, interfaces em HTML, CSS e JavaScript puro, e análise de dados com Python.",
      },
      senac: {
        title: "Professor de Desenvolvimento de Jogos",
        summary:
          "Turmas fixas de criação de jogos do zero com Unity 3D, além de palestras sobre carreira e mercado de jogos em escolas, faculdades e shoppings.",
      },
      educvr: {
        title: "Desenvolvedor de Jogos — freelance",
        summary:
          "Cenários de realidade virtual em Unity 3D com Google Cardboard, simulando os laboratórios de Física I, II e III para uso educacional.",
      },
    },
  },
  s5: {
    title: "Informações de contato",
    lead: "Disponível para posições remotas e para projetos. Respondo e-mail em até 24 horas.",
    columns: { code: "Código", channel: "Canal", address: "Endereço" },
    channels: {
      email: "E-mail",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Currículo",
    },
    availability: "Disponibilidade",
    availabilityNote: "Remoto, fuso do Brasil (UTC−3). Aberto a realocação para projetos.",
    cvPending: "PDF",
  },
  footer: {
    end: "Fim do documento",
    madeBy: "Escrito e construído por João Pedro Vale",
    top: "Voltar ao topo",
  },
};

const en: Dict = {
  nav: {
    label: "Document index",
    skip: "Skip to content",
    languageLabel: "Document language",
    sections: {
      descricao: "Description",
      agentes: "Agents",
      aplicacoes: "Projects",
      caracteristicas: "Characteristics",
      historico: "History",
      contato: "Contact",
    },
  },
  titleBlock: {
    designation: "Designation",
    revision: "Revision",
    sheet: "Sheet",
    sheetValue: "1 of 6",
    location: "Location",
    lastRevision: "Last revision",
    lastRevisionValue: "Nov 2026",
    role: "Software engineer and architect",
    contact: "Get in touch",
    downloadCv: "Download CV",
    figCaption: "Fig. 1 — Package",
    figNote: "São Luís, Brazil. Working remotely since 2021.",
  },
  s1: {
    title: "General description",
    body: [
      "I have been building software professionally since 2017. I started assembling virtual reality scenes in Maranhão and today I work on a multi-tenant e-commerce SaaS platform: isolated infrastructure provisioned automatically for every store, Go and TypeScript microservices on AWS, and the unglamorous discipline of keeping all of it standing, from the development environment to production.",
      "I have worked in a software house, a public-data product, a mining company, logistics and e-commerce. That gave me range across the stack — the back end is my specialism, the front end is familiar ground, and the architecture comes before writing either.",
    ],
    featuresTitle: "Features",
    features: [
      "Event-driven architecture at a scale of tens of millions of events a month",
      "AI agents in production: MCP, tool calling and orchestration",
      "Back end in Node.js/NestJS, Golang, Python, PHP and C#",
      "Large-scale collection and extraction of public data",
      "Nine positions across eight organisations since 2017",
      "Native Portuguese, advanced English, intermediate Spanish",
    ],
  },
  s2: {
    title: "Functional diagram — agent engineering",
    lead: [
      "A growing part of my work is agent engineering: systems where the model decides the next step and the engineering makes sure it can be wrong without taking anything down. I build and operate agents in production at work, and in my own and client projects.",
      "The diagram below is how I assemble them. The model is a component, not the system. What holds an agent up is the tool layer, the evaluation loop and observability — the same discipline you use to keep a critical integration alive.",
    ],
    diagramCaption: "Fig. 2 — Typical topology of an agent in production",
    blocks: {
      input: "Intent",
      orchestrator: "Orchestrator",
      model: "Model",
      tools: "Tools · MCP",
      systems: "Systems",
      guardrails: "Guardrails",
      evals: "Evaluation",
      observability: "Observability",
      output: "Result",
    },
    notesTitle: "Application notes",
    notes: [
      "The tool layer is the contract. Every tool has a closed scope, input validation and a predictable failure mode — the agent does not decide what it may do, the tool does.",
      "Without evaluation, changing a prompt is changing without a test. Every change runs against recorded cases before it ships.",
      "Per-run observability: a trace of every call, cost per step and the reason behind each decision. Without it, debugging an agent is guesswork.",
      "Guardrails define what is irreversible. Destructive actions ask for human confirmation; the agent handles the rest on its own.",
    ],
  },
  sProjects: {
    title: "Typical applications",
    lead: "Products I designed, built and run on my own, from the domain model to the deploy. Not exercises: they run, they have users, and they still get commits.",
    status: "In operation",
    stackLabel: "Stack",
    sourceLabel: "Source",
    liveLabel: "Live",
    privateSource: "Closed",
    projects: {
      coda: {
        summary:
          "A social network for rating media — a Letterboxd for music. Scores from 0.0 to 10.0, reviews, and the history of how your opinion on a work changes over time, in a feed of what the people you follow are rating.",
        note: "A NestJS API and worker sharing the same domain modules, with a Next.js front end. The catalogue is canonical and grows on real demand: it imports discographies from MusicBrainz on request and enriches them with covers and biographies. Metrics and logs through Grafana Alloy.",
      },
      kindred: {
        summary:
          "A register of people and the ties between them. From one central person it works out everyone's degree of kinship on its own — grandmother, uncle, second cousin — draws the navigable family tree, and gathers every birthday into a calendar.",
        note: "The kinship calculation is the heart of the domain and runs over a graph of relationships in PostgreSQL. A monorepo with the schema and the API contract isolated in packages shared by the API and the front end.",
      },
      expenseAnalyzer: {
        summary:
          "A credit-card spending dashboard: CSV statements become a purchase database, the API aggregates by month and category, and the front end shows in tables and charts how the spending evolves.",
        note: "The parser is not coupled to any issuer — it reads any CSV with a date, a description and an amount. Extractor, API and front end are separate applications in one monorepo, with the infrastructure versioned alongside them.",
      },
    },
  },
  s3: {
    title: "Technical characteristics",
    lead: "Tools I use in production, grouped by function. This is what I would open today without checking the documentation.",
    columns: { parameter: "Parameter", symbol: "Sym.", values: "Values" },
    rows: {
      backend: "Back end",
      frontend: "Front end",
      data: "Data",
      infra: "Infrastructure",
      agents: "AI and agents",
      architecture: "Architecture",
      extraction: "Data extraction",
    },
    languagesRow: "Languages",
    languagesValue: ["Portuguese (native)", "English (advanced)", "Spanish (intermediate)"],
  },
  s4: {
    title: "Revision history",
    lead: "Nine positions since 2017. Open a row to see what it involved.",
    columns: { rev: "Rev.", period: "Period", company: "Organisation", role: "Position" },
    present: "present",
    expand: "Open details",
    collapse: "Close details",
    techLabel: "Stack",
    roles: {
      trafilea: {
        title: "AI Expert",
        summary:
          "Trafiflow, Trafilea's multi-tenant e-commerce SaaS platform. Automated store provisioning, from sign-up to a live store on isolated infrastructure via Terraform, and the core microservices: onboarding, cart, pricing and authentication.",
      },
      alergocenter: {
        title: "Senior Software Consultant",
        summary:
          "Consulting for a clinic: three full-stack systems designed from scratch to automate the administrative workflows the legacy software never covered, including a tool that generates and manages quotes as PDFs. The full cycle, from gathering requirements with internal users to the deploy.",
      },
      melhorEnvio: {
        title: "Senior Developer",
        summary:
          "Melhor Envio's tracking engine, processing more than 25 million shipment updates a month. Integrations with 8 major carriers and an event dictionary that normalises each one's messages into shared statuses, on an event-driven architecture on AWS.",
      },
      tegra: {
        title: "Backend Developer",
        summary:
          "Software house: projects from scratch, one after another. Crawlers, APIs, microservices, monoliths and serverless applications — with front end whenever the project called for it.",
      },
      jazida: {
        title: "Backend Developer",
        summary:
          "A product centralising Brazil's public mining data. Node.js monolith and microservices, with automated collection from the Official Gazette and extraction of mining records from government sources.",
      },
      valeFullStack: {
        title: "Full Stack Developer",
        summary:
          "Management systems for railway engineers and railway data analysis with Python and Pandas, alongside maintenance of the existing .NET systems.",
      },
      valeIntern: {
        title: "Development Intern",
        summary:
          "First professional contact with development: .NET Framework applications, interfaces in plain HTML, CSS and JavaScript, and data analysis with Python.",
      },
      senac: {
        title: "Game Development Teacher",
        summary:
          "Regular classes building games from scratch with Unity 3D, plus talks on careers and the games market at schools, colleges and malls.",
      },
      educvr: {
        title: "Game Developer — freelance",
        summary:
          "Virtual reality scenes in Unity 3D with Google Cardboard, simulating the Physics I, II and III laboratories for educational use.",
      },
    },
  },
  s5: {
    title: "Ordering information",
    lead: "Available for remote positions and for project work. I answer email within 24 hours.",
    columns: { code: "Code", channel: "Channel", address: "Address" },
    channels: {
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Résumé",
    },
    availability: "Availability",
    availabilityNote: "Remote, Brazil time (UTC−3). Open to relocation for the right project.",
    cvPending: "PDF",
  },
  footer: {
    end: "End of document",
    madeBy: "Written and built by João Pedro Vale",
    top: "Back to top",
  },
};

const es: Dict = {
  nav: {
    label: "Índice del documento",
    skip: "Ir al contenido",
    languageLabel: "Idioma del documento",
    sections: {
      descricao: "Descripción",
      agentes: "Agentes",
      aplicacoes: "Proyectos",
      caracteristicas: "Características",
      historico: "Historial",
      contato: "Contacto",
    },
  },
  titleBlock: {
    designation: "Designación",
    revision: "Revisión",
    sheet: "Hoja",
    sheetValue: "1 de 6",
    location: "Ubicación",
    lastRevision: "Últ. revisión",
    lastRevisionValue: "Nov 2026",
    role: "Ingeniero y arquitecto de software",
    contact: "Hablemos",
    downloadCv: "Descargar CV",
    figCaption: "Fig. 1 — Encapsulado",
    figNote: "São Luís, Brasil. Trabajo remoto desde 2021.",
  },
  s1: {
    title: "Descripción general",
    body: [
      "Construyo software profesionalmente desde 2017. Empecé montando escenarios de realidad virtual en Maranhão y hoy trabajo en una plataforma SaaS multi-tenant de e-commerce: infraestructura aislada aprovisionada automáticamente para cada tienda, microservicios en Go y TypeScript sobre AWS y la disciplina poco glamorosa de mantener todo eso en pie, del entorno de desarrollo hasta producción.",
      "Pasé por una software house, un producto de datos públicos, una minera, logística y e-commerce. Eso me dio recorrido en distintas capas del stack — el back end es mi especialidad, el front end es terreno conocido, y la arquitectura viene antes de escribir cualquiera de los dos.",
    ],
    featuresTitle: "Características",
    features: [
      "Arquitectura orientada a eventos a escala de decenas de millones de eventos al mes",
      "Agentes de IA en producción: MCP, tool calling y orquestación",
      "Back end en Node.js/NestJS, Golang, Python, PHP y C#",
      "Recolección y extracción de datos públicos a gran escala",
      "Nueve posiciones en ocho organizaciones desde 2017",
      "Portugués nativo, inglés avanzado, español intermedio",
    ],
  },
  s2: {
    title: "Diagrama funcional — ingeniería de agentes",
    lead: [
      "Una parte creciente de mi trabajo es la ingeniería de agentes: sistemas en los que el modelo decide el próximo paso y la ingeniería garantiza que pueda equivocarse sin derribar nada. Construyo y opero agentes en producción en el trabajo, y también en proyectos propios y de clientes.",
      "El diagrama de abajo es cómo los armo. El modelo es un componente, no el sistema. Lo que sostiene a un agente es la capa de herramientas, el ciclo de evaluación y la observabilidad — la misma disciplina que se usa para mantener en pie una integración crítica.",
    ],
    diagramCaption: "Fig. 2 — Topología típica de un agente en producción",
    blocks: {
      input: "Intención",
      orchestrator: "Orquestador",
      model: "Modelo",
      tools: "Herramientas · MCP",
      systems: "Sistemas",
      guardrails: "Guardrails",
      evals: "Evaluación",
      observability: "Observabilidad",
      output: "Resultado",
    },
    notesTitle: "Notas de aplicación",
    notes: [
      "La capa de herramientas es el contrato. Cada herramienta tiene alcance cerrado, validación de entrada y un modo de falla previsible — el agente no decide qué puede hacer, lo decide la herramienta.",
      "Sin evaluación, cambiar un prompt es cambiar sin prueba. Cada modificación pasa por casos registrados antes de llegar a producción.",
      "Observabilidad por ejecución: traza de cada llamada, costo por paso y el motivo de cada decisión. Sin eso, depurar un agente es adivinar.",
      "Los guardrails definen lo irreversible. La acción destructiva pide confirmación humana; el resto lo resuelve el agente solo.",
    ],
  },
  sProjects: {
    title: "Aplicaciones típicas",
    lead: "Productos que diseñé, construí y opero solo, del dominio al deploy. No son ejercicios: funcionan, tienen usuarios y siguen recibiendo commits.",
    status: "En operación",
    stackLabel: "Stack",
    sourceLabel: "Código",
    liveLabel: "En línea",
    privateSource: "Cerrado",
    projects: {
      coda: {
        summary:
          "Red social de evaluación de medios — un Letterboxd de la música. Notas de 0,0 a 10,0, reseñas y el historial de cómo tu opinión sobre una obra cambia con el tiempo, en un feed de lo que evalúa la gente que sigues.",
        note: "API y worker en NestJS compartiendo los mismos módulos de dominio, front en Next.js. El catálogo es canónico y crece guiado por interés real: importa discografías de MusicBrainz bajo demanda y las enriquece con portadas y biografías. Métricas y logs en Grafana Alloy.",
      },
      kindred: {
        summary:
          "Registro de personas y de los vínculos entre ellas. A partir de una persona central calcula solo el grado de parentesco de todos — abuela, tío, primo en segundo grado —, dibuja el árbol genealógico navegable y reúne los cumpleaños en un calendario.",
        note: "El cálculo de parentesco es el corazón del dominio y corre sobre un grafo de vínculos en PostgreSQL. Monorepo con el esquema y el contrato de la API aislados en paquetes compartidos entre la API y el front.",
      },
      expenseAnalyzer: {
        summary:
          "Panel de gastos de tarjeta de crédito: las facturas en CSV se convierten en una base de compras, la API agrega por mes y por categoría, y el front muestra en tablas y gráficos cómo evoluciona el gasto.",
        note: "El parser no está acoplado a ningún emisor — lee cualquier CSV con fecha, descripción e importe. Extractor, API y front son aplicaciones separadas en el mismo monorepo, con la infraestructura versionada junto a ellas.",
      },
    },
  },
  s3: {
    title: "Características técnicas",
    lead: "Herramientas que uso en producción, agrupadas por función. Es lo que abriría hoy sin consultar la documentación.",
    columns: { parameter: "Parámetro", symbol: "Símb.", values: "Valores" },
    rows: {
      backend: "Back end",
      frontend: "Front end",
      data: "Datos",
      infra: "Infraestructura",
      agents: "IA y agentes",
      architecture: "Arquitectura",
      extraction: "Extracción de datos",
    },
    languagesRow: "Idiomas",
    languagesValue: ["Portugués (nativo)", "Inglés (avanzado)", "Español (intermedio)"],
  },
  s4: {
    title: "Historial de revisiones",
    lead: "Nueve posiciones desde 2017. Abre una fila para ver qué implicó.",
    columns: { rev: "Rev.", period: "Período", company: "Organización", role: "Posición" },
    present: "actual",
    expand: "Abrir detalles",
    collapse: "Cerrar detalles",
    techLabel: "Stack",
    roles: {
      trafilea: {
        title: "AI Expert",
        summary:
          "Trafiflow, la plataforma SaaS multi-tenant de e-commerce de Trafilea. Aprovisionamiento automatizado de tiendas, del registro a la tienda publicada con infraestructura aislada vía Terraform, y los microservicios del core: onboarding, carrito, precios y autenticación.",
      },
      alergocenter: {
        title: "Consultor de Software Senior",
        summary:
          "Consultoría para una clínica: tres sistemas full stack diseñados desde cero para automatizar los flujos administrativos que el software heredado no cubría, incluida una herramienta de generación y gestión de presupuestos en PDF. Ciclo completo, del relevamiento con los usuarios internos hasta el deploy.",
      },
      melhorEnvio: {
        title: "Desarrollador Senior",
        summary:
          "Motor de rastreo de Melhor Envio, con más de 25 millones de actualizaciones de envíos al mes. Integraciones con 8 grandes transportistas y un diccionario de eventos que normaliza los mensajes de cada uno en estados únicos, sobre una arquitectura orientada a eventos en AWS.",
      },
      tegra: {
        title: "Desarrollador Back End",
        summary:
          "Software house: proyectos desde cero, uno tras otro. Crawlers, APIs, microservicios, monolitos y aplicaciones serverless — con front end cuando el proyecto lo pedía.",
      },
      jazida: {
        title: "Desarrollador Back End",
        summary:
          "Producto que centraliza los datos públicos de minería de Brasil. Monolito Node.js y microservicios, con recolección automatizada del Diario Oficial de la Unión y extracción de procesos mineros de fuentes gubernamentales.",
      },
      valeFullStack: {
        title: "Desarrollador Full Stack",
        summary:
          "Sistemas de gestión para ingenieros ferroviarios y análisis de datos ferroviarios con Python y Pandas, en paralelo al mantenimiento de los sistemas .NET existentes.",
      },
      valeIntern: {
        title: "Pasante de Desarrollo",
        summary:
          "Primer contacto profesional con el desarrollo: aplicaciones en .NET Framework, interfaces en HTML, CSS y JavaScript puro, y análisis de datos con Python.",
      },
      senac: {
        title: "Profesor de Desarrollo de Juegos",
        summary:
          "Clases regulares de creación de juegos desde cero con Unity 3D, además de charlas sobre carrera y mercado de juegos en escuelas, universidades y centros comerciales.",
      },
      educvr: {
        title: "Desarrollador de Juegos — freelance",
        summary:
          "Escenarios de realidad virtual en Unity 3D con Google Cardboard, simulando los laboratorios de Física I, II y III para uso educativo.",
      },
    },
  },
  s5: {
    title: "Información de contacto",
    lead: "Disponible para posiciones remotas y para proyectos. Respondo el correo en un máximo de 24 horas.",
    columns: { code: "Código", channel: "Canal", address: "Dirección" },
    channels: {
      email: "Correo",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Currículum",
    },
    availability: "Disponibilidad",
    availabilityNote: "Remoto, huso de Brasil (UTC−3). Abierto a reubicación para el proyecto adecuado.",
    cvPending: "PDF",
  },
  footer: {
    end: "Fin del documento",
    madeBy: "Escrito y construido por João Pedro Vale",
    top: "Volver arriba",
  },
};

const dictionaries: Record<Language, Dict> = { pt, en, es };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  d: Dict;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "jpmv-lang";

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "pt" || stored === "en" || stored === "es") {
      setLanguageState(stored);
    }
  }, []);

  useEffect(() => {
    const entry = LANGUAGES.find((l) => l.code === language);
    if (entry) {
      document.documentElement.lang = entry.htmlLang;
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, d: dictionaries[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
