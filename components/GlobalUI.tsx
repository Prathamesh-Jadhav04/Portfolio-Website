"use client";

import { useEffect, useState, useRef } from "react";

import { Volume2, VolumeX, FileText } from "lucide-react";
import { toggleSound, playClickSound, playHoverSound, playTypeSound } from "@/utils/sounds";
import MagneticButton from "@/components/MagneticButton";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

export default function GlobalUI() {
  const [fps, setFps] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [time, setTime] = useState("");
  const [scrollPos, setScrollPos] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollPos(latest);
  });

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId: number;

    const updateFPS = () => {
      const now = performance.now();
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }
      animationFrameId = requestAnimationFrame(updateFPS);
    };

    updateFPS();
    
    const timeInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      // Only play sound if typing inside an input or textarea
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        // Ignore non-character keys like Shift, Ctrl, Alt, Arrow keys if desired
        if (e.key.length === 1 || e.key === "Backspace" || e.key === "Enter") {
          playTypeSound();
        }
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(timeInterval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.1;
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
    setIsMuted(!isMuted);
  };

  return (
    <>
      <div className="scanlines pointer-events-none z-[9999]"></div>
      
      <div className="fixed top-4 right-4 z-50 font-vt323 text-gray-500 text-sm md:text-base flex flex-col items-end pointer-events-none">
        <div className="flex items-center gap-6 pointer-events-auto">
          <MagneticButton>
            <button 
              onClick={() => {
                const isEnabled = toggleSound();
                setSoundEnabled(isEnabled);
              }}
              onMouseEnter={playHoverSound}
              className="text-xs tracking-[0.2em] text-gray-500 hover:text-white transition-colors duration-300 uppercase hidden md:flex items-center gap-2"
            >
              SOUND [{soundEnabled ? "ON" : "OFF"}]
            </button>
          </MagneticButton>
          <div className="text-xs tracking-[0.2em] text-gray-500 font-mono">
            {time}
          </div>
        </div>
        <p>FPS: {fps}</p>
        <p>STATUS: <span className="text-gray-300">ONLINE</span></p>
      </div>

      <div className="fixed bottom-4 left-4 z-50 flex items-center gap-4">
        <button
          onClick={toggleAudio}
          className="p-2 text-gray-500 hover:text-[var(--primary-color)] transition-colors duration-300 border border-transparent hover:border-gray-800 bg-black/50 backdrop-blur-sm cursor-crosshair"
          onMouseEnter={playHoverSound}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>

        <a
          href="/resume.pdf"
          download="Prathamesh_Jadhav_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-vt323 text-gray-500 hover:text-black hover:bg-white transition-colors duration-300 border border-gray-800 px-4 py-1.5 bg-black/50 backdrop-blur-sm flex items-center gap-2 cursor-crosshair text-sm tracking-widest"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
        >
          <FileText size={14} />
          <span>RESUME.EXE</span>
        </a>
      </div>

      {/* Top Scroll Guide */}
      <motion.div 
        className="fixed top-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollPos > 0.05 ? 0.6 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-press text-[8px] text-gray-500 tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gray-800 relative overflow-hidden">
          <motion.div 
            className="w-full h-[4px] bg-[var(--primary-color)] absolute top-0"
            animate={{ y: [32, -4] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Bottom Scroll Guide */}
      <motion.div 
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollPos < 0.95 ? 0.6 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-[1px] h-8 bg-gray-800 relative overflow-hidden">
          <motion.div 
            className="w-full h-[4px] bg-[var(--primary-color)] absolute top-0"
            animate={{ y: [-4, 32] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
        <span className="font-press text-[8px] text-gray-500 tracking-[0.2em] uppercase">Scroll</span>
      </motion.div>
    </>
  );
}
