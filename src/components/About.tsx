"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Lightbulb, Target, Zap, Brain, Heart, Globe2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Code2,
      title: t('about.cleanCode'),
      description: t('about.cleanCodeDesc'),
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Lightbulb,
      title: t('about.innovation'),
      description: t('about.innovationDesc'), 
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Target,
      title: t('about.results'),
      description: t('about.resultsDesc'),
      color: "from-purple-400 to-pink-500"
    }
  ];

  const languages = [
    { 
      name: t('about.portuguese'), 
      level: t('about.native'), 
      flag: (
        <svg viewBox="0 0 24 16" className="w-6 h-4">
          <rect width="24" height="16" fill="#009639"/>
          <polygon points="12,1.5 21,8 12,14.5 3,8" fill="#FEDF00"/>
          <circle cx="12" cy="8" r="3.2" fill="#002776"/>
          <path d="M9,8 Q12,6.8 15,8 Q12,9.2 9,8 Z" fill="white"/>
        </svg>
      ),
      proficiency: 100 
    },
    { 
      name: t('about.english'), 
      level: t('about.fluent'), 
      flag: (
        <svg viewBox="0 0 24 16" className="w-6 h-4">
          <rect width="24" height="16" fill="#B22234"/>
          <rect width="24" height="1.23" y="1.23" fill="white"/>
          <rect width="24" height="1.23" y="3.69" fill="white"/>
          <rect width="24" height="1.23" y="6.15" fill="white"/>
          <rect width="24" height="1.23" y="8.61" fill="white"/>
          <rect width="24" height="1.23" y="11.08" fill="white"/>
          <rect width="24" height="1.23" y="13.54" fill="white"/>
          <rect width="9.6" height="8.61" fill="#3C3B6E"/>
        </svg>
      ),
      proficiency: 90 
    },
    { 
      name: t('about.spanish'), 
      level: t('about.intermediate'), 
      flag: (
        <svg viewBox="0 0 24 16" className="w-6 h-4">
          <rect width="24" height="16" fill="#C60B1E"/>
          <rect width="24" height="8" y="4" fill="#FFC400"/>
          <g transform="translate(6,6)">
            <rect width="4" height="4" fill="#C60B1E" opacity="0.8"/>
            <rect width="2" height="2" x="1" y="1" fill="#FFC400"/>
          </g>
        </svg>
      ),
      proficiency: 70 
    }
  ];

  const interests = [
    'about.softwareEngineering',
    'about.backend', 
    'about.frontend', 
    'about.microservices',
    'about.eventArchitecture', 
    'about.observability', 
    'about.modularMonolith',
    'about.crawlerScraping',
    'about.devops', 
    'about.ai', 
    'about.databases',
    'about.gameDev'
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
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -200px 0px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants} 
            viewport={{ margin: "0px 0px -100px 0px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{t('about.title')}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-6 progress-bar" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Story Section */}
            <motion.div 
              variants={itemVariants} 
              viewport={{ margin: "0px 0px -150px 0px" }}
              className="space-y-6"
            >
              <Card className="tech-card neon-border h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <Brain className="w-8 h-8 text-primary mr-3 float" />
                    <h3 className="text-2xl font-bold gradient-text">{t('about.journey')}</h3>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground flex-grow">
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.journeyP1') }} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.journeyP2') }} />
                    <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.journeyP3') }} />
                  </div>

                  <div className="mt-8 flex items-center">
                    <Heart className="w-5 h-5 text-red-400 mr-2 animate-pulse" />
                    <span className="text-sm text-muted-foreground">
                      {t('about.focusMessage')}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Highlights and Languages Grid */}
            <motion.div 
              variants={itemVariants} 
              viewport={{ margin: "0px 0px -150px 0px" }}
              className="h-full flex flex-col"
            >
              <div className="space-y-3 flex-1">
                {/* Highlights */}
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
                      <CardContent className="px-3 py-2">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${highlight.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                            <highlight.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-base font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                              {highlight.title}
                            </h4>
                            <p className="text-muted-foreground text-sm leading-tight">
                              {highlight.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Languages Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group"
                >
                  <Card className="tech-card hover:neon-border transition-all duration-300">
                    <CardContent className="px-3 py-3">
                      <div className="flex items-center mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-opacity-20 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <Globe2 className="w-4 h-4 text-white" />
                        </div>
                        <div className="ml-3 flex-1 min-w-0">
                          <h4 className="text-base font-semibold mb-0.5 text-foreground group-hover:text-primary transition-colors">
                            {t('about.languages')}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-tight">
                            {t('about.languagesDesc')}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2.5">
                        {languages.map((language, index) => (
                          <motion.div
                            key={language.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-between py-0.5"
                          >
                                                          <div className="flex items-center space-x-3">
                                <div className="w-8 h-6 rounded-sm overflow-hidden shadow-sm flex items-center justify-center">
                                  {language.flag}
                                </div>
                                <div>
                                  <div className="font-medium text-foreground text-sm">{language.name}</div>
                                  <div className="text-xs text-muted-foreground">{language.level}</div>
                                </div>
                              </div>
                            <div className="flex items-center space-x-1.5">
                              <div className="w-12 h-1 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${language.proficiency}%` }}
                                  transition={{ delay: 1 + index * 0.1, duration: 1, ease: "easeOut" }}
                                  viewport={{ once: true }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground font-mono w-6">
                                {language.proficiency}%
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Interests Section */}
          <motion.div 
            variants={itemVariants}
            viewport={{ margin: "0px 0px -100px 0px" }}
            className="mt-16 text-center"
          >
            <div className="flex items-center justify-center mb-8">
              <Zap className="w-6 h-6 text-primary mr-3 animate-pulse" />
              <h3 className="text-2xl font-bold gradient-text">{t('about.interests')}</h3>
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
                    {t(interest)}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            viewport={{ margin: "0px 0px -100px 0px" }}
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
                className="text-center h-full"
              >
                <Card className="tech-card hover:neon-border transition-all duration-300 h-full">
                  <CardContent className="p-6 h-full flex flex-col justify-center items-center min-h-[120px]">
                    <div className={`text-3xl font-bold mb-2 ${stat.color} glitch`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground text-center leading-tight">
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