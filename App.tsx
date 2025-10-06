import React, { useState } from 'react';
import { SidebarNav, navItems } from './components/SidebarNav';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { BlogSection } from './components/sections/BlogSection';
import { OnlinePresenceSection } from './components/sections/OnlinePresenceSection';
import { ContactSection } from './components/sections/ContactSection';
import { TeachingSection } from './components/sections/TeachingSection';
import { ActivitiesSection } from './components/sections/ActivitiesSection';
import { MobileHeader } from './components/MobileHeader';
import { MobileMenuDrawer } from './components/MobileMenuDrawer';
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections: { [key: string]: React.ReactNode } = {
    home: <HeroSection />,
    about: <AboutSection />,
    portfolio: <PortfolioSection />,
    blog: <BlogSection />,
    teaching: <TeachingSection />,
    activities: <ActivitiesSection />,
    'online-presence': <OnlinePresenceSection />,
    contact: <ContactSection />,
  };
  
  const handleNavigate = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-slate-900 hide-cursor">
      <CustomCursor />
      <ParticleBackground />
      
      {/* Desktop Sidebar */}
      <div className="hidden lg:block z-50">
        <SidebarNav />
      </div>
      
      {/* Mobile Header & Drawer */}
      <div className="lg:hidden z-50">
        <MobileHeader 
          isMenuOpen={isMobileMenuOpen}
          onToggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <MobileMenuDrawer
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          onNavigate={handleNavigate}
          navItems={navItems}
          activeSection={activeSection}
        />
      </div>

      <main className="flex-1 lg:pr-20 relative z-10">
        {/* Mobile View: Render only one active section */}
        <div className="lg:hidden w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
            {sections[activeSection]}
        </div>
        
        {/* Desktop View: Render all sections for scrolling */}
        <div className="hidden lg:block w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <BlogSection />
          <TeachingSection />
          <ActivitiesSection />
          <OnlinePresenceSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default App;