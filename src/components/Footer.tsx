"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    console.log('Botão de voltar ao topo clicado'); // Debug
    
    // Múltiplas tentativas para garantir que funcione
    try {
      // Método 1: scrollTo com behavior smooth
      window.scrollTo({ 
        top: 0, 
        left: 0,
        behavior: "smooth" 
      });
    } catch (error) {
      console.log('Erro no método 1, tentando fallback:', error);
      // Fallback: scrollTo sem behavior (para navegadores mais antigos)
      try {
        window.scrollTo(0, 0);
      } catch (fallbackError) {
        console.log('Erro no método 2, tentando fallback final:', fallbackError);
        // Fallback final: scroll no document element
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }
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
      url: "mailto:jpmvale@gmail.com"
    }
  ];

  return (
    <footer className="bg-background border-t border-border relative z-10">
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
              {t('footer.description')}
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
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {[
                { href: "#sobre", label: t('nav.about') },
                { href: "#experiencia", label: t('nav.experience') },
                // { href: "#projetos", label: "Projetos" }, // COMENTADO - Reativar quando tiver projetos
                { href: "#habilidades", label: t('nav.skills') },
                { href: "#contato", label: t('nav.contact') }
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
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 jpmvale@gmail.com</p>
              <p>📱 +55 (98) 99245-1236</p>
              <p>📍 São Luís, MA - Brasil</p>
              <div className="mt-4">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-800 text-green-800">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  {t('footer.availableProjects')}
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
            <span>{t('footer.madeBy')} © {new Date().getFullYear()}</span>
          </motion.div>

          <div className="relative z-50">
            {/* Botão simples para teste */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('CLIQUE SIMPLES DETECTADO!');
                scrollToTop();
              }}
              className="px-6 py-3 border border-border rounded-lg flex items-center gap-2 hover:bg-primary/10 hover:border-primary transition-all duration-300 cursor-pointer bg-background text-foreground"
              style={{ 
                pointerEvents: 'auto',
                zIndex: 9999,
                position: 'relative'
              }}
            >
              <ArrowUp className="h-5 w-5" />
              {t('footer.backToTop')}
            </button>
            
            {/* Botão original comentado para debug
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Clique detectado no botão!');
                    scrollToTop();
                  }}
                  className="flex items-center gap-2 hover:bg-primary/10 hover:border-primary transition-all duration-300 cursor-pointer relative z-10"
                  style={{ pointerEvents: 'auto' }}
                >
                  <ArrowUp className="h-5 w-5" />
                  Voltar ao topo
                </Button>
              </motion.div>
            </motion.div>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 