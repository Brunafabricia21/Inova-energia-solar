import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const carouselImages = [
  "https://i.imgur.com/PeWPyPm.png", // Solar Panels Blue Sky
  "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80", // Worker Installing
  "https://i.imgur.com/1c4NBQs.png", // Modern House Solar
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80", // Solar Farm Sunset
];

export const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // 4 seconds for better viewing time
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentImage(index);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust for fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1920&q=80" 
          alt="Solar Sky Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tech-950/60 via-tech-950/80 to-tech-950"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-solar-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-solar-400 animate-pulse"></span>
            <span className="text-xs font-tech tracking-widest text-solar-400 uppercase">Tecnologia de Ponta</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            O futuro da <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-400 to-solar-600">energia é solar</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Reduza até 95% da sua conta de luz com a tecnologia fotovoltaica mais avançada do mercado. Sustentabilidade e economia em perfeita sincronia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#orcamento"
              onClick={(e) => handleScrollTo(e, 'orcamento')}
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-solar-500 text-tech-950 font-bold rounded-lg hover:bg-solar-400 transition-all hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]"
            >
              Simular Economia
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#inicio"
              onClick={(e) => handleScrollTo(e, 'inicio')}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              Conheça a Inova
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          {/* Abstract 3D-like representation using CSS with Carousel */}
          <div className="relative w-full aspect-square animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-tech-800/20 rounded-full blur-2xl"></div>
            
            {/* Image Carousel Container with Mask */}
            <div 
              className="relative w-full h-full rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
              style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
            >
              {carouselImages.map((src, index) => (
                <div key={index} className="absolute inset-0 w-full h-full">
                  <img 
                    src={src} 
                    alt={`Solar Energy ${index + 1}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
                      index === currentImage 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-110'
                    }`}
                  />
                  {/* Overlay for better text contrast if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-950/60 via-transparent to-transparent opacity-60"></div>
                </div>
              ))}
              
              {/* Dot Navigation */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20 px-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 backdrop-blur-sm ${
                      index === currentImage 
                        ? 'w-8 bg-solar-400 shadow-[0_0_10px_rgba(255,215,0,0.5)]' 
                        : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-tech-900/90 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl z-20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-solar-500/20 rounded-lg">
                  <Zap className="w-8 h-8 text-solar-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Economia Média</p>
                  <p className="text-2xl font-bold text-white">R$ 3.500/ano</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};