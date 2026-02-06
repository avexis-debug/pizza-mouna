
import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { PIZZA_MENU, ENTREE_MENU, PASTA_MENU, MEAT_MENU, PREPARED_MENU, DRINK_MENU } from '../constants';

interface MenuPageProps {
  onBack: () => void;
  initialCategory?: string;
}

const MenuPage: React.FC<MenuPageProps> = ({ onBack, initialCategory }) => {
  useEffect(() => {
    if (initialCategory) {
      setTimeout(() => {
        const element = document.getElementById(initialCategory);
        if (element) {
          const headerOffset = 96;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [initialCategory]);

  const MenuGrid = ({ title, items, id }: { title: string, items: any[], id: string }) => (
    <div id={id} className="pt-20 first:pt-0">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter text-[#1A3C34]">{title}</h2>
        <div className="flex-grow h-[2px] bg-[#b0513a]/20"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        {items.map((item, idx) => (
          <div key={idx} className="group relative">
            <div className="flex justify-between items-baseline mb-2">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold group-hover:text-[#b0513a] transition-colors uppercase tracking-tight leading-none">
                  {item.name}
                </h3>
                {item.popular && (
                  <span className="bg-[#b0513a]/10 text-[#b0513a] text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Populaire</span>
                )}
              </div>
              <div className="flex-grow border-b border-dotted border-gray-200 mx-3"></div>
              <span className="text-[#1A3C34] font-black text-base bg-[#FAF9F6] px-2 py-1 rounded-sm border border-gray-100 shadow-sm whitespace-nowrap">
                {item.price}
              </span>
            </div>
            {item.description && (
              <p className="text-gray-500 text-xs italic leading-snug">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header onNavigateMenu={(cat) => {
          if (cat) {
              const el = document.getElementById(cat);
              if (el) {
                const headerOffset = 96;
                const elementPosition = el.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
              }
          }
      }} />

      {/* Hero Intro */}
      <section className="pt-40 pb-20 bg-[#1A3C34] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <button 
            onClick={onBack}
            className="mb-8 text-[#b0513a] hover:text-white transition-colors font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 mx-auto"
          >
            ← Retour à l'accueil
          </button>
          <p className="text-[#b0513a] font-serif italic text-xl mb-4">Buon Appetito</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 uppercase tracking-tighter">Notre Carte Complète</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-base italic">
            De nos entrées croustillantes à nos célèbres pizzas au feu de bois, découvrez toutes les saveurs de La Mouna Pizza.
          </p>
        </div>
      </section>

      {/* Category Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <MenuGrid id="entrees" title="Les Entrées" items={ENTREE_MENU.items} />
          <MenuGrid id="pizzas" title="Les Pizzas" items={PIZZA_MENU.items} />
          <MenuGrid id="pastas" title="Les Pastas" items={PASTA_MENU.items} />
          <MenuGrid id="prepares" title="Plats Préparés" items={PREPARED_MENU.items} />
          <MenuGrid id="viandes" title="Les Viandes & Escalopes" items={MEAT_MENU.items} />
          <MenuGrid id="boissons" title="Boissons" items={DRINK_MENU.items} />
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-16 bg-[#FAF9F6] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <h4 className="text-2xl font-bold text-[#1A3C34] mb-4 uppercase">Commande par téléphone</h4>
            <p className="text-gray-500 mb-8 italic">Livraison gratuite sur Beaumont et ses environs.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
               <div className="text-center">
                  <p className="text-[10px] font-black text-[#b0513a] uppercase tracking-widest mb-1">Ligne 1</p>
                  <a href="tel:071327874" className="text-3xl font-black text-[#1A3C34] hover:text-[#b0513a] transition-colors">071 32 78 74</a>
               </div>
               <div className="hidden md:block w-px h-12 bg-gray-200"></div>
               <div className="text-center">
                  <p className="text-[10px] font-black text-[#b0513a] uppercase tracking-widest mb-1">Ligne 2</p>
                  <a href="tel:0484202042" className="text-3xl font-black text-[#1A3C34] hover:text-[#b0513a] transition-colors">0484 20 20 42</a>
               </div>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
