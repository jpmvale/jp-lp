"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download, Code, Zap, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(true);

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
    { Icon: Code, delay: 0, x: 10, y: 20 },
    { Icon: Zap, delay: 1, x: -15, y: 10 },
    { Icon: Cpu, delay: 2, x: 20, y: -10 },
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
              <Avatar className="w-32 h-32 mx-auto neon-border float">
                <AvatarImage src="/avatar.jpg" alt="João Pedro Vale" />
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
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed scan-lines"
          >
            Transformo ideias em{" "}
            <span className="text-primary font-semibold">experiências digitais</span>{" "}
            incríveis. Especializado em tecnologias modernas e arquiteturas escaláveis.
          </motion.p>

          {/* CTA Buttons with glow effects */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="glow-button bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-primary-foreground px-8 py-3"
              onClick={() => scrollToSection("projetos")}
            >
              <Code className="mr-2 h-5 w-5" />
              Ver Projetos
            </Button>
            
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
              Download CV
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

          {/* Scroll indicator */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 flex flex-col items-center"
          >
            <motion.button
              onClick={() => scrollToSection("sobre")}
              className="group flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                Role para baixo
              </span>
              <motion.div
                className="relative"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-6 h-10 border-2 border-primary/60 group-hover:border-primary rounded-full flex justify-center relative overflow-hidden">
                  <motion.div 
                    className="w-1 h-3 bg-primary rounded-full mt-2"
                    animate={{
                      opacity: [1, 0.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
              
              {/* Arrow indicator */}
              <motion.div
                animate={{
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <svg 
                  className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 