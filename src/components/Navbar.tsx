import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { RitmikaLogo } from './BrandElements';

interface NavbarProps {
  onScheduleClick: () => void;
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Cómo trabajamos', href: '#como-trabajamos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC<NavbarProps> = ({ onScheduleClick }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const handleCtaClick = () => {
    setMobileOpen(false);
    onScheduleClick();
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FCF4E6]/95 backdrop-blur-md border-b border-[#2B3544]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Logo */}
        <a
          href="#inicio"
          aria-label="Rítmika Empresarial — Ir al inicio"
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9381E] rounded-md"
        >
          <RitmikaLogo variant="light" />
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-semibold text-[#2B3544] hover:text-[#D9381E] transition-colors duration-200 whitespace-nowrap shrink-0 underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleCtaClick}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#F29400] hover:bg-[#D98A0B] text-[#2B3544] font-sans font-bold text-sm px-5 py-2.5 shadow-sm transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2B3544]"
          >
            Agenda un diagnóstico
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#2B3544]/15 bg-[#FFFDF8] text-[#2B3544] hover:bg-[#FFFAF2] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FFFAF2] border-t border-[#2B3544]/10 px-4 py-5 shadow-lg">
          <nav aria-label="Navegación móvil" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="font-sans text-base font-semibold text-[#2B3544] hover:text-[#D9381E] py-2.5 px-3 rounded-xl hover:bg-[#FCF4E6] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleCtaClick}
              className="mt-2 w-full rounded-full bg-[#F29400] hover:bg-[#D98A0B] text-[#2B3544] font-sans font-bold text-sm px-5 py-3 shadow-sm transition-colors cursor-pointer"
            >
              Agenda un diagnóstico
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
