"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traduções
const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.title': 'João Pedro Vale',
    'hero.subtitle': 'Desenvolvedor Full Stack',
    'hero.description': 'Transformo ideias em produtos digitais. Especializado em tecnologias modernas e arquiteturas escaláveis.',
    'hero.contact': 'Entrar em Contato',
    'hero.download': 'Baixar CV',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Desenvolvedor apaixonado por tecnologia e inovação',
    'about.description': 'Sou um desenvolvedor Full Stack com mais de 7 anos de experiência, especializado em criar soluções digitais inovadoras. Minha paixão pela tecnologia me leva a estar sempre aprendendo e explorando novas ferramentas e metodologias.',
    'about.experience': 'Anos de Experiência',
    'about.education': 'Anos de Graduação e Mestrado',
    'about.projects': 'Projetos Concluídos',
    'about.technologies': 'Tecnologias',
    'about.journey': 'Minha Jornada',
    'about.journeyP1': 'Sou um desenvolvedor de software <span class="text-primary font-semibold">autodidata</span> e entusiasta de tecnologia. Comecei minha jornada em <span class="text-blue-400 font-semibold">2016</span> ingressando na graduação de Engenharia da Computação na UEMA, onde tive meu primeiro contato com programação através de C e Java.',
    'about.journeyP2': 'Durante a graduação, participei de <span class="text-green-400 font-semibold">laboratórios de desenvolvimento de jogos</span> e me aproximei da comunidade local de Game Devs. Em <span class="text-purple-400 font-semibold">2019</span>, fui aprovado no programa de estágio da <span class="text-yellow-400 font-semibold">Vale S/A</span> e iniciei minha carreira no mundo do Web Development, começando com C# e posteriormente migrando para Node.js e React.',
    'about.journeyP3': 'Tive diversas experiências em empresas diferentes que moldaram minha carreira. Hoje sou um <span class="text-pink-400 font-semibold">desenvolvedor Full Stack</span> capaz de trabalhar com múltiplas stacks tecnológicas, além de atuar em <span class="text-cyan-400 font-semibold">projetos freelance</span> de construção de sistemas.',
    'about.focusMessage': 'Focado em desenvolver código limpo e experiências de usuário excepcionais.',
    'about.cleanCode': 'Código Limpo',
    'about.cleanCodeDesc': 'Fissurado por escrever código limpo, testável e bem documentado',
    'about.innovation': 'Inovação',
    'about.innovationDesc': 'Sempre em busca de novas tecnologias e soluções criativas',
    'about.results': 'Foco em Resultados',
    'about.resultsDesc': 'Orientado a entregar valor real e impacto positivo nos projetos',
    'about.interests': 'Áreas de Interesse',
    'about.languages': 'Idiomas',
    'about.languagesDesc': 'Comunicação global para projetos internacionais',
    'about.portuguese': 'Português',
    'about.english': 'Inglês',
    'about.spanish': 'Espanhol',
    'about.fluent': 'Fluente',
    'about.intermediate': 'Intermediário',
    'about.native': 'Nativo',
    'about.softwareEngineering': 'Engenharia de Software',
    'about.backend': 'Back End',
    'about.frontend': 'Front End',
    'about.microservices': 'Microserviços',
    'about.eventArchitecture': 'Arquitetura baseada em eventos',
    'about.observability': 'Observabilidade',
    'about.modularMonolith': 'Monolito Modular',
    'about.crawlerScraping': 'Crawler/Web Scraping',
    'about.devops': 'DevOps',
    'about.ai': 'Inteligência Artificial',
    'about.databases': 'BD Relacional/Não Relacional',
    'about.gameDev': 'Desenvolvimento de Jogos',
    
    // Experience Section
    'experience.title': 'Experiência Profissional',
    'experience.subtitle': 'Minha jornada profissional construindo soluções inovadoras e liderando equipes de tecnologia',
    'experience.timeline': 'Timeline',
    'experience.responsibilities': 'Responsabilidades',
    'experience.achievements': 'Principais Conquistas',
    'experience.technologies': 'Tecnologias Utilizadas',
    'experience.current': 'Atual',
    'experience.completed': 'Concluído',
    'experience.senior': 'Sênior',
    'experience.mid': 'Pleno',
    'experience.junior': 'Júnior',
    'experience.intern': 'Estagiário',
    'experience.teacher': 'Professor',
    'experience.freelancer': 'Freelancer',
    'experience.fullTime': 'Integral',
    'experience.partTime': 'Meio Período',
    'experience.seniorDeveloper': 'Desenvolvedor Sênior',
    'experience.backendDeveloper': 'Desenvolvedor Back End',
    'experience.fullStackDeveloper': 'Desenvolvedor Full Stack',
    'experience.developmentIntern': 'Estagiário de Desenvolvimento',
    'experience.gameDevTeacher': 'Professor de Desenvolvimento de Jogos',
    'experience.freelanceGameDev': 'Desenvolvedor de Jogos Freelance',
    'experience.workTogether': 'Vamos trabalhar juntos?',
    'experience.workTogetherDesc': 'Estou sempre aberto a novos desafios e oportunidades de colaboração',
    'experience.getInTouch': 'Entre em Contato',
    'experience.present': 'Presente',
    'experience.jan': 'Jan',
    'experience.feb': 'Fev',
    'experience.mar': 'Mar',
    'experience.apr': 'Abr',
    'experience.may': 'Mai',
    'experience.jun': 'Jun',
    'experience.jul': 'Jul',
    'experience.aug': 'Ago',
    'experience.sep': 'Set',
    'experience.oct': 'Out',
    'experience.nov': 'Nov',
    'experience.dec': 'Dez',
    
    // Melhor Envio - Responsibilities
    'experience.melhorEnvio.resp1': 'Responsável por garantir o rastreamento de milhões de entregas de e-commerce diárias',
    'experience.melhorEnvio.resp2': 'Atuação em arquitetura baseada em eventos para comunicação assíncrona',
    'experience.melhorEnvio.resp3': 'Desenvolvimento de serviços robustos para integração com APIs privadas das transportadoras',
    'experience.melhorEnvio.resp4': 'Manutenção e criação de novas funcionalidades em sistema altamente escalável',
    // Melhor Envio - Achievements
    'experience.melhorEnvio.ach1': 'Processamento de milhões de entregas diárias com alta disponibilidade',
    'experience.melhorEnvio.ach2': 'Implementação de arquitetura baseada em eventos',
    'experience.melhorEnvio.ach3': 'Integração com múltiplas APIs de transportadoras',
    
    // Tegra - Responsibilities
    'experience.tegra.resp1': 'Desenvolvimento de projetos do zero em software house',
    'experience.tegra.resp2': 'Criação de crawlers, APIs, microsserviços e monolitos',
    'experience.tegra.resp3': 'Desenvolvimento de aplicações serverless',
    'experience.tegra.resp4': 'Implementação de interfaces frontend quando necessário',
    // Tegra - Achievements
    'experience.tegra.ach1': 'Criação de múltiplos projetos do zero',
    'experience.tegra.ach2': 'Experiência diversificada em diferentes arquiteturas',
    'experience.tegra.ach3': 'Desenvolvimento full-stack quando necessário',
    
    // Jazida - Responsibilities
    'experience.jazida.resp1': 'Desenvolvimento em produto de centralização de dados públicos de mineração',
    'experience.jazida.resp2': 'Atuação em monolito Node.js e microsserviços',
    'experience.jazida.resp3': 'Criação de scripts para coleta de dados do Diário Oficial da União',
    'experience.jazida.resp4': 'Extração de informações de processos minerários de fontes governamentais',
    // Jazida - Achievements
    'experience.jazida.ach1': 'Centralização de dados públicos de mineração do Brasil',
    'experience.jazida.ach2': 'Automação de coleta de dados governamentais',
    'experience.jazida.ach3': 'Processamento de grandes volumes de dados',
    
    // Vale Full Stack - Responsibilities
    'experience.valeFullStack.resp1': 'Desenvolvimento de sistemas de gerenciamento para engenheiros ferroviários',
    'experience.valeFullStack.resp2': 'Análise de dados ferroviários usando Python/Pandas',
    'experience.valeFullStack.resp3': 'Desenvolvimento full-stack com Node.js e React',
    'experience.valeFullStack.resp4': 'Manutenção de sistemas .NET Framework/Core',
    // Vale Full Stack - Achievements
    'experience.valeFullStack.ach1': 'Sistemas críticos para operação ferroviária',
    'experience.valeFullStack.ach2': 'Análise de dados para otimização de processos',
    'experience.valeFullStack.ach3': 'Transição para stack moderna Node/React',
    
    // Vale Intern - Responsibilities
    'experience.valeIntern.resp1': 'Desenvolvimento de aplicações com .NET Framework',
    'experience.valeIntern.resp2': 'Criação de interfaces com HTML/CSS/JavaScript puro',
    'experience.valeIntern.resp3': 'Desenvolvimento de aplicações para terceiros',
    'experience.valeIntern.resp4': 'Análise de dados com Python',
    // Vale Intern - Achievements
    'experience.valeIntern.ach1': 'Primeiro contato profissional com desenvolvimento',
    'experience.valeIntern.ach2': 'Aprendizado de múltiplas tecnologias',
    'experience.valeIntern.ach3': 'Desenvolvimento para clientes externos',
    
    // Senac - Responsibilities
    'experience.senac.resp1': 'Organização de aulas sobre desenvolvimento de jogos com Unity 3D',
    'experience.senac.resp2': 'Palestras em shoppings, escolas e faculdades',
    'experience.senac.resp3': 'Ensino sobre o mercado de jogos e carreira',
    'experience.senac.resp4': 'Turmas fixas para criação de jogos do zero',
    // Senac - Achievements
    'experience.senac.ach1': 'Palestras em múltiplos eventos e instituições',
    'experience.senac.ach2': 'Formação de novos desenvolvedores de jogos',
    'experience.senac.ach3': 'Disseminação de conhecimento na comunidade',
    
    // EducVR - Responsibilities
    'experience.educvr.resp1': 'Criação de cenários de realidade virtual usando Unity 3D',
    'experience.educvr.resp2': 'Desenvolvimento com Google Cardboard',
    'experience.educvr.resp3': 'Simulações de laboratórios de Física I, II e III',
    'experience.educvr.resp4': 'Projetos educacionais em VR',
    // EducVR - Achievements
    'experience.educvr.ach1': 'Pioneiro em VR educacional na região',
    'experience.educvr.ach2': 'Simulações realistas de laboratórios',
    'experience.educvr.ach3': 'Inovação em educação através de tecnologia',
    
    // Skills Section
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Um arsenal completo de tecnologias modernas e metodologias comprovadas',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.database': 'Database',
    'skills.cloudDevops': 'Cloud/DevOps',
    'skills.tools': 'Ferramentas',
    'skills.ai': 'Inteligência Artificial',
    'skills.eventArchitecture': 'Arquitetura baseada em eventos',
    'skills.nlp': 'Processamento de Linguagem Natural',
    'skills.geneticAlgorithms': 'Algoritmos Genéticos',
    'skills.softSkillsTitle': 'Habilidades Interpessoais',
    'skills.softSkillsSubtitle': 'Competências essenciais para trabalho em equipe e liderança',
    'skills.organization': 'Organização',
    'skills.organizationDesc': 'Capacidade de se preparar com antecedência e quebrar em tarefas menores',
    'skills.communication': 'Comunicação',
    'skills.communicationDesc': 'Comunicação clara, empática, efetiva',
    'skills.problemSolving': 'Resolução de Problemas',
    'skills.problemSolvingDesc': 'Análise e solução de problemas complexos',
    'skills.fastLearning': 'Aprendizado Rápido',
    'skills.fastLearningDesc': 'Adaptação rápida e não possuo resistência a outras tecnologias',
    'skills.teamwork': 'Trabalho em Equipe',
    'skills.teamworkDesc': 'Alta facilidade de trabalhar em equipe',
    'skills.criticalThinking': 'Pensamento Crítico',
    'skills.criticalThinkingDesc': 'Análise crítica e tomada de decisões',
    
    // Contact Section
    'contact.title': 'Vamos Conversar',
    'contact.subtitle': 'Tem um projeto em mente? Vamos transformar sua ideia em realidade digital',
    'contact.info': 'Informações de Contato',
    'contact.connect': 'Conecte-se Comigo',
    'contact.email': 'Email',
    'contact.phone': 'Telefone',
    'contact.location': 'Localização',
    'contact.availability': 'Disponibilidade',
    'contact.emailDesc': 'Respondo em até 24h',
    'contact.phoneDesc': 'WhatsApp disponível',
    'contact.locationDesc': 'Disponível para remoto',
    'contact.availabilityDesc': 'Para novos projetos',
    'contact.available': 'Disponível',
    
    // Footer
    'footer.description': 'Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras e experiências de usuário excepcionais.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.contact': 'Contato',
    'footer.availableProjects': 'Disponível para projetos',
    'footer.madeBy': 'Feito por João Pedro Vale',
    'footer.backToTop': 'Voltar ao topo',
    
    // Language Selector
    'language.select': 'Selecionar Idioma',
    'language.portuguese': 'Português',
    'language.english': 'Inglês',
    'language.spanish': 'Espanhol',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'João Pedro Vale',
    'hero.subtitle': 'Full Stack Developer',
    'hero.description': 'I transform ideas into digital products. Specialized in modern technologies and scalable architectures.',
    'hero.contact': 'Get in Touch',
    'hero.download': 'Download CV',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Developer passionate about technology and innovation',
    'about.description': 'I am a Full Stack developer with over 7 years of experience, specialized in creating innovative digital solutions. My passion for technology drives me to constantly learn and explore new tools and methodologies.',
    'about.experience': 'Years of Experience',
    'about.education': 'Years of Bachelor\'s and Master\'s',
    'about.projects': 'Completed Projects',
    'about.technologies': 'Technologies',
    'about.journey': 'My Journey',
    'about.journeyP1': 'I am a <span class="text-primary font-semibold">self-taught</span> software developer and technology enthusiast. I started my journey in <span class="text-blue-400 font-semibold">2016</span> by entering the Computer Engineering degree at UEMA, where I had my first contact with programming through C and Java.',
    'about.journeyP2': 'During my degree, I participated in <span class="text-green-400 font-semibold">game development labs</span> and got closer to the local Game Dev community. In <span class="text-purple-400 font-semibold">2019</span>, I was approved for <span class="text-yellow-400 font-semibold">Vale S/A\'s</span> internship program and started my career in Web Development, beginning with C# and later migrating to Node.js and React.',
    'about.journeyP3': 'I had diverse experiences in different companies that shaped my career. Today I am a <span class="text-pink-400 font-semibold">Full Stack developer</span> capable of working with multiple technology stacks, in addition to working on <span class="text-cyan-400 font-semibold">freelance projects</span> for system development.',
    'about.focusMessage': 'Focused on developing clean code and exceptional user experiences.',
    'about.cleanCode': 'Clean Code',
    'about.cleanCodeDesc': 'Passionate about writing clean, testable and well-documented code',
    'about.innovation': 'Innovation',
    'about.innovationDesc': 'Always seeking new technologies and creative solutions',
    'about.results': 'Results Focus',
    'about.resultsDesc': 'Oriented to deliver real value and positive impact on projects',
    'about.interests': 'Areas of Interest',
    'about.languages': 'Languages',
    'about.languagesDesc': 'Global communication for international projects',
    'about.portuguese': 'Portuguese',
    'about.english': 'English',
    'about.spanish': 'Spanish',
    'about.fluent': 'Fluent',
    'about.intermediate': 'Intermediate',
    'about.native': 'Native',
    'about.softwareEngineering': 'Software Engineering',
    'about.backend': 'Back End',
    'about.frontend': 'Front End',
    'about.microservices': 'Microservices',
    'about.eventArchitecture': 'Event-driven Architecture',
    'about.observability': 'Observability',
    'about.modularMonolith': 'Modular Monolith',
    'about.crawlerScraping': 'Crawler/Web Scraping',
    'about.devops': 'DevOps',
    'about.ai': 'Artificial Intelligence',
    'about.databases': 'Relational/Non-Relational DB',
    'about.gameDev': 'Game Development',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    'experience.subtitle': 'My professional journey building innovative solutions and leading technology teams',
    'experience.timeline': 'Timeline',
    'experience.responsibilities': 'Responsibilities',
    'experience.achievements': 'Key Achievements',
    'experience.technologies': 'Technologies Used',
    'experience.current': 'Current',
    'experience.completed': 'Completed',
    'experience.senior': 'Senior',
    'experience.mid': 'Mid-level',
    'experience.junior': 'Junior',
    'experience.intern': 'Intern',
    'experience.teacher': 'Teacher',
    'experience.freelancer': 'Freelancer',
    'experience.fullTime': 'Full Time',
    'experience.partTime': 'Part Time',
    'experience.seniorDeveloper': 'Senior Developer',
    'experience.backendDeveloper': 'Backend Developer',
    'experience.fullStackDeveloper': 'Full Stack Developer',
    'experience.developmentIntern': 'Development Intern',
    'experience.gameDevTeacher': 'Game Development Teacher',
    'experience.freelanceGameDev': 'Freelance Game Developer',
    'experience.workTogether': 'Let\'s work together?',
    'experience.workTogetherDesc': 'I\'m always open to new challenges and collaboration opportunities',
    'experience.getInTouch': 'Get in Touch',
    'experience.present': 'Present',
    'experience.jan': 'Jan',
    'experience.feb': 'Feb',
    'experience.mar': 'Mar',
    'experience.apr': 'Apr',
    'experience.may': 'May',
    'experience.jun': 'Jun',
    'experience.jul': 'Jul',
    'experience.aug': 'Aug',
    'experience.sep': 'Sep',
    'experience.oct': 'Oct',
    'experience.nov': 'Nov',
    'experience.dec': 'Dec',
    
    // Melhor Envio - Responsibilities
    'experience.melhorEnvio.resp1': 'Responsible for ensuring tracking of millions of daily e-commerce deliveries',
    'experience.melhorEnvio.resp2': 'Working with event-driven architecture for asynchronous communication',
    'experience.melhorEnvio.resp3': 'Development of robust services for integration with private carrier APIs',
    'experience.melhorEnvio.resp4': 'Maintenance and creation of new features in highly scalable system',
    // Melhor Envio - Achievements
    'experience.melhorEnvio.ach1': 'Processing millions of daily deliveries with high availability',
    'experience.melhorEnvio.ach2': 'Implementation of event-driven architecture',
    'experience.melhorEnvio.ach3': 'Integration with multiple carrier APIs',
    
    // Tegra - Responsibilities
    'experience.tegra.resp1': 'Development of projects from scratch in software house',
    'experience.tegra.resp2': 'Creation of crawlers, APIs, microservices and monoliths',
    'experience.tegra.resp3': 'Development of serverless applications',
    'experience.tegra.resp4': 'Implementation of frontend interfaces when necessary',
    // Tegra - Achievements
    'experience.tegra.ach1': 'Creation of multiple projects from scratch',
    'experience.tegra.ach2': 'Diversified experience in different architectures',
    'experience.tegra.ach3': 'Full-stack development when necessary',
    
    // Jazida - Responsibilities
    'experience.jazida.resp1': 'Development in public mining data centralization product',
    'experience.jazida.resp2': 'Working with Node.js monolith and microservices',
    'experience.jazida.resp3': 'Creation of scripts for data collection from Official Government Gazette',
    'experience.jazida.resp4': 'Extraction of mining process information from government sources',
    // Jazida - Achievements
    'experience.jazida.ach1': 'Centralization of Brazil\'s public mining data',
    'experience.jazida.ach2': 'Automation of government data collection',
    'experience.jazida.ach3': 'Processing of large data volumes',
    
    // Vale Full Stack - Responsibilities
    'experience.valeFullStack.resp1': 'Development of management systems for railway engineers',
    'experience.valeFullStack.resp2': 'Railway data analysis using Python/Pandas',
    'experience.valeFullStack.resp3': 'Full-stack development with Node.js and React',
    'experience.valeFullStack.resp4': 'Maintenance of .NET Framework/Core systems',
    // Vale Full Stack - Achievements
    'experience.valeFullStack.ach1': 'Critical systems for railway operation',
    'experience.valeFullStack.ach2': 'Data analysis for process optimization',
    'experience.valeFullStack.ach3': 'Transition to modern Node/React stack',
    
    // Vale Intern - Responsibilities
    'experience.valeIntern.resp1': 'Development of applications with .NET Framework',
    'experience.valeIntern.resp2': 'Creation of interfaces with pure HTML/CSS/JavaScript',
    'experience.valeIntern.resp3': 'Development of applications for third parties',
    'experience.valeIntern.resp4': 'Data analysis with Python',
    // Vale Intern - Achievements
    'experience.valeIntern.ach1': 'First professional contact with development',
    'experience.valeIntern.ach2': 'Learning multiple technologies',
    'experience.valeIntern.ach3': 'Development for external clients',
    
    // Senac - Responsibilities
    'experience.senac.resp1': 'Organization of classes on game development with Unity 3D',
    'experience.senac.resp2': 'Lectures in malls, schools and colleges',
    'experience.senac.resp3': 'Teaching about the game market and career',
    'experience.senac.resp4': 'Fixed classes for creating games from scratch',
    // Senac - Achievements
    'experience.senac.ach1': 'Lectures at multiple events and institutions',
    'experience.senac.ach2': 'Training new game developers',
    'experience.senac.ach3': 'Knowledge dissemination in the community',
    
    // EducVR - Responsibilities
    'experience.educvr.resp1': 'Creation of virtual reality scenarios using Unity 3D',
    'experience.educvr.resp2': 'Development with Google Cardboard',
    'experience.educvr.resp3': 'Simulations of Physics I, II and III laboratories',
    'experience.educvr.resp4': 'Educational VR projects',
    // EducVR - Achievements
    'experience.educvr.ach1': 'Pioneer in educational VR in the region',
    'experience.educvr.ach2': 'Realistic laboratory simulations',
    'experience.educvr.ach3': 'Innovation in education through technology',
    
    // Skills Section
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'A complete arsenal of modern technologies and proven methodologies',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.database': 'Database',
    'skills.cloudDevops': 'Cloud/DevOps',
    'skills.tools': 'Tools',
    'skills.ai': 'Artificial Intelligence',
    'skills.eventArchitecture': 'Event-driven Architecture',
    'skills.nlp': 'Natural Language Processing',
    'skills.geneticAlgorithms': 'Genetic Algorithms',
    'skills.softSkillsTitle': 'Soft Skills',
    'skills.softSkillsSubtitle': 'Essential competencies for teamwork and leadership',
    'skills.organization': 'Organization',
    'skills.organizationDesc': 'Ability to prepare in advance and break down into smaller tasks',
    'skills.communication': 'Communication',
    'skills.communicationDesc': 'Clear, empathetic, effective communication',
    'skills.problemSolving': 'Problem Solving',
    'skills.problemSolvingDesc': 'Analysis and solution of complex problems',
    'skills.fastLearning': 'Fast Learning',
    'skills.fastLearningDesc': 'Quick adaptation and no resistance to other technologies',
    'skills.teamwork': 'Teamwork',
    'skills.teamworkDesc': 'High ease of working in teams',
    'skills.criticalThinking': 'Critical Thinking',
    'skills.criticalThinkingDesc': 'Critical analysis and decision making',
    
    // Contact Section
    'contact.title': 'Let\'s Talk',
    'contact.subtitle': 'Have a project in mind? Let\'s turn your idea into digital reality',
    'contact.info': 'Contact Information',
    'contact.connect': 'Connect with Me',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.availability': 'Availability',
    'contact.emailDesc': 'Response within 24h',
    'contact.phoneDesc': 'WhatsApp available',
    'contact.locationDesc': 'Available for remote',
    'contact.availabilityDesc': 'For new projects',
    'contact.available': 'Available',
    
    // Footer
    'footer.description': 'Full Stack developer passionate about creating innovative digital solutions and exceptional user experiences.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.availableProjects': 'Available for projects',
    'footer.madeBy': 'Made by João Pedro Vale',
    'footer.backToTop': 'Back to top',
    
    // Language Selector
    'language.select': 'Select Language',
    'language.portuguese': 'Portuguese',
    'language.english': 'English',
    'language.spanish': 'Spanish',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'João Pedro Vale',
    'hero.subtitle': 'Desarrollador Full Stack',
    'hero.description': 'Transformo ideas en productos digitales. Especializado en tecnologías modernas y arquitecturas escalables.',
    'hero.contact': 'Ponerse en Contacto',
    'hero.download': 'Descargar CV',
    
    // About Section
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Desarrollador apasionado por la tecnología e innovación',
    'about.description': 'Soy un desarrollador Full Stack con más de 7 años de experiencia, especializado en crear soluciones digitales innovadoras. Mi pasión por la tecnología me lleva a estar siempre aprendiendo y explorando nuevas herramientas y metodologías.',
    'about.experience': 'Años de Experiencia',
    'about.education': 'Años de Licenciatura y Maestría',
    'about.projects': 'Proyectos Completados',
    'about.technologies': 'Tecnologías',
    'about.journey': 'Mi Trayectoria',
    'about.journeyP1': 'Soy un desarrollador de software <span class="text-primary font-semibold">autodidacta</span> y entusiasta de la tecnología. Comencé mi trayectoria en <span class="text-blue-400 font-semibold">2016</span> ingresando a la carrera de Ingeniería en Computación en UEMA, donde tuve mi primer contacto con la programación a través de C y Java.',
    'about.journeyP2': 'Durante la carrera, participé en <span class="text-green-400 font-semibold">laboratorios de desarrollo de juegos</span> y me acerqué a la comunidad local de Game Devs. En <span class="text-purple-400 font-semibold">2019</span>, fui aprobado en el programa de pasantías de <span class="text-yellow-400 font-semibold">Vale S/A</span> e inicié mi carrera en el mundo del Desarrollo Web, comenzando con C# y posteriormente migrando a Node.js y React.',
    'about.journeyP3': 'Tuve diversas experiencias en diferentes empresas que moldearon mi carrera. Hoy soy un <span class="text-pink-400 font-semibold">desarrollador Full Stack</span> capaz de trabajar con múltiples stacks tecnológicos, además de trabajar en <span class="text-cyan-400 font-semibold">proyectos freelance</span> de construcción de sistemas.',
    'about.focusMessage': 'Enfocado en desarrollar código limpio y experiencias de usuario excepcionales.',
    'about.cleanCode': 'Código Limpio',
    'about.cleanCodeDesc': 'Apasionado por escribir código limpio, testeable y bien documentado',
    'about.innovation': 'Innovación',
    'about.innovationDesc': 'Siempre en busca de nuevas tecnologías y soluciones creativas',
    'about.results': 'Enfoque en Resultados',
    'about.resultsDesc': 'Orientado a entregar valor real e impacto positivo en los proyectos',
    'about.interests': 'Áreas de Interés',
    'about.languages': 'Idiomas',
    'about.languagesDesc': 'Comunicación global para proyectos internacionales',
    'about.portuguese': 'Portugués',
    'about.english': 'Inglés',
    'about.spanish': 'Español',
    'about.fluent': 'Fluido',
    'about.intermediate': 'Intermedio',
    'about.native': 'Nativo',
    'about.softwareEngineering': 'Ingeniería de Software',
    'about.backend': 'Back End',
    'about.frontend': 'Front End',
    'about.microservices': 'Microservicios',
    'about.eventArchitecture': 'Arquitectura basada en eventos',
    'about.observability': 'Observabilidad',
    'about.modularMonolith': 'Monolito Modular',
    'about.crawlerScraping': 'Crawler/Web Scraping',
    'about.devops': 'DevOps',
    'about.ai': 'Inteligencia Artificial',
    'about.databases': 'BD Relacional/No Relacional',
    'about.gameDev': 'Desarrollo de Juegos',
    
    // Experience Section
    'experience.title': 'Experiencia Profesional',
    'experience.subtitle': 'Mi trayectoria profesional construyendo soluciones innovadoras y liderando equipos de tecnología',
    'experience.timeline': 'Cronología',
    'experience.responsibilities': 'Responsabilidades',
    'experience.achievements': 'Logros Principales',
    'experience.technologies': 'Tecnologías Utilizadas',
    'experience.current': 'Actual',
    'experience.completed': 'Completado',
    'experience.senior': 'Senior',
    'experience.mid': 'Intermedio',
    'experience.junior': 'Junior',
    'experience.intern': 'Interno',
    'experience.teacher': 'Profesor',
    'experience.freelancer': 'Freelancer',
    'experience.fullTime': 'Tiempo Completo',
    'experience.partTime': 'Medio Tiempo',
    'experience.seniorDeveloper': 'Desarrollador Senior',
    'experience.backendDeveloper': 'Desarrollador Backend',
    'experience.fullStackDeveloper': 'Desarrollador Full Stack',
    'experience.developmentIntern': 'Interno de Desarrollo',
    'experience.gameDevTeacher': 'Profesor de Desarrollo de Juegos',
    'experience.freelanceGameDev': 'Desarrollador de Juegos Freelance',
    'experience.workTogether': '¿Trabajemos juntos?',
    'experience.workTogetherDesc': 'Siempre estoy abierto a nuevos desafíos y oportunidades de colaboración',
    'experience.getInTouch': 'Ponte en Contacto',
    'experience.present': 'Presente',
    'experience.jan': 'Ene',
    'experience.feb': 'Feb',
    'experience.mar': 'Mar',
    'experience.apr': 'Abr',
    'experience.may': 'May',
    'experience.jun': 'Jun',
    'experience.jul': 'Jul',
    'experience.aug': 'Ago',
    'experience.sep': 'Sep',
    'experience.oct': 'Oct',
    'experience.nov': 'Nov',
    'experience.dec': 'Dic',
    
    // Melhor Envio - Responsibilities
    'experience.melhorEnvio.resp1': 'Responsable de garantizar el seguimiento de millones de entregas de e-commerce diarias',
    'experience.melhorEnvio.resp2': 'Actuación en arquitectura basada en eventos para comunicación asíncrona',
    'experience.melhorEnvio.resp3': 'Desarrollo de servicios robustos para integración con APIs privadas de transportistas',
    'experience.melhorEnvio.resp4': 'Mantenimiento y creación de nuevas funcionalidades en sistema altamente escalable',
    // Melhor Envio - Achievements
    'experience.melhorEnvio.ach1': 'Procesamiento de millones de entregas diarias con alta disponibilidad',
    'experience.melhorEnvio.ach2': 'Implementación de arquitectura basada en eventos',
    'experience.melhorEnvio.ach3': 'Integración con múltiples APIs de transportistas',
    
    // Tegra - Responsibilities
    'experience.tegra.resp1': 'Desarrollo de proyectos desde cero en software house',
    'experience.tegra.resp2': 'Creación de crawlers, APIs, microservicios y monolitos',
    'experience.tegra.resp3': 'Desarrollo de aplicaciones serverless',
    'experience.tegra.resp4': 'Implementación de interfaces frontend cuando es necesario',
    // Tegra - Achievements
    'experience.tegra.ach1': 'Creación de múltiples proyectos desde cero',
    'experience.tegra.ach2': 'Experiencia diversificada en diferentes arquitecturas',
    'experience.tegra.ach3': 'Desarrollo full-stack cuando es necesario',
    
    // Jazida - Responsibilities
    'experience.jazida.resp1': 'Desarrollo en producto de centralización de datos públicos de minería',
    'experience.jazida.resp2': 'Actuación en monolito Node.js y microservicios',
    'experience.jazida.resp3': 'Creación de scripts para recolección de datos del Diario Oficial de la Unión',
    'experience.jazida.resp4': 'Extracción de información de procesos mineros de fuentes gubernamentales',
    // Jazida - Achievements
    'experience.jazida.ach1': 'Centralización de datos públicos de minería de Brasil',
    'experience.jazida.ach2': 'Automatización de recolección de datos gubernamentales',
    'experience.jazida.ach3': 'Procesamiento de grandes volúmenes de datos',
    
    // Vale Full Stack - Responsibilities
    'experience.valeFullStack.resp1': 'Desarrollo de sistemas de gestión para ingenieros ferroviarios',
    'experience.valeFullStack.resp2': 'Análisis de datos ferroviarios usando Python/Pandas',
    'experience.valeFullStack.resp3': 'Desarrollo full-stack con Node.js y React',
    'experience.valeFullStack.resp4': 'Mantenimiento de sistemas .NET Framework/Core',
    // Vale Full Stack - Achievements
    'experience.valeFullStack.ach1': 'Sistemas críticos para operación ferroviaria',
    'experience.valeFullStack.ach2': 'Análisis de datos para optimización de procesos',
    'experience.valeFullStack.ach3': 'Transición a stack moderno Node/React',
    
    // Vale Intern - Responsibilities
    'experience.valeIntern.resp1': 'Desarrollo de aplicaciones con .NET Framework',
    'experience.valeIntern.resp2': 'Creación de interfaces con HTML/CSS/JavaScript puro',
    'experience.valeIntern.resp3': 'Desarrollo de aplicaciones para terceros',
    'experience.valeIntern.resp4': 'Análisis de datos con Python',
    // Vale Intern - Achievements
    'experience.valeIntern.ach1': 'Primer contacto profesional con desarrollo',
    'experience.valeIntern.ach2': 'Aprendizaje de múltiples tecnologías',
    'experience.valeIntern.ach3': 'Desarrollo para clientes externos',
    
    // Senac - Responsibilities
    'experience.senac.resp1': 'Organización de clases sobre desarrollo de juegos con Unity 3D',
    'experience.senac.resp2': 'Conferencias en centros comerciales, escuelas y universidades',
    'experience.senac.resp3': 'Enseñanza sobre el mercado de juegos y carrera',
    'experience.senac.resp4': 'Clases fijas para creación de juegos desde cero',
    // Senac - Achievements
    'experience.senac.ach1': 'Conferencias en múltiples eventos e instituciones',
    'experience.senac.ach2': 'Formación de nuevos desarrolladores de juegos',
    'experience.senac.ach3': 'Diseminación de conocimiento en la comunidad',
    
    // EducVR - Responsibilities
    'experience.educvr.resp1': 'Creación de escenarios de realidad virtual usando Unity 3D',
    'experience.educvr.resp2': 'Desarrollo con Google Cardboard',
    'experience.educvr.resp3': 'Simulaciones de laboratorios de Física I, II y III',
    'experience.educvr.resp4': 'Proyectos educacionales en VR',
    // EducVR - Achievements
    'experience.educvr.ach1': 'Pionero en VR educacional en la región',
    'experience.educvr.ach2': 'Simulaciones realistas de laboratorios',
    'experience.educvr.ach3': 'Innovación en educación a través de tecnología',
    
    // Skills Section
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Un arsenal completo de tecnologías modernas y metodologías probadas',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.database': 'Base de Datos',
    'skills.cloudDevops': 'Cloud/DevOps',
    'skills.tools': 'Herramientas',
    'skills.ai': 'Inteligencia Artificial',
    'skills.eventArchitecture': 'Arquitectura basada en eventos',
    'skills.nlp': 'Procesamiento de Lenguaje Natural',
    'skills.geneticAlgorithms': 'Algoritmos Genéticos',
    'skills.softSkillsTitle': 'Habilidades Blandas',
    'skills.softSkillsSubtitle': 'Competencias esenciales para trabajo en equipo y liderazgo',
    'skills.organization': 'Organización',
    'skills.organizationDesc': 'Capacidad de prepararse con antelación y dividir en tareas menores',
    'skills.communication': 'Comunicación',
    'skills.communicationDesc': 'Comunicación clara, empática, efectiva',
    'skills.problemSolving': 'Resolución de Problemas',
    'skills.problemSolvingDesc': 'Análisis y solución de problemas complejos',
    'skills.fastLearning': 'Aprendizaje Rápido',
    'skills.fastLearningDesc': 'Adaptación rápida y sin resistencia a otras tecnologías',
    'skills.teamwork': 'Trabajo en Equipo',
    'skills.teamworkDesc': 'Alta facilidad para trabajar en equipo',
    'skills.criticalThinking': 'Pensamiento Crítico',
    'skills.criticalThinkingDesc': 'Análisis crítico y toma de decisiones',
    
    // Contact Section
    'contact.title': 'Hablemos',
    'contact.subtitle': '¿Tienes un proyecto en mente? Convirtamos tu idea en realidad digital',
    'contact.info': 'Información de Contacto',
    'contact.connect': 'Conéctate Conmigo',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.availability': 'Disponibilidad',
    'contact.emailDesc': 'Respuesta en 24h',
    'contact.phoneDesc': 'WhatsApp disponible',
    'contact.locationDesc': 'Disponible para remoto',
    'contact.availabilityDesc': 'Para nuevos proyectos',
    'contact.available': 'Disponible',
    
    // Footer
    'footer.description': 'Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras y experiencias de usuario excepcionales.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.contact': 'Contacto',
    'footer.availableProjects': 'Disponible para proyectos',
    'footer.madeBy': 'Hecho por João Pedro Vale',
    'footer.backToTop': 'Volver arriba',
    
    // Language Selector
    'language.select': 'Seleccionar Idioma',
    'language.portuguese': 'Portugués',
    'language.english': 'Inglés',
    'language.spanish': 'Español',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 