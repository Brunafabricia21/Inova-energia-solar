import React from 'react';
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react';

const SolarFanIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 55" className={className} fill="currentColor">
    {Array.from({ length: 13 }).map((_, i) => (
      <rect
        key={i}
        x="47" y="0" width="6" height="30"
        rx="2"
        transform={`rotate(${(i - 6) * 15} 50 50)`}
      />
    ))}
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-tech-950 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <SolarFanIcon className="w-8 h-6 text-solar-400" />
              <span className="text-xl font-['Arial'] text-white">
                INOVA<span className="text-solar-400">SOLAR</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando a luz do sol em economia e progresso. A escolha inteligente para o seu futuro energético.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-solar-400 transition-colors">Início</a></li>
              <li><a href="#vantagens" className="hover:text-solar-400 transition-colors">Vantagens</a></li>
              <li><a href="#sobre" className="hover:text-solar-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#orcamento" className="hover:text-solar-400 transition-colors">Orçamento</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-solar-400" />
                <span>Ananindeua, Ananindeua, Brazil 67130635</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-solar-400" />
                <span>(91) 92001-5646</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/inova_energiasolarr?igsh=MnptNzBrMjI1c3cw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-solar-500 hover:text-tech-950 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/share/17pgAW6yah/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white hover:bg-solar-500 hover:text-tech-950 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} INOVA ENERGIA SOLAR. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};