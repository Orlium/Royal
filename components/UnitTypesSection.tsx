import React from 'react';
import { Button } from './ui/Button';

interface UnitProps {
  onCtaClick: () => void;
}

export const UnitTypesSection: React.FC<UnitProps> = ({ onCtaClick }) => {
  const units = [
    {
      title: "Garden View",
      price: "$107,825",
      size: "38-40 m²",
      roi: "14.67%",
      floor: "1-2",
      features: ["Nature view", "Fully furnished", "Full kitchen"]
    },
    {
      title: "Private Garden",
      price: "$113,000",
      size: "37-40 m²",
      roi: "14.83%",
      floor: "1",
      features: ["Private green area", "Fully furnished", "Full kitchen"]
    },
    {
      title: "Ocean View",
      price: "$131,660",
      size: "39 m²",
      roi: "14.65%",
      floor: "3-4",
      features: ["Ocean view", "Fully furnished", "Panoramic windows"]
    }
  ];

  return (
    <section className="py-24 bg-black-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white mb-2">Unit Types</h2>
          <p className="text-gray-500">Full-size apartments with 5* hotel infrastructure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {units.map((unit, index) => (
            <div key={index} className="group relative bg-black-900 border border-white/10 hover:border-gold-400 transition-colors duration-500 overflow-hidden">
              
              {/* Image Placeholder */}
              <div className="h-48 bg-gray-800 relative">
                 <img 
                  src={index === 0 
                    ? "/images/royal-oasis-interior.jpg" 
                    : `https://images.unsplash.com/photo-${index === 1 ? '1586023492125-27b2c045efd7' : '1540541338-ef6ac99801a2'}?q=80&w=1000&auto=format&fit=crop`
                  }
                  alt={unit.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                 />
                 <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 text-xs text-gold-400 uppercase tracking-widest border border-gold-400/20">
                    Floor {unit.floor}
                 </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-serif text-white mb-2">{unit.title}</h3>
                <div className="text-sm text-gray-500 mb-6">{unit.size}</div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400 text-sm">Price from</span>
                    <span className="text-gold-400 font-bold">{unit.price}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400 text-sm">Proj. ROI</span>
                    <span className="text-white">{unit.roi}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-8">
                  {unit.features.map((f, i) => (
                    <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                      <div className="w-1 h-1 bg-gold-400 rounded-full" /> {f}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full text-xs" onClick={onCtaClick}>
                  View Layout
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};