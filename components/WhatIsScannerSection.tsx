import React, { useState } from 'react';
import { METABOLIC_PROFILES } from '../data/landingData';
import { handleHotmartCheckout } from '../config';
import { Flame, Activity, Zap, Moon, Dumbbell, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface WhatIsScannerSectionProps {
  onOpenCheckout?: () => void;
}

export const WhatIsScannerSection: React.FC<WhatIsScannerSectionProps> = ({ onOpenCheckout }) => {
  const handleClick = onOpenCheckout || handleHotmartCheckout;
  const [activeProfileId, setActiveProfileId] = useState<string>('inflamatorio');

  const getProfileIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Moon':
        return <Moon className="w-5 h-5" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  const activeProfile = METABOLIC_PROFILES.find((p) => p.id === activeProfileId) || METABOLIC_PROFILES[0];

  return (
    <section className="py-12 sm:py-16 bg-[#F9F9FB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D0748E] bg-[#FCEEF2] px-3.5 py-1 rounded-full border border-[#F8C1D1]">
            Metodología & Concepto
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2D2D2D] tracking-tight mt-4 mb-3">
            ¿Qué es el Escáner Inteligente?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Es una evaluación interactiva estructurada para ayudarte a identificar cuál de los <strong className="text-[#2D2D2D]">cinco perfiles metabólicos</strong> se aproxima a tu estado fisiológico actual.
          </p>
        </div>

        {/* Clear Medical Clarification Badge */}
        <div className="mb-8 p-4 sm:p-5 rounded-[24px] bg-[#FCEEF2] border border-[#F8C1D1] text-[#2D2D2D] flex items-start gap-3.5 max-w-3xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-[#D0748E] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <p className="font-bold text-[#2D2D2D] mb-0.5">Nota educativa importante:</p>
            <p className="text-gray-700">
              El escáner es una <strong className="font-semibold text-[#2D2D2D]">herramienta pedagógica</strong> de autoconocimiento. NO es un diagnóstico médico ni reemplaza la atención médica profesional.
            </p>
          </div>
        </div>

        {/* The 5 Profiles Exploration Bento Dark Container */}
        <div className="bg-[#2D2D2D] text-white rounded-[32px] p-6 sm:p-10 shadow-md">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-white/50 block mb-2 italic">
              Los 5 Perfiles de Bloqueo
            </span>
            <h3 className="text-xl sm:text-3xl font-bold text-white mb-2">
              Perfiles Metabólicos Evaluados
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
              Selecciona cualquier perfil para explorar sus señales distintivas y su enfoque principal.
            </p>
          </div>

          {/* Profile Selector Tabs (Bento Style) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {METABOLIC_PROFILES.map((profile) => {
              const isActive = profile.id === activeProfileId;
              return (
                <button
                  key={profile.id}
                  onClick={() => setActiveProfileId(profile.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#F8C1D1] text-[#2D2D2D] shadow-sm'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/10'
                  }`}
                >
                  {getProfileIcon(profile.iconName)}
                  <span>{profile.name}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Profile Detail Card */}
          <div className="bg-white/10 border border-white/15 rounded-[24px] p-6 sm:p-8 animate-fade-in backdrop-blur-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#F8C1D1] text-[#2D2D2D] flex items-center justify-center shrink-0 font-bold">
                  {getProfileIcon(activeProfile.iconName)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{activeProfile.name}</h4>
                  <p className="text-xs sm:text-sm text-[#F8C1D1] font-medium">{activeProfile.subtitle}</p>
                </div>
              </div>
              <span className="self-start md:self-auto bg-white/20 text-white text-xs px-3.5 py-1 rounded-full font-semibold border border-white/20">
                Perfil {METABOLIC_PROFILES.findIndex((p) => p.id === activeProfile.id) + 1} de 5
              </span>
            </div>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
              {activeProfile.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white/10 p-5 rounded-[20px] border border-white/10">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#F8C1D1] mb-3">
                  Señales Frecuentes
                </h5>
                <ul className="space-y-2">
                  {activeProfile.keySigns.map((sign, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#F8C1D1] shrink-0" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 p-5 rounded-[20px] border border-white/10 flex flex-col justify-between">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">
                    Área de Enfoque Recomendada
                  </h5>
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                    {activeProfile.focusArea}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span>Evaluación en el escáner</span>
                  <span className="text-[#F8C1D1] font-bold">USD $5</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleClick}
              id="whatis-cta-btn"
              className="bg-[#F8C1D1] hover:bg-white text-[#2D2D2D] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-sm transition-all cursor-pointer"
            >
              Descubrir Mi Perfil Metabólico por USD $5
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
