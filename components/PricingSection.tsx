'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Check, Star, Clock, Shield, Heart, Gift, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const features = [
    "8 semanas de conteúdo exclusivo",
    "Mais de 40 vídeo-aulas práticas",
    "Exercícios de autoconhecimento",
    "Meditações guiadas exclusivas",
    "Acesso à comunidade privada",
    "Certificado de conclusão",
    "Suporte via WhatsApp",
    "Acesso vitalício ao conteúdo",
    "Atualizações gratuitas",
    "Material complementar em PDF"
  ];

  const bonus = [
    {
      icon: Heart,
      title: "Bônus 1: Kit de Autocuidado",
      description: "Guia completo com 21 práticas de autocuidado",
      value: "R$ 197",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Gift,
      title: "Bônus 2: Planejamento de Metas",
      description: "Metodologia para definir e alcançar seus objetivos",
      value: "R$ 147",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="preco" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-white to-secondary-50 relative overflow-hidden">
      {/* background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/10 rounded-full blur-3xl" />
      </motion.div>

      {/* simbolos */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-200 opacity-20 text-2xl font-bold"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-15, -35, -15],
            rotate: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          R$
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Invista na sua{' '}
            <motion.span 
              className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              transformação
            </motion.span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Uma oportunidade única de transformar sua vida emocional com uma metodologia 
            comprovada e o suporte que você precisa.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* bônus */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {bonus.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="p-6 bg-white rounded-2xl shadow-lg border border-primary-100 relative overflow-hidden group"
              >
                {/* background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                    }}
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {item.description}
                    </p>
                    <motion.div 
                      className="text-primary-600 font-bold"
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      Valor: {item.value}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* card de preço */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* badge popular */}
            <motion.div 
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ 
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
            >
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 shadow-xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="w-4 h-4" />
                </motion.div>
                Oferta Limitada
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-3xl shadow-2xl border-2 border-primary-200 p-8 relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* background */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full blur-3xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                {/* header */}
                <div className="text-center mb-8">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    Curso Reprogramação Emocional
                  </motion.h3>
                  
                  {/* preço */}
                  <div className="mb-4">
                    <motion.div 
                      className="flex items-center justify-center gap-2 mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.9 }}
                    >
                      <span className="text-lg text-gray-500 line-through">De R$ 1.997</span>
                      <motion.span 
                        className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold"
                        animate={{ 
                          scale: [1, 1.1, 1],
                        }}
                        transition={{ 
                          duration: 1.5,
                          repeat: Infinity
                        }}
                      >
                        50% OFF
                      </motion.span>
                    </motion.div>
                    
                    <motion.div 
                      className="text-5xl font-bold text-gray-900 mb-2"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ 
                        delay: 1.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                    >
                      R$ 997
                    </motion.div>
                    
                    <motion.p 
                      className="text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 1.3 }}
                    >
                      ou 12x de R$ 97 sem juros
                    </motion.p>
                  </div>

                  {/* tempo limitado */}
                  <motion.div 
                    className="flex items-center justify-center gap-2 text-red-600 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Clock className="w-4 h-4" />
                    </motion.div>
                    Oferta válida por tempo limitado
                  </motion.div>
                </div>

                {/* features */}
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1.7 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-5 h-5 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </motion.div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* botão de call to action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 2.8 }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 mb-6 relative overflow-hidden group"
                    onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Tenho interesse no curso Reprogramação Emocional.', '_blank')}
                  >
                    <motion.span className="relative z-10 flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Quero me transformar agora
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </Button>
                </motion.div>

                {/* garantia */}
                <motion.div 
                  className="flex items-center justify-center gap-3 text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 3 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity
                    }}
                  >
                    <Shield className="w-5 h-5 text-green-500" />
                  </motion.div>
                  <span>Garantia de 30 dias ou seu dinheiro de volta</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* valor da proposta */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }}
              className="p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">
                Por que investir agora?
              </h3>
              <ul className="space-y-3 text-gray-700 relative z-10">
                {[
                  "Preço promocional válido apenas hoje",
                  "Acesso imediato após a compra",
                  "Suporte exclusivo via WhatsApp",
                  "Comunidade privada ativa"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <Check className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }}
              className="p-6 bg-white rounded-2xl shadow-lg border border-accent-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Valor real do curso:
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  { label: "Curso completo:", value: "R$ 1.497" },
                  { label: "Bônus 1:", value: "R$ 197" },
                  { label: "Bônus 2:", value: "R$ 147" },
                  { label: "Suporte:", value: "R$ 297" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </motion.div>
                ))}
                <hr className="my-2" />
                <motion.div 
                  className="flex justify-between font-bold text-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 1.2 }}
                >
                  <span>Total:</span>
                  <span>R$ 2.138</span>
                </motion.div>
                <motion.div 
                  className="text-center text-primary-600 font-bold"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.4 }}
                >
                  <motion.span
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity
                    }}
                  >
                    Você paga apenas R$ 997
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}