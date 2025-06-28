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
  ArrowRight,
  Sparkles,
  Brain
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const { t } = useLanguage();

  // Function to translate periods
  const translatePeriod = (period: string): string => {
    const monthMap: { [key: string]: string } = {
      'Jan': t('experience.jan'),
      'Fev': t('experience.feb'),
      'Mar': t('experience.mar'),
      'Abr': t('experience.apr'),
      'Mai': t('experience.may'),
      'Jun': t('experience.jun'),
      'Jul': t('experience.jul'),
      'Ago': t('experience.aug'),
      'Set': t('experience.sep'),
      'Out': t('experience.oct'),
      'Nov': t('experience.nov'),
      'Dez': t('experience.dec'),
      'Presente': t('experience.present')
    };

    let translatedPeriod = period;
    Object.keys(monthMap).forEach(key => {
      translatedPeriod = translatedPeriod.replace(new RegExp(key, 'g'), monthMap[key]);
    });

    return translatedPeriod;
  };

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

  const getExperiences = () => [
    {
      title: t('experience.seniorDeveloper'),
      company: "Melhor Envio",
      location: "Pelotas, RS - Remoto",
      period: translatePeriod("Mai 2024 - Presente"),
      status: t('experience.current'),
      type: t('experience.fullTime'),
      level: t('experience.senior'),
      description: [
        t('experience.melhorEnvio.resp1'),
        t('experience.melhorEnvio.resp2'),
        t('experience.melhorEnvio.resp3'),
        t('experience.melhorEnvio.resp4')
      ],
      achievements: [
        t('experience.melhorEnvio.ach1'),
        t('experience.melhorEnvio.ach2'),
        t('experience.melhorEnvio.ach3')
      ],
      technologies: ["NestJS", "MongoDB", "AWS", "Golang", "Laravel", "Event Driven", "Async Programming"],
      gradient: "from-blue-500 to-blue-600",
      icon: Code
    },
    {
      title: t('experience.backendDeveloper'),
      company: "Tegra",
      location: "São Paulo, SP - Remoto",
      period: translatePeriod("Mai 2023 - Mai 2024"),
      status: t('experience.completed'),
      type: t('experience.fullTime'),
      level: t('experience.mid'),
      description: [
        t('experience.tegra.resp1'),
        t('experience.tegra.resp2'),
        t('experience.tegra.resp3'),
        t('experience.tegra.resp4')
      ],
      achievements: [
        t('experience.tegra.ach1'),
        t('experience.tegra.ach2'),
        t('experience.tegra.ach3')
      ],
      technologies: ["NestJS", "AWS", "PostgreSQL", "MongoDB", "React.js", "Web Scraping"],
      gradient: "from-purple-500 to-purple-600",
      icon: TrendingUp
    },
    {
      title: t('experience.backendDeveloper'),
      company: "Jazida",
      location: "Brasília, DF - Remoto",
      period: translatePeriod("Mai 2021 - Mai 2023"),
      status: t('experience.completed'),
      type: t('experience.fullTime'),
      level: t('experience.mid'),
      description: [
        t('experience.jazida.resp1'),
        t('experience.jazida.resp2'),
        t('experience.jazida.resp3'),
        t('experience.jazida.resp4')
      ],
      achievements: [
        t('experience.jazida.ach1'),
        t('experience.jazida.ach2'),
        t('experience.jazida.ach3')
      ],
      technologies: ["Node.js", "Python", "Golang", "Azure", "Web Scraping", "Data Mining"],
      gradient: "from-green-800 to-green-900",
      icon: Sparkles
    },
    {
      title: t('experience.fullStackDeveloper'),
      company: "Vale",
      location: "São Luís, MA",
      period: translatePeriod("Jan 2020 - Mai 2021"),
      status: t('experience.completed'),
      type: t('experience.fullTime'),
      level: t('experience.junior'),
      description: [
        t('experience.valeFullStack.resp1'),
        t('experience.valeFullStack.resp2'),
        t('experience.valeFullStack.resp3'),
        t('experience.valeFullStack.resp4')
      ],
      achievements: [
        t('experience.valeFullStack.ach1'),
        t('experience.valeFullStack.ach2'),
        t('experience.valeFullStack.ach3')
      ],
      technologies: ["React.js", "Node.js", "Python", "C#", ".NET", "Pandas"],
      gradient: "from-green-400 to-green-500",
      icon: Award
    },
    {
      title: t('experience.developmentIntern'),
      company: "Vale",
      location: "São Luís, MA",
      period: translatePeriod("Jan 2019 - Jan 2020"),
      status: t('experience.completed'),
      type: t('experience.partTime'),
      level: t('experience.intern'),
      description: [
        t('experience.valeIntern.resp1'),
        t('experience.valeIntern.resp2'),
        t('experience.valeIntern.resp3'),
        t('experience.valeIntern.resp4')
      ],
      achievements: [
        t('experience.valeIntern.ach1'),
        t('experience.valeIntern.ach2'),
        t('experience.valeIntern.ach3')
      ],
      technologies: ["C#", ".NET Framework", "HTML", "CSS", "JavaScript", "jQuery", "Python"],
      gradient: "from-green-400 to-green-500",
      icon: Target
    },
    {
      title: t('experience.gameDevTeacher'),
      company: "Senac Maranhão",
      location: "São Luís, MA",
      period: translatePeriod("Abr 2018 - Jan 2019"),
      status: t('experience.completed'),
      type: t('experience.partTime'),
      level: t('experience.teacher'),
      description: [
        t('experience.senac.resp1'),
        t('experience.senac.resp2'),
        t('experience.senac.resp3'),
        t('experience.senac.resp4')
      ],
      achievements: [
        t('experience.senac.ach1'),
        t('experience.senac.ach2'),
        t('experience.senac.ach3')
      ],
      technologies: ["Unity", "C#", "Blender", "Game Development"],
      gradient: "from-yellow-400 to-yellow-500",
      icon: Brain
    },
    {
      title: t('experience.freelanceGameDev'),
      company: "EducVR",
      location: "São Luís, MA - Remote",
      period: translatePeriod("Mar 2017 - Nov 2018"),
      status: t('experience.completed'),
      type: t('experience.partTime'),
      level: t('experience.freelancer'),
      description: [
        t('experience.educvr.resp1'),
        t('experience.educvr.resp2'),
        t('experience.educvr.resp3'),
        t('experience.educvr.resp4')
      ],
      achievements: [
        t('experience.educvr.ach1'),
        t('experience.educvr.ach2'),
        t('experience.educvr.ach3')
      ],
      technologies: ["Unity", "C#", "Virtual Reality", "Google Cardboard"],
      gradient: "from-orange-500 to-orange-600",
      icon: Zap
    }
  ];

  const experiences = getExperiences();

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
    const currentStatuses = ["Atual", "Current", "Actual"];
    const completedStatuses = ["Concluído", "Completed", "Completado"];
    
    if (currentStatuses.includes(status)) {
      return "bg-green-500/20 text-green-400 border-green-500/30";
    } else if (completedStatuses.includes(status)) {
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    } else {
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getLevelColor = (level: string) => {
    const seniorLevels = ["Sênior", "Senior"];
    const midLevels = ["Pleno", "Mid-level", "Intermedio"];
    const juniorLevels = ["Júnior", "Junior"];
    
    if (seniorLevels.includes(level)) {
      return "bg-purple-500/20 text-purple-400 border-purple-500/30";
    } else if (midLevels.includes(level)) {
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    } else if (juniorLevels.includes(level)) {
      return "bg-green-500/20 text-green-400 border-green-500/30";
    } else {
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="experiencia" className="py-20 relative overflow-hidden">
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
              <Briefcase className="w-8 h-8 text-primary mr-3 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">{t('experience.title')}</span>
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 mx-auto mb-6 progress-bar" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('experience.subtitle')}
            </p>
          </motion.div>

          {/* Timeline Navigation - Hidden on mobile */}
          <motion.div variants={itemVariants} className="mb-12 hidden md:block">
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
                  <div className="flex items-center justify-center">
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
                    <span>{t('experience.timeline')}</span>
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
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${exp.gradient} bg-opacity-80`}>
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
                        {t('experience.responsibilities')}
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
                        {t('experience.achievements')}
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
                        {t('experience.technologies')}
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
            viewport={{ margin: "0px 0px -150px 0px" }}
            className="text-center mt-16"
          >
            <Card className="tech-card max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary mr-2 animate-pulse" />
                  <h3 className="text-2xl font-bold gradient-text">{t('experience.workTogether')}</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {t('experience.workTogetherDesc')}
                </p>
                <Button 
                  size="lg" 
                  className="glow-button bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {t('experience.getInTouch')}
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