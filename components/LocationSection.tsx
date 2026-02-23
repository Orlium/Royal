import React from 'react';
import { MapPin, Clock, Sun, Waves } from 'lucide-react';
import { IMAGE_URLS } from '../constants';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-24 bg-black-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Lokalita, ktorá zarába</h2>
          <p className="text-gold-400 tracking-[0.2em] uppercase text-sm">Bali - TOP 3 celosvetová destinácia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Map Visual Placeholder */}
          <div className="relative aspect-square md:aspect-video bg-gray-900 rounded-sm overflow-hidden border border-gray-800 group">
             <img 
              src={IMAGE_URLS.royalOasisInterior} 
              alt="Royal Oasis Location Context" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-700"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/70 backdrop-blur-sm p-8 border border-gold-400/30 text-center max-w-xs">
                   <h3 className="font-serif text-2xl text-white mb-2">Prime Location</h3>
                   <p className="text-xs text-gray-300 leading-relaxed">
                     Všetko dôležité na dosah ruky. Golf, pláže, luxus.
                   </p>
                </div>
             </div>
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-serif text-white mb-6">Prečo práve táto lokalita?</h3>
              <p className="text-gray-400 font-light mb-8 leading-relaxed">
                Náš projekt sa nachádza v absolútnom centre diania. Žiadne kompromisy, žiadne dlhé cestovanie.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-black transition-all shrink-0">
                    <Sun size={20} />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-serif">Golf s výhľadom na oceán</h4>
                    <p className="text-gray-500 text-sm font-light">
                      Len pár minút od prestížneho golfového ihriska, ktoré láka bonitnú klientelu z celého sveta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-black transition-all shrink-0">
                    <Waves size={20} />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-serif">Najlepší Beach Club v Ázii</h4>
                    <p className="text-gray-500 text-sm font-light">
                      V bezprostrednej blízkosti sa nachádza ikonický plážový klub, centrum zábavy a relaxu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-black transition-all shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-serif">Strategická poloha</h4>
                    <p className="text-gray-500 text-sm font-light">
                      Všetky služby, reštaurácie a atrakcie sú v pešej dostupnosti alebo krátkou jazdou.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 border-l-2 border-gold-400">
               <p className="text-gray-300 italic text-sm leading-relaxed">
                 "Lokalita je kľúčom k vysokej obsadenosti. Tu nekupujete len múry, ale adresu, ktorú turisti milujú."
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};