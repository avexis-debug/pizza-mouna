
import React, { useEffect } from 'react';
import { PIZZA_MENU, ENTREE_MENU, PASTA_MENU, PREPARED_MENU, MEAT_MENU, DRINK_MENU } from '../constants';
import { ChevronLeft } from 'lucide-react';

interface PizzaBoardProps {
  onBack: () => void;
}

const PizzaBoard: React.FC<PizzaBoardProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const MenuSection = ({ category, columns = 3 }: { category: any, columns?: number }) => (
    <div className="mb-16">
      <h2 className="text-[#b0513a] text-3xl md:text-4xl font-serif italic mb-8 border-b border-white/10 pb-2 inline-block">
        {category.title}
      </h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-x-12 gap-y-4`}>
        {category.items.map((item: any, idx: number) => (
          <div key={idx} className="flex flex-col border-b border-white/5 pb-2 last:border-0 hover:bg-white/5 transition-colors px-1 rounded">
            <div className="flex justify-between items-baseline">
              <h4 className="text-white text-base font-bold tracking-tight uppercase">
                {item.name}
              </h4>
              <span className="text-white font-black text-base ml-3">
                {item.price}
              </span>
            </div>
            {item.description && (
              <p className="text-[#E9DCC9]/70 text-[11px] md:text-xs italic font-light leading-snug">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#1A3C34] text-white">
      {/* Header Page */}
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-6 flex items-center justify-between border-b border-white/10 mb-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#b0513a] hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
        >
          <ChevronLeft size={18} /> Retour
        </button>
        <div className="text-center">
            <h1 className="text-[#b0513a] text-4xl md:text-5xl font-serif italic leading-none">LA MOUNA Pizza</h1>
            <p className="text-white/50 text-[10px] uppercase tracking-[0.3em] mt-1">Au feu de bois</p>
        </div>
        <div className="hidden sm:block text-right text-[10px] text-white/40 leading-tight">
            BEAUMONT<br/>071 32 78 74
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Nouveau Flux : Entrées -> Pizzas -> Reste */}
        <MenuSection category={ENTREE_MENU} columns={2} />
        
        <MenuSection category={PIZZA_MENU} columns={3} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
            <div>
                <MenuSection category={PASTA_MENU} columns={2} />
            </div>
            <div>
                <MenuSection category={PREPARED_MENU} columns={1} />
                <MenuSection category={MEAT_MENU} columns={1} />
                <MenuSection category={DRINK_MENU} columns={1} />
            </div>
        </div>

        {/* Footer style image */}
        <div className="mt-20 flex flex-col items-center text-center space-y-4 border-t border-white/10 pt-10">
           <div className="bg-[#b0513a] text-white px-8 py-3 rounded-full font-bold text-xl">
             Livraison Gratuite
           </div>
           <p className="text-2xl font-black text-white flex flex-col md:flex-row gap-4 items-center">
              <span>071 32 78 74</span>
              <span className="hidden md:inline text-[#b0513a]">•</span>
              <span>0484 20 20 42</span>
           </p>
           <p className="text-[#E9DCC9]/50 italic">buon appetito!</p>
        </div>
      </div>
    </div>
  );
};

export default PizzaBoard;
