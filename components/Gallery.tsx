
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 md:mb-16">
        <p className="text-[#b0513a] font-serif italic mb-2">Galerie</p>
        <h2 className="text-4xl font-bold">Nos Plats en Images</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto">
        {GALLERY_IMAGES.map((img, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-xl aspect-square">
            <img 
              src={img} 
              alt={`Gallery ${idx}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <span className="text-white font-medium uppercase text-xs tracking-widest">Voir sur Instagram</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
