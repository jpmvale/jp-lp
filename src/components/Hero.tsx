"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download, Code, Zap, Cpu } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Valores determinísticos para as partículas
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
    { left: 60, delay: 2.2, duration: 5.2 },
    { left: 75, delay: 1.8, duration: 6.5 },
    { left: 90, delay: 3.2, duration: 4.3 },
    { left: 5, delay: 2.8, duration: 5.7 },
    { left: 20, delay: 4.2, duration: 4.6 },
    { left: 35, delay: 1.2, duration: 6.1 },
    { left: 50, delay: 3.8, duration: 5.3 },
    { left: 65, delay: 0.8, duration: 4.9 },
    { left: 80, delay: 2.6, duration: 5.9 },
    { left: 95, delay: 1.6, duration: 4.4 },
    { left: 12, delay: 3.6, duration: 6.3 }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsTyping(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const floatingIcons = [
    { Icon: Code, delay: 0, x: 35, y: 15 },    // Direita inferior (subiu)
    { Icon: Zap, delay: 1, x: 0, y: 35 },      // Inferior centro
    { Icon: Cpu, delay: 2, x: -35, y: 25 },    // Esquerda inferior
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="matrix-bg" />
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

      {/* Mouse follower gradient */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(142 76% 36% / 0.1), transparent 40%)`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Avatar with glow effect */}
          <motion.div 
            variants={itemVariants}
            className="mb-8 relative inline-block"
          >
            <div className="relative">
              <Avatar 
                className="w-56 h-56 mx-auto neon-border float cursor-pointer transition-transform hover:scale-105"
                onClick={() => setIsModalOpen(true)}
              >
                <AvatarImage 
                  src="/profile.jpg" 
                  alt="João Pedro Vale"
                  className="object-cover object-bottom"
                />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-blue-500">
                  JP
                </AvatarFallback>
              </Avatar>
              
              {/* Floating tech icons */}
              {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    top: `${50 + y}%`,
                    left: `${50 + x}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    delay: delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="w-6 h-6 text-primary opacity-60" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Name with glitch effect */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-4 relative"
          >
            <span className="gradient-text glitch">
              João Pedro Vale
            </span>
          </motion.h1>

          {/* Animated title */}
          <motion.div 
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-6"
          >
            <span className="font-mono">
              {isTyping ? (
                <span className="typing">Desenvolvedor Full Stack</span>
              ) : (
                "Desenvolvedor Full Stack"
              )}
            </span>
          </motion.div>

          {/* Description with scan lines */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Transformo ideias em{" "}
            <span className="text-primary font-semibold">produtos digitais.</span>{" "}
             Especializado em tecnologias modernas e arquiteturas escaláveis.
          </motion.p>

          {/* CTA Buttons with glow effects */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            {/* COMENTADO - Reativar quando tiver projetos
            <Button 
              size="lg" 
              className="glow-button bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-primary-foreground px-8 py-3"
              onClick={() => scrollToSection("projetos")}
            >
              <Code className="mr-2 h-5 w-5" />
              Ver Projetos
            </Button>
            */}
            
            <Button 
              variant="outline" 
              size="lg"
              className="neon-border hover:bg-primary/10 px-8 py-3"
              onClick={() => scrollToSection("contato")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Entrar em Contato
            </Button>

            <Button 
              variant="ghost" 
              size="lg"
              className="hover:bg-primary/10 px-8 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Baixar CV
            </Button>
          </motion.div>

          {/* Social Links with hover effects */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { 
                href: "https://github.com/jpmvale", 
                icon: Github, 
                label: "GitHub",
                color: "hover:text-gray-300"
              },
              { 
                href: "https://www.linkedin.com/in/joao-pedro-vale/", 
                icon: Linkedin, 
                label: "LinkedIn",
                color: "hover:text-blue-400"
              },
              { 
                href: "mailto:joaopedro@example.com", 
                icon: Mail, 
                label: "Email",
                color: "hover:text-primary"
              }
            ].map(({ href, icon: Icon, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground ${color} transition-all duration-300 p-3 rounded-full hover:bg-primary/10 neon-border`}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 5,
                  boxShadow: "0 0 20px hsl(142 76% 36% / 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>


        </motion.div>
      </div>

      {/* Modal da foto de perfil */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className="relative max-w-md mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src="/profile.jpg"
                  alt="João Pedro Vale - Foto de Perfil"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl neon-border shadow-2xl"
                />
                
                {/* Botão de fechar */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Efeito de brilho */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero; 