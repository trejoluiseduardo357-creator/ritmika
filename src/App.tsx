import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { CoursesSection } from './components/CoursesSection';
import { LeaderToolsSection } from './components/LeaderToolsSection';
import { RecruitmentTimelineSection } from './components/RecruitmentTimelineSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { TeamSection } from './components/TeamSection';
import { FinalCtaAndContactSection } from './components/FinalCtaAndContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const jumpToContactWithService = (serviceLabel: string) => {
    setSelectedService(serviceLabel);
    const el = document.getElementById('contacto-formulario');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCF4E6] text-[#2B3544] font-sans">
      <Navbar
        onScheduleClick={() =>
          jumpToContactWithService('Diagnóstico de Necesidades de Capacitación (DNC)')
        }
      />

      <main className="flex-1">
        <HeroSection />
        <ServicesSection onSelectService={jumpToContactWithService} />
        <CoursesSection onSelectCourse={jumpToContactWithService} />
        <LeaderToolsSection
          onApplyWithTeam={() => jumpToContactWithService('Desarrollo de líderes')}
        />
        <RecruitmentTimelineSection />
        <HowWeWorkSection />
        <TeamSection />
        <FinalCtaAndContactSection preselectedService={selectedService} />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
