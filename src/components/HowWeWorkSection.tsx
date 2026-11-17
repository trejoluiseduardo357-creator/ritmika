import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CLIENT_JOURNEY } from '../data/ritmikaData';
import { Reveal, SectionHeading, TricolorStrip, WavyRibbons } from './BrandElements';

export const HowWeWorkSection: React.FC = () => {
  return (
    <section id="como-trabajamos" className="relative overflow-hidden bg-[#FFFAF2]">
      <WavyRibbons
        variant="bottomLeft"
        className="absolute -bottom-8 -left-10 w-64 sm:w-80 h-auto opacity-70"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="CÓMO TRABAJAMOS"
            titleBefore="Recorrido"
            titleItalic="del cliente."
            subtitle="Un acompañamiento estructurado de principio a fin para que cada iniciativa se traduzca en resultados observables."
          />
        </Reveal>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {CLIENT_JOURNEY.map((step, idx) => (
            <Reveal key={step.number} delay={idx * 0.07} className="h-full">
              <article className="h-full bg-[#FFFDF8] rounded-2xl p-6 sm:p-7 shadow-[0_10px_28px_rgba(43,53,68,0.06)] border border-[#2B3544]/8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-serif font-extrabold text-3xl sm:text-4xl text-[#F29400] tabular-nums leading-none">
                      {step.number}
                    </span>
                    {idx < CLIENT_JOURNEY.length - 1 && (
                      <ArrowRight
                        className="hidden lg:block w-4 h-4 text-[#2B3544]/35"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <h3 className="font-serif font-extrabold text-lg sm:text-xl text-[#2B3544] leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 font-sans text-sm text-[#2B3544]/85 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Frase en itálica naranja */}
        <Reveal delay={0.2}>
          <blockquote className="mt-12 sm:mt-14 max-w-4xl mx-auto text-center px-4">
            <p className="font-serif italic font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-[1.25] text-[#D98A0B]">
              “Convertimos la conciencia en acciones concretas, medibles y sostenibles en el tiempo.”
            </p>
          </blockquote>
        </Reveal>
      </div>

      <TricolorStrip />
    </section>
  );
};
