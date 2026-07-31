import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/landingData';
import { handleHotmartCheckout } from '../config';
import { ClipboardList, PieChart, Sparkles, ArrowDown } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenCheckout?: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenCheckout }) => {
  const handleClick = onOpenCheckout || handleHotmartCheckout;
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <ClipboardList className="w-6 h-6 text-[#D0748E]" />;
      case 1:
        return <PieChart className="w-6 h-6 text-[#D0748E]" />;
      case 2:
        return <Sparkles className="w-6 h-6 text-[#D0748E]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D0748E]" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F9F9FB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D0748E] bg-[#FCEEF2] px-3.5 py-1 rounded-full border border-[#F8C1D1]">
            Paso a Paso
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2D2D2D] tracking-tight mt-4 mb-3">
            ¿Cómo funciona el proceso?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Tres pasos simples e intuitivos para obtener claridad sobre tu bienestar hoy mismo.
          </p>
        </div>

        {/* Steps Timeline (Bento Stack) */}
        <div className="space-y-4 relative max-w-2xl mx-auto">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <React.Fragment key={idx}>
              <div className="bg-white p-6 sm:p-8 rounded-[28px] border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative shadow-2xs">
                <div className="w-14 h-14 rounded-2xl bg-[#FCEEF2] border border-[#F8C1D1]/60 flex items-center justify-center shrink-0">
                  {getStepIcon(idx)}
                </div>

                <div className="flex-1">
                  <div className="inline-block px-3 py-0.5 bg-[#FCEEF2] text-[#D0748E] text-xs font-bold rounded-full mb-2 border border-[#F8C1D1]/60">
                    {stepItem.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-1">
                    {stepItem.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              </div>

              {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                <div className="flex justify-center py-0.5">
                  <div className="w-8 h-8 rounded-full bg-[#F8C1D1] text-[#2D2D2D] flex items-center justify-center">
                    <ArrowDown className="w-4 h-4 text-[#2D2D2D]" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={handleClick}
            id="howitworks-cta-btn"
            className="bg-[#2D2D2D] hover:bg-black text-white font-bold text-base px-8 py-4 rounded-full shadow-sm transition-all cursor-pointer"
          >
            Comenzar Paso 1 Ahora — USD $5
          </button>
        </div>

      </div>
    </section>
  );
};
