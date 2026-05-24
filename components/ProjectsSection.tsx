"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { playGlitchSound } from "@/utils/sounds";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProjectsSection({ data: projects }: { data: any }) {
  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-press text-2xl md:text-3xl text-white mb-16 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="glitch-hover cursor-crosshair"
            data-text="MODULES.LOADED"
            onMouseEnter={playGlitchSound}
          >
            MODULES.LOADED
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {projects?.map((project: any, index: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group perspective-[1000px]"
            >
              <TiltCard className="h-full">
                <h3 className="font-press text-lg text-gray-200 mb-4 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all">
                  {project.title}
                </h3>
                <p className="font-vt323 text-xl text-gray-400 mb-6 flex-grow">
                  {project.desc}
                </p>
                <div className="text-sm font-vt323 text-gray-600 mb-6 uppercase tracking-widest border-t border-gray-800 pt-4">
                  {project.tech}
                </div>

                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={playGlitchSound}
                      className="px-4 py-2 text-xs font-press border border-gray-700 hover:bg-white hover:text-black transition-colors glitch-hover" 
                      data-text="GITHUB"
                    >
                      GITHUB
                    </a>
                  )}
                  {project.demo ? (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={playGlitchSound}
                      className="px-4 py-2 text-xs font-press border border-gray-700 hover:bg-white hover:text-black transition-colors glitch-hover" 
                      data-text="LIVE DEMO"
                    >
                      LIVE DEMO
                    </a>
                  ) : (
                    <button 
                      onClick={() => alert(`[!] SYSTEM_ERROR: Connection to live node refused.\n> TARGET_NODE: ${project.title}\n> STATUS: OFFLINE / ACCESS_DENIED`)}
                      onMouseEnter={playGlitchSound}
                      className="px-4 py-2 text-xs font-press border border-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors glitch-hover" 
                      data-text="LIVE DEMO"
                    >
                      LIVE DEMO
                    </button>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
