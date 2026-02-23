import React from 'react';

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black-900 to-black-800 py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Image/Text Split */}
        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
             <h2 className="text-5xl md:text-6xl font-serif text-white mb-4 leading-tight">
               Affordable <br/>
               <span className="text-gold-400 italic">Luxury</span>
             </h2>
             <div className="w-20 h-1 bg-gold-400 mt-6"></div>
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-12">
             <p className="text-xl text-gray-300 font-light border-l border-gold-400/30 pl-6 py-2">
               Premium quality at a price from <span className="text-gold-400 font-bold">$2,914</span> per m²
             </p>
          </div>
        </div>

        {/* Gold Box Stats Area - Matching Page 2 Layout */}
        <div className="relative border border-gold-400/20 bg-white/5 p-8 md:p-16">
          {/* Decorative Corner */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold-400"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold-400"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            
            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-serif text-white">12-15%</h3>
              <p className="text-xs font-bold tracking-[0.2em] text-gold-400 uppercase">Planned ROI</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-serif text-white">6-7 <span className="text-2xl">years</span></h3>
              <p className="text-xs font-bold tracking-[0.2em] text-gold-400 uppercase">Payback Period</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-5xl md:text-6xl font-serif text-white">30%</h3>
              <p className="text-xs font-bold tracking-[0.2em] text-gold-400 uppercase">Capital Growth</p>
              <p className="text-xs text-gray-500">During construction</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};