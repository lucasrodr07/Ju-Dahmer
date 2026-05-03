/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle, ArrowRight, Instagram, Mail, Phone } from "lucide-react";
import { useState, useEffect } from "react";

// 6. REQUISITOS DE CÓDIGO (DATA-DRIVEN)
// Array de 26 produtos conforme solicitado
const produtos = [
  { id: 1, nome: "Colar Coração Eterno", preco: "R$ 289,00", imagem: "https://picsum.photos/seed/j1/600/800" },
  { id: 2, nome: "Gargantilha Pérola Rara", preco: "R$ 450,00", imagem: "https://picsum.photos/seed/j2/600/800" },
  { id: 3, nome: "Colar Infinito Dourado", preco: "R$ 320,00", imagem: "https://picsum.photos/seed/j3/600/800" },
  { id: 4, nome: "Colar Gota de Esmeralda", preco: "R$ 580,00", imagem: "https://picsum.photos/seed/j4/600/800" },
  { id: 5, nome: "Choker Minimalista Judahmer", preco: "R$ 195,00", imagem: "https://picsum.photos/seed/j5/600/800" },
  { id: 6, nome: "Colar Medalha Abençoada", preco: "R$ 275,00", imagem: "https://picsum.photos/seed/j6/600/800" },
  { id: 7, nome: "Colar relicário Vintage", preco: "R$ 380,00", imagem: "https://picsum.photos/seed/j7/600/800" },
  { id: 8, nome: "Colar Elo de Amor", preco: "R$ 310,00", imagem: "https://picsum.photos/seed/j8/600/800" },
  { id: 9, nome: "Colar Constelação Mãe", preco: "R$ 420,00", imagem: "https://picsum.photos/seed/j9/600/800" },
  { id: 10, nome: "Colar Ponto de Luz Rubi", preco: "R$ 240,00", imagem: "https://picsum.photos/seed/j10/600/800" },
  { id: 11, nome: "Colar Árvore da Vida", preco: "R$ 350,00", imagem: "https://picsum.photos/seed/j11/600/800" },
  { id: 12, nome: "Gargantilha Silk Gold", preco: "R$ 290,00", imagem: "https://picsum.photos/seed/j12/600/800" },
  { id: 13, nome: "Colar Nome Personalizado", preco: "R$ 490,00", imagem: "https://picsum.photos/seed/j13/600/800" },
  { id: 14, nome: "Colar Duplo Harmonia", preco: "R$ 370,00", imagem: "https://picsum.photos/seed/j14/600/800" },
  { id: 15, nome: "Colar Esfera de Prata", preco: "R$ 210,00", imagem: "https://picsum.photos/seed/j15/600/800" },
  { id: 16, nome: "Colar Trevo da Sorte", preco: "R$ 265,00", imagem: "https://picsum.photos/seed/j16/600/800" },
  { id: 17, nome: "Colar Aura Dourada", preco: "R$ 410,00", imagem: "https://picsum.photos/seed/j17/600/800" },
  { id: 18, nome: "Colar Infinito Amoroso", preco: "R$ 330,00", imagem: "https://picsum.photos/seed/j18/600/800" },
  { id: 19, nome: "Colar Safira Imperial", preco: "R$ 620,00", imagem: "https://picsum.photos/seed/j19/600/800" },
  { id: 20, nome: "Colar Delicado com Zircônia", preco: "R$ 180,00", imagem: "https://picsum.photos/seed/j20/600/800" },
  { id: 21, nome: "Colar Corrente Veneziana", preco: "R$ 250,00", imagem: "https://picsum.photos/seed/j21/600/800" },
  { id: 22, nome: "Colar Pingente de Madrepérola", preco: "R$ 340,00", imagem: "https://picsum.photos/seed/j22/600/800" },
  { id: 23, nome: "Colar Estrela Guia", preco: "R$ 295,00", imagem: "https://picsum.photos/seed/j23/600/800" },
  { id: 24, nome: "Colar Amor de Mãe", preco: "R$ 480,00", imagem: "https://picsum.photos/seed/j24/600/800" },
  { id: 25, nome: "Colar Elegance Green", preco: "R$ 510,00", imagem: "https://picsum.photos/seed/j25/600/800" },
  { id: 26, nome: "Colar Judahmer Signature", preco: "R$ 590,00", imagem: "https://picsum.photos/seed/j26/600/800" },
];

const WHATSAPP_NUMBER = "5511999999999"; // Substituir pelo número real

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getWhatsAppLink = (nome: string) => {
    const text = encodeURIComponent(`Olá! Tenho interesse no ${nome} da Coleção Dia das Mães.`);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-brand-bg selection:bg-brand-green selection:text-white">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-brand-bg/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h3 className="text-2xl md:text-3xl font-display tracking-[0.2em] text-brand-green uppercase font-medium">
                Judahmer
              </h3>
              <div className="h-[1px] w-full bg-brand-green mt-1 opacity-20" />
              <p className="text-[10px] tracking-[0.4em] text-center text-brand-green/60 mt-1 uppercase">
                Ateliê de Joias
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl font-display text-brand-green mb-6 leading-tight"
          >
            Coleção Especial: Dia das Mães
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-[1px] w-24 bg-brand-gold mx-auto mb-6"
          />
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xs md:text-sm tracking-[0.3em] text-brand-green/70 mb-12 uppercase font-medium"
          >
            AMOR QUE INSPIRA. PRESENTE QUE ETERNIZA.
          </motion.h2>
        </div>
      </section>

      {/* Product Grid */}
      <main className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {produtos.map((produto, index) => (
            <motion.div
              key={produto.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden bg-white mb-6 aspect-[3/4] border border-stone-100">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-green/0 group-hover:bg-brand-green/5 transition-colors duration-500" />
              </div>

              <div className="text-center px-4">
                <h3 className="text-lg font-display text-brand-green mb-2 group-hover:text-brand-green/80 transition-colors">
                  {produto.nome}
                </h3>
                <div className="h-[1px] w-8 bg-brand-gold/30 mx-auto mb-3" />
                <p className="text-brand-ink/60 font-sans tracking-widest text-sm mb-6">
                  {produto.preco}
                </p>
                
                <a
                  href={getWhatsAppLink(produto.nome)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group/btn relative overflow-hidden px-8 py-3 bg-brand-green text-white text-xs tracking-widest uppercase transition-all hover:bg-brand-green/90"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Comprar via WhatsApp
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-100 py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-12 flex justify-center gap-8">
            <Instagram className="w-5 h-5 text-brand-green/40 hover:text-brand-green cursor-pointer transition-colors" />
            <Mail className="w-5 h-5 text-brand-green/40 hover:text-brand-green cursor-pointer transition-colors" />
            <Phone className="w-5 h-5 text-brand-green/40 hover:text-brand-green cursor-pointer transition-colors" />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-green italic font-display text-xl md:text-2xl mb-4"
          >
            "Feito para quem sempre cuidou de você."
          </motion.p>
          <p className="text-brand-green text-sm tracking-[0.1em] font-medium mb-12">
            Feliz Dia das Mães!
          </p>
          
          <div className="flex flex-col items-center opacity-40">
            <h3 className="text-sm font-display tracking-[0.2em] text-brand-green uppercase font-medium">
              Judahmer
            </h3>
            <p className="text-[8px] tracking-[0.4em] text-brand-green mt-1 uppercase">
              Ateliê de Joias
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 bg-brand-green text-white rounded-full shadow-xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap text-xs font-medium uppercase tracking-widest leading-none">
          Atendimento
        </span>
      </a>
    </div>
  );
}
