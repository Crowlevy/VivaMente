'use client';

import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: "Para quem é indicado o curso?",
      answer: "O curso é ideal para mulheres entre 28 e 45 anos que enfrentam ansiedade, bloqueios emocionais, dificuldade para tomar decisões ou sensação de estagnação na vida. É perfeito para quem busca desenvolver autoconfiança, melhorar relacionamentos e criar uma vida mais equilibrada e plena."
    },
    {
      question: "Quanto tempo dura o curso?",
      answer: "O curso tem duração de 8 semanas, com conteúdo liberado gradualmente. Você pode estudar no seu próprio ritmo, dedicando de 1 a 2 horas por semana. Após a conclusão, você mantém acesso vitalício a todo o conteúdo."
    },
    {
      question: "Como funciona o acesso ao conteúdo?",
      answer: "Após a compra, você recebe acesso imediato à plataforma online. O conteúdo é liberado semanalmente para garantir melhor absorção e aplicação das técnicas. Você pode acessar de qualquer dispositivo, 24 horas por dia."
    },
    {
      question: "Há garantia de satisfação?",
      answer: "Sim! Oferecemos garantia incondicional de 30 dias. Se por qualquer motivo você não estiver satisfeita com o curso, devolvemos 100% do seu investimento, sem perguntas ou burocracias."
    },
    {
      question: "Preciso ter conhecimento prévio?",
      answer: "Não é necessário nenhum conhecimento prévio. O curso foi desenvolvido para iniciantes e utiliza uma linguagem simples e acessível. Todas as técnicas são explicadas passo a passo com exemplos práticos."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Você terá acesso a suporte exclusivo via WhatsApp durante todo o curso. Nossa equipe está disponível para esclarecer dúvidas sobre o conteúdo e apoiar sua jornada de transformação."
    },
    {
      question: "Recebo certificado ao concluir?",
      answer: "Sim! Ao completar todas as atividades do curso, você recebe um certificado digital de conclusão que pode ser usado para comprovar seu desenvolvimento pessoal e profissional."
    },
    {
      question: "O curso substitui terapia psicológica?",
      answer: "O curso é uma ferramenta complementar de desenvolvimento pessoal e não substitui acompanhamento psicológico ou psiquiátrico quando necessário. Sempre recomendamos buscar ajuda profissional em casos de transtornos graves."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Esclarecemos as principais dúvidas sobre o curso. Se não encontrar 
            sua pergunta aqui, entre em contato conosco!
          </p>
        </motion.div>

        {/* faq */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-to-r from-secondary-50 to-white rounded-2xl border border-secondary-200 px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* botão de call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Nossa equipe está pronta para ajudar você a tomar a melhor decisão.
            </p>
            <button
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Tenho algumas dúvidas sobre o curso Reprogramação Emocional.', '_blank')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Falar no WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}