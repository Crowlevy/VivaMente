import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VivaMente - Curso Reprogramação Emocional | Transforme sua Vida em 8 Semanas',
  description: 'Descubra o curso digital VivaMente de Reprogramação Emocional. 8 semanas baseadas em neurociência, psicologia positiva e meditação para superar ansiedade e bloqueios emocionais.',
  keywords: 'curso emocional online, autoconhecimento, transformação pessoal, ansiedade, neurociência, psicologia positiva, meditação guiada',
  openGraph: {
    title: 'VivaMente - Reprogramação Emocional',
    description: 'Transforme sua vida em 8 semanas com nosso curso baseado em neurociência',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VivaMente - Reprogramação Emocional',
    description: 'Transforme sua vida em 8 semanas com nosso curso baseado em neurociência',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}