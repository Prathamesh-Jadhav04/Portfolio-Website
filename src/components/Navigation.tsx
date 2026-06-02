'use client';

import { useEffect, useState } from 'react';
import { Magnetic } from './ui/Magnetic';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-content">
        <span className="nav-logo">P. JADHAV</span>
        <div className="nav-links">
          <Magnetic>
            <a href="#about">Origin</a>
          </Magnetic>
          <Magnetic>
            <a href="#projects">Work</a>
          </Magnetic>
          <Magnetic>
            <a href="#contact">Build</a>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
}
