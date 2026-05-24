"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PixelButton from "./PixelButton";
import MagneticButton from "./MagneticButton";
import LiveStats from "./LiveStats";
import { playGlitchSound } from "@/utils/sounds";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HeroSection({ data: profileData, githubData }: { data: any, githubData?: any }) {
  const [scrambleText, setScrambleText] = useState("");

  useEffect(() => {
    if (!profileData?.name) return;
    
    const timeout = setTimeout(() => {
      let iterations = 0;
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
      const target = profileData.name;
      
      const interval = setInterval(() => {
        setScrambleText(target.split("").map((letter: string, index: number) => {
          if (index < iterations || letter === " ") return letter;
          return letters[Math.floor(Math.random() * letters.length)];
        }).join(""));
        
        if (iterations >= target.length) clearInterval(interval);
        iterations += 1 / 3;
      }, 40);
      
      return () => clearInterval(interval);
    }, 500); // Wait for initial fade in

    return () => clearTimeout(timeout);
  }, [profileData?.name]);
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center text-center px-4 pt-20">
      <motion.div
        className="z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
      >
        <motion.p
          className="text-gray-400 font-vt323 text-lg md:text-xl tracking-[0.3em] mb-4 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          {profileData.established}
        </motion.p>

        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-press text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6 tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] glitch-hover cursor-crosshair leading-relaxed min-h-[1.5em]"
          data-text={scrambleText || profileData.name}
          onMouseEnter={playGlitchSound}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        >
          {scrambleText || profileData.name}
        </motion.h1>

        <motion.p
          className="text-[var(--primary-color)] font-vt323 text-xl md:text-2xl lg:text-3xl tracking-widest mb-16 drop-shadow-[0_0_10px_rgba(0,255,0,0.3)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        >
          {profileData.tagline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <MagneticButton><PixelButton text="[ ENTER ]" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} /></MagneticButton>
          <MagneticButton><PixelButton text="[ PROJECTS ]" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})} /></MagneticButton>
          <MagneticButton><PixelButton text="[ CONTACT ]" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} /></MagneticButton>
        </motion.div>
      </motion.div>
      
      <LiveStats githubData={githubData} />
    </section>
  );
}
