
import React from 'react';

const categories = [
  { name: 'Les Pizzas', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=300&auto=format&fit=crop' },
  { name: 'Les Entrées', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=300&auto=format&fit=crop' },
  { name: 'Les Pastas', img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=300&auto=format&fit=crop' },
  { name: 'Plats Préparés', img: 'https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=300&auto=format&fit=crop' },
  { name: 'Les Viandes', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=300&auto=format&fit=crop' },
  { name: 'Les Boissons', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=300&auto=format&fit=crop' },
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
