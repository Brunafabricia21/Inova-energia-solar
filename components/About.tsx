import React, { useState, useEffect } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const aboutImages = [
  {
    url: "https://betsolar.es/wp-content/uploads/2023/08/politica-de-medioambiente-y-sostenibilidad.jpg",
    title: "Execução Impecável",
    desc: "Equipe técnica certificada com padrão internacional de instalação."
  },
  {
    url: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80",
    title: "Engenharia de Precisão",
    desc: "Projetos calculados milimetricamente para máxima eficiência."
  },
  {
    url: "https://i.imgur.com/90vL47a.jpeg",
    title: "Planejamento Estratégico",
    desc: "Análise financeira detalhada para garantir seu retorno financeiro."
  },
  {
    url: "https://i.imgur.com/1c4NBQs.png",
    title: "Tecnologia Avançada",
    desc: "Monitoramento em tempo real da sua produção de energia."
  }
];

export const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? aboutImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
  };

  return (
    <section id="sobre" className="py-24 bg-tech-950 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Carousel Column */}
          <div className="order-2 md:order-1 relative group">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-solar-500 rounded-2xl transform rotate-3 translate-x-2 translate-y-2 opacity-20 transition-transform group-hover:rotate-2"></div>
            
            {/* Carousel Container */}
            <div className="relative rounded-2xl shadow-2xl border border-white/10 overflow-hidden aspect-[4/3] bg-tech-900">
              {aboutImages.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                >
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-950/90 via-tech-950/20 to-transparent"></div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-700 delay-100">
                    <h4 className="text-solar-400 font-bold text-xl mb-1">{img.title}</h4>
                    <p className="text-white text-sm opacity-90">{img.desc}</p>
                  </div>
                </div>
              ))}

              {/* Navigation Controls */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-solar-500 hover:text-tech-950 transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-solar-500 hover:text-tech-950 transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 right-6 flex gap-2">
                {aboutImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-6 bg-solar-400' : 'w-1.5 bg-white/40 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Stat Card */}
            <div className="absolute -bottom-6 -right-6 bg-tech-800 p-6 rounded-xl border border-white/10 shadow-xl max-w-xs hidden sm:block z-20">
              <p className="font-tech text-solar-400 text-3xl font-bold mb-1">+1.500</p>
              <p className="text-white text-sm">Projetos instalados em todo o Brasil com satisfação máxima.</p>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="order-1 md:order-2">
            <h2 className="text-sm font-tech text-solar-400 tracking-widest uppercase mb-2">Sobre Nós</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Inova energia que transforma</h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              A INOVA ENERGIA SOLAR nasceu com um propósito claro: democratizar o acesso à energia limpa através de tecnologia de ponta. Não somos apenas instaladores de painéis; somos engenheiros de um futuro sustentável.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Utilizamos inteligência artificial para dimensionar seu projeto com precisão milimétrica, garantindo o máximo de eficiência para cada raio de sol captado.
            </p>

            <ul className="space-y-4">
              {[
                "Equipe de engenharia certificada",
                "Monitoramento em tempo real via App",
                "Suporte técnico vitalício",
                "Parceria com as maiores marcas globais"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-solar-400 w-6 h-6 flex-shrink-0" />
                  <span className="text-white font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};