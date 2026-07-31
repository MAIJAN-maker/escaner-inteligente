import React from 'react';
import { WHAT_YOU_GET } from '../data/landingData';
import { handleHotmartCheckout } from '../config';
import { CheckCircle2, FileCheck, Sparkles, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react';

interface WhatYouGetSectionProps {
  onOpenCheckout?: () => void;
}

export const WhatYouGetSection: React.FC<WhatYouGetSectionProps> = ({ onOpenCheckout }) => {
  const handleClick = onOpenCheckout || handleHotmartCheckout;
  const getItemIcon = (index: number) => {
    switch (index) {
      case 0:
        return <CheckCircle2 className="w-6 h-6 text-[#D0748E]" />;
      case 1:
        return <UserCheck className="w-6 h-6 text-[#D0748E]" />;
      case 2:
        return <FileCheck className="w-6 h-6 text-[#D0748E]" />;
      case 3:
        return <Sparkles className="w-6 h-6 text-[#D0748E]" />;
      case 4:
        return <ShieldCheck className="w-6 h-6 text-[#D0748E]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#D0748E]" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F9F9FB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D0748E] bg-[#FCEEF2] px-3.5 py-1 rounded-full border border-[#F8C1D1]">
            Contenido Incluido
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2D2D2D] tracking-tight mt-4 mb-3">
            ¿Qué recibes con tu acceso?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Al adquirir el Escáner Inteligente por USD $5, obtienes acceso completo e inmediato a los siguientes componentes:
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {WHAT_YOU_GET.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FCEEF2] flex items-center justify-center mb-4">
                  {getItemIcon(idx)}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#D0748E] font-bold text-sm">✔</span>
                  <h3 className="font-bold text-[#2D2D2D] text-base sm:text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#D0748E] font-semibold">
                <span>Acceso inmediato</span>
                <span className="text-[#2D2D2D]">USD $5</span>
              </div>
            </div>
          ))}

          {/* Bonus Value Bento Dark Card */}
          <div className="bg-[#2D2D2D] text-white p-6 rounded-[28px] shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-[#F8C1D1] text-[#2D2D2D] text-xs font-bold rounded-full mb-4">
                Claridad en 5 minutos
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Diseñado para tu ritmo</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                Un microactivo enfocado para ahorrarte horas de información contradictoria y dispersa en internet.
              </p>
            </div>
            <button
              onClick={handleClick}
              id="whatget-card-cta"
              className="w-full bg-[#F8C1D1] hover:bg-white text-[#2D2D2D] text-xs sm:text-sm font-bold py-3 px-4 rounded-full transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Acceder Ahora por $5 USD</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Banner Bento */}
        <div className="bg-white rounded-[28px] p-6 border border-gray-100 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="text-left">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Inversión Única</p>
            <p className="text-xl font-bold text-[#2D2D2D]">USD $5 <span className="text-xs font-normal text-gray-500">(Sin suscripciones ni cobros extra)</span></p>
          </div>
          <button
            onClick={handleClick}
            id="whatget-bottom-cta"
            className="w-full sm:w-auto bg-[#2D2D2D] hover:bg-black text-white font-semibold text-sm px-6 py-3 rounded-full transition-all shadow-xs cursor-pointer"
          >
            Quiero Mi Escáner
          </button>
        </div>

      </div>
    </section>
  );
};
