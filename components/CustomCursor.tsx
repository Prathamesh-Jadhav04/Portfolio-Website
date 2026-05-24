"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  // Store raw positions outside of React state for maximum performance
  const mousePos = useRef({ x: -100, y: -100 });
  const outerPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    setMounted(true);
    let animationFrameId: number;

    const updateMousePosition = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement;
      const tag = target?.tagName?.toLowerCase();
      
      if (tag === "input" || tag === "textarea") {
        setIsTyping(true);
        setIsHovering(false);
      } else {
        setIsTyping(false);
        if (
          tag === 'button' ||
          tag === 'a' ||
          target?.closest('button') ||
          target?.closest('a') ||
          target?.classList?.contains('cursor-crosshair') ||
          target?.classList?.contains('glitch-hover')
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    // Vanilla JS animation loop bypasses React entirely for butter-smooth tracking
    const render = () => {
      // Instant follow for inner dot
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${mousePos.current.x - 6}px, ${mousePos.current.y - 6}px, 0)`;
      }

      // Smooth LERP (Linear Interpolation) for outer ring
      outerPos.current.x += (mousePos.current.x - outerPos.current.x) * 0.15;
      outerPos.current.y += (mousePos.current.y - outerPos.current.y) * 0.15;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${outerPos.current.x - 12}px, ${outerPos.current.y - 12}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Outer trailing hollow diamond */}
      <div 
        ref={outerRef} 
        className="fixed top-0 left-0 pointer-events-none z-[99999998] flex items-center justify-center will-change-transform"
      >
        <motion.div 
          className="pointer-events-none w-6 h-6 border-[1.5px] border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          initial={false}
          animate={{
            scale: isTyping ? 0 : isHovering ? 1.8 : isClicking ? 0.8 : 1,
            opacity: isTyping ? 0 : 0.6,
            rotate: isHovering ? 90 : 45,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </div>

      {/* Inner solid exact diamond */}
      <div 
        ref={innerRef} 
        className="fixed top-0 left-0 pointer-events-none z-[99999999] flex items-center justify-center will-change-transform"
      >
        <motion.div 
          className="pointer-events-none w-3 h-3 bg-white shadow-[0_0_10px_rgba(255,255,255,1)]"
          initial={false}
          animate={{
            scale: isTyping ? 0 : isClicking ? 0.5 : isHovering ? 0 : 1,
            opacity: isTyping ? 0 : 1,
            rotate: 45,
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.1 }}
        />
      </div>
    </>
  );
}
