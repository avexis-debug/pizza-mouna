
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { PIZZA_MENU } from '../constants';

interface PizzasPageProps {
  onBack: () => void;
}

const PizzasPage: React.FC<PizzasPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header onNavigatePizzas={() => {}} />

      {/* Intro Section */}
      <section className="pt-32 pb-16 bg-[#1A3C34] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <button 
            onClick={onBack}
            className="mb-8 text-[#FF5E3A] hover:text-white transition-colors font-bold uppercase tracking-widest text-xs flex items-center gap-2 mx-auto"
          >
            ← Retour à l'accueil
          </button>
          <p className="text-[#FF5E3A] font-serif italic text-xl mb-4">La Tradition Italienne</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter">L'Art de la Pizza au Feu de Bois</h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed italic">
            Découvrez notre large gamme de pizzas artisanales, préparées avec soin et cuites dans notre four traditionnel. 
            Chaque pizza est une invitation au voyage au cœur de l'Italie, utilisant des ingrédients frais et une pâte pétrie chaque jour par nos soins.
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {PIZZA_MENU.items.map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="flex justify-between items-baseline mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold group-hover:text-[#FF5E3A] transition-colors uppercase tracking-tight">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <span className="bg-[#FF5E3A]/10 text-[#FF5E3A] text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Populaire</span>
                    )}
                  </div>
                  <div className="flex-grow border-b border-dotted border-gray-200 mx-3"></div>
                  <span className="text-[#1A3C34] font-black text-lg bg-[#FAF9F6] px-3 py-1 rounded-sm border border-gray-100 shadow-sm whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-500 text-sm italic leading-snug">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-[#1A3C34] rounded-2xl text-center text-white">
            <h4 className="text-2xl font-bold mb-4">Une envie particulière ?</h4>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">Toutes nos pizzas peuvent être personnalisées. N'hésitez pas à nous demander des suppléments lors de votre commande.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
               <a href="tel:071327874" className="text-2xl font-black hover:text-[#FF5E3A] transition-colors">071 32 78 74</a>
               <span className="hidden md:block text-[#FF5E3A] text-2xl">•</span>
               <a href="tel:0484202042" className="text-2xl font-black hover:text-[#FF5E3A] transition-colors">0484 20 20 42</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PizzasPage;
