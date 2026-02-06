
import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface HeaderProps {
  onNavigateMenu: (category?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateMenu }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { id: 'entrees', name: 'Entrées' },
    { id: 'pizzas', name: 'Pizzas' },
    { id: 'pastas', name: 'Pâtes' },
    { id: 'prepares', name: 'Plats' },
    { id: 'viandes', name: 'Viandes' },
    { id: 'boissons', name: 'Boissons' },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-black text-[#1A3C34] tracking-tight uppercase">
                  La Mouna <span className="text-[#FF5E3A]">Pizza</span>
              </span>
              <span className="text-[9px] text-[#1A3C34]/50 tracking-[0.2em] uppercase ml-1">Feu de bois • Beaumont</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-10 items-center">
            <a href="/" className="text-[#1A3C34] hover:text-[#FF5E3A] transition-colors font-bold uppercase text-[11px] tracking-widest">Accueil</a>
            
            <div 
              className="relative h-20 flex items-center group cursor-pointer"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button 
                onClick={() => onNavigateMenu()}
                className="flex items-center gap-1 text-[#1A3C34] font-bold uppercase text-[11px] tracking-widest group-hover:text-[#FF5E3A] transition-colors"
              >
                Menu <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 w-48 bg-white shadow-xl border-t-2 border-[#FF5E3A] py-2 transition-all duration-300 origin-top ${isDropdownOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onNavigateMenu(cat.id);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-600 hover:text-[#FF5E3A] hover:bg-gray-50 transition-colors"
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <a href="#contact" className="text-[#1A3C34] hover:text-[#FF5E3A] transition-colors text-[11px] uppercase font-bold tracking-widest">Contact</a>
          </div>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center gap-6">
            <a href={`tel:${CONTACT_INFO.phone1}`} className="flex items-center gap-2 text-[#1A3C34] hover:text-[#FF5E3A] transition-colors font-black text-sm tracking-tight">
              <Phone size={16} className="text-[#FF5E3A]" /> {CONTACT_INFO.phone1}
            </a>
            <a href={`tel:${CONTACT_INFO.phone1}`} className="bg-[#1A3C34] text-white px-6 py-3 rounded-full font-bold hover:bg-[#2c534a] transition-all uppercase text-[10px] tracking-widest shadow-lg transform hover:scale-105">
              Commander
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#1A3C34]">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen pb-8 border-t border-gray-100' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-5 pt-6">
            <a href="/" className="text-[#FF5E3A] font-bold uppercase text-xs tracking-widest">Accueil</a>
            <div className="space-y-3 border-l-2 border-[#FF5E3A]/20 pl-4">
               {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    onNavigateMenu(cat.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-xs font-bold text-[#1A3C34] uppercase tracking-widest"
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <a href="#contact" className="text-[#1A3C34] font-bold uppercase text-xs tracking-widest">Contact</a>
            <div className="pt-4 flex flex-col gap-4">
                <a href={`tel:${CONTACT_INFO.phone1}`} className="flex items-center gap-3 font-black text-[#1A3C34]">
                    <Phone size={18} className="text-[#FF5E3A]" /> {CONTACT_INFO.phone1}
                </a>
                <a href={`tel:${CONTACT_INFO.phone1}`} className="bg-[#FF5E3A] text-white py-4 rounded-xl text-center font-bold uppercase text-xs tracking-widest">
                    Passer une commande
                </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
