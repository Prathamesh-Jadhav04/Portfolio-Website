/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
"use client";

import { motion, useInView } from "framer-motion";
import TiltCard from "./TiltCard";
import { playGlitchSound } from "@/utils/sounds";
import { useEffect, useState, useRef } from "react";

function AnimatedProgress({ skill, index }: { skill: any, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(0);

  const target = parseInt(skill.percent.replace("%", "")) || 0;

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 1500; // 1.5 seconds animation
    const intervalTime = 30; // 30ms per frame
    const steps = duration / intervalTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  const filledBlocks = Math.floor(current / 10);
  const emptyBlocks = Math.max(0, 10 - filledBlocks);
  const progressStr = "█".repeat(filledBlocks) + "░".repeat(emptyBlocks);

  return (
    <motion.div
      ref={ref}
      className="relative p-6 border border-gray-800/50 bg-[#050505] rounded-xl flex flex-col group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="absolute inset-0 bg-[var(--primary-color)] opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
      
      <span className="text-gray-400 group-hover:text-white transition-colors mb-4 font-press text-xs md:text-sm">
        {skill.name}
      </span>
      <div className="flex items-center justify-between text-gray-600 group-hover:text-[var(--primary-color)] transition-all font-vt323 text-xl">
        <span className="tracking-widest">{progressStr}</span>
        <span>{current}%</span>
      </div>
    </motion.div>
  );
}

export default function SkillsSection({ data: skills }: { data: any }) {
  return (
    <section id="skills" className="relative min-h-[50vh] flex items-center justify-center px-4 py-20 z-10">
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-press text-xl md:text-2xl text-white mb-12 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
          <span
            className="glitch-hover cursor-crosshair"
            data-text="SYSTEM.STATS"
            onMouseEnter={playGlitchSound}
          >
            SYSTEM.STATS
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          {skills?.map((skill: any, index: number) => (
            <AnimatedProgress key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
