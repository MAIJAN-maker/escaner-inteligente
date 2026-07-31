import React from 'react';
import { ModalType } from '../types';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-[#2D2D2D] text-gray-400 py-12 text-xs border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800">
          
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F8C1D1] text-[#2D2D2D] flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4 text-[#2D2D2D]" />
            </div>
            <span className="text-white font-bold text-sm tracking-tight">
              Escáner Inteligente de Bloqueos Metabólicos™
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300 font-medium">
            <button
              onClick={() => onOpenModal('privacy')}
              className="hover:text-[#F8C1D1] transition-colors cursor-pointer"
            >
              Política de privacidad
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenModal('terms')}
              className="hover:text-[#F8C1D1] transition-colors cursor-pointer"
            >
              Términos y condiciones
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenModal('contact')}
              className="hover:text-[#F8C1D1] transition-colors cursor-pointer"
            >
              Contacto
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenModal('disclaimer')}
              className="hover:text-white transition-colors cursor-pointer text-[#F8C1D1]"
            >
              Aviso Médico
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Escáner Inteligente de Bloqueos Metabólicos™. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#F8C1D1]" />
            <span>Transparencia y Privacidad Garantizadas</span>
          </div>
        </div>

        <div className="mt-6 text-[11px] text-gray-500 text-center leading-relaxed max-w-3xl mx-auto">
          Descargo de responsabilidad: Las informaciones, herramientas y evaluaciones proporcionadas en este sitio web tienen fines estrictamente informativos y educativos. No constituyen asesoramiento médico, diagnóstico ni tratamiento profesional.
        </div>
      </div>
    </footer>
  );
};
