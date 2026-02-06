
import React from 'react';
import { MenuCategory } from '../types';
import { PlusCircle } from 'lucide-react';

interface MenuSectionProps {
  category: MenuCategory;
  reversed?: boolean;
  onSeeMore?: () => void;
  seeMoreLabel?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ category, reversed, onSeeMore, seeMoreLabel }) => {
  // On limite l'affichage à 6 items sur la home
  const displayItems = category.items.slice(0, 6);

  return (
    <div className={`py-4 md:py-12 flex flex-col-reverse ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 md:gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 md:mb-12`}>
      {/* Menu List */}
      <div className="w-full lg:w-3/5 bg-[#FAF9F6] p-5 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 flex items-center">
          <span className="w-8 h-[2px] bg-[#1A3C34] mr-3"></span>
          {category.title}
        </h3>
        
        <div className="space-y-4 md:space-y-8">
          {displayItems.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="flex justify-between items-baseline mb-1">
                <div className="flex items-center gap-3">
                  <h4 className="text-xl font-bold group-hover:text-[#b0513a] transition-colors uppercase tracking-tight">{item.name}</h4>
                  <div className="flex gap-2">
                    {item.tags?.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] uppercase font-bold text-[#1A3C34]/60 tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-grow border-b border-dotted border-gray-300 mx-4"></div>
                <span className="text-[#b0513a] font-bold text-lg bg-white px-3 py-1 rounded-sm shadow-sm whitespace-nowrap shrink-0">{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg italic">
                {item.description}
              </p>
            </div>
          ))}

          {onSeeMore && (
            <div className="pt-4 border-t border-gray-100">
              <button 
                onClick={onSeeMore}
                className="group flex items-center gap-3 text-[#1A3C34] font-black uppercase tracking-widest text-sm hover:text-[#b0513a] transition-colors"
              >
                <PlusCircle size={20} className="text-[#b0513a] group-hover:rotate-90 transition-transform duration-300" />
                {seeMoreLabel || 'Voir toute la sélection'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full lg:w-2/5">
        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
          <img 
            src={category.image || '/Pizza.jpg'} 
            alt={category.title} 
            className="w-full h-[250px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
