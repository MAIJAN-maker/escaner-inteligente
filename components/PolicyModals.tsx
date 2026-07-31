import React from 'react';
import { ModalType } from '../types';
import { X, Shield, FileText, Mail, AlertTriangle } from 'lucide-react';

interface PolicyModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export const PolicyModals: React.FC<PolicyModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal || activeModal === 'checkout') return null;

  const renderContent = () => {
    switch (activeModal) {
      case 'privacy':
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-[#D0748E]" />
              <h3 className="text-xl font-bold text-[#2D2D2D]">Política de Privacidad</h3>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                En <strong>Escáner Inteligente™</strong>, nos tomamos muy en serio la privacidad y protección de datos de nuestras usuarias.
              </p>
              <h4 className="font-bold text-[#2D2D2D]">1. Recopilación de Información</h4>
              <p>
                Solo solicitamos tu dirección de correo electrónico al adquirir el microactivo digital de $5 USD con el fin exclusivo de enviarle el acceso al escáner y la confirmación de la orden.
              </p>
              <h4 className="font-bold text-[#2D2D2D]">2. Uso de Datos</h4>
              <p>
                No vendemos, alquilamos ni compartimos tus datos personales con terceros para fines comerciales o publicitarios.
              </p>
              <h4 className="font-bold text-[#2D2D2D]">3. Seguridad de Pagos</h4>
              <p>
                Todos los pagos son procesados a través de pasarelas de pago cifradas con encriptación SSL de 256 bits. No almacenamos datos de tarjetas de crédito.
              </p>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-[#D0748E]" />
              <h3 className="text-xl font-bold text-[#2D2D2D]">Términos y Condiciones</h3>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                Al acceder y adquirir el <strong>Escáner Inteligente de Bloqueos Metabólicos™</strong> (USD $5), aceptas los siguientes términos de servicio:
              </p>
              <h4 className="font-bold text-[#2D2D2D]">1. Carácter Educativo</h4>
              <p>
                El escáner es un producto digital de contenido educativo e informativo. No constituye asesoramiento profesional ni médico.
              </p>
              <h4 className="font-bold text-[#2D2D2D]">2. Tipo de Cargo</h4>
              <p>
                La compra de USD $5 representa un único pago final. No existen renovaciones automáticas ni suscripciones ocultas.
              </p>
              <h4 className="font-bold text-[#2D2D2D]">3. Licencia de Uso</h4>
              <p>
                Se otorga una licencia personal, no transferible y no exclusiva para acceder al informe y recomendaciones interactivas para tu propio uso personal.
              </p>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-[#D0748E]" />
              <h3 className="text-xl font-bold text-[#2D2D2D]">Contacto y Soporte</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              ¿Tienes alguna duda sobre tu acceso o necesitas ayuda? Estamos disponibles para asistirte con amabilidad y rapidez.
            </p>
            <div className="bg-[#FCEEF2] p-4 rounded-[20px] border border-[#F8C1D1] space-y-2 text-xs sm:text-sm text-gray-700">
              <p className="flex justify-between">
                <span className="font-bold text-[#2D2D2D]">Correo de Atención:</span>
                <span className="text-[#D0748E] font-bold">soporte@escanermetabolico.com</span>
              </p>
              <p className="flex justify-between">
                <span className="font-bold text-[#2D2D2D]">Tiempo de respuesta:</span>
                <span className="text-gray-600">Menos de 24 horas laborables</span>
              </p>
              <p className="flex justify-between">
                <span className="font-bold text-[#2D2D2D]">Horario:</span>
                <span className="text-gray-600">Lunes a Viernes (9:00 - 18:00 EST)</span>
              </p>
            </div>
          </div>
        );

      case 'disclaimer':
        return (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-[#D0748E]" />
              <h3 className="text-xl font-bold text-[#2D2D2D]">Descargo de Responsabilidad Médica</h3>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p className="p-3 bg-[#FCEEF2] text-[#2D2D2D] rounded-[16px] border border-[#F8C1D1] font-semibold">
                Este escáner NO es un diagnóstico médico ni reemplaza la opinión de un profesional de la salud calificado.
              </p>
              <p>
                Toda la información presentada en la evaluación interactiva, los perfiles metabólicos y las recomendaciones iniciales tiene como objetivo único brindar orientación educativa sobre hábitos saludables durante la perimenopausia y menopausia.
              </p>
              <p>
                Ante cualquier síntoma clínico, malestar persistente o duda sobre tu salud, consulta siempre a tu médico o especialista ginecológico.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xs animate-fade-in">
      <div 
        className="bg-white rounded-[32px] max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {renderContent()}

        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#2D2D2D] hover:bg-black text-white font-bold text-xs py-2.5 px-6 rounded-full transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
