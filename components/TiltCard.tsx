"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { playHoverSound } from "@/utils/sounds";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5); // Normalized 0 to 1
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [0, 1], [8, -8]);
  const rotateY = useTransform(springX, [0, 1], [-8, 8]);

  // Exact pixel tracking for spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.08), transparent 40%)`;
  const borderLight = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.3), transparent 40%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const mX = e.clientX - rect.left;
    const mY = e.clientY - rect.top;
    
    x.set(mX / rect.width);
    y.set(mY / rect.height);
    
    mouseX.set(mX);
    mouseY.set(mY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playHoverSound();
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-xl border border-gray-800/50 bg-black p-6 cursor-crosshair group ${className}`}
    >
      {/* Dynamic Border Spotlight (achieved with an inset pseudo-element acting as a border mask) */}
      <motion.div
        className="pointer-events-none absolute -inset-[1px] rounded-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: borderLight,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px"
        }}
      />

      {/* Internal Glare / Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
        style={{
          background: spotlight,
        }}
      />
      
      {/* Background layer */}
      <div className="absolute inset-0 bg-[#050505] opacity-90 rounded-xl z-0 pointer-events-none" />
      
      {/* Push content slightly forward for true 3D depth */}
      <div style={{ transform: "translateZ(30px)" }} className="relative z-20 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}
