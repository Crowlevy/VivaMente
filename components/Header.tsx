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
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-white/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* logo que o cara aqui fez, slk o pai é bom dms */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <motion.div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              whileHover={{ 
                rotate: 5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image src="/logo_viva_mente.svg" alt="VivaMente" width={40} height={40} />
            </motion.div>
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              VivaMente
            </span>
          </motion.div>

          {/* navegação */}
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
                className="relative text-gray-700 hover:text-primary-600 transition-colors font-medium py-2 px-1"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${index * 0.1}s` }}
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
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
              </motion.button>
            ))}
          </motion.nav>

          {/* botão de call to action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <Button
              onClick={() => scrollToSection('preco')}
              className="hidden lg:inline-flex bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Quero me transformar
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
            </Button>
          </motion.div>

          {/* botão de menu */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-primary-600 transition-colors relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-xl"
      >
        <motion.div 
          variants={menuVariants}
          className="px-4 py-6 space-y-4"
        >
          {['sobre', 'beneficios', 'depoimentos', 'preco'].map((section, index) => (
            <motion.button
              key={section}
              variants={menuItemVariants}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left py-3 px-4 text-gray-700 hover:text-primary-600 transition-colors font-medium rounded-xl hover:bg-primary-50"
              whileHover={{ x: 10, backgroundColor: "rgba(126, 87, 194, 0.05)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {section === 'sobre' && 'Sobre o Curso'}
              {section === 'beneficios' && 'Benefícios'}
              {section === 'depoimentos' && 'Depoimentos'}
              {section === 'preco' && 'Investimento'}
            </motion.button>
          ))}
          <motion.div variants={menuItemVariants}>
            <Button
              onClick={() => scrollToSection('preco')}
              className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white rounded-xl font-medium py-3 relative overflow-hidden group"
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Quero me transformar
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}