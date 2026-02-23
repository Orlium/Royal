import React from 'react';
import { Button } from './ui/Button';

interface CTAProps {
  onCtaClick: () => void;
}

export const FinalCTA: React.FC<CTAProps> = ({ onCtaClick }) => {
  return (
    <section className="py-32 bg-black-900 text-white relative overflow-hidden flex items-center justify-center">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold-400/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        
        <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
          Posledná šanca vlastniť <br/>
          <span className="text-gold-400 italic">kúsok raja na Bali</span>
        </h2>
        
        <p className="text-gray-300 text-lg md:text-xl font-light mb-12 leading-relaxed max-w-2xl mx-auto">
          V ponuke zostáva už len <strong>pár posledných apartmánov</strong>. Nezmeškajte príležitosť na pasívny príjem a luxusnú dovolenku v jednom.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button onClick={onCtaClick} variant="gold" size="lg" className="min-w-[280px] text-lg py-6 shadow-lg shadow-gold-400/20 hover:shadow-gold-400/40 transition-all">
            Rezervovať Nezáväznú Konzultáciu
          </Button>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            *Termíny sa rýchlo plnia
          </p>
        </div>

      </div>
    </section>
  );
};