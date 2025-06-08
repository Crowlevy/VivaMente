'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Brain, Heart, Compass, Clock, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useRef } from 'react';

export default function AboutCourse() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Brain,
      title: "Neurociência Aplicada",
      description: "Técnicas científicas para reprogramar padrões mentais limitantes",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Psicologia Positiva",
      description: "Ferramentas para desenvolver resiliência e bem-estar emocional",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Compass,
      title: "Meditação Guiada",
      description: "Práticas diárias para cultivar mindfulness e autoconhecimento",
      color: "from-green-500 to-teal-500"
    }
  ];

  const modules = [
    "Semana 1-2: Autoconhecimento e mapeamento emocional",
    "Semana 3-4: Identificação e transformação de crenças limitantes",
    "Semana 5-6: Técnicas de regulação emocional e mindfulness",
    "Semana 7-8: Criação de novos hábitos e manutenção da transformação"
  ];

  const differentials = [
    {
      icon: Clock,
      title: "Flexibilidade Total",
      description: "Estude no seu ritmo, quando e onde quiser",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Users,
      title: "Comunidade Exclusiva",
      description: "Grupo de apoio com outras mulheres em transformação",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Certificado de Conclusão",
      description: "Reconhecimento oficial do seu comprometimento",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="sobre" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-white to-secondary-50 relative overflow-hidden">
      {/* background animado */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/10 rounded-full blur-3xl" />
      </motion.div>

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
            Sobre o Curso{' '}
            <motion.span 
              className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              Reprogramação Emocional
            </motion.span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Uma jornada de 8 semanas que combina o melhor da ciência moderna com 
            práticas milenares para sua transformação emocional completa.
          </motion.p>
        </motion.div>

        {/* metodologia */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-24"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-16"
          >
            Nossa Metodologia Exclusiva
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                whileTap={{ scale: 0.95 }}
                className="group perspective-1000"
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 10,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <motion.h4 
                      className="text-xl font-semibold text-gray-900 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      {feature.title}
                    </motion.h4>
                    
                    <motion.p 
                      className="text-gray-600 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.7 }}
                    >
                      {feature.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* conteúdo do curso */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* módulos */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Conteúdo Programático
            </h3>
            <div className="space-y-6">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    x: 10,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                  }}
                  className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {index + 1}
                  </motion.div>
                  <p className="text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                    {module}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* diferenciais */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Diferenciais do Curso
            </h3>
            <div className="space-y-6">
              {differentials.map((differential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + index * 0.2,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)"
                  }}
                  className="flex items-start gap-4 p-6 bg-gradient-to-r from-white to-secondary-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br ${differential.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 15,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <differential.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {differential.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {differential.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 relative z-10">
              Resultados que você pode esperar
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center relative z-10">
              {[
                { value: "87%", label: "das alunas relatam redução significativa da ansiedade" },
                { value: "92%", label: "se sentem mais confiantes e seguras" },
                { value: "95%", label: "recomendam o curso para outras mulheres" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    duration: 0.6,
                    delay: 1 + index * 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-primary-600 mb-2"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      color: ["#7E57C2", "#FF8A65", "#7E57C2"]
                    }}
                    transition={{ 
                      duration: 3,
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