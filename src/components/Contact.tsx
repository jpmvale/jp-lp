"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Globe,
  MessageCircle,
  Calendar
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  // Partículas para o fundo animado
  const particles = [
    { left: 10, delay: 0, duration: 4 },
    { left: 25, delay: 1, duration: 5 },
    { left: 40, delay: 2, duration: 6 },
    { left: 55, delay: 3, duration: 4.5 },
    { left: 70, delay: 1.5, duration: 5.5 },
    { left: 85, delay: 2.5, duration: 4.2 },
    { left: 15, delay: 3.5, duration: 6.2 },
    { left: 30, delay: 0.5, duration: 5.8 },
    { left: 45, delay: 4, duration: 4.8 },
    { left: 60, delay: 2.2, duration: 5.2 }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: "jpmvale@gmail.com",
      description: t('contact.emailDesc'),
      color: "from-blue-500 to-cyan-500",
      href: "mailto:jpmvale@gmail.com"
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      value: "+55 (98) 99245-1236",
      description: t('contact.phoneDesc'),
      color: "from-green-500 to-emerald-500",
      href: "tel:+5598992451236"
    },
    {
      icon: MapPin,
      title: t('contact.location'),
      value: "São Luís, MA",
      description: t('contact.locationDesc'),
      color: "from-purple-500 to-violet-500",
      href: "#"
    },
    {
      icon: Calendar,
      title: t('contact.availability'),
      value: t('contact.available'),
      description: t('contact.availabilityDesc'),
      color: "from-orange-500 to-amber-500",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/jpmvale",
      color: "hover:text-gray-300",
      description: "Veja meus projetos"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/joao-pedro-vale/",
      color: "hover:text-blue-400",
      description: "Conecte-se comigo"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/jpmvale",
      color: "hover:text-sky-400",
      description: "Acompanhe updates"
    },
    {
      name: "Portfolio",
      icon: Globe,
      url: "#",
      color: "hover:text-primary",
      description: "Veja mais projetos"
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

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
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
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants} 
            viewport={{ margin: "0px 0px -150px 0px" }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-primary mr-3 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">{t('contact.title')}</span>
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 mx-auto mb-6 progress-bar" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Contact Information - Centralizado */}
          <motion.div 
            variants={itemVariants} 
            viewport={{ margin: "0px 0px -150px 0px" }}
            className="space-y-12"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-8 gradient-text">{t('contact.info')}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <Card className="tech-card hover:neon-border transition-all duration-300 cursor-pointer h-full">
                      <CardContent className="p-6 text-center">
                        <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${info.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300 mb-4`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-lg group-hover:text-primary transition-colors mb-2">
                          {info.title}
                        </h4>
                        <p className="text-base font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold mb-6">{t('contact.connect')}</h4>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-full neon-border text-muted-foreground ${social.color} transition-all duration-300 hover:bg-primary/10`}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 5,
                        boxShadow: "0 0 25px hsl(142 76% 36% / 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      title={social.description}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 