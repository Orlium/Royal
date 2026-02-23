import React, { useState, useEffect } from 'react';

export const LeaseholdSection: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-wood-900 relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute right-0 top-0 h-full w-1/3 bg-gold-400/5 -skew-x-12 transform origin-top-right" />

       <div className="container mx-auto px-6 relative z-10">
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-400 tracking-widest text-xs uppercase mb-4 block font-bold">Exkluzívna Výhoda</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                Leasehold na <span className="text-gold-400">77 rokov</span>
                <br/>
                <span className="italic text-2xl md:text-3xl text-gray-300 font-light">Istota pre vás aj ďalšie generácie</span>
              </h2>
              
              <div className="space-y-6 text-gray-300 font-light">
                <p className="leading-relaxed">
                  Toto je <strong>absolútny "game-changer"</strong>. Kým bežné projekty na Bali ponúkajú prenájom pozemku len na 25–30 rokov, my vám garantujeme <strong>77 rokov</strong>.
                </p>
                
                <ul className="space-y-4 mt-4">
                  <li className="flex items-start gap-4">
                    <div className="min-w-[8px] h-[8px] mt-2 rounded-full bg-gold-400" />
                    <p><strong>Maximálna možná dĺžka</strong>, akú je možné na Bali získať.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="min-w-[8px] h-[8px] mt-2 rounded-full bg-gold-400" />
                    <p>Obrovská <strong>bezpečnosť investície</strong> a vyššia hodnota pri následnom predaji.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="min-w-[8px] h-[8px] mt-2 rounded-full bg-gold-400" />
                    <p>Žiadne skryté poplatky za predlžovanie zmluvy o pár rokov.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-gold-400/30 p-8 md:p-10 bg-black/40 backdrop-blur-md">
               {/* Visual Comparison */}
               <div className="mb-12">
                 <h4 className="text-white font-serif text-lg mb-8">Časová os vlastníctva</h4>
                 
                 <div className="relative space-y-8">
                   
                   {/* Timeline Axis Lines */}
                   <div className="absolute top-0 bottom-0 left-[32%] w-px border-l border-dashed border-gray-600 z-0"></div>
                   <div className="absolute top-0 bottom-0 right-0 w-px border-l border-dashed border-gold-400/30 z-0"></div>

                   {/* Royal Oasis Bar */}
                   <div className="relative z-10">
                     <div className="flex justify-between text-xs uppercase tracking-widest mb-2">
                       <span className="text-gold-400 font-bold">Royal Oasis</span>
                       <span className={`text-gold-400 transition-opacity duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>77 Rokov</span>
                     </div>
                     <div className="h-8 bg-gray-800/50 rounded-sm overflow-hidden relative w-full">
                       <div 
                         className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-600 to-gold-400 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-[2000ms] ease-out"
                         style={{ width: animate ? '100%' : '0%' }}
                       >
                         <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-black whitespace-nowrap px-1">
                           3 Generácie
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Standard Market Bar */}
                   <div className="relative z-10">
                     <div className="flex justify-between text-xs uppercase tracking-widest mb-2">
                       <span className="text-gray-500">Bežný štandard</span>
                       <span className="text-gray-500">25 Rokov</span>
                     </div>
                     <div className="h-8 bg-gray-800/50 rounded-sm overflow-hidden relative w-full">
                       <div 
                         className="absolute top-0 left-0 h-full bg-gray-600 transition-all duration-[1000ms] ease-out"
                         style={{ width: animate ? '32%' : '0%' }}
                       >
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-white/80 whitespace-nowrap">
                           Koniec zmluvy
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Timeline Labels */}
                   <div className="relative h-6 mt-2">
                      <div className="absolute left-0 -bottom-1 text-[10px] text-gray-500">0</div>
                      <div className="absolute left-[32%] -bottom-1 text-[10px] text-gray-400 -translate-x-1/2 font-bold">25 Rokov</div>
                      <div className="absolute right-0 -bottom-1 text-[10px] text-gold-400 font-bold">77 Rokov</div>
                   </div>

                 </div>
               </div>

               <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-700">
                 <div className="text-center border-r border-gray-700 pr-4">
                    <h3 className="text-4xl md:text-5xl font-serif text-gold-400 mb-1">3x</h3>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Dlhšia doba</p>
                 </div>
                 <div className="text-center pl-4">
                    <h3 className="text-4xl md:text-5xl font-serif text-white mb-1">0€</h3>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Poplatky za predĺženie</p>
                 </div>
               </div>
            </div>
         </div>

       </div>
    </section>
  );
};