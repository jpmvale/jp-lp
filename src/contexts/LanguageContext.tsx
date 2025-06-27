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