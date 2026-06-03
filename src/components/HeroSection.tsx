'use client';

import { useState, useEffect, useRef } from 'react';
import { Magnetic } from './ui/Magnetic';
import { ScramblerText } from './ui/ScramblerText';

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 25000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.8,
        });
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle background grid lines
      ctx.strokeStyle = 'rgba(255, 180, 0, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dxMouse = mouseRef.current.x - p.x;
        const dyMouse = mouseRef.current.y - p.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 200) {
          p.x += (dxMouse / distMouse) * 0.3;
          p.y += (dyMouse / distMouse) * 0.3;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 180, 0, 0.15)';
        ctx.fill();

        particles.forEach((p2) => {
          if (p === p2) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (130 - dist) / 130 * 0.07;
            ctx.strokeStyle = `rgba(255, 180, 0, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        if (distMouse < 180) {
          const alpha = (180 - distMouse) / 180 * 0.15;
          ctx.strokeStyle = `rgba(255, 180, 0, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />
  );
}

function SystemLogsHUD() {
  const [latency, setLatency] = useState(12);
  const [time, setTime] = useState('');

  useEffect(() => {
    const latencyInterval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 6) + 10);
    }, 2000);

    const clockInterval = setInterval(() => {
      const now = new Date();
      const pad = (n: number) => n.toString().padStart(2, '0');
      setTime(`${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`);
    }, 1000);

    return () => {
      clearInterval(latencyInterval);
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <div className="hero-hud-logs">
      <div className="hud-line">// PRATHAMESH_JADHAV_PORTFOLIO</div>
      <div className="hud-line">SYSTEM STATUS: <span className="green-glow">OPERATIONAL</span></div>
      <div className="hud-line">CORE LATENCY: <span>{latency}ms</span></div>
      <div className="hud-line">ACTIVE NODE: <span>NODE_AI_26_01</span></div>
      <div className="hud-line">SYS_TIME: <span>{time || '--:--:--'}</span></div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="full-screen">
      {/* Background Interactive Particle Constellation Grid */}
      <ParticleBackground />

      {/* Floating System Diagnostic Logs HUD */}
      <SystemLogsHUD />

      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="bg-video"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-ink-swirling-in-water-4331-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay" />
      </div>

      <div className="hero-content container">
        <div className="hero-text-wrapper">
          <Magnetic range={30} strength={0.2}>
            <div className="year-badge" style={{ display: 'inline-block' }}>
              <ScramblerText text="EST. 2022" />
            </div>
          </Magnetic>

          <h1 className="hero-headline">
            <div className="line">
              <span>I BUILD.</span>
            </div>
            <div className="line">
              <span>I SHIP.</span>
            </div>
            <div className="line">
              <span>I OPTIMIZE.</span>
            </div>
          </h1>

          <p className="hero-subtext">
            <ScramblerText text="AI/ML Developer. Data Scientist. GenAI Engineer." />
          </p>
        </div>

        <Magnetic range={40} strength={0.3}>
          <div className="scroll-explore">
            <span>
              <ScramblerText text="SCROLL TO EXPLORE" />
            </span>
            <div className="scroll-line" />
          </div>
        </Magnetic>
      </div>

      <style>{`
        .year-badge {
          border: 1px solid rgba(255, 180, 0, 0.15) !important;
          background: rgba(255, 180, 0, 0.02) !important;
          padding: 0.35rem 0.85rem !important;
          border-radius: 4px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          margin-top: 1.5rem !important; /* Lowered position slightly */
          margin-bottom: 2rem !important; /* Added space before title */
          cursor: pointer;
        }

        .year-badge:hover {
          border-color: rgba(255, 180, 0, 0.45) !important;
          background: rgba(255, 180, 0, 0.06) !important;
          box-shadow: 0 0 20px rgba(255, 180, 0, 0.18);
        }

        .hero-hud-logs {
          position: absolute;
          top: 5rem;
          right: 5rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: rgba(245, 245, 245, 0.25);
          letter-spacing: 0.15em;
          border-left: 2px solid rgba(255, 180, 0, 0.25);
          padding-left: 1rem;
          z-index: 10;
          pointer-events: none;
          text-transform: uppercase;
        }

        .hero-hud-logs .green-glow {
          color: #00ff66;
          text-shadow: 0 0 10px rgba(0, 255, 102, 0.4);
        }

        .scroll-explore {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .scroll-explore:hover {
          color: var(--accent-amber, #ffb400) !important;
        }

        .scroll-explore:hover .scroll-line {
          background: var(--accent-amber, #ffb400) !important;
          animation: lineStretch 0.8s infinite alternate ease-in-out;
        }

        @keyframes lineStretch {
          from {
            width: 30px;
          }
          to {
            width: 55px;
          }
        }

        @media (max-width: 992px) {
          .hero-hud-logs {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
