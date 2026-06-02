'use client';

import { useState } from 'react';
import { Loader } from '@/components/Loader';
import { CustomCursor } from '@/components/CustomCursor';
import { NoiseOverlay } from '@/components/NoiseOverlay';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  const [loaderDone, setLoaderDone] = useState(false);
  const [startReveal, setStartReveal] = useState(false);

  return (
    <>
      {/* Loader — shows until onComplete called */}
      {!loaderDone && (
        <Loader
          onComplete={() => setLoaderDone(true)}
          onStartTransition={() => setStartReveal(true)}
        />
      )}

      {/* Global overlays — always present */}
      <NoiseOverlay />
      <CustomCursor />

      {/* Main content — rendered when loader starts slide-up */}
      {startReveal && (
        <main>
          {/* Sticky Navigation */}
          <Navigation />

          {/* 1. HERO SECTION */}
          <HeroSection />

          {/* 2. ABOUT / ORIGIN SECTION */}
          <AboutSection />

          {/* 3. PROJECTS / WORK SECTION */}
          <ProjectsSection />

          {/* 4. CONTACT / BUILD SECTION */}
          <ContactSection />
        </main>
      )}
    </>
  );
}
