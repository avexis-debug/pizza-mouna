
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <p className="text-[#FF5E3A] font-serif italic mb-2">Caractéristiques</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Des Caractéristiques qui Rendent Chaque Part Meilleure
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nos pizzas sont préparées avec les ingrédients les plus frais, une pâte pétrie à la main et des saveurs parfaitement équilibrées. Chaque part reflète notre passion, notre goût et l'expérience pizza ultime.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-lg font-medium text-[#1A3C34]">
                <CheckCircle className="text-[#FF5E3A]" fill="#FF5E3A" stroke="#FFF" />
                Cuite au Four à Pierre pour une Croûte Parfaite
              </li>
              <li className="flex items-center gap-3 text-lg font-medium text-[#1A3C34]">
                <CheckCircle className="text-[#FF5E3A]" fill="#FF5E3A" stroke="#FFF" />
                Large Variété de Pizzas Classiques et Signatures
              </li>
              <li className="flex items-center gap-3 text-lg font-medium text-[#1A3C34]">
                <CheckCircle className="text-[#FF5E3A]" fill="#FF5E3A" stroke="#FFF" />
                Garnitures Personnalisables pour Tous les Goûts
              </li>
            </ul>

            <button className="bg-[#FF5E3A] text-white px-8 py-3 rounded-sm font-bold hover:bg-[#e04d2b] transition-colors shadow-lg">
              En Savoir Plus
            </button>
          </div>

          {/* Image Collage */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative h-full space-y-4">
              <div className="bg-[#1A3C34] text-white p-8 rounded-2xl aspect-square flex flex-col justify-center items-center text-center">
                <div className="text-4xl font-bold mb-2">10+</div>
                <p className="text-sm opacity-80 uppercase tracking-widest">Prix d'Excellence Remportés</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=400&auto=format&fit=crop" 
                alt="Cuisson pizza" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <img 
              src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=400&auto=format&fit=crop" 
              alt="Pizza fraiche" 
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
