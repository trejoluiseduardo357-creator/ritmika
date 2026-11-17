import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER_DISPLAY, WHATSAPP_URL } from '../data/ritmikaData';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const RitmikaLogo: React.FC<LogoProps> = ({ variant = 'light', className = '' }) => {
  const isDark = variant === 'dark';
  const mainText = isDark ? '#FFFDF8' : '#2B3544';
  const subText = isDark ? '#D5DCE4' : '#2B3544';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div
        className={
          isDark
            ? 'inline-flex items-center justify-center rounded-lg bg-[#FFFDF8] px-1.5 py-1 shrink-0'
            : 'inline-flex items-center justify-center shrink-0'
        }
      >
        <img
          src={`${import.meta.env.BASE_URL}logo-ritmika.png`}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className={`h-[44px] w-auto object-contain shrink-0 ${
            isDark ? '' : 'mix-blend-multiply'
          }`}
        />
      </div>

      <div className="flex flex-col leading-none">
        <span
          className="font-serif font-extrabold text-[22px] tracking-[0.04em] whitespace-nowrap"
          style={{ color: mainText }}
        >
          RÍTMIKA
        </span>
        <span
          className="font-sans font-semibold text-[9px] tracking-[0.28em] mt-1 whitespace-nowrap"
          style={{ color: subText }}
        >
          EMPRESARIAL
        </span>
      </div>
    </div>
  );
};

interface TricolorStripProps {
  onDark?: boolean;
}

export const TricolorStrip: React.FC<TricolorStripProps> = ({ onDark = false }) => {
  return (
    <div
      className="w-full h-[6px] grid grid-cols-4 overflow-hidden"
      aria-hidden="true"
    >
      <div className="bg-[#F29400]" />
      <div className="bg-[#2E7D32]" />
      <div className="bg-[#D9381E]" />
      <div className={onDark ? 'bg-[#45546B]' : 'bg-[#2B3544]'} />
    </div>
  );
};

interface WavyRibbonsProps {
  variant?: 'hero' | 'topRight' | 'bottomLeft' | 'topLeft';
  className?: string;
}

