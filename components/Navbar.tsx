import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Vantagens', href: '#vantagens' },
  { label: 'Sobre nós', href: '#sobre' },
];

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

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
      setIsOpen(false);
    }
  };

  const whatsappMessage = "Olá, quero economizar o custo de energia através da energia solar";
  const whatsappLink = `https://wa.me/5591920015646?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-tech-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="flex items-center gap-2 group"
        >
          <div className="relative flex items-end">
            <SolarFanIcon className="w-12 h-8 text-solar-400 group-hover:scale-110 transition-transform duration-500 ease-out origin-bottom" />
            <div className="absolute inset-0 bg-solar-400 blur-lg opacity-30 rounded-t-full animate-pulse-slow pointer-events-none"></div>
          </div>
          <span className="text-2xl font-['Arial'] tracking-wider text-white">
            INOVA<span className="text-solar-400">SOLAR</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-gray-300 hover:text-solar-400 transition-colors uppercase tracking-widest relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-solar-400 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient-to-r from-solar-500 to-solar-600 text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all transform hover:-translate-y-0.5"
          >
            Orçamento
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-solar-400 transition-colors"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-tech-900/95 backdrop-blur-lg border-b border-white/10 p-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-lg font-medium text-white hover:text-solar-400"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="text-lg font-bold text-solar-400 hover:text-white"
          >
            Orçamento
          </a>
        </div>
      )}
    </nav>
  );
};