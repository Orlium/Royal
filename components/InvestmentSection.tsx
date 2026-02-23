import React from 'react';
import { TrendingUp, PieChart, Wallet } from 'lucide-react';
import { Button } from './ui/Button';

interface InvestmentSectionProps {
  onCtaClick: () => void;
}

export const InvestmentSection: React.FC<InvestmentSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-black-800 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-2">Čísla, ktoré dávajú zmysel</h2>
          <p className="text-gray-500 font-light">Transparentná finančná matematika</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1 */}
          <div className="group p-8 border-t border-white/10 hover:border-gold-400/50 transition-colors duration-500 bg-white/[0.02]">
            <div className="mb-6 text-gold-400 opacity-60 group-hover:opacity-100 transition-opacity">
              <Wallet size={28} strokeWidth={1} />
            </div>
            <h3 className="text-4xl font-serif mb-2 text-white">od €91,000</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">Dostupná Vstupná Investícia</p>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Cena za plne zariadený apartmán v 5* štandarde. Žiadne skryté doplatky za nábytok či vybavenie.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="group p-8 border-t border-white/10 hover:border-gold-400/50 transition-colors duration-500 bg-white/[0.02]">
            <div className="mb-6 text-gold-400 opacity-60 group-hover:opacity-100 transition-opacity">
              <PieChart size={28} strokeWidth={1} />
            </div>
            <h3 className="text-4xl font-serif mb-2 text-white">12-15%</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">Ročný ROI (Návratnosť)</p>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Vysoký výnos vďaka celoročnej sezóne na Bali a profesionálnemu manažmentu.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="group p-8 border-t border-white/10 hover:border-gold-400/50 transition-colors duration-500 bg-white/[0.02]">
            <div className="mb-6 text-gold-400 opacity-60 group-hover:opacity-100 transition-opacity">
              <TrendingUp size={28} strokeWidth={1} />
            </div>
            <h3 className="text-4xl font-serif mb-2 text-white">6-7 rokov</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">Payback Period</p>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Vaša investícia sa vám vráti extrémne rýchlo. Zvyšných 70 rokov leaseholdu už generujete čistý zisk.
            </p>
          </div>

        </div>

        <div className="text-center">
          <Button variant="text" onClick={onCtaClick} className="text-xs md:text-sm tracking-widest text-gray-400 hover:text-white border-b border-gold-400/30 pb-1">
            MÁM ZÁUJEM O DETAILNÝ SPLÁTKOVÝ KALENDÁR &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
};