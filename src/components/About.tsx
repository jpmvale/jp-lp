"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Lightbulb, Target, Zap, Brain, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Fissurado por escrever código limpo, testável e bem documentado",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Sempre em busca de novas tecnologias e soluções criativas", 
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Orientado a entregar valor real e impacto positivo nos projetos",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const interests = [
    "Engenharia de Software", "Back End", "Front End", "Microserviços", 
    "Arquitetura baseada em eventos", "Observabilidade", "Monolito Modular",
    "Crawler/Web Scraping","DevOps", "Inteligência Artificial", "BD Relacional/Não Relacional",
    "Desenvolvimento de Jogos", 
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

  return (
    <section id="sobre" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="matrix-bg opacity-20" />

      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{t('about.title')}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-6 progress-bar" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="tech-card neon-border">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Brain className="w-8 h-8 text-primary mr-3 float" />
                    <h3 className="text-2xl font-bold gradient-text">Minha Jornada</h3>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Sou um desenvolvedor de software <span className="text-primary font-semibold">autodidata</span> e 
                      entusiasta de tecnologia. Comecei minha jornada em <span className="text-blue-400 font-semibold">2016 </span> 
                      ingressando na graduação de Engenharia da Computação na UEMA, onde tive meu primeiro contato 
                      com programação através de C e Java.
                    </p>
                    
                    <p className="leading-relaxed">
                      Durante a graduação, participei de <span className="text-green-400 font-semibold">laboratórios de desenvolvimento de jogos </span> 
                      e me aproximei da comunidade local de Game Devs. Em <span className="text-purple-400 font-semibold">2019</span>, 
                      fui aprovado no programa de estágio da <span className="text-yellow-400 font-semibold">Vale</span> e 
                      iniciei minha carreira no mundo do Web Development, começando com C# e posteriormente 
                      migrando para Node.js e React.
                    </p>
                    
                    <p className="leading-relaxed">
                      Tive diversas experiências em empresas diferentes que moldaram minha carreira. 
                      Hoje sou um <span className="text-pink-400 font-semibold">desenvolvedor Full Stack </span> 
                      capaz de trabalhar com múltiplas stacks tecnológicas, além de atuar em 
                      <span className="text-cyan-400 font-semibold"> projetos freelance</span> de construção de sistemas.
                    </p>
                  </div>

                  <div className="mt-8 flex items-center">
                    <Heart className="w-5 h-5 text-red-400 mr-2 animate-pulse" />
                    <span className="text-sm text-muted-foreground">
                      Focado em desenvolver código limpo e experiências de usuário excepcionais.
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="grid gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group"
                  >
                    <Card className="tech-card hover:neon-border transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${highlight.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                            <highlight.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                              {highlight.title}
                            </h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {highlight.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Interests Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="flex items-center justify-center mb-8">
              <Zap className="w-6 h-6 text-primary mr-3 animate-pulse" />
              <h3 className="text-2xl font-bold gradient-text">Áreas de Interesse</h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 20px hsl(142 76% 36% / 0.3)"
                  }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium neon-border hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-pointer"
                  >
                    {interest}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "7+", label: t('about.experience'), color: "text-green-400" },
              { number: "7", label: t('about.education'), color: "text-pink-400" },
              { number: "15+", label: t('about.projects'), color: "text-blue-400" },
              { number: "8+", label: t('about.technologies'), color: "text-purple-400" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="tech-card hover:neon-border transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`text-3xl font-bold mb-2 ${stat.color} glitch`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 