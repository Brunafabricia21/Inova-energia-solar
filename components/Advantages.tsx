import React from 'react';
import { Wallet, Leaf, Home, ShieldCheck, BarChart3, Sun } from 'lucide-react';
import { Advantage } from '../types';

const advantages: Advantage[] = [
  {
    id: 1,
    title: "Economia Imediata",
    description: "Redução de até 95% na conta de energia logo após a instalação.",
    icon: <Wallet className="w-8 h-8" />
  },
  {
    id: 2,
    title: "Sustentabilidade",
    description: "Energia 100% limpa e renovável, reduzindo sua pegada de carbono.",
    icon: <Leaf className="w-8 h-8" />
  },
  {
    id: 3,
    title: "Valorização do Imóvel",
    description: "Imóveis com energia solar valorizam cerca de 4% a 6% no mercado.",
    icon: <Home className="w-8 h-8" />
  },
  {
    id: 4,
    title: "Baixa Manutenção",
    description: "Sistemas duráveis com garantia de performance de 25 anos.",
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    id: 5,
    title: "Retorno do Investimento",
    description: "Payback médio entre 3 a 5 anos, com lucro nas décadas seguintes.",
    icon: <BarChart3 className="w-8 h-8" />
  },
  {
    id: 6,
    title: "Energia Infinita",
    description: "Aproveite a fonte de energia mais abundante do Brasil: o Sol.",
    icon: <Sun className="w-8 h-8" />
  }
];

export const Advantages: React.FC = () => {
  return (
    <section id="vantagens" className="py-24 bg-tech-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-tech text-solar-400 tracking-widest uppercase mb-2">Por que escolher?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Vantagens Inova Solar</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-solar-400 to-transparent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv) => (
            <div 
              key={adv.id}
              className="group p-8 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-solar-500/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {/* Large background icon effect */}
                <div className="scale-150 text-white transform rotate-12">{adv.icon}</div>
              </div>
              
              <div className="w-14 h-14 bg-gradient-to-br from-solar-400 to-solar-600 rounded-xl flex items-center justify-center text-tech-950 mb-6 shadow-lg shadow-solar-500/20 group-hover:scale-110 transition-transform">
                {adv.icon}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3">{adv.title}</h4>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};