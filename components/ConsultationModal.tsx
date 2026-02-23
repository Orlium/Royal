import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar } from 'lucide-react';
import { ModalProps } from '../types';
import { Button } from './ui/Button';

export const ConsultationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setFormData({ name: '', email: '', phone: '' });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setStep('success'), 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative bg-black-800 border border-white/10 w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {step === 'form' ? (
            <>
              <div className="mb-6 text-center">
                <Calendar className="w-12 h-12 text-gold-400 mx-auto mb-4" />
                <h3 className="text-2xl text-white font-serif mb-2">Privátna Konzultácia</h3>
                <p className="text-gray-400 text-sm">
                  Zanechajte nám kontakt. Náš investičný špecialista sa vám ozve do 24 hodín.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold-400 mb-2">Meno</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-black-900 border border-white/10 p-3 text-white focus:outline-none focus:border-gold-400 transition-colors"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-black-900 border border-white/10 p-3 text-white focus:outline-none focus:border-gold-400 transition-colors"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold-400 mb-2">Telefón</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-black-900 border border-white/10 p-3 text-white focus:outline-none focus:border-gold-400 transition-colors"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                
                <div className="pt-4">
                  <Button type="submit" variant="gold" className="w-full">
                    Odoslať Žiadosť
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-gold-400 mx-auto mb-4" />
              <h3 className="text-2xl text-white font-serif mb-2">Ďakujeme</h3>
              <p className="text-gray-400 mb-6">
                Vaša žiadosť bola prijatá. Čoskoro vás budeme kontaktovať.
              </p>
              <Button onClick={onClose} variant="outline" className="w-full">
                Zavrieť
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};