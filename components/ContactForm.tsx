
import React from 'react';
import { User, Mail, Phone, Calendar, Users } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-10 md:py-20 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-[#b0513a] font-serif italic mb-2">Contactez-nous</p>
          <h2 className="text-4xl font-bold">Prendre Contact</h2>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><User size={20} /></span>
            <input 
              type="text" 
              placeholder="Nom" 
              className="w-full bg-white border border-gray-200 rounded-sm py-4 pl-12 pr-4 focus:outline-none focus:border-[#b0513a] transition-colors"
            />
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Mail size={20} /></span>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-white border border-gray-200 rounded-sm py-4 pl-12 pr-4 focus:outline-none focus:border-[#b0513a] transition-colors"
            />
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Phone size={20} /></span>
            <input 
              type="tel" 
              placeholder="Téléphone" 
              className="w-full bg-white border border-gray-200 rounded-sm py-4 pl-12 pr-4 focus:outline-none focus:border-[#b0513a] transition-colors"
            />
          </div>

          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Calendar size={20} /></span>
            <input 
              type="text" 
              placeholder="Date & Heure" 
              className="w-full bg-white border border-gray-200 rounded-sm py-4 pl-12 pr-4 focus:outline-none focus:border-[#b0513a] transition-colors"
            />
          </div>

          <div className="relative md:col-span-2">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Users size={20} /></span>
            <select className="w-full bg-white border border-gray-200 rounded-sm py-4 pl-12 pr-4 focus:outline-none focus:border-[#b0513a] transition-colors appearance-none">
              <option value="">Nombre d'invités</option>
              <option value="1">1 Personne</option>
              <option value="2">2 Personnes</option>
              <option value="4">4 Personnes</option>
              <option value="6+">6+ Personnes</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <textarea 
              placeholder="Votre message" 
              rows={4}
              className="w-full bg-white border border-gray-200 rounded-sm py-4 px-4 focus:outline-none focus:border-[#b0513a] transition-colors resize-none"
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button className="bg-[#1A3C34] text-white px-12 py-4 rounded-sm font-bold hover:bg-[#234d43] transition-all w-full md:w-auto uppercase tracking-widest text-sm">
              Envoyer Maintenant
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
