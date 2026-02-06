
import React from 'react';
import { ChefHat, Utensils, Zap, Play } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Side: Images */}
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/Pizza.jpg" 
                alt="Chef préparant la pizza" 
                className="w-full h-[500px] object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                  <Play fill="currentColor" size={32} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-[#b0513a] font-serif italic mb-2">À Propos</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Créer une Pizza Authentique avec Passion, Qualité et Tradition
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Nous préparons chaque pizza avec des ingrédients frais, une pâte pétrie à la main et une passion pour les saveurs authentiques. Des recettes classiques aux créations audacieuses, notre objectif est de servir de délicieuses pizzas qui rassemblent les gens — part après part.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#1A3C34]">
                  <ChefHat />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Chef Qualifié</h4>
                  <p className="text-gray-500 text-sm">Définissez le concept et le thème de votre plat.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#1A3C34]">
                  <Utensils />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Meilleure Qualité d'Aliments</h4>
                  <p className="text-gray-500 text-sm">Définissez le concept et le thème de votre plat.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-[#1A3C34]">
                  <Zap />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Service Rapide et Amical</h4>
                  <p className="text-gray-500 text-sm">Ingrédients frais de haute qualité utilisés quotidiennement.</p>
                </div>
              </div>
            </div>

            <button className="mt-10 bg-[#b0513a] text-white px-8 py-3 rounded-sm font-bold hover:bg-[#e04d2b] transition-colors">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