export const WavyRibbons: React.FC<WavyRibbonsProps> = ({
  variant = 'topRight',
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const transition = (delay: number) =>
    shouldReduceMotion
      ? { duration: 0 }
      : {
          pathLength: { duration: 1.25, delay, ease: [0.16, 1, 0.3, 1] as const },
          opacity: { duration: 0.4, delay },
        };

  if (variant === 'hero') {
    return (
      <svg
        viewBox="0 0 900 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={`pointer-events-none select-none ${className}`}
      >
        <motion.path
          d="M-60 440C140 310 260 480 450 310C640 140 730 220 960 45"
          stroke="#F29400"
          strokeWidth="12"
          strokeLinecap="round"
          strokeOpacity="0.22"
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={transition(0.05)}
        />
        <motion.path
          d="M-40 480C160 350 280 520 470 350C660 180 750 260 980 85"
          stroke="#2E7D32"
          strokeWidth="10"
          strokeLinecap="round"
          strokeOpacity="0.18"
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={transition(0.18)}
        />
        <motion.path
          d="M-20 520C180 390 300 560 490 390C680 220 770 300 1000 125"
          stroke="#D9381E"
          strokeWidth="8"
          strokeLinecap="round"
          strokeOpacity="0.18"
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={transition(0.3)}
        />
      </svg>
    );
  }

  if (variant === 'bottomLeft') {
    return (
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={`pointer-events-none select-none ${className}`}
      >
        <motion.path
          d="M-20 40C55 75 95 25 165 95C225 155 260 140 315 215"
          stroke="#F29400"
          strokeWidth="7"
          strokeLinecap="round"
          strokeOpacity="0.65"
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={transition(0.05)}
        />
        <motion.path
          d="M-30 68C45 103 85 53 155 123C215 183 250 168 305 243"
          stroke="#2E7D32"
          strokeWidth="6"
          strokeLinecap="round"
          strokeOpacity="0.6"
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={transition(0.16)}
        />
        <motion.path
          d="M-40 96C35 131 75 81 145 151C205 211 240 196 295 271"
          stroke="#D9381E"
          strokeWidth="5"
          strokeLinecap="round"
          strokeOpacity="0.6"
          initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={transition(0.28)}
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <motion.path
        d="M340 30C250 10 215 95 140 85C75 76 45 145 -10 190"
        stroke="#F29400"
        strokeWidth="7"
        strokeLinecap="round"
        strokeOpacity="0.7"
        initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={transition(0.05)}
      />
      <motion.path
        d="M350 56C260 36 225 121 150 111C85 102 55 171 0 216"
        stroke="#2E7D32"
        strokeWidth="6"
        strokeLinecap="round"
        strokeOpacity="0.65"
        initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={transition(0.16)}
      />
      <motion.path
        d="M360 82C270 62 235 147 160 137C95 128 65 197 10 242"
        stroke="#D9381E"
        strokeWidth="5"
        strokeLinecap="round"
        strokeOpacity="0.65"
        initial={shouldReduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={transition(0.28)}
      />
    </svg>
  );
};

interface SectionHeadingProps {
  eyebrow: string;
  titleBefore: string;
  titleItalic: string;
  titleAfter?: string;
  subtitle?: string;
  tone?: 'light' | 'dark' | 'orange';
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  titleBefore,
  titleItalic,
  titleAfter = '',
  subtitle,
  tone = 'light',
  align = 'left',
}) => {
  const eyebrowColor =
    tone === 'dark'
      ? 'text-[#F29400]'
      : tone === 'orange'
        ? 'text-[#2B3544]'
        : 'text-[#D9381E]';

  const titleColor = tone === 'dark' ? 'text-[#FFFDF8]' : 'text-[#2B3544]';
  const italicColor =
    tone === 'dark'
      ? 'text-[#F29400]'
      : tone === 'orange'
        ? 'text-[#FFFDF8]'
        : 'text-[#D98A0B]';
  const subtitleColor =
    tone === 'dark'
      ? 'text-[#E4E9F0]'
      : tone === 'orange'
        ? 'text-[#2B3544]'
        : 'text-[#2B3544]/85';

  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignClasses}`}>
      <p
        className={`font-sans text-[12px] font-bold uppercase tracking-[0.2em] mb-3 ${eyebrowColor}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-serif font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] tracking-tight ${titleColor}`}
      >
        {titleBefore}{' '}
        <em className={`italic font-extrabold ${italicColor}`}>{titleItalic}</em>
        {titleAfter ? ` ${titleAfter}` : ''}
      </h2>
      {subtitle && (
        <p className={`mt-4 font-sans text-base sm:text-[17px] leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

interface RedCircleArrowProps {
  label: string;
  onClick?: () => void;
  href?: string;
  size?: 'sm' | 'md';
}

export const RedCircleArrow: React.FC<RedCircleArrowProps> = ({
  label,
  onClick,
  href,
  size = 'md',
}) => {
  const dims = size === 'sm' ? 'w-10 h-10' : 'w-11 h-11';
  const classes = `${dims} rounded-full bg-[#D9381E] text-[#FFFDF8] inline-flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 hover:scale-105 hover:bg-[#B82D16] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B3544]`;

  if (href) {
    return (
      <a href={href} aria-label={label} className={classes}>
        <ArrowRight className="w-5 h-5" aria-hidden="true" />
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={label} className={classes}>
      <ArrowRight className="w-5 h-5" aria-hidden="true" />
    </button>
  );
};

interface WhatsAppPostBoxProps {
  subtitle?: string;
  className?: string;
}

export const WhatsAppPostBox: React.FC<WhatsAppPostBoxProps> = ({
  subtitle = 'Respuesta directa para agendar diagnóstico o resolver dudas',
  className = '',
}) => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-[#2B3544] text-[#FFFDF8] rounded-2xl px-6 py-6 sm:px-8 sm:py-7 shadow-[0_12px_30px_rgba(43,53,68,0.16)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F29400] ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <span className="block font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#F29400] mb-1">
            CONTACTO DIRECTO
          </span>
          <span className="block font-sans font-semibold text-lg sm:text-xl text-[#FFFDF8]">
            Escríbenos por WhatsApp
          </span>
          <span className="block font-sans text-xs sm:text-sm text-[#D5DCE4] mt-1">
            {subtitle}
          </span>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <span className="font-serif font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-[#FFFDF8] tabular-nums tracking-tight whitespace-nowrap">
            {WHATSAPP_NUMBER_DISPLAY}
          </span>
          <span
            aria-hidden="true"
            className="w-11 h-11 rounded-full bg-[#D9381E] text-[#FFFDF8] inline-flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:translate-x-1"
          >
            <ArrowRight className="w-5 h-5" />
          </span>
        </div>
      </div>
    </a>
  );
};

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
