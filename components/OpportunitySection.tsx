import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, Cell, YAxis } from 'recharts';

const data = [
  { name: 'Guesthouses', price: 40, type: 'low' },
  { name: 'Royal Oasis', price: 125, type: 'mid' },
  { name: 'Luxury Hotels', price: 550, type: 'high' },
];

export const OpportunitySection: React.FC = () => {
  return (
    <section className="py-24 bg-black-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight text-white">
              Obrovská diera na trhu <br/>
              <span className="text-gold-400 italic">Príležitosť pre vás</span>
            </h2>
            
            <p className="text-gray-400 mb-8 leading-relaxed font-light text-lg">
              Na Bali existujú dva extrémy, ale chýba zlatý stred. Práve túto medzeru vypĺňame.
            </p>
            
            <div className="space-y-8">
              <div className="group border-l-2 border-gray-800 pl-6 hover:border-gold-400 transition-colors duration-300">
                <h4 className="font-serif text-lg text-gray-500 mb-1 group-hover:text-white transition-colors">Lacné Guesthousy (€30-50)</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Nízky štandard, určené pre backpackerov a surferov. Nevyhovujú náročnejšej klientele.
                </p>
              </div>

              <div className="group border-l-2 border-gold-400 pl-6 bg-white/5 py-4 pr-4 rounded-r-lg">
                <h4 className="font-serif text-xl text-gold-400 mb-1">Náš Projekt (€100-150)</h4>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  <strong>Zlatý stred.</strong> Luxus 5* hotela za dostupnú cenu. Presne toto hľadá stredná trieda a digitálni nomádi, ktorí chcú komfort, ale nechcú platiť stovky eur.
                </p>
              </div>

              <div className="group border-l-2 border-gray-800 pl-6 hover:border-gold-400 transition-colors duration-300">
                <h4 className="font-serif text-lg text-gray-500 mb-1 group-hover:text-white transition-colors">Predražené Hotely (€500-600)</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  Luxusné rezorty, ktoré sú pre bežného turistu cenovo nedostupné.
                </p>
              </div>
            </div>

            <div className="mt-10">
               <p className="text-white font-serif text-lg">
                 <span className="text-gold-400">Výsledok?</span> Obrovský dopyt a vysoká obsadenosť.
               </p>
            </div>
          </div>

          {/* Right: Chart/Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white/[0.02] p-8 md:p-12 border border-white/5 rounded-sm">
              <div className="mb-8 text-center">
                <h3 className="text-xl font-serif text-white">Cenové porovnanie (Noc)</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Kde sa nachádza vaša investícia?</p>
              </div>
              
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                    <YAxis stroke="#333" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(value) => `€${value}`} />
                    <Tooltip 
                      cursor={{fill: 'transparent'}}
                      contentStyle={{ backgroundColor: '#050505', border: '1px solid #333', color: '#fff' }}
                      itemStyle={{ color: '#D4AF37' }}
                      formatter={(value) => [`€${value}`, 'Cena za noc']}
                    />
                    <Bar dataKey="price" radius={[4, 4, 0, 0]} barSize={60}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.type === 'mid' ? '#D4AF37' : '#333'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  Graf ukazuje cenovú priepasť na trhu, ktorú tento projekt využíva.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};