
import React from 'react';
import { Phone, MapPin, Facebook, Instagram, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1A3C34] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Map */}
          <div className="lg:col-span-2">
             <div className="mb-6">
                <img src="/Logo_Footer.png" alt="La Mouna Pizza" className="h-16 w-auto" />
            </div>
            <p className="text-white leading-relaxed mb-6 italic max-w-md">
              "Votre pizzeria au feu de bois à Beaumont. Livraison gratuite sur toute la commune de Beaumont. Pizzas, pâtes, escalopes et plats préparés."
            </p>
            
            {/* Google Maps Embed */}
            <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10 shadow-lg grayscale-[20%] hover:grayscale-0 transition-all duration-500">
                <iframe 
                    title="Google Maps La Mouna Pizza Beaumont"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.965413348083!2d4.2312!3d50.2372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c231718797f1df%3A0xe546b57d0d61183c!2sChauss%C3%A9e%20de%20Chimay%2012%2C%206500%20Beaumont!5e0!3m2!1sfr!2sbe!4v1710000000000!5m2!1sfr!2sbe" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xl font-bold mb-8 uppercase tracking-widest text-[#d4735a]">Infos Pratiques</h4>
            <ul className="space-y-4 text-white">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#d4735a] mt-1 shrink-0" />
                <div className="flex flex-col">
                    <a href={`tel:${CONTACT_INFO.phone1}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone1}</a>
                    <a href={`tel:${CONTACT_INFO.phone2}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone2}</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#d4735a] mt-1 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#d4735a] mt-1 shrink-0" />
                <div className="text-xs space-y-1">
                    <p className="font-bold">Ven-Sam-Dim : 11h30-14h & 17h30-22h</p>
                    <p>Mar-Jeu : 17h30-22h</p>
                    <p className="text-white/60">Lun & Mer : Fermé</p>
                </div>
              </li>
            </ul>
            <div className="flex gap-4 mt-8">
              <a href="https://www.facebook.com/pizzerrialaMouna" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4735a] transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/lamoouna/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4735a] transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Specialites */}
          <div>
            <h4 className="text-xl font-bold mb-8 uppercase tracking-widest text-[#d4735a]">Livraison Pizza</h4>
            <ul className="space-y-4 text-white text-sm">
              <li>Livraison pizza Beaumont</li>
              <li>Livraison pizza Barbençon</li>
              <li>Livraison pizza Leugnies</li>
              <li>Livraison pizza Leval-Chaudeville</li>
              <li>Livraison pizza Renlies</li>
              <li>Livraison pizza Solre-Saint-Géry</li>
              <li>Livraison pizza Thirimont</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-white gap-4 uppercase tracking-[0.2em]">
          <div className="text-center md:text-left">
            <p>© 2025 Tous Droits Réservés <span className="text-[#d4735a]">La Mouna Pizza Beaumont</span></p>
            <p className="mt-2 text-[9px] tracking-widest opacity-80">
              Site réalisé par <a href="https://siteexpress24.com" target="_blank" rel="noopener noreferrer" className="text-[#d4735a] hover:text-white transition-colors font-bold">siteexpress24.com</a>
            </p>
          </div>
          <p className="italic font-serif text-[12px]">buon appetito da Beaumont!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
