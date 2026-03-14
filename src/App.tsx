/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Calendar, 
  ArrowUpRight, 
  ChevronRight, 
  ChevronLeft,
  BarChart3,
  ShieldCheck,
  Zap,
  X
} from 'lucide-react';

interface TradingResult {
  id: number;
  date: string;
  balance: string;
  profit: string;
  image: string;
  description: string;
}

const tradingResults: TradingResult[] = [
  {
    id: 1,
    date: "10 Dez 2025",
    balance: "100 000.00",
    profit: "0.00",
    image: "/photos/10-12-2025.jpeg",
    description: "Início da jornada com capital inicial de 100k."
  },
  {
    id: 2,
    date: "31 Dez 2025",
    balance: "115 000.00",
    profit: "+15 000.00",
    image: "/photos/31-12-2025.jpeg",
    description: "Fechamento matinal com lucro consistente em XAUUSD."
  },
  {
    id: 3,
    date: "31 Dez 2025",
    balance: "118 000.00",
    profit: "+18 000.00",
    image: "/photos/31-12-2025-18k.jpeg",
    description: "Encerramento do ano com performance sólida em índices (US100, US30)."
  },
  {
    id: 4,
    date: "02 Jan 2026",
    balance: "129 000.00",
    profit: "+29 000.00",
    image: "/photos/02-01-2026.jpeg",
    description: "Primeiros trades do ano novo com excelente aproveitamento em Ouro."
  },
  {
    id: 5,
    date: "07 Jan 2026",
    balance: "146 000.00",
    profit: "+46 000.00",
    image: "/photos/07-01-2026.jpeg",
    description: "Aceleração do crescimento com operações precisas em XAUUSD e US30."
  },
  {
    id: 6,
    date: "08 Jan 2026",
    balance: "151 000.00",
    profit: "+51 000.00",
    image: "/photos/08-01-2026.jpeg",
    description: "Consolidação dos ganhos e gestão de risco rigorosa."
  },
  {
    id: 7,
    date: "09 Jan 2026",
    balance: "152 000.00",
    profit: "+52 000.00",
    image: "/photos/09-01-2026.jpeg",
    description: "Expansão significativa do capital em tempo recorde."
  },
  {
    id: 8,
    date: "16 Jan 2026",
    balance: "164 000.00",
    profit: "+64 000.00",
    image: "/photos/16-01-2026.jpeg",
    description: "Marco histórico superando os 100% de lucro sobre o capital inicial."
  },
  {
    id: 9,
    date: "10 Mar 2026",
    balance: "191 000.00",
    profit: "+91 000.00",
    image: "/photos/10-03-2026.jpeg",
    description: "Crescimento sustentável e consistência de alto nível."
  },
  {
    id: 10,
    date: "13 Mar 2026",
    balance: "321 000.00",
    profit: "+221 000.00",
    image: "/photos/13-03-2026-321k.jpeg",
    description: "Superação de novos patamares com gestão estratégica de ativos."
  },
  {
    id: 11,
    date: "13 Mar 2026",
    balance: "333 000.00",
    profit: "+233 000.00",
    image: "/photos/13-03-2026-333k.jpeg",
    description: "Performance atual: Alcançando o marco histórico de 333k com consistência absoluta."
  }
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tradingResults.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + tradingResults.length) % tradingResults.length);
  };

  const currentResult = tradingResults[currentIndex];

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-emerald-500/30">
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-[#020617]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6">
            <ShieldCheck size={14} />
            Performance Verificada
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Performance <br /> Inquestionável
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Acompanhe a evolução de uma conta real de 100k para 333k em apenas 3 meses. 
            Consistência, gestão de risco e resultados exponenciais.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <div className="text-slate-500 text-sm mb-1">Capital Inicial</div>
              <div className="text-2xl font-semibold">100 000.00 €</div>
            </div>
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <div className="text-emerald-500/70 text-sm mb-1">Saldo Atual</div>
              <div className="text-2xl font-semibold text-emerald-400">333 000.00 €</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <div className="text-slate-500 text-sm mb-1">Crescimento Total</div>
              <div className="text-2xl font-semibold text-emerald-400">+233.0%</div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-black rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-emerald-400 transition-colors"
          >
            Ver Histórico Completo
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent mx-auto" />
        </div>
      </header>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Jornada de Resultados</h2>
            <p className="text-gray-400 max-w-xl">
              Cada etapa documentada reflete a precisão das entradas e a maturidade operacional em diferentes condições de mercado.
            </p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Display */}
          <div className="lg:col-span-7 relative group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[9/16] md:aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <img 
                  src={currentResult.image} 
                  alt={`Resultado ${currentResult.date}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-sm font-medium flex items-center gap-2">
                    <Zap size={16} className="text-emerald-400" />
                    Clique para ampliar
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Progress Bar */}
            <div className="absolute -bottom-6 left-0 right-0 flex gap-1">
              {tradingResults.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-emerald-500' : 'bg-white/10'}`}
                />
              ))}
            </div>
          </div>

          {/* Info Display */}
          <div className="lg:col-span-5 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 text-emerald-400 font-mono text-sm">
                  <Calendar size={16} />
                  {currentResult.date}
                </div>
                
                <h3 className="text-5xl font-bold tracking-tight">
                  {currentResult.balance} €
                </h3>
                
                <div className="flex items-center gap-2 text-emerald-500 font-semibold text-xl">
                  <TrendingUp size={24} />
                  {currentResult.profit} Profit
                </div>

                <p className="text-gray-400 text-lg leading-relaxed">
                  {currentResult.description}
                </p>

                <div className="pt-8 border-t border-slate-800 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Ativos Operados</span>
                    <span className="text-white font-medium">XAUUSD, US30, US100, BTC</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Win Rate Médio</span>
                    <span className="text-white font-medium">84%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Drawdown Máx</span>
                    <span className="text-white font-medium">3.2%</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Grid Overview */}
      <section className="py-24 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Visão Geral da Evolução</h2>
            <p className="text-slate-400">Clique em qualquer imagem para ver os detalhes da operação.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tradingResults.map((result, idx) => (
              <motion.div
                key={result.id}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsModalOpen(true);
                }}
                className={`relative w-[calc(50%-8px)] md:w-[calc(33.33%-11px)] lg:w-[calc(20%-13px)] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${idx === currentIndex ? 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img 
                  src={result.image} 
                  alt={result.date}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <div className="text-[10px] font-mono text-white/80">{result.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Metodologia e Gestão de Risco</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-emerald-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Preservação de Capital</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      O foco principal não é o lucro, mas a proteção do património. Utilizamos Stop Loss rigorosos e nunca arriscamos mais de 1% por operação.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <BarChart3 className="text-emerald-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Análise Multidimensional</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Confluência entre análise técnica avançada, fluxo de ordens e indicadores macroeconómicos para identificar janelas de alta probabilidade.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Zap className="text-emerald-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Execução de Alta Precisão</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Entradas e saídas baseadas em algoritmos de execução que minimizam o slippage e maximizam o rácio Risco:Recompensa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900/50 rounded-[32px] p-8 border border-slate-800">
              <h4 className="text-xl font-semibold mb-6">Resumo Operacional</h4>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-slate-800">
                  <span className="text-slate-500">Rácio Sharpe</span>
                  <span className="text-emerald-400 font-mono">2.45</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-800">
                  <span className="text-slate-500">Profit Factor</span>
                  <span className="text-emerald-400 font-mono">3.12</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-800">
                  <span className="text-slate-500">Média de Pips/Trade</span>
                  <span className="text-emerald-400 font-mono">42.5</span>
                </div>
                <div className="flex justify-between py-3 border-b border-slate-800">
                  <span className="text-slate-500">Exposição Máxima</span>
                  <span className="text-emerald-400 font-mono">5.0%</span>
                </div>
              </div>
              <div className="mt-8 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-xs text-emerald-500/80 leading-relaxed">
                * Estes dados são extraídos diretamente do histórico de operações e refletem a consistência da estratégia aplicada ao longo do período demonstrado.
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-0 md:-left-16 z-10 p-4 text-white/40 hover:text-emerald-400 transition-colors"
              >
                <ChevronLeft size={48} />
              </button>

              <img 
                src={currentResult.image} 
                alt="Full view"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-0 md:-right-16 z-10 p-4 text-white/40 hover:text-emerald-400 transition-colors"
              >
                <ChevronRight size={48} />
              </button>

              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 md:right-0 text-white hover:text-emerald-400 transition-all flex items-center gap-2 font-mono text-sm"
              >
                FECHAR <X size={20} />
              </button>

              <div className="absolute -bottom-16 left-0 right-0 text-center space-y-2">
                <div className="text-emerald-400 font-mono text-lg">
                  {currentResult.date}
                </div>
                <div className="text-white/60 text-sm max-w-xl mx-auto px-4">
                  {currentResult.description}
                </div>
                <div className="text-white font-bold text-xl">
                  Saldo: {currentResult.balance} €
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
