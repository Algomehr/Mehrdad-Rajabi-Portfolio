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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          navItems={navItems}
        />
      </div>

      <main className="flex-1 lg:pr-20 relative z-10">
        {/* Unified View for all screen sizes */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-0 pt-20 pb-8">
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