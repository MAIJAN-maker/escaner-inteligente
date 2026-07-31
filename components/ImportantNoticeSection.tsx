import React from 'react';
import { ShieldCheck, Info, FileText } from 'lucide-react';

export const ImportantNoticeSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-[#F9F9FB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FCEEF2] rounded-[32px] p-6 sm:p-10 border border-[#F8C1D1] flex flex-col md:flex-row items-start gap-6 shadow-2xs">
          <div className="w-12 h-12 rounded-2xl bg-white text-[#D0748E] flex items-center justify-center shrink-0 shadow-2xs border border-white">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D0748E] bg-white px-3 py-0.5 rounded-full border border-[#F8C1D1]">
                Aviso Médico & Transparencia
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
              Información Importante Sobre Tu Salud
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <p className="font-semibold text-[#2D2D2D]">
                Este escáner es una herramienta educativa de autoconocimiento. No reemplaza el diagnóstico ni el tratamiento realizado por profesionales de la salud.
              </p>
              <p>
                Los resultados y recomendaciones incluidos en esta evaluación interactiva tienen como único fin proporcionar información general para fomentar el conocimiento personal y hábitos de estilo de vida saludables.
              </p>
              <p>
                Si tienes inquietudes médicas, síntomas severos o requieres tratamiento específico para la perimenopausia o menopausia, te aconsejamos consultar siempre con tu médico especialista o ginecólogo de confianza.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#F8C1D1]/60 flex items-center gap-2 text-xs text-gray-500">
              <FileText className="w-4 h-4 text-[#D0748E] shrink-0" />
              <span>Comprometidos con el rigor informativo y la divulgación responsable.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
