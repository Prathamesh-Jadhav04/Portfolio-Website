/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import PremiumBackground from "@/components/PremiumBackground";
import HeroSection from "@/components/HeroSection";
import GlobalUI from "@/components/GlobalUI";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: false });
const ExperienceSection = dynamic(() => import("@/components/ExperienceSection"), { ssr: false });
const SkillsSection = dynamic(() => import("@/components/SkillsSection"), { ssr: false });
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });
import { motion, AnimatePresence } from "framer-motion";
import { playClickSound, playHoverSound } from "@/utils/sounds";

export default function Home() {
  const [portfolioData, setPortfolioData] = useState<any>(null);
  const [githubData, setGithubData] = useState<any>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    fetch("/api/data").then(r => r.json()).then(setPortfolioData);
    fetch("/api/github").then(r => r.json()).then(setGithubData).catch(() => console.error("GitHub fetch failed"));
    
    // Prevent browser from automatically scrolling back to top on reload
    if (typeof window !== "undefined" && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);
  useEffect(() => {
    // Auto-scroll to About section after data is loaded with retry logic
    if (portfolioData) {
      let retries = 0;
      const checkAndScroll = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection && (window as any).lenis) {
          window.scrollTo(0, aboutSection.offsetTop);
          (window as any).lenis.scrollTo(aboutSection, { immediate: true });
        } else if (retries < 20) {
          retries++;
          setTimeout(checkAndScroll, 50); // poll every 50ms
        } else if (aboutSection) {
          window.scrollTo(0, aboutSection.offsetTop);
        }
      };
      setTimeout(checkAndScroll, 100);
    }
  }, [portfolioData]);
  useEffect(() => {
    let keyBuffer = "";
    const handleKeyDown = (e: KeyboardEvent) => {
      keyBuffer += e.key.toLowerCase();
      if (keyBuffer.length > 10) keyBuffer = keyBuffer.slice(-10);
      
      if (keyBuffer.includes("matrix")) {
        document.body.classList.remove("amber-mode");
        document.body.classList.toggle("matrix-mode");
        keyBuffer = "";
      } else if (keyBuffer.includes("amber")) {
        document.body.classList.remove("matrix-mode");
        document.body.classList.toggle("amber-mode");
        keyBuffer = "";
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <CustomCursor />
      <SmoothScroll />
      <GlobalUI />

      <AnimatePresence>
        {!hasEntered && (
          <motion.div 
            className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center text-center px-4"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <PremiumBackground />
            <h1 className="font-press text-2xl md:text-4xl text-white mb-4 relative z-10">SYSTEM_LOCKED</h1>
            <p className="font-vt323 text-xl md:text-2xl text-gray-500 mb-10 max-w-lg relative z-10 leading-relaxed">
              &gt; UNAUTHORIZED ACCESS DETECTED.<br/>
              &gt; AUDIO/VISUAL SUBSYSTEMS SUSPENDED.<br/>
              &gt; PROCEED WITH CAUTION.
            </p>
            <button 
              onClick={() => {
                playClickSound();
                setHasEntered(true);
              }}
              className="relative z-10 border border-[var(--primary-color)] text-[var(--primary-color)] bg-black/50 backdrop-blur-md px-8 py-4 font-press text-sm hover:bg-[var(--primary-color)] hover:text-black transition-all hover:shadow-[0_0_20px_var(--primary-color)]"
              onMouseEnter={playHoverSound}
            >
              [ EXPLORE MORE ]
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        className="relative w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <PremiumBackground />

        {!portfolioData ? (
          <div className="min-h-screen flex items-center justify-center text-green-500 font-vt323 text-3xl tracking-widest animate-pulse">
            INITIALIZING SYSTEM...
          </div>
        ) : (
          <div className="flex flex-col min-h-screen">
            <HeroSection data={portfolioData.profileData} githubData={githubData} />
            <AboutSection data={portfolioData.profileData} hasEntered={hasEntered} />
            <SkillsSection data={portfolioData.skills} />
            {/* If GitHub data loads successfully and has projects, use it (filtered by isHidden), otherwise fallback to local projects */}
            <ProjectsSection data={githubData?.projects?.length > 0 ? githubData.projects.filter((p: any) => !p.isHidden) : portfolioData.projects} />
            <ExperienceSection data={portfolioData.experience} />
            <ContactSection />

            <footer className="py-8 text-center text-gray-600 font-vt323 tracking-widest text-sm z-10 border-t border-gray-900 mt-20">
              SYSTEM.TERMINATED // END OF RECORD // {new Date().getFullYear()}
            </footer>
          </div>
        )}
      </motion.main>
    </>
  );
}
