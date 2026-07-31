import React from 'react';
import { ArrowRight, Clock, Shield, Sparkles, Activity, FileText } from 'lucide-react';
import { handleHotmartCheckout } from '../config';

interface HeroSectionProps {
  onOpenCheckout?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  const handleClick = onOpenCheckout || handleHotmartCheckout;

  return (
    <section className="relative bg-[#F9F9FB] pt-10 pb-12 sm:pt-16 sm:pb-20 overflow-hidden">
      {/* Background soft glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F8C1D1]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Bento Hero Layout */}
        <div className="bg-white rounded-[32px] p-8 sm:p-12 md:p-14 border border-gray-100 shadow-sm text-left relative overflow-hidden">
          
          <div className="max-w-3xl">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCEEF2] border border-[#F8C1D1]/60 mb-6 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-[#D0748E]"></span>
              <span className="text-xs sm:text-sm font-semibold text-[#D0748E]">
                Microactivo Digital • Perimenopausia y Menopausia
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#2D2D2D] leading-[1.12] mb-6">
              ¿Sientes que tu cuerpo cambió y <span className="text-[#D0748E]">no sabes por qué?</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-xl text-gray-600 font-normal leading-relaxed mb-8">
              En solo 5 minutos descubre cuál de los cinco perfiles metabólicos podría estar frenando tu bienestar durante la perimenopausia o menopausia.
            </p>

            {/* Action Area */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <button
                onClick={handleClick}
                id="hero-main-cta"
                className="bg-[#2D2D2D] hover:bg-black text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Quiero Descubrir Mi Perfil</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Price Tag Badge */}
              <div className="flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FCEEF2] rounded-full text-[#D0748E] border border-[#F8C1D1]">
                <span className="text-xs uppercase tracking-widest text-gray-500 font-bold leading-none">Acceso Inmediato</span>
                <span className="text-lg font-bold text-[#2D2D2D]">USD $5</span>
              </div>
            </div>

            {/* Debajo del botón */}
            <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#D0748E]" /> Sin suscripciones
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D0748E]" /> Acceso inmediato
              </span>
            </div>
          </div>

        </div>

        {/* Bento Secondary Preview Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FCEEF2] text-[#D0748E] flex items-center justify-center mb-3">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#2D2D2D] text-sm sm:text-base mb-1">5 Perfiles Metabólicos</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Evaluación integral de cortisol, inflamación, masa muscular, insulina y patrón de sueño.
              </p>
            </div>
            <span className="mt-4 text-[11px] font-bold text-[#D0748E] uppercase tracking-wider">
              En menos de 5 minutos
            </span>
          </div>

          <div className="bg-[#FCEEF2] p-6 rounded-[28px] border border-[#F8C1D1] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white text-[#D0748E] flex items-center justify-center mb-3 shadow-2xs">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#2D2D2D] text-sm sm:text-base mb-1">Resultado Explicado</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Sin tecnicismos ni modismos médicos indescifrables. Lenguaje 100% empático y didáctico.
              </p>
            </div>
            <span className="mt-4 text-[11px] font-bold text-[#D0748E] uppercase tracking-wider">
              Claridad total
            </span>
          </div>

          <div className="bg-[#2D2D2D] text-white p-6 rounded-[28px] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/10 text-[#F8C1D1] flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-sm sm:text-base mb-1">Recomendaciones Iniciales</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Pautas prácticas sobre estilo de vida para poner en marcha hoy mismo.
              </p>
            </div>
            <button
              onClick={handleClick}
              id="hero-bento-cta"
              className="mt-4 text-xs font-semibold bg-[#F8C1D1] text-[#2D2D2D] px-4 py-2 rounded-full hover:bg-white transition-colors cursor-pointer self-start"
            >
              Comenzar por USD $5
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
