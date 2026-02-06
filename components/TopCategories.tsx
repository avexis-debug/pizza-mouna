
import React from 'react';

const categories = [
  { name: 'Les Pizzas', img: '/Pizza.jpg' },
  { name: 'Les Entrées', img: '/Pizza.jpg' },
  { name: 'Les Pastas', img: '/Pates.jpg' },
  { name: 'Plats Préparés', img: '/Pates.jpg' },
  { name: 'Les Viandes', img: '/Viande.jpg' },
  { name: 'Les Boissons', img: '/Pizza.jpg' },
];

const TopCategories: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[#1A3C34] text-4xl font-bold mb-16 uppercase tracking-tight">Nos Spécialités</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-300 group-hover:border-[#FF5E3A] group-hover:scale-105 mb-4 relative">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-[#1A3C34]/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <p className="text-[#1A3C34] font-bold text-center group-hover:text-[#FF5E3A] transition-colors uppercase text-sm tracking-wider">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
