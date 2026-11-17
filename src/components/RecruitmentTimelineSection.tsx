import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import { RECRUITMENT_TIMELINE } from '../data/ritmikaData';
import { Reveal, SectionHeading, TricolorStrip } from './BrandElements';

export const RecruitmentTimelineSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="reclutamiento" className="relative overflow-hidden bg-[#FCF4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="RECLUTAMIENTO Y SELECCIÓN"
            titleBefore="Proceso de reclutamiento"
            titleItalic="en 14 días."
            subtitle="Velocidad con rigor metodológico: evaluamos competencias reales para reducir la rotación desde la contratación."
          />
        </Reveal>

        {/* Línea de tiempo ondulada en desktop */}
        <div className="mt-14 relative">
          {/* SVG onda conectora horizontal para pantallas lg+ */}
          <svg
            viewBox="0 0 1200 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="hidden lg:block w-full h-24 mb-[-4.5rem] pointer-events-none select-none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M60 55 C 180 12, 240 98, 360 55 C 480 12, 540 98, 660 55 C 780 12, 840 98, 960 55 C 1040 28, 1100 72, 1140 55"
              stroke="#2B3544"
              strokeOpacity="0.22"
              strokeWidth="3.5"
              strokeDasharray="8 8"
              strokeLinecap="round"
              initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {RECRUITMENT_TIMELINE.map((stage, idx) => (
              <Reveal key={stage.number} delay={idx * 0.08} className="h-full">
                <article className="h-full bg-[#FFFDF8] rounded-2xl p-6 sm:p-7 shadow-[0_10px_28px_rgba(43,53,68,0.06)] border border-[#2B3544]/8 flex flex-col">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-full text-[#FFFDF8] font-serif font-extrabold text-xl flex items-center justify-center shadow-sm tabular-nums shrink-0"
                      style={{ backgroundColor: stage.color }}
                    >
                      {stage.number}
                    </div>
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#D9381E] whitespace-nowrap">
                      {stage.days}
                    </span>
                  </div>

                  <h3 className="font-serif font-extrabold text-lg sm:text-xl text-[#2B3544] leading-snug">
                    {stage.title}
                  </h3>

                  <p className="mt-2.5 font-sans text-sm text-[#2B3544]/85 leading-relaxed">
                    {stage.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Garantía y seguimiento */}
        <Reveal delay={0.2}>
          <div className="mt-10 bg-[#FFFDF8] rounded-2xl px-6 py-5 sm:px-8 sm:py-6 border border-[#2B3544]/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#2E7D32]/12 text-[#2E7D32] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <p className="font-sans text-sm sm:text-[15px] text-[#2B3544]">
                <strong className="font-bold">Respaldo post-contratación:</strong> 3 seguimientos
                mensuales con reporte ejecutivo y{' '}
                <strong className="font-bold text-[#2E7D32]">
                  garantía de 90 días con 1 reemplazo sin costo de honorarios.
                </strong>
              </p>
            </div>
            <span className="font-sans text-xs font-semibold text-[#2B3544]/70 whitespace-nowrap">
              Terna o dupla con análisis comparativo · Psicometría · Referencias
            </span>
          </div>
        </Reveal>
      </div>

      <TricolorStrip />
    </section>
  );
};
