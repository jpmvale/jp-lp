"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
import { useState, useEffect, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const [animatedProgress, setAnimatedProgress] = useState<{ [key: string]: number }>({});
  const { t } = useLanguage();

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

  const skillCategories = useMemo(() => [
    {
      title: t('skills.backend'),
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node/Nest", level: 96, icon: Code },
        { name: "Golang", level: 88, icon: Code },
        { name: "Python", level: 85, icon: Code },
        { name: "PHP/Laravel", level: 81, icon: Code },
        { name: "C#/.NET", level: 79, icon: Code },
        { name: t('skills.eventArchitecture'), level: 88, icon: Globe },
      ]
    },
    {
      title: t('skills.frontend'),
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", level: 95, icon: Code },
        { name: "Vue.js", level: 85, icon: Code },
        { name: "Tailwind", level: 88, icon: Palette },
        { name: "Shadcn/UI", level: 85, icon: Palette },
        { name: "HTML/CSS", level: 94, icon: Globe },
        { name: "React Native", level: 85, icon: Smartphone },
      ]
    },
    {
      title: t('skills.database'),
      icon: Database,
      color: "from-orange-500 to-amber-500",
      skills: [
        { name: "PostgreSQL", level: 93, icon: Database },
        { name: "MongoDB", level: 90, icon: Database },
        { name: "Redis", level: 86, icon: Database },
        { name: "MySQL", level: 88, icon: Database },
        { name: "SQL Server", level: 87, icon: Database },
        { name: "ElasticSearch", level: 79, icon: Database }
      ]
    },
    {
      title: t('skills.cloudDevops'),
      icon: Cloud,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "AWS", level: 92, icon: Cloud },
        { name: "Azure", level: 85, icon: Cloud },
        { name: "GCP", level: 79, icon: Cloud },
        { name: "Docker", level: 88, icon: Wrench },
        { name: "CI/CD", level: 82, icon: Wrench },
        { name: "Kafka", level: 80, icon: Shield }
      ]
    },
    {
      title: t('skills.tools'),
      icon: Wrench,
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "Git/GitHub", level: 95, icon: Wrench },
        { name: "Cursor", level: 94, icon: Wrench },
        { name: "Figma", level: 85, icon: Palette },
        { name: "Postman", level: 90, icon: Wrench },
        { name: "Jira", level: 86, icon: Wrench },
        { name: "Slack", level: 95, icon: Wrench }
      ]
    },
    {
      title: t('skills.ai'),
      icon: Brain,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "TensorFlow", level: 85, icon: Code },
        { name: "PyTorch", level: 81, icon: Code },
        { name: "OpenAI API", level: 88, icon: Code },
        { name: t('skills.nlp'), level: 85, icon: Brain },
        { name: "GPT/Claude/Gemini", level: 85, icon: Code },
        { name: t('skills.geneticAlgorithms'), level: 85, icon: Brain },
      ]
    },
  ], [t]);

  const softSkills = useMemo(() => [
    { name: t('skills.organization'), icon: Brain, description: t('skills.organizationDesc') },
    { name: t('skills.communication'), icon: Globe, description: t('skills.communicationDesc') },
    { name: t('skills.problemSolving'), icon: Zap, description: t('skills.problemSolvingDesc') },
    { name: t('skills.fastLearning'), icon: Brain, description: t('skills.fastLearningDesc') },
    { name: t('skills.teamwork'), icon: Globe, description: t('skills.teamworkDesc') },
    { name: t('skills.criticalThinking'), icon: Cpu, description: t('skills.criticalThinkingDesc') }
  ], [t]);

  useEffect(() => {
    // Reset progress when language changes
    setAnimatedProgress({});
    
    const timer = setTimeout(() => {
      const progress: { [key: string]: number } = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          progress[skill.name] = skill.level;
        });
      });
      setAnimatedProgress(progress);
    }, 300);

    return () => clearTimeout(timer);
  }, [skillCategories]);

  // Fallback para garantir que o progresso seja definido mesmo se as animações falharem
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (Object.keys(animatedProgress).length === 0) {
        const progress: { [key: string]: number } = {};
        skillCategories.forEach(category => {
          category.skills.forEach(skill => {
            progress[skill.name] = skill.level;
          });
        });
        setAnimatedProgress(progress);
      }
    }, 2000);

    return () => clearTimeout(fallbackTimer);
  }, [skillCategories, animatedProgress]);

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
    <section id="habilidades" className="py-20 relative overflow-hidden min-h-screen">
      {/* Animated background - Reduzido no mobile para melhor performance */}
      <div className="absolute inset-0">
        <div className="matrix-bg opacity-15" />

        <div className="particles hidden sm:block">
          {particles.slice(0, 15).map((particle, i) => (
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

      <div className="container mx-auto px-4 relative z-10 min-h-full flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -250px 0px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants} 
            viewport={{ margin: "0px 0px -150px 0px" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Brain className="w-8 h-8 text-primary mr-3 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">{t('skills.title')}</span>
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 mx-auto mb-6 progress-bar" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('skills.subtitle')}
            </p>
          </motion.div>

          {/* Technical Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={`category-${categoryIndex}`}
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
                        key={`skill-${categoryIndex}-${skillIndex}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
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
          <motion.div 
            variants={itemVariants} 
            viewport={{ margin: "0px 0px -150px 0px" }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary mr-3 animate-pulse" />
                <h3 className="text-3xl font-bold gradient-text">{t('skills.softSkillsTitle')}</h3>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('skills.softSkillsSubtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={`soft-skill-${index}`}
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
                  <Card className="tech-card hover:neon-border transition-all duration-300 h-full">
                    <CardContent className="p-6 text-center h-full flex flex-col justify-between min-h-[200px]">
                      <div className="flex flex-col items-center flex-grow">
                        <div className="mb-4">
                          <div className="inline-flex p-3 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                            <skill.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 