'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Star, ArrowRight, Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const y3 = useTransform(scrollY, [0, 300], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1Spring = useSpring(y1, springConfig);
  const y2Spring = useSpring(y2, springConfig);
  const y3Spring = useSpring(y3, springConfig);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary-100 via-white to-primary-50 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y: y3Spring }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"
        />
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"
        />
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary-300/30 rounded-full blur-2xl"
        />
      </motion.div>

      {/* partículas flutuantes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      <motion.div 
        style={{ opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* conteudo */}
          <motion.div
            style={{ y: y1Spring }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(126, 87, 194, 0.2)"
              }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-primary-700 mb-8 shadow-lg border border-white/50 cursor-pointer"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              Método baseado em neurociência
            </motion.div>

            {/* headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
            >
              <motion.span 
                className="text-gray-900 block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                Reprograme suas
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
              >
                emoções
              </motion.span>
              <motion.span 
                className="text-gray-900 block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
              >
                em 8 semanas
              </motion.span>
            </motion.h1>

            {/* subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Transforme ansiedade em serenidade, bloqueios em oportunidades e 
              estagnação em crescimento com nossa metodologia exclusiva que une 
              neurociência, psicologia positiva e meditação guiada.
            </motion.p>

            {/* proof social */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-6 mb-10"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 border-3 border-white flex items-center justify-center text-white font-semibold text-sm shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.2 + i * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      zIndex: 10,
                      boxShadow: "0 10px 25px rgba(126, 87, 194, 0.4)"
                    }}
                  >
                    <Image src={`/clientes/cliente${i + 1}.png`} alt={`Cliente ${i + 1}`} width={48} height={48} className="rounded-full object-cover w-full h-full border-2 border-white" />
                  </motion.div>
                ))}
              </div>
              <div className="text-left">
                <motion.div 
                  className="flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 1.8 + star * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>
                <motion.p 
                  className="text-sm text-gray-600 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.3, duration: 0.6 }}
                >
                  +2.500 mulheres transformadas
                </motion.p>
              </div>
            </motion.div>

            {/* botões de call to action */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  onClick={() => scrollToSection('preco')}
                  size="lg"
                  className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                >
                  <motion.span className="relative z-10 flex items-center gap-2">
                    Começar minha transformação
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button
                  onClick={() => scrollToSection('video')}
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 rounded-full font-semibold text-lg border-2 hover:bg-primary-50 transition-all duration-300 group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Ver como funciona
                </Button>
              </motion.div>
            </motion.div>

            {/* garantia */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-500 mt-8 flex items-center justify-center lg:justify-start gap-2"
            >
              <motion.span 
                className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center"
                variants={pulseVariants}
                animate="animate"
              >
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </motion.span>
              Garantia de 30 dias ou seu dinheiro de volta
            </motion.p>
          </motion.div>

          {/* imagem */}
          <motion.div
            style={{ y: y2Spring }}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative order-first lg:order-last"
          >
            <div className="relative">
              {/* imagem */}
              <motion.div 
                className="relative w-full aspect-[4/5] max-w-md mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.img
                  src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Mulher sorrindo ao nascer do sol"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                />
                
                {/* elementos flutuantes */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-3xl font-bold text-primary-600 mb-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      8
                    </motion.div>
                    <div className="text-xs text-gray-600 font-medium">semanas</div>
                  </div>
                </motion.div>
                
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: "3s" }}
                  className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-3xl font-bold text-accent-500 mb-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      100%
                    </motion.div>
                    <div className="text-xs text-gray-600 font-medium">online</div>
                  </div>
                </motion.div>

                {/* efeito de brilho */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-xl"
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}