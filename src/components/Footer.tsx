import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import {
  EMAIL_ADDRESS,
  INSTAGRAM_URL,
  LOCATION_TEXT,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
} from '../data/ritmikaData';
import { RitmikaLogo, TricolorStrip } from './BrandElements';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2B3544] text-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <RitmikaLogo variant="dark" />
            <p className="mt-4 font-sans text-sm text-[#D5DCE4]">
              Rítmika Empresarial · Consultoría exclusiva para PyMEs
            </p>
            <p className="mt-1 font-sans text-xs text-[#D5DCE4]/75">
              {LOCATION_TEXT} · {PHONE_DISPLAY} · {EMAIL_ADDRESS}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <nav aria-label="Enlaces del pie de página" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#D5DCE4]">
              <a href="#servicios" className="hover:text-[#F29400] transition-colors">
                Servicios
              </a>
              <a href="#cursos" className="hover:text-[#F29400] transition-colors">
                Cursos
              </a>
              <a href="#como-trabajamos" className="hover:text-[#F29400] transition-colors">
                Cómo trabajamos
              </a>
              <a href="#equipo" className="hover:text-[#F29400] transition-colors">
                Equipo
              </a>
              <a href="#contacto" className="hover:text-[#F29400] transition-colors">
                Contacto
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Rítmika Empresarial"
                className="w-10 h-10 rounded-full bg-[#FFFDF8]/10 hover:bg-[#F29400] hover:text-[#2B3544] text-[#FFFDF8] inline-flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Rítmika Empresarial"
                className="w-10 h-10 rounded-full bg-[#FFFDF8]/10 hover:bg-[#2E7D32] text-[#FFFDF8] inline-flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={PHONE_HREF}
                className="sr-only"
              >
                Llamar a {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#FFFDF8]/12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#D5DCE4]/75">
          <p>© 2026 Rítmika Empresarial. Todos los derechos reservados.</p>
          <p className="font-serif italic text-sm text-[#F29400]">
            Personas que crecen. Empresas que avanzan.
          </p>
        </div>
      </div>

      <TricolorStrip onDark />
    </footer>
  );
};
