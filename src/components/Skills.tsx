"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Brain,
  Zap,
  Cpu,
  Server,
  Globe,
  Shield,
  Wrench
} from "lucide-react";
import { useState, useEffect } from "react";

const Skills = () => {
  const [animatedProgress, setAnimatedProgress] = useState<{ [key: string]: number }>({});

  // Valores determinísticos para as partículas
  const particles = [
    { left: 8, delay: 0, duration: 8 },
    { left: 22, delay: 2, duration: 10 },
    { left: 36, delay: 4, duration: 12 },
    { left: 50, delay: 1, duration: 9 },
    { left: 64, delay: 3, duration: 11 },
    { left: 78, delay: 5, duration: 13 },
    { left: 92, delay: 0.5, duration: 8.5 },
    { left: 14, delay: 2.5, duration: 10.5 },
    { left: 28, delay: 4.5, duration: 12.5 },
    { left: 42, delay: 1.5, duration: 9.5 },
    { left: 56, delay: 3.5, duration: 11.5 },
    { left: 70, delay: 5.5, duration: 13.5 },
    { left: 84, delay: 0.8, duration: 8.8 },
    { left: 6, delay: 2.8, duration: 10.8 },
    { left: 20, delay: 4.8, duration: 12.8 },
    { left: 34, delay: 1.8, duration: 9.8 },
    { left: 48, delay: 3.8, duration: 11.8 },
    { left: 62, delay: 5.8, duration: 13.8 },
    { left: 76, delay: 0.3, duration: 8.3 },
    { left: 90, delay: 2.3, duration: 10.3 },
    { left: 12, delay: 4.3, duration: 12.3 },
    { left: 26, delay: 1.3, duration: 9.3 },
    { left: 40, delay: 3.3, duration: 11.3 },
    { left: 54, delay: 5.3, duration: 13.3 },
    { left: 68, delay: 0.6, duration: 8.6 }
  ];

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", level: 95, icon: Code },
        { name: "TypeScript", level: 90, icon: Code },
        { name: "JavaScript", level: 95, icon: Code },
        { name: "Tailwind CSS", level: 88, icon: Palette },
        { name: "Vue.js", level: 75, icon: Code },
        { name: "HTML/CSS", level: 98, icon: Globe }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90, icon: Server },
        { name: "Python", level: 85, icon: Code },
        { name: "Express.js", level: 88, icon: Server },
        { name: "GraphQL", level: 80, icon: Database },
        { name: "REST APIs", level: 95, icon: Globe },
        { name: "Microservices", level: 75, icon: Cpu }
      ]
    },
    {
      title: "Cloud/DevOps",
      icon: Cloud,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "AWS", level: 85, icon: Cloud },
        { name: "Docker", level: 88, icon: Wrench },
        { name: "Kubernetes", level: 70, icon: Cloud },
        { name: "CI/CD", level: 82, icon: Wrench },
        { name: "Terraform", level: 75, icon: Wrench },
        { name: "Monitoring", level: 80, icon: Shield }
      ]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "React Native", level: 85, icon: Smartphone },
        { name: "Flutter", level: 70, icon: Smartphone },
        { name: "Expo", level: 88, icon: Smartphone },
        { name: "PWA", level: 90, icon: Globe },
        { name: "App Store", level: 75, icon: Smartphone },
        { name: "Firebase", level: 85, icon: Database }
      ]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-orange-500 to-amber-500",
      skills: [
        { name: "PostgreSQL", level: 90, icon: Database },
        { name: "MongoDB", level: 85, icon: Database },
        { name: "Redis", level: 80, icon: Database },
        { name: "Prisma", level: 88, icon: Database },
        { name: "MySQL", level: 85, icon: Database },
        { name: "ElasticSearch", level: 70, icon: Database }
      ]
    },
    {
      title: "Ferramentas",
      icon: Wrench,
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "Git/GitHub", level: 95, icon: Wrench },
        { name: "VS Code", level: 98, icon: Wrench },
        { name: "Figma", level: 85, icon: Palette },
        { name: "Postman", level: 90, icon: Wrench },
        { name: "Jira", level: 80, icon: Wrench },
        { name: "Slack", level: 95, icon: Wrench }
      ]
    }
  ];

  const softSkills = [
    { name: "Liderança", icon: Brain, description: "Capacidade de liderar equipes e projetos" },
    { name: "Comunicação", icon: Globe, description: "Comunicação clara e efetiva" },
    { name: "Resolução de Problemas", icon: Zap, description: "Análise e solução de problemas complexos" },
    { name: "Aprendizado Rápido", icon: Brain, description: "Adaptação rápida a novas tecnologias" },
    { name: "Trabalho em Equipe", icon: Globe, description: "Colaboração efetiva em equipes" },
    { name: "Pensamento Crítico", icon: Cpu, description: "Análise crítica e tomada de decisões" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const progress: { [key: string]: number } = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          progress[skill.name] = skill.level;
        });
      });
      setAnimatedProgress(progress);
    }, 500);

    return () => clearTimeout(timer);
  }, [skillCategories]);

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

  return (
    <section id="habilidades" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="matrix-bg opacity-15" />
        <div className="scan-lines opacity-20" />
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
              <Brain className="w-8 h-8 text-primary mr-3 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Habilidades Técnicas</span>
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 mx-auto mb-6 progress-bar" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Um arsenal completo de tecnologias modernas e metodologias comprovadas
            </p>
          </motion.div>

          {/* Technical Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Card className="tech-card h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl gradient-text group-hover:text-primary transition-colors">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <skill.icon className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground font-mono">
                            {animatedProgress[skill.name] || 0}%
                          </span>
                        </div>
                        
                        <div className="relative">
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full progress-bar rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${animatedProgress[skill.name] || 0}%` }}
                              transition={{ 
                                duration: 1.5, 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                            />
                          </div>
                          
                          {/* Glow effect */}
                          <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-full blur-sm"
                            initial={{ width: 0 }}
                            animate={{ width: `${animatedProgress[skill.name] || 0}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary mr-3 animate-pulse" />
                <h3 className="text-3xl font-bold gradient-text">Habilidades Interpessoais</h3>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Competências essenciais para trabalho em equipe e liderança
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px hsl(142 76% 36% / 0.2)"
                  }}
                  className="group"
                >
                  <Card className="tech-card hover:neon-border transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <div className="inline-flex p-3 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                          <skill.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Learning */}
          <motion.div variants={itemVariants}>
            <Card className="tech-card">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-primary mr-3 animate-pulse" />
                  <h3 className="text-2xl font-bold gradient-text">Aprendizado Contínuo</h3>
                </div>
                
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Sempre em busca de novos conhecimentos e certificações para me manter atualizado 
                  com as últimas tendências tecnológicas
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "AWS Certified", "Google Cloud", "React Expert", "Node.js Professional",
                    "Kubernetes Certified", "Scrum Master", "DevOps Engineer", "AI/ML Basics"
                  ].map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 20px hsl(142 76% 36% / 0.3)"
                      }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="px-4 py-2 neon-border hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-pointer"
                      >
                        {cert}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 