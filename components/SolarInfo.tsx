import React from 'react';
import { Sun, Home, TrendingDown, Battery, Zap, DollarSign } from 'lucide-react';

export const SolarInfo: React.FC = () => {
  return (
    <section id="inicio" className="py-20 bg-tech-950 relative border-b border-white/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-solar-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-tech text-solar-400 tracking-widest uppercase mb-2">Conhecimento</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">O poder da energia solar</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Entenda como transformamos luz em economia e por que essa é a decisão financeira mais inteligente para sua família.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1: What is Solar Energy */}
          <div className="bg-tech-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-solar-500/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-tech-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
              <Zap className="w-8 h-8 text-solar-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Como Funciona?</h4>
            <p className="text-gray-400 leading-relaxed mb-4">
              Painéis fotovoltaicos de alta tecnologia captam a luz do sol e a convertem em corrente elétrica. Essa energia passa por um inversor e se torna pronta para uso em suas tomadas, geladeira e ar-condicionado.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Sun className="w-4 h-4 text-solar-500" /> Fonte inesgotável
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Battery className="w-4 h-4 text-solar-500" /> Tecnologia silenciosa
              </li>
            </ul>
          </div>

          {/* Card 2: Importance for Homes */}
          <div className="bg-tech-900/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-solar-500/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-tech-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
              <Home className="w-8 h-8 text-solar-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Sua Casa Valorizada</h4>
            <p className="text-gray-400 leading-relaxed mb-4">
              Além da autonomia energética, um sistema solar é um ativo patrimonial. Casas com energia própria são mais disputadas no mercado imobiliário e protegem sua família contra os aumentos abusivos das tarifas (inflação energética).
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <TrendingDown className="w-4 h-4 text-solar-500" /> Fim das bandeiras tarifárias
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Home className="w-4 h-4 text-solar-500" /> Valorização imediata do imóvel
              </li>
            </ul>
          </div>

          {/* Card 3: Financial Reduction */}
          <div className="relative bg-gradient-to-b from-tech-800 to-tech-900 border border-solar-500/30 p-8 rounded-2xl shadow-[0_0_30px_rgba(255,215,0,0.1)] transform md:-translate-y-4">
            <div className="absolute top-0 right-0 px-4 py-1 bg-solar-500 text-tech-950 text-xs font-bold uppercase rounded-bl-lg rounded-tr-lg">
              Destaque
            </div>
            <div className="w-14 h-14 bg-solar-500/20 rounded-lg flex items-center justify-center mb-6 border border-solar-500/30">
              <DollarSign className="w-8 h-8 text-solar-400" />
            </div>
            <h4 className="text-xl font-bold text-white mb-4">Redução Financeira Brutal</h4>
            <p className="text-gray-300 leading-relaxed mb-6">
              Deixe de alugar energia da concessionária e passe a produzir a sua. A redução na conta de luz pode chegar a <span className="text-solar-400 font-bold">95%</span>. O dinheiro economizado paga o investimento em poucos anos.
            </p>
            <div className="bg-tech-950 p-4 rounded-lg border border-white/5">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm text-gray-400">Conta Atual</span>
                <span className="text-red-400 font-bold">R$ 500,00</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-sm text-gray-400">Com Inova Solar</span>
                <span className="text-solar-400 font-bold text-lg">R$ 50,00*</span>
              </div>
              <p className="text-xs text-gray-600 mt-2 text-right">*Taxa mínima de disponibilidade</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};