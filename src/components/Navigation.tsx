'use client';

import { useEffect, useState } from 'react';

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
          <a href="#about">Origin</a>
          <a href="#projects">Work</a>
          <a href="#contact">Build</a>
        </div>
      </div>
    </nav>
  );
}
