"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Building, 
  Briefcase,
  TrendingUp,
  Users,
  Code,
  Zap,
  Award,
  Target,
  CheckCircle,
  ExternalLink,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useState } from "react";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  // Partículas para o fundo animado
  const particles = [
    { left: 5, delay: 0, duration: 8 },
    { left: 15, delay: 2, duration: 10 },
    { left: 25, delay: 4, duration: 12 },
    { left: 35, delay: 1, duration: 9 },
    { left: 45, delay: 3, duration: 11 },
    { left: 55, delay: 5, duration: 13 },
    { left: 65, delay: 0.5, duration: 8.5 },
    { left: 75, delay: 2.5, duration: 10.5 },
    { left: 85, delay: 4.5, duration: 12.5 },
    { left: 95, delay: 1.5, duration: 9.5 }
  ];

  const experiences = [
    {
      title: "Desenvolvedor Full Stack Sênior",
      company: "Tech Solutions",
      location: "São Paulo, SP",
      period: "2022 - Presente",
      status: "Atual",
      type: "Full-time",
      level: "Sênior",
      description: [
        "Desenvolvimento de aplicações web complexas usando React, Next.js e Node.js",
        "Liderança técnica de equipe de 5 desenvolvedores",
        "Implementação de arquiteturas escaláveis e microsserviços",
        "Otimização de performance resultando em 40% de melhoria no tempo de carregamento"
      ],
      achievements: [
        "Reduziu tempo de build em 60% com otimizações de CI/CD",
        "Implementou arquitetura de microsserviços para 10+ aplicações",
        "Mentoria de 5 desenvolvedores júnior e pleno"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
      gradient: "from-blue-500 to-cyan-500",
      icon: Code
    },
    {
      title: "Desenvolvedor Full Stack",
      company: "Startup Inovadora",
      location: "Remote",
      period: "2021 - 2022",
      status: "Concluído",
      type: "Full-time",
      level: "Pleno",
      description: [
        "Desenvolvimento de MVP para plataforma de e-commerce",
        "Integração com APIs de pagamento e sistemas terceiros",
        "Implementação de testes automatizados e CI/CD",
        "Colaboração direta com equipe de design e produto"
      ],
      achievements: [
        "MVP desenvolvido em 3 meses com 99.9% de uptime",
        "Integração com 5+ gateways de pagamento",
        "Cobertura de testes de 85%+"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Stripe", "Docker", "GitHub Actions", "Jest", "Cypress"],
      gradient: "from-green-500 to-emerald-500",
      icon: TrendingUp
    },
    {
      title: "Desenvolvedor Frontend",
      company: "Agência Digital",
      location: "Rio de Janeiro, RJ",
      period: "2020 - 2021",
      status: "Concluído",
      type: "Full-time",
      level: "Júnior",
      description: [
        "Criação de interfaces responsivas e interativas",
        "Desenvolvimento de landing pages de alta conversão",
        "Otimização SEO e performance web",
        "Manutenção e evolução de sites existentes"
      ],
      achievements: [
        "Aumentou conversão de landing pages em 35%",
        "Otimizou performance web com Core Web Vitals 90+",
        "Desenvolveu 20+ projetos web"
      ],
      technologies: ["JavaScript", "Vue.js", "SASS", "WordPress", "PHP", "Google Analytics"],
      gradient: "from-purple-500 to-violet-500",
      icon: Sparkles
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Atual":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Concluído":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Sênior":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Pleno":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Júnior":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="experiencia" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="matrix-bg opacity-10" />
        <div className="scan-lines opacity-15" />
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
              <Briefcase className="w-8 h-8 text-primary mr-3 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Experiência Profissional</span>
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 mx-auto mb-6 progress-bar" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Minha jornada profissional construindo soluções inovadoras e liderando equipes de tecnologia
            </p>
          </motion.div>

          {/* Timeline Navigation */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {experiences.map((exp, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveExperience(index)}
                  className={`relative px-6 py-3 rounded-lg border transition-all duration-300 ${
                    activeExperience === index
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary/50 hover:bg-primary/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-2">
                    <exp.icon className="w-4 h-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  {activeExperience === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg border border-primary/30"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Experience Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timeline Visualization */}
            <div className="lg:col-span-1">
              <Card className="tech-card sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-primary" />
                    <span>Timeline</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={index}
                        className={`relative p-3 rounded-lg border cursor-pointer transition-all duration-300 ${
                          activeExperience === index
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50 hover:bg-primary/5'
                        }`}
                        onClick={() => setActiveExperience(index)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.gradient} bg-opacity-20`}>
                            <exp.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm truncate">{exp.company}</h4>
                            <p className="text-xs text-muted-foreground">{exp.period}</p>
                            <Badge className={`${getStatusColor(exp.status)} text-xs mt-1`}>
                              {exp.status}
                            </Badge>
                          </div>
                        </div>
                        {activeExperience === index && (
                          <motion.div
                            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500 rounded-full"
                            layoutId="timelineIndicator"
                            initial={false}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Experience Content */}
            <div className="lg:col-span-2">
              <motion.div
                key={activeExperience}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="tech-card">
                  {/* Header with gradient */}
                  <div className={`relative h-32 bg-gradient-to-br ${experiences[activeExperience].gradient} opacity-80 rounded-t-lg overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 scan-lines opacity-30" />
                    
                    {/* Floating icon */}
                    <div className="absolute top-4 right-4">
                      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        {React.createElement(experiences[activeExperience].icon, { 
                          className: "w-6 h-6 text-white" 
                        })}
                      </div>
                    </div>

                    {/* Status badges */}
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <Badge className={`${getStatusColor(experiences[activeExperience].status)} border font-medium`}>
                        {experiences[activeExperience].status}
                      </Badge>
                      <Badge className={`${getLevelColor(experiences[activeExperience].level)} border font-medium`}>
                        {experiences[activeExperience].level}
                      </Badge>
                    </div>

                    {/* Company info */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{experiences[activeExperience].company}</h3>
                      <p className="text-sm opacity-90">{experiences[activeExperience].type}</p>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold mb-4">
                      {experiences[activeExperience].title}
                    </CardTitle>
                    
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{experiences[activeExperience].location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{experiences[activeExperience].period}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Description */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-2 text-primary" />
                        Responsabilidades
                      </h4>
                      <ul className="space-y-2">
                        {experiences[activeExperience].description.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-primary" />
                        Principais Conquistas
                      </h4>
                      <ul className="space-y-2">
                        {experiences[activeExperience].achievements.map((achievement, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: (index + 3) * 0.1 }}
                            className="flex items-start"
                          >
                            <Zap className="w-4 h-4 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Building className="w-4 h-4 mr-2 text-primary" />
                        Tecnologias Utilizadas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experiences[activeExperience].technologies.map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (index + 6) * 0.05 }}
                            whileHover={{ 
                              scale: 1.1,
                              boxShadow: "0 0 15px hsl(142 76% 36% / 0.3)"
                            }}
                          >
                            <Badge 
                              variant="outline" 
                              className="neon-border hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <Card className="tech-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary mr-2 animate-pulse" />
                  <h3 className="text-2xl font-bold gradient-text">Vamos trabalhar juntos?</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Estou sempre aberto a novos desafios e oportunidades de colaboração
                </p>
                <Button 
                  size="lg" 
                  className="glow-button bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Entre em Contato
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 