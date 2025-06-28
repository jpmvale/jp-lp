"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Globe, Check, X } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const languages = [
    { code: 'pt' as Language, name: t('language.portuguese'), flag: '🇧🇷' },
    { code: 'en' as Language, name: t('language.english'), flag: '🇺🇸' },
    { code: 'es' as Language, name: t('language.spanish'), flag: '🇪🇸' },
  ];

  const handleLanguageSelect = (langCode: Language) => {
    setLanguage(langCode);
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setClicked(true);
    setIsModalOpen(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`px-4 py-2 rounded border text-sm font-medium transition-all duration-200 ${
          clicked 
            ? 'bg-red-500 text-white border-red-600' 
            : 'bg-blue-500 text-white border-blue-600 hover:bg-blue-600'
        }`}
        style={{ 
          zIndex: 99999, 
          position: 'relative',
          pointerEvents: 'auto',
          minWidth: '80px',
          minHeight: '36px'
        }}
      >
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4" />
          <span>{language.toUpperCase()}</span>
        </div>
      </button>

      {/* Modal usando Portal */}
      {mounted && isModalOpen && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
          }}
        >
          <div 
            className="relative max-w-md mx-4 w-full bg-white dark:bg-gray-800 rounded-lg p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">{t('language.select')}</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsModalOpen(false)}
                className="h-8 w-8 p-0 hover:bg-primary/10"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Language Options */}
            <div className="space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                    language === lang.code
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </div>
                    {language === lang.code && (
                      <Check className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default LanguageSelector; 