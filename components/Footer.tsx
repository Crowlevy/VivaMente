'use client';

import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const links = {
    curso: [
      { name: 'Sobre o Curso', href: '#sobre' },
      { name: 'Benefícios', href: '#beneficios' },
      { name: 'Depoimentos', href: '#depoimentos' },
      { name: 'Investimento', href: '#preco' }
    ],
    legal: [
      { name: 'Política de Privacidade', href: '#' },
      { name: 'Termos de Uso', href: '#' },
      { name: 'Política de Reembolso', href: '#' },
      { name: 'Contrato de Prestação de Serviços', href: '#' }
    ],
    social: [
      { icon: Instagram, href: 'https://instagram.com/vivamente', name: 'Instagram' },
      { icon: Facebook, href: 'https://facebook.com/vivamente', name: 'Facebook' },
      { icon: Youtube, href: 'https://youtube.com/vivamente', name: 'YouTube' }
    ]
  };

  const scrollToSection = (id: string) => {
    if (id.startsWith('#')) {
      const element = document.getElementById(id.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* marca */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                  <Image src="/logo_viva_mente.svg" alt="VivaMente" width={40} height={40} />
                </div>
                <span className="text-2xl font-bold text-white">
                  VivaMente
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Transformando vidas através da educação emocional e do autoconhecimento. 
                Ajudamos mulheres a superarem bloqueios e viverem com mais plenitude e propósito.
              </p>
              
              {/* informações de contato */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-primary-400" />
                  <span>contato@vivamente.com.br</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-primary-400" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-primary-400" />
                  <span>Belo Horizonte, MG - Brasil</span>
                </div>
              </div>
            </motion.div>

            {/* links do curso */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">Curso</h3>
              <ul className="space-y-3">
                {links.curso.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* links legais */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <ul className="space-y-3">
                {links.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* redes sociais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Siga-nos nas redes sociais</h3>
                <div className="flex items-center gap-4">
                  {links.social.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300"
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* botão de call to action */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/5531999999999?text=Olá! Tenho interesse em saber mais sobre a VivaMente.', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Falar no WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <div>
              © 2024 VivaMente. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-6">
              <span>CNPJ: 00.000.000/0001-00</span>
              <span>Desenvolvido com ❤️ por <a href="https://jpfullstackdev.vercel.app" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-500 transition-colors">JP Design Studio</a></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}