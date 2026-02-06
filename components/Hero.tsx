
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[10000ms] hover:scale-110"
        style={{ backgroundImage: 'url("/Pizza.jpg")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-[#FF5E3A] font-serif italic text-xl md:text-2xl mb-4">La Meilleure Pizzeria de Beaumont</p>
        <h1 className="text-white text-5xl md:text-8xl font-bold leading-tight mb-8 drop-shadow-lg uppercase tracking-tighter">
          L'Authentique Pizza au Feu de Bois à Beaumont
        </h1>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto italic">
            Livraison gratuite ou vente à emporter. Goûtez la différence d'une cuisson traditionnelle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:071327874" className="bg-[#FF5E3A] text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-[#e04d2b] transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2">
            Commander Maintenant
          </a>
          <button className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-[#1A3C34] transition-all transform hover:-translate-y-1">
            Voir la Carte
          </button>
        </div>
      </div>

      {/* Floating Decorators */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 text-white text-xs uppercase tracking-widest font-bold">
            <span className="text-[#FF5E3A]">•</span> Livraison Beaumont & Environs
        </div>
      </div>
    </section>
  );
};

export default Hero;
