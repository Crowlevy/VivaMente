'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, Smile, Zap, Target, Shield, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const benefits = [
    {
      icon: Smile,
      title: "Redução da Ansiedade",
      description: "Técnicas comprovadas para controlar e diminuir os níveis de ansiedade no dia a dia",
      color: "from-yellow-400 to-orange-500",
      delay: 0
    },
    {
      icon: Zap,
      title: "Mais Energia e Disposição",
      description: "Sinta-se revigorada e com energia para enfrentar novos desafios",
      color: "from-blue-400 to-purple-500",
      delay: 0.1
    },
    {
      icon: Target,
      title: "Clareza nos Objetivos",
      description: "Descubra seus verdadeiros propósitos e trace um caminho claro para alcançá-los",
      color: "from-green-400 to-teal-500",
      delay: 0.2
    },
    {
      icon: Shield,
      title: "Autoestima Fortalecida",
      description: "Desenvolva uma relação mais saudável e amorosa consigo mesma",
      color: "from-pink-400 to-red-500",
      delay: 0.3
    },
    {
      icon: Sparkles,
      title: "Relações Mais Saudáveis",
      description: "Melhore a qualidade dos seus relacionamentos pessoais e profissionais",
      color: "from-purple-400 to-indigo-500",
      delay: 0.4
    },
    {
      icon: CheckCircle,
      title: "Hábitos Positivos",
      description: "Crie rotinas que nutrem seu bem-estar físico, mental e emocional",
      color: "from-emerald-400 to-cyan-500",
      delay: 0.5
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
      scale: 0.8
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
    <section id="beneficios" ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* background animado */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-200/10 rounded-full blur-3xl" />
      </motion.div>

      {/* elementos flutuantes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, -30, -10],
            x: [-5, 5, -5],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
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
            Benefícios que vão{' '}
            <motion.span 
              className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              transformar sua vida
            </motion.span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Descubra como nossa metodologia exclusiva pode ajudar você a alcançar 
            uma vida mais plena, equilibrada e feliz.
          </motion.p>
        </motion.div>

        {/* grid de benefícios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative perspective-1000"
              style={{ 
                transformStyle: "preserve-3d"
              }}
            >
              <div className="h-full p-8 bg-gradient-to-br from-secondary-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-secondary-200 relative overflow-hidden transform-gpu">
                {/* efeito de hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                {/* borda animada */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-20 blur-sm`}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* ícone */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: benefit.delay * 2,
                    ease: "easeInOut"
                  }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* conteúdo */}
                <motion.h3 
                  className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors relative z-10"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: benefit.delay + 0.3 }}
                >
                  {benefit.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed relative z-10"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: benefit.delay + 0.5 }}
                >
                  {benefit.description}
                </motion.p>

                {/* efeito de brilho */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* conteúdo adicional */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* background animado */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
              style={{
                backgroundImage: "radial-gradient(circle, #7E57C2 1px, transparent 1px)",
                backgroundSize: "20px 20px"
              }}
            />
            
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 relative z-10"
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Resultados que você pode esperar
            </motion.h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
              {[
                { value: "87%", label: "das alunas relatam redução significativa da ansiedade", color: "text-primary-600" },
                { value: "92%", label: "se sentem mais confiantes e seguras", color: "text-accent-500" },
                { value: "95%", label: "recomendam o curso para outras mulheres", color: "text-primary-600" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 1.2 + index * 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -10
                  }}
                  className="cursor-pointer"
                >
                  <motion.div 
                    className={`text-4xl font-bold ${stat.color} mb-2`}
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-gray-700">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}