import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-600 py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center space-y-4">
        
        <div className="text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-600 block mb-2">Royal Oasis by NEXA</span>
          <p className="text-xs text-gray-500">© 2026. Všetky práva vyhradené.</p>
        </div>

        <div className="flex gap-6 text-[10px] uppercase tracking-wider text-gray-600">
           <a href="#" className="hover:text-white transition-colors">Ochrana údajov</a>
           <a href="#" className="hover:text-white transition-colors">GDPR</a>
           <a href="#" className="hover:text-white transition-colors">Kontakt</a>
        </div>

      </div>
    </footer>
  );
};