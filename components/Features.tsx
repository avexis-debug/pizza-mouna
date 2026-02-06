
import React from 'react';
import { Flame, Truck, Clock } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="notre-pizzeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          {/* Texte */}
          <div className="w-full lg:w-1/2">
            <p className="text-[#b0513a] font-serif italic mb-2">Notre Histoire</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              La Mouna Pizza, votre pizzeria au feu de bois à Beaumont
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Depuis notre ouverture, La Mouna Pizza s'est imposée comme la référence de la pizza artisanale à Beaumont. Notre secret ? Un four au feu de bois traditionnel qui donne à chaque pizza une croûte croustillante et un goût fumé incomparable.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Nous sélectionnons les meilleurs ingrédients pour vous offrir des pizzas généreuses et authentiques. De la pâte pétrie à la main chaque jour jusqu'à la cuisson au feu de bois, chaque étape est réalisée avec passion et savoir-faire.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#b0513a]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Flame className="text-[#b0513a]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A3C34]">Cuisson au feu de bois</h4>
                  <p className="text-gray-500 text-sm">Un goût authentique et une croûte parfaite</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#b0513a]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Truck className="text-[#b0513a]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A3C34]">Livraison gratuite</h4>
                  <p className="text-gray-500 text-sm">Sur Beaumont et ses environs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#b0513a]/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="text-[#b0513a]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A3C34]">Ouvert 5j/7</h4>
                  <p className="text-gray-500 text-sm">Midi et soir le week-end, soir en semaine</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/pizzeria.jpg"
                alt="Pizzeria La Mouna - Beaumont"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <p className="text-white font-serif italic text-lg">Cuite au feu de bois, comme en Italie.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
