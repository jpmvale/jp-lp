"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Zap,
  Clock,
  Globe,
  MessageCircle,
  Calendar,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "joaopedro@example.com",
      description: "Respondo em até 24h",
      color: "from-blue-500 to-cyan-500",
      href: "mailto:joaopedro@example.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      description: "WhatsApp disponível",
      color: "from-green-500 to-emerald-500",
      href: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP",
      description: "Disponível para remoto",
      color: "from-purple-500 to-violet-500",
      href: "#"
    },
    {
      icon: Calendar,
      title: "Disponibilidade",
      value: "Disponível",
      description: "Para novos projetos",
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
              <MessageCircle className="w-8 h-8 text-primary mr-3 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Vamos Conversar</span>
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 mx-auto mb-6 progress-bar" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tem um projeto em mente? Vamos transformar sua ideia em realidade digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 gradient-text">Informações de Contato</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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
                      <Card className="tech-card hover:neon-border transition-all duration-300 cursor-pointer">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${info.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                              <info.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                                {info.title}
                              </h4>
                              <p className="text-sm font-medium">{info.value}</p>
                              <p className="text-xs text-muted-foreground">{info.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Availability Status */}
                <Card className="tech-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          Disponível
                        </Badge>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">Status Atual</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Atualmente disponível para novos projetos e oportunidades de colaboração.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Tempo de resposta: ~2 horas</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold mb-4">Conecte-se Comigo</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full neon-border text-muted-foreground ${social.color} transition-all duration-300 hover:bg-primary/10`}
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 5,
                          boxShadow: "0 0 25px hsl(142 76% 36% / 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="tech-card">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Envie uma Mensagem</CardTitle>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Nome *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="neon-border focus:border-primary transition-colors"
                            placeholder="Seu nome completo"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="neon-border focus:border-primary transition-colors"
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Assunto *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="neon-border focus:border-primary transition-colors"
                          placeholder="Sobre o que você gostaria de falar?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Mensagem *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="neon-border focus:border-primary transition-colors resize-none"
                          placeholder="Conte-me mais sobre seu projeto ou ideia..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full glow-button bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Enviando...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send className="w-4 h-4" />
                            <span>Enviar Mensagem</span>
                          </div>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="mb-4">
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-500 mb-2">Mensagem Enviada!</h3>
                      <p className="text-muted-foreground">
                        Obrigado pelo contato! Responderei em breve.
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Card className="tech-card max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary mr-2 animate-pulse" />
                  <h3 className="text-2xl font-bold gradient-text">Pronto para Começar?</h3>
                </div>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Seja um projeto pequeno ou uma aplicação complexa, estou aqui para ajudar você 
                  a criar soluções digitais incríveis que fazem a diferença.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="glow-button bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Iniciar Conversa
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="neon-border hover:bg-primary/10"
                    onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Ver Portfólio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 