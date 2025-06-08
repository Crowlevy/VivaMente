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
    <section id="preco" ref={ref} className="py-16 lg:py-32 bg-gradient-to-b from-white to-secondary-50 relative overflow-hidden">
      {/* background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 pointer-events-none opacity-50 lg:opacity-100"
      >
        <div className="absolute top-1/4 left-1/4 w-48 lg:w-72 h-48 lg:h-72 bg-primary-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 lg:w-96 h-64 lg:h-96 bg-accent-200/10 rounded-full blur-3xl" />
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
          className="text-center mb-12 lg:mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6"
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
            className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Uma oportunidade única de transformar sua vida emocional com uma metodologia 
            comprovada e o suporte que você precisa.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* bônus */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4 lg:space-y-6 order-2 lg:order-1"
          >
            {bonus.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
                className="p-4 lg:p-6 bg-white rounded-2xl shadow-lg border border-primary-100 relative overflow-hidden group"
              >
                {/* background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                <div className="flex items-start gap-3 lg:gap-4 relative z-10">
                  <motion.div 
                    className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                    }}
                    animate={{
                      y: [0, -2, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 lg:mb-2 text-sm lg:text-base group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-600 mb-2 lg:mb-3">
                      {item.description}
                    </p>
                    <motion.div 
                      className="text-primary-600 font-bold text-sm lg:text-base"
                      animate={{ 
                        scale: [1, 1.03, 1],
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
            className="relative col-span-1 md:col-span-2 lg:col-span-1 order-1 lg:order-2 mx-auto w-full max-w-sm"
          >
            {/* badge popular */}
            <motion.div 
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
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
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-xs font-medium shadow-lg">
                Mais Popular
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white rounded-3xl shadow-xl border border-primary-100 overflow-hidden"
            >
              {/* header */}
              <div className="p-6 sm:p-8 text-center border-b border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Programa Completo</h3>
                <p className="text-sm text-gray-600 mb-6">Transformação em 8 semanas</p>
                
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-primary-600">R$ 997</span>
                  <div className="text-left">
                    <div className="text-xs text-gray-500 line-through">R$ 1.997</div>
                    <div className="text-xs font-medium text-primary-600">50% OFF</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-gray-500">ou 12x de</p>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">R$ 97,00</p>
                </div>
              </div>

              {/* features */}
              <div className="p-6 sm:p-8 space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary-600" />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="p-6 sm:p-8 bg-gray-50">
                <Button
                  onClick={() => window.open('https://pay.hotmart.com/123', '_blank')}
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-medium py-3 rounded-xl relative overflow-hidden group"
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    Quero me transformar agora
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                </Button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <Shield className="w-4 h-4" />
                  <span>Pagamento 100% seguro</span>
                </div>
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