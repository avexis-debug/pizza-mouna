
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TopCategories from './components/TopCategories';
import MenuSection from './components/MenuSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import MenuPage from './components/MenuPage';
import { PIZZA_MENU, PASTA_MENU, PREPARED_MENU, MEAT_MENU } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'menu'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (view === 'home') {
        window.scrollTo(0, 0);
    }
  }, [view]);

  const handleNavigateToMenu = (category?: string) => {
    setSelectedCategory(category);
    setView('menu');
  };
  
  const handleNavigateHome = () => setView('home');

  if (view === 'menu') {
    return <MenuPage onBack={handleNavigateHome} initialCategory={selectedCategory} />;
  }

  const popularPizzas = {
    ...PIZZA_MENU,
    title: 'Pizzas Populaires',
    items: PIZZA_MENU.items.filter(item => item.popular)
  };

  return (
    <div className="min-h-screen overflow-x-hidden pt-20">
      <Header onNavigateMenu={handleNavigateToMenu} />
      <Hero />
      <TopCategories />
      
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <p className="text-[#FF5E3A] font-serif italic mb-2">Notre Sélection Gourmet</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">Nos Incontournables</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm md:text-base">
            Cuit au feu de bois selon la tradition. Une pâte fine, croustillante et des ingrédients sélectionnés.
          </p>
          
          <button 
            onClick={() => handleNavigateToMenu('pizzas')}
            className="inline-flex items-center gap-2 bg-[#1A3C34] text-white px-10 py-4 rounded-full font-black hover:bg-[#234d43] transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-[11px]"
          >
            VOIR TOUTE LA CARTE
          </button>
        </div>
        
        {/* Pizzas */}
        <MenuSection 
          category={popularPizzas} 
          reversed={false} 
          onSeeMore={() => handleNavigateToMenu('pizzas')}
        />
        
        {/* Pastas */}
        <div className="py-10 bg-[#FAF9F6]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#1A3C34]">Nos Pâtes & Spécialités</h3>
            </div>
            <MenuSection 
              category={PASTA_MENU} 
              reversed={true} 
              onSeeMore={() => handleNavigateToMenu('pastas')}
            />
        </div>

        {/* Plats Préparés */}
        <div className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#1A3C34]">Nos Plats Préparés</h3>
            </div>
            <MenuSection
              category={PREPARED_MENU}
              reversed={false}
              onSeeMore={() => handleNavigateToMenu('prepares')}
            />
        </div>

        {/* Escalopes */}
        <div className="py-10 bg-[#FAF9F6]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#1A3C34]">Nos Escalopes Gourmet</h3>
            </div>
            <MenuSection
              category={MEAT_MENU}
              reversed={true}
            />
        </div>
      </section>

      <Features />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
