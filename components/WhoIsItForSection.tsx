import React from 'react';
import { FOR_WHOM } from '../data/landingData';
import { handleHotmartCheckout } from '../config';
import { Check, X, HeartHandshake } from 'lucide-react';

interface WhoIsItForSectionProps {
  onOpenCheckout?: () => void;
}

export const WhoIsItForSection: React.FC<WhoIsItForSectionProps> = ({ onOpenCheckout }) => {
  const handleClick = onOpenCheckout || handleHotmartCheckout;
  const NOT_FOR_WHOM = [
    'Buscas dietas milagro o restricciones extremas.',
    'Esperas fármacos o diagnósticos médicos oficiales.',
    'No tienes interés en conocer los hábitos que apoyan tu organismo.'
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F9F9FB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D0748E] bg-[#FCEEF2] px-3.5 py-1 rounded-full border border-[#F8C1D1]">
            Perfil de Usuaria
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2D2D2D] tracking-tight mt-4 mb-3">
            ¿Para quién es este escáner?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Diseñado con rigor y empatía para acompañarte con transparencia en esta etapa vital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* SÍ ES PARA TI */}
          <div className="bg-[#FCEEF2] p-6 sm:p-8 rounded-[32px] border border-[#F8C1D1] shadow-2xs relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-[#F8C1D1] text-[#2D2D2D] flex items-center justify-center shrink-0 font-bold">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D]">
                  Sí es para ti si:
                </h3>
              </div>

              <ul className="space-y-4 mb-8">
                {FOR_WHOM.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#2D2D2D]">
                    <div className="mt-1 w-5 h-5 rounded-full bg-white text-[#D0748E] flex items-center justify-center shrink-0 shadow-2xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white/80 rounded-[20px] text-xs text-[#2D2D2D] flex items-center gap-2 border border-white">
              <HeartHandshake className="w-4 h-4 text-[#D0748E] shrink-0" />
              <span className="font-medium">Un enfoque amable que prioriza el autoconocimiento sin culpa.</span>
            </div>
          </div>

          {/* NO ES PARA TI */}
          <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-gray-100 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
                  <X className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D]">
                  No es para ti si:
                </h3>
              </div>

              <ul className="space-y-4 mb-6">
                {NOT_FOR_WHOM.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-[#F9F9FB] rounded-[20px] text-xs text-gray-500 border border-gray-100">
              Queremos asegurarnos de que esta herramienta cumpla exactamente tus expectativas educativas.
            </div>
          </div>

        </div>

        <div className="mt-10 text-center">
          <button
            onClick={handleClick}
            id="whoisfor-cta-btn"
            className="bg-[#2D2D2D] hover:bg-black text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-sm transition-all cursor-pointer"
          >
            Obtener Mi Escáner por USD $5
          </button>
        </div>

      </div>
    </section>
  );
};
