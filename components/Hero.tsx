
import React from 'react';
import { Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ backgroundImage: 'url("/hero-banner.jpg")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Decorative top line */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <span className="block w-12 h-[1px] bg-[#d4735a]"></span>
        <span className="text-[#d4735a] text-[10px] uppercase tracking-[0.4em] font-bold">Depuis 2017</span>
        <span className="block w-12 h-[1px] bg-[#d4735a]"></span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="text-white/60 text-xs md:text-sm uppercase tracking-[0.5em] mb-6 font-light">
          L'authentique goût italien
        </p>
        <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold leading-[0.9] mb-8 uppercase tracking-tight">
          Pizzeria
          <span className="block">à Beaumont</span>
        </h1>
        <div className="flex items-center justify-center gap-6 mb-10">
          <span className="block w-16 h-[1px] bg-white/30"></span>
          <p className="text-white/90 text-lg md:text-2xl font-serif italic">
            Cuisson traditionnelle au feu de bois
          </p>
          <span className="block w-16 h-[1px] bg-white/30"></span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <a href="tel:071327874" className="group bg-[#d4735a] text-white px-10 py-4 font-bold hover:bg-[#e04d2b] transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-3 uppercase text-xs tracking-[0.2em]">
            <Phone size={16} className="group-hover:animate-pulse" />
            Commander
          </a>
          <a href="#menu" className="border border-white/30 text-white px-10 py-4 font-bold hover:bg-white hover:text-[#1A3C34] transition-all transform hover:-translate-y-1 backdrop-blur-sm uppercase text-xs tracking-[0.2em]">
            Voir la Carte
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF9F6] to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
