'use client';

import { useEffect, useState } from 'react';
import { Magnetic } from './ui/Magnetic';
import { ScramblerText } from './ui/ScramblerText';

interface NavigationProps {
  onLogoDoubleClick: () => void;
}

export function Navigation({ onLogoDoubleClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['about', 'projects', 'contact'];
    
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          root: null,
          rootMargin: '-40% 0px -40% 0px',
          threshold: 0,
        }
      );
      
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  return (
    <nav className={`sticky-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-content">
        {/* Brand Logo with magnetic draw, double-click trigger, and hover tooltip hint */}
        <div className="logo-group">
          <Magnetic range={40} strength={0.35}>
            <span
              className="nav-logo"
              onDoubleClick={onLogoDoubleClick}
              style={{
                cursor: 'pointer',
                userSelect: 'none',
                display: 'inline-block'
              }}
            >
              <ScramblerText text="P. JADHAV" delay={1200} />
            </span>
          </Magnetic>
          <div className="logo-tooltip">
            [DBL-CLICK FOR SHELL]
          </div>
        </div>

        <div className="nav-links">
          <Magnetic>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
              <ScramblerText text="Origin" delay={1400} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
              <ScramblerText text="Work" delay={1600} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
              <ScramblerText text="Build" delay={1800} />
            </a>
          </Magnetic>
        </div>
      </div>

      <style>{`
        .logo-group {
          position: relative;
          display: inline-block;
        }

        .logo-tooltip {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(0);
          background: #050505;
          border: 1px solid rgba(255, 180, 0, 0.2);
          color: var(--accent-amber, #ffb400);
          font-family: var(--font-jetbrains-mono, monospace);
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          padding: 0.35rem 0.65rem;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0.8;
          pointer-events: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
          z-index: 1001;
        }

        .logo-group:hover .logo-tooltip {
          opacity: 1;
          border-color: rgba(255, 180, 0, 0.45);
        }
      `}</style>
    </nav>
  );
}
