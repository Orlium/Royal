import React from 'react';
import { Button } from './ui/Button';
import { IMAGE_URLS } from '../constants';

interface HeroProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGE_URLS.royalOasisExterior} 
          alt="Royal Oasis Exterior" 
          className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black-900/60 via-black-900/20 to-black-900" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Minimal Logo */}
        <div className="mb-10 opacity-90 animate-fade-in-up">
             <div className="text-gold-400 mb-3 opacity-80">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto">
                  <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z" />
                </svg>
             </div>
             <span className="font-serif text-white tracking-[0.4em] text-[10px] uppercase">Royal Oasis Bali</span>
        </div>

        <div className="max-w-5xl mx-auto animate-fade-in-up delay-100">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-[1.1] tracking-wide">
            <span className="text-gold-400 block mb-4 text-xl md:text-2xl italic tracking-normal opacity-90">
              Investujte do svojho sna na Bali
            </span>
            Vlastný apartmán s <span className="text-gold-400">77-ročným leaseholdom</span> a službami 5* hotela.
          </h1>
          
          <div className="w-16 h-px bg-gold-400/50 mx-auto mb-10"></div>

          <p className="text-base md:text-xl font-light text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Získajte <strong>pasívny príjem s ROI 12–15 %</strong> a zároveň luxusné dovolenkové sídlo v TOP 3 svetovej destinácii.
            <br className="hidden md:block" />
            <span className="text-gold-400 mt-4 block text-sm tracking-widest uppercase">
              Posledné kusy v ponuke • Ceny od €91,000
            </span>
          </p>

          <Button onClick={onCtaClick} variant="gold" size="md" className="hover:scale-105 transition-transform duration-500 min-w-[240px]">
            Zistiť viac o investícii
          </Button>
        </div>
      </div>
    </section>
  );
};