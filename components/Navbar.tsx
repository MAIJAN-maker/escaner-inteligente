import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { handleHotmartCheckout } from '../config';

interface NavbarProps {
  onOpenCheckout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const handleClick = onOpenCheckout || handleHotmartCheckout;

  return (
    <header className="sticky top-0 z-40 bg-[#F9F9FB]/90 backdrop-blur-md border-b border-gray-200/60 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#F8C1D1] text-[#2D2D2D] flex items-center justify-center font-bold shadow-xs">
            <Sparkles className="w-4 h-4 text-[#2D2D2D]" />
          </div>
          <div>
            <span className="font-semibold text-[#2D2D2D] tracking-tight text-sm sm:text-base">
              Escáner Inteligente<span className="text-[#D0748E] font-normal text-xs ml-0.5">™</span>
            </span>
            <span className="hidden md:inline-block text-xs text-gray-400 ml-2 border-l border-gray-200 pl-2">
              Evaluación para Mujeres 40-60
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-[#FCEEF2] border border-[#F8C1D1]/60 rounded-full text-xs text-[#D0748E] font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D0748E]" />
            <span>USD $5 • Un solo pago</span>
          </div>

          <button
            onClick={handleClick}
            id="nav-cta-btn"
            className="bg-[#2D2D2D] hover:bg-black text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <span>Obtener Escáner</span>
            <span className="bg-[#F8C1D1] text-[#2D2D2D] text-[10px] px-1.5 py-0.5 rounded-full font-bold">$5</span>
          </button>
        </div>
      </div>
    </header>
  );
};
