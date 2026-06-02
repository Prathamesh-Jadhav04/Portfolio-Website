'use client';

import { useRef, useEffect } from 'react';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-10% 0px' }
    );

    const animatables = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatables?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: '8rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '100%' }}>
        {/* Section label */}
        <div
          className="animate-on-scroll"
          style={{
            fontFamily: 'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--accent-amber, #ffb400)',
            marginBottom: '3rem',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.7s cubic-bezier(.65,0,.35,1), transform 0.7s cubic-bezier(.65,0,.35,1)',
          }}
        >
          01 / Origin
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Big heading */}
          <div>
            <h2
              className="animate-on-scroll"
              style={{
                fontFamily: 'var(--font-bebas-neue, "Bebas Neue", cursive)',
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                lineHeight: 0.9,
                color: 'var(--text-color, #f5f5f5)',
                opacity: 0,
                transform: 'translateY(30px)',
                transition: 'opacity 0.8s cubic-bezier(.65,0,.35,1) 0.1s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.1s',
              }}
            >
              BUILDING
              <br />
              <span style={{ color: 'var(--accent-amber, #ffb400)' }}>THINGS</span>
              <br />
              THAT MATTER.
            </h2>
          </div>

          {/* Right: Text content */}
          <div
            className="animate-on-scroll"
            style={{
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.8s cubic-bezier(.65,0,.35,1) 0.2s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.2s',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-inter, "Inter", sans-serif)',
                fontWeight: 300,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'var(--text-dim, rgba(245,245,245,0.5))',
                marginBottom: '1.5rem',
              }}
            >
              I&apos;m Prathamesh Jadhav — an engineering-focused AI/ML developer specializing in building production-grade vector databases, RAG pipelines, and intelligent API systems.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter, "Inter", sans-serif)',
                fontWeight: 300,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'var(--text-dim, rgba(245,245,245,0.5))',
                marginBottom: '2rem',
              }}
            >
              From custom HNSW indexing to systems-level multi-threaded network analysis, I focus on building scalable, low-latency architectures that bridge AI research and robust production systems.
            </p>

            {/* Core Competencies Tech Badges */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              {['Vector Search', 'RAG Pipelines', 'GenAI APIs', 'Network Systems', 'Performance Tuning'].map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.08em',
                    color: 'var(--accent-amber, #ffb400)',
                    background: 'rgba(255, 180, 0, 0.05)',
                    border: '1px solid rgba(255, 180, 0, 0.12)',
                    borderRadius: '4px',
                    padding: '0.35rem 0.75rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
                paddingTop: '3rem',
                borderTop: '1px solid rgba(245,245,245,0.08)',
              }}
            >
              {[
                { num: '2022', label: 'EST.' },
                { num: '5+', label: 'Projects Shipped' },
                { num: '80+', label: 'Open Source Commits' },
                { num: '∞', label: 'Ideas in Queue' },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="about-stat-card"
                  style={{
                    background: 'rgba(245, 245, 245, 0.015)',
                    border: '1px solid rgba(245, 245, 245, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '6px',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    className="stat-num"
                    style={{
                      fontFamily: 'var(--font-bebas-neue, "Bebas Neue", cursive)',
                      fontSize: '2.8rem',
                      color: 'var(--text-color, #f5f5f5)',
                      lineHeight: 1,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--text-dim, rgba(245,245,245,0.5))',
                      marginTop: '0.5rem',
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-on-scroll.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .about-stat-card:hover {
          background: rgba(255, 180, 0, 0.03) !important;
          border-color: rgba(255, 180, 0, 0.25) !important;
          transform: translateY(-5px);
          box-shadow: 0 12px 30px -15px rgba(255, 180, 0, 0.12);
        }

        .about-stat-card:hover .stat-num {
          color: var(--accent-amber, #ffb400) !important;
        }

        @media (max-width: 768px) {
          #about > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
