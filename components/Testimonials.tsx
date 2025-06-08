'use client';
//todas as fotos são ia, não me culpe, os textos tbm, se fuder de escrever cada um assim, me rendi a ia nessa parte pq não tive paciência
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useRef } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const testimonials = [
    {
      name: "Maria Silva",
      age: 34,
      profession: "Consultora de Marketing",
      image: "/Clientes/Cliente1.png",
      testimonial: "Eu estava numa fase muito difícil da minha vida, cheia de ansiedade e bloqueios. O curso da VivaMente me deu ferramentas reais para lidar com minhas emoções. Hoje me sinto muito mais equilibrada e confiante.",
      rating: 5,
      color: "from-pink-400 to-rose-500"
    },
    {
      name: "Ana Santos",
      age: 29,
      profession: "Psicóloga",
      image: "/Clientes/Cliente2.png",
      testimonial: "Como profissional da área, fiquei impressionada com a qualidade do conteúdo. A metodologia é realmente eficaz e me ajudou tanto pessoalmente quanto profissionalmente. Já indico para minhas pacientes!",
      rating: 5,
      color: "from-purple-400 to-indigo-500"
    },
    {
      name: "Carla Mendes",
      age: 42,
      profession: "Executiva",
      image: "/Clientes/Cliente3.png",
      testimonial: "Depois dos 40, me sentia perdida e sem direção. O curso me reconectou com meus sonhos e me deu clareza sobre o que realmente importa. Foi um divisor de águas na minha vida!",
      rating: 5,
      color: "from-emerald-400 to-teal-500"
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -15,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="depoimentos" ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-secondary-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent-200/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating Quote Marks */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-200 opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${20 + Math.random() * 30}px`
          }}
          animate={{
            y: [-20, -40, -20],
            rotate: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          "
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2
            variants={cardVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            O que nossas alunas{' '}
            <motion.span 
              className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              estão dizendo
            </motion.span>
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Histórias reais de transformação de mulheres que decidiram investir 
            em seu crescimento pessoal e emocional.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {testimonials.map((testimonial, index) => (
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
              style={{ 
                transformStyle: "preserve-3d"
              }}
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden transform-gpu relative">
                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <CardContent className="p-8 relative z-10">
                  {/* Quote Icon */}
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br  ${testimonial.color} rounded-full flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 15,
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
                    <Quote className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Rating */}
                  <motion.div 
                    className="flex items-center gap-1 mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ 
                          delay: index * 0.2 + 0.7 + i * 0.1,
                          type: "spring",
                          stiffness: 300,
                          damping: 15
                        }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/*Bosta de Testimonial*/}
                  <motion.p 
                    className="text-gray-700 leading-relaxed mb-6 italic relative"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.9 }}
                  >
                    <span className="text-3xl text-primary-300 flex absolute -top-2 -left-2">“</span>
                    {testimonial.testimonial}
                    <span className="text-3xl text-primary-300 absolute -bottom-1 -right-3">”</span>
                  </motion.p>

                  {/* Autor do Testimonial */}
                  <motion.div 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.2 + 1.1 }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.profession}, {testimonial.age} anos
                      </p>
                    </div>
                  </motion.div>
                </CardContent>

                {/* Efeito de brilho bobo*/}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* proof social */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.div
           className="inline-flex items-center gap-3 sm:gap-6 px-4 py-2 sm:px-8 sm:py-6 rounded-full shadow-md sm:shadow-xl border border-white/50 bg-white/90 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 border-3 border-white flex items-center justify-center text-white font-semibold text-sm shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    zIndex: 10,
                    boxShadow: "0 10px 25px rgba(126, 87, 194, 0.4)"
                  }}
                >
                  <Image src={`/Clientes/Cliente${i + 1}.png`} alt={`Cliente ${i + 1}`} width={48} height={48} className="rounded-full object-cover w-full h-full border-2 border-white" />
                </motion.div>
              ))}
            </div>
            <div className="text-left">
              <motion.div 
                className="flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.8 }}
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ 
                      delay: 1.8 + star * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </motion.div>
              <motion.p 
                className="text-sm text-gray-600 font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 2.3 }}
              >
                +2.500 mulheres já transformaram suas vidas
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}