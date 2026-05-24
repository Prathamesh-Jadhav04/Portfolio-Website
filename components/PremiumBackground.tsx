"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

export default function PremiumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Mouse tracking for parallax and interactivity
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let actualMouseX = -1000;
    let actualMouseY = -1000;
    
    // For CSS parallax state
    let smoothMouseX = 0;
    let smoothMouseY = 0;
    const trail: {x: number, y: number}[] = [];
    const ripples: {x: number, y: number, radius: number, life: number}[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      actualMouseX = e.clientX;
      actualMouseY = e.clientY;
    };
    
    const handleClick = (e: MouseEvent) => {
      ripples.push({ x: e.clientX, y: e.clientY, radius: 0, life: 1 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    const lerp = (start: number, end: number, amt: number) => {
      return (1 - amt) * start + amt * end;
    };

    // Particles and atmospheric effects
    interface Particle { x: number; y: number; speedY: number; speedX: number; size: number; opacity: number; depth: number }
    interface FogLayer { y: number; speed: number; opacity: number; phase: number; depth: number }

    let particles: Particle[] = [];
    let fogLayers: FogLayer[] = [];

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.imageSmoothingEnabled = false;

      // Deep atmospheric particles
      particles = Array.from({ length: 150 }).map(() => {
        const depth = Math.random();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          speedY: 0.1 + depth * 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          size: 1 + Math.floor(depth * 2), // pixelated sizes: 1, 2, 3
          opacity: 0.05 + depth * 0.15,
          depth
        };
      });

      // Horizontal drifting fog patches
      fogLayers = Array.from({ length: 5 }).map((_, i) => ({
        y: height * 0.4 + Math.random() * height * 0.4,
        speed: 0.2 + Math.random() * 0.5,
        opacity: 0.02 + Math.random() * 0.03,
        phase: Math.random() * Math.PI * 2,
        depth: (i + 1) / 5
      }));
    };

    let time = 0;
    const render = () => {
      time += 0.005;

      // Smooth mouse lerping for canvas particles
      mouseX = lerp(mouseX, targetMouseX, 0.05);
      mouseY = lerp(mouseY, targetMouseY, 0.05);
      
      // Smooth mouse lerping for DOM parallax
      smoothMouseX = lerp(smoothMouseX, targetMouseX, 0.05);
      smoothMouseY = lerp(smoothMouseY, targetMouseY, 0.05);
      
      // Hardware accelerated parallax via CSS variables
      const container = document.getElementById("parallax-bg-layer");
      if (container) {
        // Move opposite to mouse direction
        container.style.transform = `translate3d(${smoothMouseX * -1.5}%, ${smoothMouseY * -1.5}%, 0) scale(1.05)`;
      }

      const scrollVal = scrollY.get();
      const scrollVelocity = scrollY.getVelocity() || 0;
      const warpFactor = 1 + Math.abs(scrollVelocity) * 0.005;

      // Update trail
      trail.push({ x: actualMouseX, y: actualMouseY });
      if (trail.length > 15) trail.shift();

      // Clear canvas (it's now transparent overlaying the CSS image)
      ctx.clearRect(0, 0, width, height);

      // Add a light dark overlay to integrate it better and make text readable
      ctx.fillStyle = "rgba(0,0,0,0.1)"; 
      ctx.fillRect(0, 0, width, height);

      // Volumetric Fog and Particles

      // Drifting Fog Patches Deep
      fogLayers.forEach(f => {
        if (f.depth < 0.5) {
          const offsetX = Math.sin(time + f.phase) * 100 + (time * f.speed * 200) % width;
          ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
          ctx.fillRect(offsetX - width, f.y, width * 2, height * 0.2);
        }
      });

      // Drifting Fog Patches Near
      fogLayers.forEach(f => {
        if (f.depth >= 0.5) {
          const offsetX = Math.sin(time + f.phase) * 150 + (time * f.speed * 300) % width;
          ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
          ctx.fillRect(offsetX - width, f.y, width * 2, height * 0.3);
        }
      });

      // Particles & Neural Network
      particles.forEach(p => {
        // Apply depth-based parallax to particles
        const pOffsetX = mouseX * -50 * p.depth;
        const pOffsetY = mouseY * -30 * p.depth;

        const realPx = p.x + pOffsetX;
        const realPy = p.y + pOffsetY;

        // Neural Network effect
        const dist = Math.hypot(realPx - actualMouseX, realPy - actualMouseY);
        if (dist < 150) {
           ctx.beginPath();
           ctx.moveTo(realPx, realPy);
           ctx.lineTo(actualMouseX, actualMouseY);
           ctx.strokeStyle = `rgba(255, 255, 255, ${(150 - dist) / 150 * 0.15})`;
           ctx.lineWidth = 1;
           ctx.stroke();
           
           // Slight attraction
           p.x += (actualMouseX - realPx) * 0.005;
           p.y += (actualMouseY - realPy) * 0.005;
        }

        p.y += p.speedY * warpFactor;
        p.x += Math.sin(time * 10 + p.y * 0.01) * 0.2 + p.speedX;

        // Wrap around bounds taking warp into account
        if (p.y > height + 20 && p.speedY > 0) {
          p.y = -10;
          p.x = Math.random() * width;
        } else if (p.y < -20 && p.speedY < 0) {
          p.y = height + 10;
        }
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;

        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        if (warpFactor > 1.5) {
            ctx.fillRect(realPx, realPy, p.size, p.size + Math.abs(scrollVelocity) * 0.02);
        } else {
            ctx.fillRect(realPx, realPy, p.size, p.size);
        }
      });

      // Digital Ripple on Click
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 8;
        r.life -= 0.02;
        if (r.life <= 0) {
          ripples.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${r.life * 0.4})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      // Mouse Spotlight
      const spotlight = ctx.createRadialGradient(actualMouseX, actualMouseY, 0, actualMouseX, actualMouseY, 400);
      spotlight.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      spotlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = spotlight;
      ctx.fillRect(0, 0, width, height);

      // Mouse Trail
      if (trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);
        for (let i = 1; i < trail.length; i++) {
          ctx.lineTo(trail[i].x, trail[i].y);
        }
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      // The expensive per-pixel grid for-loop has been removed for massive FPS gains.
      // We rely on CSS scanlines instead.

      animationFrameId = requestAnimationFrame(render);
    };

    init();
    render();

    const handleResize = () => {
      init();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [scrollY]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-black overflow-hidden">
      {/* Hardware-accelerated background image layer */}
      <div 
        id="parallax-bg-layer"
        className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%] bg-no-repeat bg-cover bg-center will-change-transform"
        style={{ 
          backgroundImage: 'url(/bg-city-2.png)',
          filter: "grayscale(100%) contrast(100%) brightness(95%)",
        }}
      />
      
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block absolute inset-0 z-10" 
      />
      
      {/* Subtle animated CSS gradient layer for extra depth */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50 pointer-events-none" />
    </div>
  );
}
