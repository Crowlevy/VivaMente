'use client';

import { motion } from 'framer-motion';
import { Check, Users } from 'lucide-react';

export default function TargetAudience() {
  const profiles = [
    "Você sente que está estagnada na vida pessoal ou profissional",
    "Sofre com ansiedade frequente e não sabe como controlá-la",
    "Tem dificuldade para tomar decisões importantes",
    "Sente que seus relacionamentos poderiam ser mais saudáveis",
    "Quer desenvolver mais autoconfiança e autoestima",
    "Busca clareza sobre seus objetivos e propósito de vida",
    "Deseja criar hábitos mais positivos e saudáveis",
    "Quer aprender a lidar melhor com suas emoções",
    "Sente que precisa de uma transformação emocional profunda",
    "Está pronta para investir em seu crescimento pessoal"
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* conteudo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Para quem é{' '}
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                  esse curso?
                </span>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Se você se identifica com pelo menos 3 dos pontos abaixo, 
              este curso foi feito especialmente para você:
            </p>

            <div className="space-y-4">
              {profiles.map((profile, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 group"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {profile}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* imagem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/clientes/cliente1.png"
                  alt="Mulher reflexiva olhando para o horizonte"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/*status de idade*/}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">28-45</div>
                  <div className="text-sm text-gray-600">anos</div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-500 mb-1">2.5K+</div>
                  <div className="text-sm text-gray-600">alunas</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}