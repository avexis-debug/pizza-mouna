
import React from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const testimonial = TESTIMONIALS[0];

  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-[#b0513a] font-serif italic mb-2">Témoignages</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Ce que Disent Nos Clients</h2>

        <div className="relative flex flex-col items-center">
          <div className="mb-8 relative">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-[#b0513a] text-white p-2 rounded-full">
              <Quote size={16} fill="currentColor" />
            </div>
          </div>

          <div className="flex items-center justify-between w-full absolute top-1/2 -translate-y-1/2">
             <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#b0513a] hover:text-white transition-all">
                <ChevronLeft />
             </button>
             <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#b0513a] hover:text-white transition-all">
                <ChevronRight />
             </button>
          </div>

          <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed mb-8 max-w-3xl">
            "{testimonial.quote}"
          </p>

          <div>
            <h4 className="text-xl font-bold text-[#1A3C34]">{testimonial.name}</h4>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-1">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
