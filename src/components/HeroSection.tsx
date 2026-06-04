'use client';

import { useState, useEffect, useRef } from 'react';
import { Magnetic } from './ui/Magnetic';
import { ScramblerText } from './ui/ScramblerText';

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
      {/* Floating System Diagnostic Logs HUD */}
      <SystemLogsHUD />
      <div className="hero-content container">
        <div className="hero-text-wrapper">
          <div className="year-badge-wrapper">
            <Magnetic range={60} strength={0.35}>
              <div className="year-badge" style={{ display: 'inline-block' }}>
                <ScramblerText text="EST. 2022 — CHHATRAPATI SAMBHAJINAGAR, INDIA" delay={1200} />
              </div>
            </Magnetic>
          </div>

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
            <ScramblerText text="AI/ML Developer. Data Scientist. GenAI Engineer." delay={1500} />
          </p>
        </div>

        <Magnetic range={40} strength={0.3}>
          <div className="scroll-explore">
            <span>
              <ScramblerText text="SCROLL TO EXPLORE" delay={1800} />
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
          margin-top: 0 !important; /* Fixed offset */
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
