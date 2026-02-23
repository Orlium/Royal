import React from 'react';
import { Star, CheckCircle, Users, Calendar } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-black-900">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left: Facts about Management */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-10 leading-tight">
              Investícia <span className="text-gold-400 italic">bez starostí</span>
            </h2>
            <p className="text-gray-400 mb-10 font-light">
              Vy vlastníte, my sa staráme. Projekt funguje ako 4-poschodový komplex so službami 5* hotela (reštaurácia, wellness, fitness).
            </p>
            
            <div className="grid grid-cols-1 gap-8">
               <div className="flex gap-5">
                   <div className="mt-1 text-gold-400"><CheckCircle size={24} /></div>
                   <div>
                       <h4 className="font-serif text-lg text-white mb-2">Renomovaný Správca</h4>
                       <p className="text-sm text-gray-500 font-light leading-relaxed">
                         O všetko sa stará profesionálna firma. Prenájom prebieha cez Booking.com a ďalšie platformy. Vy neriešite upratovanie, check-in ani opravy.
                       </p>
                   </div>
               </div>

               <div className="flex gap-5">
                   <div className="mt-1 text-gold-400"><Users size={24} /></div>
                   <div>
                       <h4 className="font-serif text-lg text-white mb-2">Férový "Pool Systém"</h4>
                       <p className="text-sm text-gray-500 font-light leading-relaxed">
                         Zisk sa rozdeľuje spravodlivo medzi majiteľov rovnakých typov apartmánov. Nezáleží, či bol obsadený práve váš, alebo susedov – profitujú všetci.
                       </p>
                   </div>
               </div>

               <div className="flex gap-5">
                   <div className="mt-1 text-gold-400"><Calendar size={24} /></div>
                   <div>
                       <h4 className="font-serif text-lg text-white mb-2">Vaša Dovolenka</h4>
                       <p className="text-sm text-gray-500 font-light leading-relaxed">
                         Chcete prísť na Bali? Samozrejme. Stačí nahlásiť termín 3 mesiace vopred a apartmán je váš. Zvyšok roka vám zarába.
                       </p>
                   </div>
               </div>
            </div>
          </div>

          {/* Right: Visual/Testimonial */}
          <div className="relative mt-12 lg:mt-0 bg-white/[0.03] p-10 border border-white/5 rounded-sm">
             <div className="absolute -top-4 -right-4 bg-gold-400 text-black px-4 py-2 font-serif font-bold">
               5* Služby
             </div>
             <h3 className="text-2xl font-serif text-white mb-6">Vybavenie projektu</h3>
             <ul className="space-y-4 text-gray-300 font-light mb-8">
               <li className="flex items-center gap-3">
                 <Star size={16} className="text-gold-400" fill="currentColor" /> Reštaurácia a Bar
               </li>
               <li className="flex items-center gap-3">
                 <Star size={16} className="text-gold-400" fill="currentColor" /> Wellness & Spa
               </li>
               <li className="flex items-center gap-3">
                 <Star size={16} className="text-gold-400" fill="currentColor" /> Fitness Centrum
               </li>
               <li className="flex items-center gap-3">
                 <Star size={16} className="text-gold-400" fill="currentColor" /> Coworking priestory
               </li>
               <li className="flex items-center gap-3">
                 <Star size={16} className="text-gold-400" fill="currentColor" /> 24/7 Recepcia a bezpečnosť
               </li>
             </ul>
             <p className="text-xs text-gray-500 italic border-t border-gray-700 pt-4">
               "Apartmány sa odovzdávajú kompletne zariadené na kľúč."
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};