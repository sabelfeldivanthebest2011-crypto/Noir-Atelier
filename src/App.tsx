import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import DrinksMenu from './components/DrinksMenu';
import InteriorGallery from './components/InteriorGallery';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeNotification, setActiveNotification] = useState<string | null>(
    'Объявление: Noir Atelier на Патриарших сегодня предлагает микро-лот Панама Гейша. Добро пожаловать.'
  );

  // Helper smooth custom scroll action
  const handleScrollTo = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-matte-black text-soft-cream selection:bg-gold-accent selection:text-matte-black antialiased">
      {/* 1. Global Film Grain Accent Layer overlay loaded natively in DOM */}
      <div className="grain-overlay pointer-events-none opacity-[0.35]">
        <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full object-cover">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 2. Top-level Elegant Floating Announcement Marquee Block */}
      {activeNotification && (
        <div className="fixed top-0 left-0 w-full bg-espresso border-b border-gold-accent/25 py-2 px-6 z-50 flex justify-between items-center text-[9px] font-mono tracking-widest text-[#CBBCAE]">
          <div className="flex items-center space-x-2 overflow-hidden">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-accent animate-ping duration-1000 shrink-0" />
            <span className="truncate uppercase">
              {activeNotification}
            </span>
          </div>
          <button
            onClick={() => setActiveNotification(null)}
            className="text-[#CBBCAE]/40 hover:text-white transition-colors duration-300 font-sans text-xs pl-4"
          >
            ✕
          </button>
        </div>
      )}

      {/* Adding padding offset specifically when announcement header is active */}
      <div className={activeNotification ? "pt-[30px]" : ""}>
        {/* 3. Sticky Master Navigation Header */}
        <Navbar onScrollTo={handleScrollTo} />

        {/* 4. Fullscreen Hero Section */}
        <main>
          <Hero onScrollTo={handleScrollTo} />

          {/* 5. Core Philosophy Story */}
          <Philosophy />

          {/* 6. Spec Formula Drinks List */}
          <DrinksMenu />

          {/* 7. Atmosphere Habitat galleries and reservation tool */}
          <InteriorGallery />

          {/* 8. Lifestyle Experience detailed list */}
          <Features />

          {/* 9. Local Direction map coordinates */}
          <Contact />
        </main>

        {/* 10. Footer with bean drops registration */}
        <Footer onScrollTo={handleScrollTo} />
      </div>
    </div>
  );
}
