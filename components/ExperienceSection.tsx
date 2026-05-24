"use client";

import { motion } from "framer-motion";
import { playGlitchSound } from "@/utils/sounds";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ExperienceSection({ data: experience }: { data: any }) {
  return (
    <section id="experience" className="relative min-h-screen py-20 px-4 z-10 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <motion.h2
          className="font-press text-2xl md:text-3xl text-white mb-16 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="glitch-hover cursor-crosshair"
            data-text="GIT LOG --EXPERIENCE"
            onMouseEnter={playGlitchSound}
          >
            GIT LOG --EXPERIENCE
          </span>
        </motion.h2>

        <div className="font-vt323 text-lg md:text-xl text-gray-400 font-mono flex flex-col gap-10 bg-black/80 backdrop-blur-md p-6 md:p-10 rounded border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {experience?.map((item: any, index: number) => (
            <motion.div 
              key={item.id}
              className="relative pl-8 border-l-2 border-gray-800/50 hover:border-[var(--primary-color)] transition-colors group py-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[7px] top-4 w-3 h-3 rounded-full bg-black border-2 border-gray-800 group-hover:border-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:shadow-[0_0_15px_var(--primary-color)] transition-all duration-300" />
              
              <div className="flex flex-col gap-1 mb-4">
                <span 
                  className="text-[var(--primary-color)] glitch-hover cursor-crosshair w-fit" 
                  data-text={item.id}
                  onMouseEnter={playGlitchSound}
                >
                  {item.id}
                </span>
                <span className="text-gray-500">Author: Prathamesh &lt;root@prathamesh.os&gt;</span>
                <span className="text-gray-500">Date:   {item.duration}</span>
              </div>
              
              <div className="text-gray-300 text-xl md:text-2xl mb-2 pl-4 border-l-2 border-[var(--primary-color)]">
                {item.role} <span className="text-gray-600">@</span> {item.company}
              </div>
              
              <div className="text-gray-400 pl-4 mt-4 leading-relaxed whitespace-pre-wrap">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
