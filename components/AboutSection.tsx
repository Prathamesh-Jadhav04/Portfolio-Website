"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { playTypeSound } from "@/utils/sounds";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AboutSection({ data: profileData, hasEntered }: { data: any, hasEntered?: boolean }) {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTyping) {
      interval = setInterval(() => {
        playTypeSound();
      }, 70); // Match typing speed
    }
    return () => clearInterval(interval);
  }, [isTyping]);
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-4 py-20 z-10">
      <motion.div
        className="max-w-4xl w-full border border-gray-800 bg-black/50 backdrop-blur-md p-6 md:p-10 shadow-[0_0_30px_rgba(255,255,255,0.02)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center gap-2 mb-6 border-b border-gray-800 pb-4">
          <div className="w-3 h-3 bg-red-900/50"></div>
          <div className="w-3 h-3 bg-yellow-900/50"></div>
          <div className="w-3 h-3 bg-green-900/50"></div>
          <p className="ml-4 font-vt323 text-gray-500 text-sm">terminal — bash</p>
        </div>

        <div className="font-vt323 text-lg md:text-2xl leading-relaxed text-gray-300 min-h-[300px]">
          {hasEntered ? (
            <TypeAnimation
              sequence={[
                () => setIsTyping(true),
                "> INITIALIZING PROFILE...",
                () => setIsTyping(false),
                1000,
                () => setIsTyping(true),
                `> INITIALIZING PROFILE...\n> ACCESS GRANTED.\n\nEngineering-focused AI/ML developer with hands-on experience building production-grade vector databases, RAG pipelines, and LLM-integrated APIs from first principles. \n\nSkilled in scalable low-latency infrastructure, custom HNSW indexes, hybrid semantic retrieval, and systems-level engineering.`,
                () => setIsTyping(false),
              ]}
              wrapper="div"
              cursor={true}
              style={{ whiteSpace: "pre-line", display: "block" }}
              speed={70}
            />
          ) : (
            <span className="animate-pulse text-gray-500">_</span>
          )}
        </div>
      </motion.div>
    </section>
  );
}
