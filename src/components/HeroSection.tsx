import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { TricolorStrip, WavyRibbons } from './BrandElements';
import { LOCATION_TEXT, WHATSAPP_URL } from '../data/ritmikaData';

export const HeroSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#FCF4E6]"
    >
      {/* Cintas onduladas grandes de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <WavyRibbons
          variant="hero"
          className="absolute -right-24 -top-12 w-[680px] sm:w-[920px] lg:w-[1120px] h-auto opacity-90"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna principal de mensaje */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-4">
              CONSULTORÍA ESTRATÉGICA
            </p>

            <h1 className="font-serif font-extrabold text-[40px] sm:text-5xl lg:text-[60px] leading-[1.06] tracking-tight text-[#2B3544]">
              Personas que crecen.{' '}
              <em className="italic font-extrabold text-[#D98A0B] block sm:inline">
                Empresas que avanzan.
              </em>
            </h1>

            <p className="mt-6 font-sans text-base sm:text-lg lg:text-[19px] leading-relaxed text-[#2B3544]/85 max-w-2xl">
              Capacitación, desarrollo organizacional y Recursos Humanos para empresas que quieren
              crecer con orden, claridad y equipos comprometidos.
            </p>

            {/* Botones de acción */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F29400] hover:bg-[#D98A0B] text-[#2B3544] font-sans font-bold text-sm sm:text-[15px] px-7 py-4 shadow-[0_10px_24px_rgba(242,148,0,0.28)] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B3544]"
              >
                <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Hablemos de los retos de tu equipo</span>
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2B3544] hover:bg-[#1E2631] text-[#FFFDF8] font-sans font-semibold text-sm sm:text-[15px] px-7 py-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F29400]"
              >
                <span>Conoce nuestros servicios</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-[#2B3544]/10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-[#2B3544]/75">
              <span>{LOCATION_TEXT}</span>
              <span aria-hidden="true">·</span>
              <span>PyMEs e industria automotriz</span>
              <span aria-hidden="true">·</span>
              <span>Intervenciones a la medida</span>
            </div>
          </motion.div>

          {/* Tarjeta editorial derecha estilo publicación Rítmika */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="bg-[#FFFDF8] rounded-2xl p-7 sm:p-8 shadow-[0_18px_45px_rgba(43,53,68,0.08)] border border-[#2B3544]/8 relative overflow-hidden">
              <p className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-3">
                NUESTRA BRÚJULA
              </p>
              <h2 className="font-serif font-extrabold text-2xl sm:text-[28px] leading-tight text-[#2B3544]">
                Crecer con orden{' '}
                <em className="italic font-extrabold text-[#D98A0B]">empieza en las personas.</em>
              </h2>

              <ol className="mt-6 space-y-4">
                <li className="flex items-baseline gap-4 pb-3.5 border-b border-[#2B3544]/8">
                  <span className="font-serif font-extrabold text-2xl text-[#F29400] tabular-nums shrink-0">
                    1
                  </span>
                  <span className="font-sans text-sm sm:text-[15px] text-[#2B3544] leading-snug">
                    <strong className="font-semibold">Diagnóstico real</strong> antes de proponer
                    talleres genéricos.
                  </span>
                </li>
                <li className="flex items-baseline gap-4 pb-3.5 border-b border-[#2B3544]/8">
                  <span className="font-serif font-extrabold text-2xl text-[#2E7D32] tabular-nums shrink-0">
                    2
                  </span>
                  <span className="font-sans text-sm sm:text-[15px] text-[#2B3544] leading-snug">
                    <strong className="font-semibold">Líderes preparados</strong> para sostener
                    acuerdos y feedback.
                  </span>
                </li>
                <li className="flex items-baseline gap-4">
                  <span className="font-serif font-extrabold text-2xl text-[#D9381E] tabular-nums shrink-0">
                    3
                  </span>
                  <span className="font-sans text-sm sm:text-[15px] text-[#2B3544] leading-snug">
                    <strong className="font-semibold">Procesos claros de RH</strong>, clima y
                    selección en 14 días.
                  </span>
                </li>
              </ol>

              <div className="mt-7 pt-5 border-t border-[#2B3544]/10 flex items-center justify-between gap-4">
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#2B3544]/75">
                  Explora nuestro método
                </span>
                <a
                  href="#como-trabajamos"
                  aria-label="Ir a Cómo trabajamos"
                  className="w-11 h-11 rounded-full bg-[#D9381E] hover:bg-[#B82D16] text-[#FFFDF8] inline-flex items-center justify-center transition-transform duration-200 hover:scale-105 shrink-0"
                >
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <TricolorStrip />
    </section>
  );
};
