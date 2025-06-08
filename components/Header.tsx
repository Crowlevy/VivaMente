'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const headerY = useTransform(scrollY, [0, 100], [0, -10]);
  const headerOpacity = useTransform(scrollY, [0, 50, 100], [0.95, 0.98, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.header
      style={{ y: headerY, opacity: headerOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-white/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
          >
            <motion.div 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image src="/logo_viva_mente.svg" alt="VivaMente" width={40} height={40} className="w-full h-full" />
            </motion.div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              VivaMente
            </span>
          </motion.div>

          {/* navegação desktop */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="hidden lg:flex items-center space-x-8"
          >
            {['sobre', 'beneficios', 'depoimentos', 'preco'].map((section, index) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative text-gray-700 hover:text-primary-600 transition-colors font-medium py-2 px-1 text-sm"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="relative z-10">
                  {section === 'sobre' && 'Sobre o Curso'}
                  {section === 'beneficios' && 'Benefícios'}
                  {section === 'depoimentos' && 'Depoimentos'}
                  {section === 'preco' && 'Investimento'}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </motion.nav>

          {/* botão CTA desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <Button
              onClick={() => scrollToSection('preco')}
              className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Quero me transformar
            </Button>
          </motion.div>

          {/* botão menu mobile */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* menu mobile */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        className="lg:hidden fixed top-14 sm:top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-xl max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto"
      >
        <motion.div 
          variants={menuVariants}
          className="p-4 space-y-2"
        >
          {['sobre', 'beneficios', 'depoimentos', 'preco'].map((section) => (
            <motion.button
              key={section}
              variants={menuItemVariants}
              onClick={() => {
                scrollToSection(section);
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:text-primary-600 transition-colors font-medium rounded-xl hover:bg-primary-50 text-sm"
            >
              {section === 'sobre' && 'Sobre o Curso'}
              {section === 'beneficios' && 'Benefícios'}
              {section === 'depoimentos' && 'Depoimentos'}
              {section === 'preco' && 'Investimento'}
            </motion.button>
          ))}
          <motion.div variants={menuItemVariants} className="pt-2">
            <Button
              onClick={() => {
                scrollToSection('preco');
                setIsMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white py-3 rounded-xl font-medium text-sm"
            >
              Quero me transformar
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}