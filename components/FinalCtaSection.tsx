import React from 'react';
import { ArrowRight, Check, ShieldCheck, Lock, Sparkles, RefreshCcw } from 'lucide-react';
import { handleHotmartCheckout } from '../config';

interface FinalCtaSectionProps {
  onOpenCheckout?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenCheckout }) => {
  const handleClick = onOpenCheckout || handleHotmartCheckout;
  return (
    <section className="py-14 sm:py-20 bg-[#F9F9FB] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F8C1D1]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FCEEF2] border border-[#F8C1D1] text-xs font-bold text-[#D0748E] shadow-2xs mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#D0748E]" />
          <span>Acceso Inmediato • Menos de 5 Minutos</span>
        </div>

        {/* Título Final */}
        <h2 className="text-3xl sm:text-5xl font-bold text-[#2D2D2D] tracking-tight leading-tight mb-4">
          Comienza hoy a entender tu metabolismo.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
          Da el primer paso para dejar atrás la confusión y descubrir cuál de los cinco perfiles metabólicos refleja mejor tus sensaciones actuales.
        </p>

        {/* Main CTA Bento Box Card */}
        <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-sm border border-gray-100 max-w-xl mx-auto text-left">
          
          <div className="flex items-center justify-between border-b border-gray-100 pb-6 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Microactivo Digital</span>
              <h3 className="text-lg font-bold text-[#2D2D2D]">Escáner Inteligente™</h3>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-bold text-[#2D2D2D]">USD $5</span>
              <p className="text-[11px] text-[#D0748E] font-semibold">Pago único sin suscripción</p>
            </div>
          </div>

          <ul className="space-y-3 mb-8 text-xs sm:text-sm text-gray-700">
            <li className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-[#FCEEF2] text-[#D0748E] flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="font-medium">Evaluación interactiva completa de 10 preguntas</span>
            </li>
            <li className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-[#FCEEF2] text-[#D0748E] flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="font-medium">Clasificación clara entre los 5 perfiles metabólicos</span>
            </li>
            <li className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-[#FCEEF2] text-[#D0748E] flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="font-medium">Pautas de hábitos y estilo de vida para tu perfil</span>
            </li>
            <li className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-[#FCEEF2] text-[#D0748E] flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span className="font-medium">Envío instantáneo a tu correo electrónico</span>
            </li>
          </ul>

          <button
            onClick={handleClick}
            id="final-cta-btn"
            className="w-full bg-[#2D2D2D] hover:bg-black text-white font-bold text-base sm:text-lg py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Quiero Mi Escáner</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-6 flex items-center justify-center gap-3 text-xs text-gray-500 font-medium">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-gray-400" /> Pago seguro SSL
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D0748E]" /> Sin cargos ocultos
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <RefreshCcw className="w-3.5 h-3.5 text-gray-400" /> Acceso de por vida
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
