"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/jpmvale"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/joao-pedro-vale"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      name: "Email",
      url: "mailto:joao@example.com"
    }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">João Pedro Vale</h3>
            <p className="text-muted-foreground mb-4">
              Desenvolvedor Full Stack apaixonado por criar soluções digitais 
              inovadoras e experiências de usuário excepcionais.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "Sobre" },
                { href: "#experience", label: "Experiência" },
                { href: "#projects", label: "Projetos" },
                { href: "#skills", label: "Habilidades" },
                { href: "#contact", label: "Contato" }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 joao@example.com</p>
              <p>📱 +55 (11) 99999-9999</p>
              <p>📍 São Paulo, SP - Brasil</p>
              <div className="mt-4">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  Disponível para projetos
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center text-muted-foreground text-sm mb-4 sm:mb-0"
          >
            <span>Feito com</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>por João Pedro Vale © {new Date().getFullYear()}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="flex items-center gap-2"
            >
              <ArrowUp className="h-4 w-4" />
              Voltar ao topo
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 