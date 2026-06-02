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
                marginBottom: '2rem',
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
              }}
            >
              From custom HNSW indexing to systems-level multi-threaded network analysis, I focus on building scalable, low-latency architectures that bridge AI research and robust production systems.
            </p>

            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                marginTop: '3rem',
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
                <div key={label}>
                  <div
                    style={{
                      fontFamily: 'var(--font-bebas-neue, "Bebas Neue", cursive)',
                      fontSize: '2.5rem',
                      color: 'var(--text-color, #f5f5f5)',
                      lineHeight: 1,
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
                      marginTop: '0.25rem',
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

        @media (max-width: 768px) {
          #about > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
