'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
  wobble: number;
  wobbleSpeed: number;
  wobbleRange: number;
  isSpark?: boolean;
}

export function InteractiveEmberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Handle high DPI screens
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Interaction state
    const mouse = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      lastX: 0,
      lastY: 0,
      active: false,
    };

    let scrollForce = 0;
    let lastScrollY = window.scrollY;

    const particles: Particle[] = [];
    const maxBaseEmbers = 75;

    // Generate color in JJK ember scheme (shades of glowing red, amber, orange)
    const getRandomEmberColor = (alpha: number) => {
      const colors = [
        `rgba(255, 69, 0, ${alpha})`,   // Red-orange
        `rgba(255, 140, 0, ${alpha})`,  // Dark orange
        `rgba(255, 165, 0, ${alpha})`,  // Orange
        `rgba(255, 215, 0, ${alpha})`,  // Gold/Amber
        `rgba(255, 99, 71, ${alpha})`,   // Tomato red
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Initialize base embers
    const createBaseEmber = (atBottom = false): Particle => {
      const size = 1 + Math.random() * 2.5;
      return {
        x: Math.random() * width,
        y: atBottom ? height + 10 : Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(0.4 + Math.random() * 1.2),
        size,
        color: getRandomEmberColor(1),
        alpha: 0.1 + Math.random() * 0.7,
        life: 0,
        maxLife: 200 + Math.random() * 300,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.01 + Math.random() * 0.02,
        wobbleRange: 0.2 + Math.random() * 0.6,
      };
    };

    for (let i = 0; i < maxBaseEmbers; i++) {
      particles.push(createBaseEmber(false));
    }

    // Create burst of sparks on click
    const createClickBurst = (x: number, y: number) => {
      const count = 15 + Math.floor(Math.random() * 10);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.5 + Math.random() * 3.5;
        const size = 0.8 + Math.random() * 1.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5, // slightly upward biased
          size,
          color: getRandomEmberColor(1),
          alpha: 0.8 + Math.random() * 0.2,
          life: 0,
          maxLife: 40 + Math.random() * 40,
          wobble: 0,
          wobbleSpeed: 0,
          wobbleRange: 0,
          isSpark: true,
        });
      }
    };

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouse.active) {
        mouse.active = true;
        mouse.lastX = e.clientX;
        mouse.lastY = e.clientY;
      }
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.vx = mouse.x - mouse.lastX;
      mouse.vy = mouse.y - mouse.lastY;
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.vx = 0;
      mouse.vy = 0;
    };

    const handleWindowClick = (e: MouseEvent) => {
      // Check if clicking interactive elements to make sure we don't interfere
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        // Still trigger spark, but fewer to not distract
        createClickBurst(e.clientX, e.clientY);
      } else {
        createClickBurst(e.clientX, e.clientY);
      }
    };

    // Track scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      if (diff > 0) {
        scrollForce = Math.min(scrollForce + diff * 0.08, 6);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleWindowClick);
    window.addEventListener('scroll', handleScroll);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Decelerate mouse velocity
      mouse.vx *= 0.92;
      mouse.vy *= 0.92;

      // Decelerate scroll force
      scrollForce *= 0.94;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        // Handle spark lifecycle or out of bounds for base embers
        if (p.isSpark) {
          if (p.life >= p.maxLife) {
            particles.splice(i, 1);
            continue;
          }
          // Friction for sparks
          p.vx *= 0.96;
          p.vy *= 0.96;
          // Apply gravity/upward drift
          p.vy -= 0.02;
        } else {
          // Base embers loop when they go off screen or die
          if (p.y < -10 || p.x < -10 || p.x > width + 10 || p.life >= p.maxLife) {
            particles[i] = createBaseEmber(true);
            continue;
          }
        }

        // Apply scroll force (push up)
        p.y -= scrollForce;

        // Wobble movement for base embers
        if (!p.isSpark) {
          p.wobble += p.wobbleSpeed;
          p.x += Math.sin(p.wobble) * p.wobbleRange;
        }

        // Mouse interaction (Circular Whirl/Vortex Effect)
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 220) {
            const force = (220 - dist) / 220; // Stronger closer to mouse
            const safeDist = Math.max(dist, 5);

            // Tangential force for circular orbital swirl (whirlpool/vortex)
            // Perpendicular vector to (dx, dy) is (-dy, dx)
            const perpX = -dy / safeDist;
            const perpY = dx / safeDist;
            const swirlStrength = 0.85 * force;
            p.vx += perpX * swirlStrength;
            p.vy += perpY * swirlStrength;

            // Radial attraction force (pulling towards center) to create stable orbits
            const pullStrength = 0.28 * force;
            p.vx -= (dx / safeDist) * pullStrength;
            p.vy -= (dy / safeDist) * pullStrength;

            // Drag along with mouse velocity vector
            p.vx += mouse.vx * force * 0.08;
            p.vy += mouse.vy * force * 0.08;
          }
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Apply drag/stabilization
        p.vx *= 0.98;

        // Calculate opacity based on life/bounds
        let opacity = p.alpha;
        if (p.isSpark) {
          opacity = p.alpha * (1 - p.life / p.maxLife);
        } else {
          // Fade out near the top
          if (p.y < height * 0.3) {
            opacity = p.alpha * (p.y / (height * 0.3));
          }
          // Fade in at the bottom
          if (p.y > height * 0.8) {
            opacity = p.alpha * ((height - p.y) / (height * 0.2));
          }
        }

        // Render particles
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Add subtle radial gradient for premium glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        glow.addColorStop(0, '#ffffff'); // bright center
        glow.addColorStop(0.2, p.color.replace(`, ${p.alpha})`, `, ${opacity})`));
        glow.addColorStop(1, p.color.replace(`, ${p.alpha})`, ', 0)'));
        
        ctx.fillStyle = glow;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleWindowClick);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{ zIndex: 21000 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
      />
    </div>
  );
}
