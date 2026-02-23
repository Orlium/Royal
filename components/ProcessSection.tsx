import React from 'react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-black-800 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-white mb-2">Ako prebieha investícia?</h2>
          <p className="text-gray-500 font-light text-sm">Off-plan nákup s transparentným priebehom</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Step 1 */}
          <div className="text-center group relative p-6 border border-white/5 hover:border-gold-400/30 transition-all bg-black-900">
            <div className="text-4xl font-serif text-gold-400 mb-4">01</div>
            <h4 className="font-serif text-lg mb-3 text-white">Rezervácia</h4>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Výber apartmánu a podpis rezervačnej zmluvy. Zložíte rezervačný poplatok a apartmán je váš.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center group relative p-6 border border-white/5 hover:border-gold-400/30 transition-all bg-black-900">
             <div className="text-4xl font-serif text-gold-400 mb-4">02</div>
            <h4 className="font-serif text-lg mb-3 text-white">Výstavba & Platby</h4>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Platíte postupne podľa splátkového kalendára. O progrese stavby dostávate pravidelnú fotodokumentáciu.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center group relative p-6 border border-white/5 hover:border-gold-400/30 transition-all bg-black-900">
             <div className="text-4xl font-serif text-gold-400 mb-4">03</div>
            <h4 className="font-serif text-lg mb-3 text-white">Odovzdanie</h4>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Apartmán sa dokončí, zariadi a skontroluje. Podpisujete zmluvu so správcovskou spoločnosťou.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center group relative p-6 border border-white/5 hover:border-gold-400/30 transition-all bg-black-900">
             <div className="text-4xl font-serif text-gold-400 mb-4">04</div>
            <h4 className="font-serif text-lg mb-3 text-white">Zarábate</h4>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Váš apartmán sa začína prenajímať. Chodia vám výnosy a vy si užívate pasívny príjem + dovolenku.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};