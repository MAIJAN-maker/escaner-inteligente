import React, { useState } from 'react';
import { SYMPTOMS_LIST } from '../data/landingData';
import { handleHotmartCheckout } from '../config';
import { 
  TrendingUp, 
  Target, 
  BatteryLow, 
  Moon, 
  Cookie, 
  RefreshCw, 
  CheckSquare, 
  Square,
  Info
} from 'lucide-react';

interface IdentifySectionProps {
  onOpenCheckout?: () => void;
}

export const IdentifySection: React.FC<IdentifySectionProps> = ({ onOpenCheckout }) => {
  const handleClick = onOpenCheckout || handleHotmartCheckout;
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['peso', 'grasa', 'cansancio']);
  const [activeInfoId, setActiveInfoId] = useState<string | null>(null);

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#D0748E]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#D0748E]" />;
      case 'BatteryLow':
        return <BatteryLow className="w-5 h-5 text-[#D0748E]" />;
      case 'Moon':
        return <Moon className="w-5 h-5 text-[#D0748E]" />;
      case 'Cookie':
        return <Cookie className="w-5 h-5 text-[#D0748E]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-[#D0748E]" />;
      default:
        return <Info className="w-5 h-5 text-[#D0748E]" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F9F9FB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Bento Main Wrapper */}
        <div className="bg-[#FCEEF2] rounded-[32px] p-6 sm:p-10 border border-[#F8C1D1]">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#D0748E] bg-white px-3.5 py-1 rounded-full border border-[#F8C1D1]">
              ¿Te identificas?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#2D2D2D] tracking-tight mt-4 mb-3">
              Señales Frecuentes en esta Etapa
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-normal">
              Selecciona las situaciones con las que te sientes identificada hoy para relacionarlas con tu perfil metabólico.
            </p>
          </div>

          {/* Symptom Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SYMPTOMS_LIST.map((symptom) => {
              const isChecked = selectedSymptoms.includes(symptom.id);
              const isInfoOpen = activeInfoId === symptom.id;

              return (
                <div
                  key={symptom.id}
                  onClick={() => toggleSymptom(symptom.id)}
                  className={`group relative p-5 rounded-[24px] border transition-all duration-200 cursor-pointer bg-white ${
                    isChecked
                      ? 'border-[#D0748E] shadow-sm ring-1 ring-[#D0748E]/40'
                      : 'border-white/80 hover:border-[#F8C1D1] shadow-2xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#FCEEF2] text-[#D0748E]">
                        {getIcon(symptom.icon)}
                      </div>
                      <span className="font-semibold text-[#2D2D2D] text-sm leading-snug">
                        {symptom.text}
                      </span>
                    </div>

                    <div className="text-[#D0748E] shrink-0 mt-0.5">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 fill-[#FCEEF2]" />
                      ) : (
                        <Square className="w-5 h-5 text-gray-300 group-hover:text-[#D0748E]" />
                      )}
                    </div>
                  </div>

                  {/* Info expansion button */}
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveInfoId(isInfoOpen ? null : symptom.id);
                      }}
                      className="text-[#D0748E] hover:text-[#2D2D2D] font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>{isInfoOpen ? 'Ocultar' : '¿Por qué ocurre?'}</span>
                    </button>
                    <span className="text-gray-400 text-[11px]">
                      {isChecked ? 'Seleccionado' : 'Toca para elegir'}
                    </span>
                  </div>

                  {/* Explanation text */}
                  {isInfoOpen && (
                    <div className="mt-3 p-3 bg-[#FCEEF2] rounded-xl text-xs text-gray-700 leading-relaxed border border-[#F8C1D1]/60 animate-fade-in">
                      {symptom.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Empathy Callout Bento Box */}
          <div className="mt-8 p-6 sm:p-8 bg-white rounded-[28px] border border-white shadow-xs text-center max-w-3xl mx-auto">
            <p className="text-[#2D2D2D] text-base sm:text-lg font-medium leading-relaxed">
              «No estás sola, ni es falta de voluntad. Durante la perimenopausia y menopausia, tu cuerpo reorganiza sus rutas hormonales. El primer paso es <span className="text-[#D0748E] font-bold underline underline-offset-4 decoration-[#F8C1D1]">identificar tu perfil metabólico</span>».
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleClick}
                id="identify-cta-btn"
                className="bg-[#2D2D2D] hover:bg-black text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all shadow-sm cursor-pointer"
              >
                Identificar Mi Perfil por USD $5
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
