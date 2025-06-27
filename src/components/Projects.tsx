"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, Sparkles, Zap, Code, Database, Smartphone } from "lucide-react";

// Valores determinísticos para as partículas
const particles = [
  { left: 12, delay: 0, duration: 6 },
  { left: 28, delay: 1.5, duration: 7 },
  { left: 44, delay: 3, duration: 8 },
  { left: 60, delay: 2, duration: 6.5 },
  { left: 76, delay: 4, duration: 7.5 },
  { left: 8, delay: 2.5, duration: 9 },
  { left: 24, delay: 1, duration: 6.8 },
  { left: 40, delay: 3.5, duration: 7.2 },
  { left: 56, delay: 0.5, duration: 8.5 },
  { left: 72, delay: 4.5, duration: 6.3 },
  { left: 88, delay: 2.8, duration: 7.8 },
  { left: 16, delay: 1.8, duration: 8.2 },
  { left: 32, delay: 3.8, duration: 6.7 },
  { left: 48, delay: 0.8, duration: 7.3 },
  { left: 64, delay: 4.8, duration: 8.8 }
];

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plataforma de e-commerce completa com pagamentos integrados, gestão de estoque e analytics em tempo real.",
      longDescription: "Sistema completo de e-commerce desenvolvido com Next.js e Node.js, incluindo painel administrativo, sistema de pagamentos com Stripe, gestão avançada de produtos e relatórios detalhados.",
      image: "/project-1.jpg",
      technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      githubUrl: "https://github.com/jpmvale/ecommerce",
      liveUrl: "https://ecommerce-demo.vercel.app",
      category: "Full Stack",
      status: "Concluído",
      icon: Database,
      gradient: "from-blue-500 to-purple-600",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real e sincronização multi-dispositivo.",
      longDescription: "Aplicação de produtividade com recursos avançados como drag-and-drop, notificações push, colaboração em equipe e sincronização offline-first.",
      image: "/project-2.jpg",
      technologies: ["React", "Firebase", "PWA", "Material-UI", "WebSockets"],
      githubUrl: "https://github.com/jpmvale/task-manager",
      liveUrl: "https://taskmaster-app.vercel.app",
      category: "Frontend",
      status: "Em desenvolvimento",
      icon: Code,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico com previsões detalhadas, mapas interativos e alertas personalizados.",
      longDescription: "Dashboard completo com dados meteorológicos em tempo real, visualizações interativas, histórico de dados e sistema de alertas baseado em localização.",
      image: "/project-3.jpg",
      technologies: ["Vue.js", "D3.js", "OpenWeather API", "Tailwind CSS"],
      githubUrl: "https://github.com/jpmvale/weather-dashboard",
      liveUrl: "https://weather-pro.vercel.app",
      category: "Frontend",
      status: "Concluído",
      icon: Sparkles,
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Mobile Fitness App",
      description: "Aplicativo mobile para acompanhamento de exercícios com IA para recomendações personalizadas.",
      longDescription: "App React Native com tracking de exercícios, planos personalizados por IA, integração com wearables e gamificação para motivar usuários.",
      image: "/project-4.jpg",
      technologies: ["React Native", "TensorFlow", "Firebase", "Expo", "GraphQL"],
      githubUrl: "https://github.com/jpmvale/fitness-app",
      liveUrl: "https://apps.apple.com/fitness-pro",
      category: "Mobile",
      status: "Beta",
      icon: Smartphone,
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Em desenvolvimento': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Beta': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="projetos" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="matrix-bg opacity-10" />
        <div className="particles">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${particle.left}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-primary mr-3 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Meus Projetos</span>
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 mx-auto mb-6 progress-bar" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes, demonstrando expertise em diferentes tecnologias e domínios
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`group ${project.featured ? 'lg:col-span-2' : ''}`}
              >
                <Card className="tech-card h-full overflow-hidden relative">
                  {/* Project image placeholder with gradient overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Floating icon */}
                    <div className="absolute top-4 right-4">
                      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Status badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getStatusColor(project.status)} border font-medium`}>
                        {project.status}
                      </Badge>
                    </div>

                    {/* Category badge */}
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-black/30 text-white border-white/20">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Scan lines effect */}
                    <div className="absolute inset-0 scan-lines opacity-20 group-hover:opacity-40 transition-opacity" />
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Long description for featured projects */}
                    {project.featured && (
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {project.longDescription}
                      </p>
                    )}

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Tecnologias:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            whileHover={{ 
                              scale: 1.1,
                              boxShadow: "0 0 15px hsl(142 76% 36% / 0.3)"
                            }}
                          >
                            <Badge 
                              variant="outline" 
                              className="text-xs neon-border hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="glow-button bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 flex-1"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Play className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="neon-border hover:bg-primary/10 flex-1"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Código
                        </a>
                      </Button>

                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="hover:bg-primary/10 px-3"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Card className="tech-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary mr-2 animate-pulse" />
                  <h3 className="text-2xl font-bold gradient-text">Tem um projeto em mente?</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Vamos conversar sobre como posso ajudar a transformar sua ideia em realidade
                </p>
                <Button 
                  size="lg" 
                  className="glow-button bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Vamos Conversar
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 