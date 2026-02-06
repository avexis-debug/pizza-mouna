
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jean D.',
    quote: "La meilleure pizza au feu de bois de la région ! Le service de livraison est rapide et les produits sont toujours frais.",
    rating: 5,
  },
  {
    name: 'Sophie M.',
    quote: "Des pâtes délicieuses et une escalope parmigiana incroyable. On y retourne chaque semaine !",
    rating: 5,
  },
  {
    name: 'Marc L.',
    quote: "Livraison rapide, pizza chaude et croustillante. La Savoyarde est un must !",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-10 md:py-24 bg-[#1A3C34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#d4735a] font-serif italic mb-2">Avis clients</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ce que disent nos clients</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 relative">
              <Quote size={32} className="text-[#d4735a]/30 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-[#d4735a]" fill="#d4735a" />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <p className="text-white font-bold text-sm uppercase tracking-widest">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
