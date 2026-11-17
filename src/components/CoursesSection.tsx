import React, { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
import { COURSES } from '../data/ritmikaData';
import {
  Reveal,
  SectionHeading,
  TricolorStrip,
  WhatsAppPostBox,
} from './BrandElements';

interface CoursesSectionProps {
  onSelectCourse: (courseTitle: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourse }) => {
  const [selectedId, setSelectedId] = useState<string>(COURSES[0].id);
  const selectedCourse = COURSES.find((c) => c.id === selectedId) ?? COURSES[0];

  return (
    <section id="cursos" className="relative overflow-hidden bg-[#F29400]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            tone="orange"
            eyebrow="CATÁLOGO 2027"
            titleBefore="Elige entre"
            titleItalic="11 cursos"
            titleAfter="para tu equipo."
            subtitle="Programas diseñados para generar cambios observables en el puesto de trabajo."
          />
        </Reveal>

        {/* Chips interactivos de los 11 cursos */}
        <Reveal delay={0.08}>
          <div
            role="listbox"
            aria-label="Catálogo de 11 cursos"
            className="mt-10 flex flex-wrap gap-3"
          >
            {COURSES.map((course) => {
              const active = course.id === selectedId;
              return (
                <button
                  key={course.id}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => setSelectedId(course.id)}
                  className={`rounded-full px-5 py-3 font-sans text-sm sm:text-[15px] font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B3544] ${
                    active
                      ? 'bg-[#2B3544] text-[#FFFDF8] shadow-md -translate-y-0.5'
                      : 'bg-[#FFFDF8] text-[#2B3544] hover:bg-[#FCF4E6] shadow-sm'
                  }`}
                >
                  {course.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Tarjeta de detalle del curso seleccionado + nota de duración */}
        <Reveal delay={0.14}>
          <div className="mt-8 bg-[#FFFDF8] rounded-2xl p-6 sm:p-8 shadow-[0_14px_34px_rgba(43,53,68,0.12)] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-1.5">
                ENFOQUE DEL TALLER SELECCIONADO
              </p>
              <h3 className="font-serif font-extrabold text-2xl sm:text-[26px] text-[#2B3544]">
                {selectedCourse.title}
              </h3>
              <p className="mt-2 font-sans text-sm sm:text-base text-[#2B3544]/85 leading-relaxed">
                {selectedCourse.focus}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-4 shrink-0">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-[#2B3544]">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D98A0B]" aria-hidden="true" />
                  De 8 a 12 horas
                </span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#2E7D32]" aria-hidden="true" />
                  En tu empresa
                </span>
              </div>

              <button
                type="button"
                onClick={() => onSelectCourse(`Capacitación empresarial: ${selectedCourse.title}`)}
                className="rounded-full bg-[#2B3544] hover:bg-[#1E2631] text-[#FFFDF8] font-sans font-bold text-sm px-6 py-3 transition-colors cursor-pointer whitespace-nowrap"
              >
                Cotizar este curso
              </button>
            </div>
          </div>
        </Reveal>

        {/* Bloque azul de WhatsApp estilo post */}
        <Reveal delay={0.18} className="mt-8">
          <WhatsAppPostBox subtitle="Arma un programa a la medida de 8 a 12 horas, directamente en tu empresa." />
        </Reveal>
      </div>

      <TricolorStrip />
    </section>
  );
};
