
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
      <TopCategories onNavigateMenu={() => handleNavigateToMenu()} />
      
      <section id="menu" className="py-20 bg-white">
        {/* Pizzas */}
        <div id="section-pizzas" className="scroll-mt-24"></div>
        <MenuSection 
          category={popularPizzas} 
          reversed={false} 
          onSeeMore={() => handleNavigateToMenu('pizzas')}
        />
        
        {/* Pastas */}
        <div className="py-10 bg-[#FAF9F6]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
                <h3 id="section-pates" className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-[#1A3C34] scroll-mt-24">Nos Pâtes & Spécialités</h3>
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
                <h3 id="section-plats" className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-[#1A3C34] scroll-mt-24">Nos Plats Préparés</h3>
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
                <h3 id="section-viandes" className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-[#1A3C34] scroll-mt-24">Nos Escalopes</h3>
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
