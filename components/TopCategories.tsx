
import React from 'react';

const categories = [
  { name: 'Pizzas', img: '/Pizza.jpg', href: '#section-pizzas' },
  { name: 'Pâtes', img: '/Pates.jpg', href: '#section-pates' },
  { name: 'Plats Préparés', img: '/Pates.jpg', href: '#section-plats' },
  { name: 'Viandes', img: '/Viande.jpg', href: '#section-viandes' },
];

interface TopCategoriesProps {
  onNavigateMenu: () => void;
}

const TopCategories: React.FC<TopCategoriesProps> = ({ onNavigateMenu }) => {
  return (
    <section className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[#1A3C34] text-4xl font-bold mb-16 uppercase tracking-tight">Nos Spécialités</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {categories.map((cat, idx) => (
            <a key={idx} href={cat.href} className="group cursor-pointer flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-300 group-hover:border-[#b0513a] group-hover:scale-105 mb-4 relative">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-[#1A3C34]/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <p className="text-[#1A3C34] font-bold text-center group-hover:text-[#b0513a] transition-colors uppercase text-sm tracking-wider">{cat.name}</p>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={onNavigateMenu}
            className="inline-flex items-center gap-2 bg-[#1A3C34] text-white px-10 py-4 rounded-full font-black hover:bg-[#234d43] transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-[11px]"
          >
            VOIR TOUTE LA CARTE
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
