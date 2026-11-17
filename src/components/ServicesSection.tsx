import React from 'react';
import {
  Award,
  Calendar,
  CheckCircle2,
  ClipboardList,
  Compass,
  Layers,
  Presentation,
  ShieldCheck,
  UserCheck,
  Users,
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/ritmikaData';
import {
  RedCircleArrow,
  Reveal,
  SectionHeading,
  TricolorStrip,
  WavyRibbons,
} from './BrandElements';

interface ServicesSectionProps {
  onSelectService: (serviceLabel: string) => void;
}

const renderServiceIcon = (name: ServiceItem['iconName'], color: string) => {
  const props = { className: 'w-6 h-6', style: { color }, strokeWidth: 1.9, 'aria-hidden': true as const };
  switch (name) {
    case 'presentation':
      return <Presentation {...props} />;
    case 'compass':
      return <Compass {...props} />;
    case 'award':
      return <Award {...props} />;
    case 'clipboard':
      return <ClipboardList {...props} />;
    case 'calendar':
      return <Calendar {...props} />;
    case 'users':
      return <Users {...props} />;
    case 'userCheck':
      return <UserCheck {...props} />;
    case 'layers':
      return <Layers {...props} />;
    case 'shieldCheck':
      return <ShieldCheck {...props} />;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="servicios" className="relative overflow-hidden bg-[#FFFAF2]">
      {/* Listones en esquina superior derecha */}
      <WavyRibbons
        variant="topRight"
        className="absolute -top-6 -right-8 w-64 sm:w-80 h-auto opacity-70"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="LO QUE HACEMOS"
            titleBefore="Soluciones para"
            titleItalic="cada etapa de tu empresa."
            subtitle="Consultoría exclusiva para PyMEs: acompañamos desde intervenciones puntuales de formación hasta la estructuración integral de tu área de Recursos Humanos."
          />
        </Reveal>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const isFeaturedWide = service.id === 'reclutamiento';

            return (
              <Reveal
                key={service.id}
                delay={Math.min(idx * 0.04, 0.28)}
                className={isFeaturedWide ? 'md:col-span-2 lg:col-span-2' : ''}
              >
                <article className="h-full bg-[#FFFDF8] rounded-2xl p-7 sm:p-8 shadow-[0_10px_28px_rgba(43,53,68,0.06)] border border-[#2B3544]/8 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${service.accentColor}14` }}
                      >
                        {renderServiceIcon(service.iconName, service.accentColor)}
                      </div>
                      <span className="font-serif font-extrabold text-xl text-[#D98A0B]/70 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="font-serif font-extrabold text-xl sm:text-2xl text-[#2B3544] leading-snug">
                      {service.title}
                    </h3>

                    {service.italicLead && (
                      <p className="mt-2 font-serif italic font-bold text-base sm:text-lg text-[#D98A0B]">
                        {service.italicLead}
                      </p>
                    )}

                    <p className="mt-3 font-sans text-sm sm:text-[15px] leading-relaxed text-[#2B3544]/85">
                      {service.description}
                    </p>

                    {service.highlights && service.highlights.length > 0 && (
                      <ul className="mt-5 pt-4 border-t border-[#2B3544]/10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 font-sans text-sm font-semibold text-[#2B3544]"
                          >
                            <CheckCircle2
                              className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-7 pt-4 border-t border-[#2B3544]/8 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="font-sans text-xs font-bold uppercase tracking-[0.14em] text-[#2B3544] hover:text-[#D9381E] transition-colors cursor-pointer text-left"
                    >
                      Solicitar información
                    </button>
                    <RedCircleArrow
                      size="sm"
                      label={`Solicitar información sobre ${service.title}`}
                      onClick={() => onSelectService(service.title)}
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <TricolorStrip />
    </section>
  );
};
