import React from 'react';
import { TEAM_MEMBERS } from '../data/ritmikaData';
import { Reveal, SectionHeading, TricolorStrip } from './BrandElements';

interface AvatarRingProps {
  initials: string;
  name: string;
}

const MulticolorAvatarPlaceholder: React.FC<AvatarRingProps> = ({ initials, name }) => {
  return (
    <div
      className="relative w-28 h-28 mx-auto flex items-center justify-center"
      role="img"
      aria-label={`Avatar editorial de ${name}`}
    >
      {/* Anillo de cinta multicolor SVG */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {/* Naranja */}
        <path
          d="M60 6 A54 54 0 0 1 111.3 43.3"
          stroke="#F29400"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Verde */}
        <path
          d="M111.3 43.3 A54 54 0 0 1 91.7 103.7"
          stroke="#2E7D32"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Rojo */}
        <path
          d="M91.7 103.7 A54 54 0 0 1 28.3 103.7"
          stroke="#D9381E"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Azul pizarra */}
        <path
          d="M28.3 103.7 A54 54 0 0 1 8.7 43.3"
          stroke="#2B3544"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Morado */}
        <path
          d="M8.7 43.3 A54 54 0 0 1 60 6"
          stroke="#7B3F8D"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Anillo interior ondulado sutil */}
        <circle
          cx="60"
          cy="60"
          r="46"
          stroke="#2B3544"
          strokeOpacity="0.1"
          strokeWidth="1.2"
          strokeDasharray="3 4"
        />
      </svg>

      {/* Círculo interior editorial */}
      <div className="w-[88px] h-[88px] rounded-full bg-[#FCF4E6] border border-[#2B3544]/10 flex flex-col items-center justify-center shadow-inner">
        <span className="font-serif font-extrabold text-2xl text-[#2B3544] tracking-tight">
          {initials}
        </span>
      </div>
    </div>
  );
};

export const TeamSection: React.FC = () => {
  return (
    <section id="equipo" className="relative overflow-hidden bg-[#FCF4E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="NUESTRO EQUIPO"
            titleBefore="Consultoría cercana,"
            titleItalic="experiencia probada."
            subtitle="Combinamos trayectoria en la industria automotriz, psicología organizacional y sistemas de gestión para PyMEs."
          />
        </Reveal>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-7">
          {TEAM_MEMBERS.map((member, idx) => (
            <Reveal key={member.id} delay={idx * 0.08} className="h-full">
              <article className="h-full bg-[#FFFDF8] rounded-2xl p-8 shadow-[0_12px_32px_rgba(43,53,68,0.07)] border border-[#2B3544]/8 flex flex-col text-center">
                <MulticolorAvatarPlaceholder initials={member.initials} name={member.name} />

                <h3 className="mt-6 font-serif font-extrabold text-2xl text-[#2B3544]">
                  {member.name}
                </h3>

                <p className="mt-1.5 font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#D9381E]">
                  {member.role}
                </p>

                <p className="mt-4 font-sans text-sm sm:text-[15px] leading-relaxed text-[#2B3544]/85 flex-1">
                  {member.bio}
                </p>

                <div className="mt-6 pt-4 border-t border-[#2B3544]/10 font-sans text-xs font-medium text-[#2B3544]/75">
                  {member.specialties.join(' · ')}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <TricolorStrip />
    </section>
  );
};
