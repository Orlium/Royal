import React from 'react';
import { Award, Building, Users, Star } from 'lucide-react';

export const NexaSection: React.FC = () => {
  return (
    <section className="py-24 bg-black-800">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-4xl font-serif text-white mb-2">NEXA</h2>
            <p className="text-gray-400 font-light">Reliable Developer & Management</p>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
             <Award className="text-gold-400 w-12 h-12" />
             <div className="text-sm text-gray-300">
               Winner in category<br/>
               "Residential Real Estate, Indonesia"
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
            <h3 className="text-4xl font-serif text-gold-400 mb-2">No 1</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              In management of premium real estate in Bali
            </p>
          </div>

          <div className="p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
            <h3 className="text-4xl font-serif text-gold-400 mb-2">10+</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Years of experience in managing properties
            </p>
          </div>

          <div className="p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
            <h3 className="text-4xl font-serif text-gold-400 mb-2">12</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Complexes in Bali (3,860 m² completed)
            </p>
          </div>

          <div className="p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
            <h3 className="text-4xl font-serif text-gold-400 mb-2">9.8</h3>
            <div className="flex gap-1 text-gold-400 mb-2">
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Average rating on Booking.com
            </p>
          </div>

        </div>

        <div className="mt-16 text-center">
            <p className="text-xl font-serif italic text-gray-400">
              "NEXA - all-in-one ecosystem: development, architecture, management, resale"
            </p>
        </div>
      </div>
    </section>
  );
};