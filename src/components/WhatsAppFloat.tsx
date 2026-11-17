import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../data/ritmikaData';

export const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp al 477 397 0244"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex items-center gap-2.5 rounded-full bg-[#2E7D32] hover:bg-[#256628] text-[#FFFDF8] shadow-[0_10px_28px_rgba(43,53,68,0.28)] px-3.5 py-3.5 sm:px-5 sm:py-3.5 transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F29400]"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline font-sans font-bold text-sm whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
};
