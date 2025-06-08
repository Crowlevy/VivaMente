'use client';

import { motion } from 'framer-motion';
import { Play, Clock, Users, Award } from 'lucide-react';
import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const stats = [
    {
      icon: Clock,
      label: "8 semanas",
      value: "de transformação"
    },
    {
      icon: Users,
      label: "+2.500",
      value: "mulheres transformadas"
    },
    {
      icon: Award,
      label: "Metodologia",
      value: "exclusiva"
    }
  ];

  return (
    <section id="video" className="py-20 lg:py-32 bg-gray-900 relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Veja como funciona o{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              método VivaMente
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Assista este vídeo e descubra como nossa metodologia exclusiva pode 
            transformar sua vida emocional em apenas 8 semanas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* player do video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              {!isPlaying ? (
                <>
                  {/* thumbnail do video */}
                  <img
                    src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Vídeo explicativo do curso"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* botão de play */}
                  <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                    >
                      <Play className="w-8 h-8 text-gray-900 ml-1 group-hover:scale-110 transition-transform" />
                    </motion.button>
                  </div>

                  {/* informações do video */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Reprogramação Emocional - Como Funciona
                      </h3>
                      <p className="text-sm text-gray-600">
                        Duração: 12 minutos • Metodologia exclusiva VivaMente
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <p className="text-white text-lg">
                    (demonstração)
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* status */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Por que escolher a VivaMente?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Nossa metodologia combina o melhor da ciência moderna com práticas 
                comprovadas para garantir resultados reais e duradouros.
              </p>
            </div>

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">
                    {stat.label}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}