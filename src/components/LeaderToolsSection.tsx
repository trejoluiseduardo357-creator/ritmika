import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { LEADER_TOOLS } from '../data/ritmikaData';
import {
  RedCircleArrow,
  Reveal,
  SectionHeading,
  TricolorStrip,
} from './BrandElements';

interface LeaderToolsSectionProps {
  onApplyWithTeam: () => void;
}

export const LeaderToolsSection: React.FC<LeaderToolsSectionProps> = ({ onApplyWithTeam }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyGuide = async (toolId: string, title: string, steps: string[], quote?: string) => {
    const text = [
      title,
      ...steps.map((s, i) => `${i + 1}. ${s}`),
      quote ? `\n${quote}` : '',
      '\n— Rítmika Empresarial',
    ]
      .filter(Boolean)
      .join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(toolId);
      setTimeout(() => setCopiedId((prev) => (prev === toolId ? null : prev)), 2500);
    } catch {
      onApplyWithTeam();
    }
  };

  return (
    <section id="herramientas" className="relative overflow-hidden bg-[#2B3544]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="HERRAMIENTA PARA LÍDERES"
            titleBefore="El buen y el mal liderazgo"
            titleItalic="se ven en conductas."
            subtitle="Dos guías prácticas de nuestro repositorio editorial para que tus líderes las apliquen hoy mismo con sus equipos."
          />
        </Reveal>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {LEADER_TOOLS.map((tool, idx) => {
            const isCopied = copiedId === tool.id;
            const fullTitle = `${tool.titleStart} ${tool.titleItalic}`;

            return (
              <Reveal key={tool.id} delay={idx * 0.1} className="h-full">
                <article className="h-full bg-[#FFFDF8] rounded-2xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(12,18,28,0.28)] flex flex-col justify-between">
                  <div>
                    <p className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#D9381E] mb-3">
                      {tool.accentLabel}
                    </p>

                    <h3 className="font-serif font-extrabold text-2xl sm:text-3xl leading-[1.16] text-[#2B3544]">
                      {tool.titleStart}{' '}
                      <em className="italic font-extrabold text-[#D98A0B]">{tool.titleItalic}</em>
                    </h3>

                    <ol className="mt-8 space-y-5">
                      {tool.steps.map((step, stepIdx) => (
                        <li
                          key={step}
                          className="flex items-baseline gap-5 pb-4 border-b border-[#2B3544]/10 last:border-b-0 last:pb-0"
                        >
                          <span className="font-serif font-extrabold text-3xl sm:text-4xl text-[#F29400] tabular-nums leading-none shrink-0">
                            {stepIdx + 1}
                          </span>
                          <span className="font-sans font-semibold text-base sm:text-lg text-[#2B3544] leading-snug">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ol>

                    {tool.closingQuote && (
                      <p className="mt-7 pt-5 border-t border-[#2B3544]/10 font-serif italic font-bold text-lg sm:text-xl text-[#D98A0B]">
                        {tool.closingQuote}
                      </p>
                    )}
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#2B3544]/10 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        handleCopyGuide(tool.id, fullTitle, tool.steps, tool.closingQuote)
                      }
                      className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.16em] text-[#2B3544] hover:text-[#D9381E] transition-colors cursor-pointer"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 text-[#2E7D32]" aria-hidden="true" />
                          <span className="text-[#2E7D32]">Guía copiada al portapapeles</span>
                        </>
                      ) : (
                        <span>Copiar guía para tu equipo</span>
                      )}
                    </button>

                    <RedCircleArrow
                      size="sm"
                      label="Llevar esta herramienta a mi empresa"
                      onClick={onApplyWithTeam}
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <TricolorStrip onDark />
    </section>
  );
};
