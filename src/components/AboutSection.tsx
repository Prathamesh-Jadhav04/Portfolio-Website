'use client';

import { useState, useRef, useEffect } from 'react';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  details?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: '2022',
    title: 'COMMENCEMENT OF ENGINEERING JOURNEY',
    description: 'Began my Bachelor of Engineering in Computer Science. Stepped into the world of computational thinking, algorithms, and systems architecture.',
    details: 'Immersed myself in foundational engineering mathematics, logical reasoning, and structured programming paradigms.'
  },
  {
    id: 2,
    year: '2022',
    title: 'THE FIRST LINE OF CODE',
    description: 'Wrote my very first "Hello World" program. This small print statement ignited a passion for building complex software systems.',
    details: 'Started building command-line utilities and scripts, exploring data structures and debugging processes.'
  },
  {
    id: 3,
    year: '2023',
    title: 'MASTERING CS FUNDAMENTALS',
    description: 'Delved deep into Core Computer Science: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), and Database Management Systems (DBMS).',
    details: 'Designed custom relational database schemas and optimized algorithmic complexities for academic projects.'
  },
  {
    id: 4,
    year: '2024',
    title: 'DATA SCIENCE INTERNSHIP',
    description: 'Joined Uptricks Services Pvt. Ltd. as a Data Science Intern. Learned to handle, preprocess, and model complex datasets in Python.',
    details: 'Utilized pandas, numpy, and scikit-learn to analyze and draw actionable patterns from multi-dimensional datasets.'
  },
  {
    id: 5,
    year: '2024',
    title: 'SYSTEMS-LEVEL PIPELINES',
    description: 'Architected automated preprocessing pipelines to streamline machine learning workflows and database ingestion.',
    details: 'Significantly minimized data cleanup time and enhanced throughput, bridging raw data engineering with predictive modeling.'
  },
  {
    id: 6,
    year: '2025',
    title: 'GENAI & INTELLIGENT APIs',
    description: 'Engineered custom Retrieval-Augmented Generation (RAG) pipelines and automated AI-driven Code Review Chatbots.',
    details: 'Designed highly secure, low-latency RESTful API architectures using FastAPI and Node.js to serve LLM inferences.'
  },
  {
    id: 7,
    year: '2026',
    title: 'ENGINEERING GRADUATION',
    description: 'Graduated with a Bachelor of Engineering in Computer Science, maintaining a strong CGPA of 7.8.',
    details: 'Successfully built and defended a Clinical Decision Support System (CDSS) capstone project integrating multi-modal clinical data.'
  },
  {
    id: 8,
    year: '2026',
    title: 'NUROSEARCH & DPI ENGINE',
    description: 'Designed and implemented NuroSearch, a custom HNSW-indexed vector database, and DPI Engine, a multi-threaded network packet analysis tool.',
    details: 'Focused on low-latency vector operations, high-concurrency systems, and custom memory management configurations.'
  }
];

export function AboutSection() {
  const [activeYear, setActiveYear] = useState<string>('2022');
  const [activeCardId, setActiveCardId] = useState<number>(1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Reveal animation observer for main headers
    const revealObserver = new IntersectionObserver(
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
    animatables?.forEach((el) => revealObserver.observe(el));

    // Timeline scroll tracker observer
    // Targets a horizontal strip in the middle-upper part of the screen
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = entry.target.getAttribute('data-year');
            const id = entry.target.getAttribute('data-id');
            if (year) {
              setActiveYear(year);
            }
            if (id) {
              setActiveCardId(parseInt(id, 10));
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-25% 0px -45% 0px',
        threshold: 0.05
      }
    );

    const cards = sectionRef.current?.querySelectorAll('.timeline-card');
    cards?.forEach((card) => timelineObserver.observe(card));

    return () => {
      revealObserver.disconnect();
      timelineObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: '8rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
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

        {/* 2-Column Split Layout */}
        <div className="about-grid">
          {/* Left Column: Intro + Timeline cards */}
          <div>
            {/* Intro Header & Description */}
            <div style={{ marginBottom: '5rem' }}>
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
                  marginBottom: '2rem'
                }}
              >
                BUILDING
                <br />
                <span style={{ color: 'var(--accent-amber, #ffb400)' }}>THINGS</span>
                <br />
                THAT MATTER.
              </h2>

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

                {/* Tech Badges */}
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
              </div>
            </div>

            {/* Separator / Timeline Indicator */}
            <div
              className="animate-on-scroll"
              style={{
                fontFamily: 'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'rgba(245, 245, 245, 0.3)',
                textTransform: 'uppercase',
                marginBottom: '2.5rem',
                opacity: 0,
                transform: 'translateY(15px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}
            >
              // Interactive Journey & Milestones
            </div>

            {/* Scrollable Milestones Timeline Cards */}
            <div className="timeline-container">
              {timelineEvents.map((event) => {
                const isActive = activeCardId === event.id;
                return (
                  <div
                    key={event.id}
                    data-year={event.year}
                    data-id={event.id}
                    className={`timeline-card ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      const cardEl = document.querySelector(`[data-id="${event.id}"]`);
                      cardEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                  >
                    {/* Mobile Year Badge (Only visible on mobile) */}
                    <div className="mobile-year-badge">
                      {event.year}
                    </div>

                    {/* Timeline Dot on the line */}
                    <div className={`timeline-dot ${isActive ? 'active' : ''}`} />

                    <h3 className="timeline-card-title">
                      {event.title}
                    </h3>
                    
                    <p className="timeline-card-desc">
                      {event.description}
                    </p>

                    {event.details && (
                      <p className="timeline-card-details">
                        {event.details}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky dynamic Year display */}
          <div className="sticky-year-container">
            <div className="sticky-year-content">
              <span className="sticky-year-label">YEAR</span>
              <div key={activeYear} className="timeline-year-display">
                {activeYear}
              </div>
              <div className="sticky-year-details">
                <span>// 19.0760° N, 72.8777° E</span>
                <span>// CORE_SYSTEM_INDEXING: ACTIVE</span>
                <span>// INDEX: HNSW_INDEX_FOUND</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-on-scroll.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* 2-column Grid configuration */
        .about-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 6rem;
          align-items: start;
          position: relative;
        }

        /* Timeline vertical line */
        .timeline-container {
          position: relative;
          padding-left: 2.5rem;
          border-left: 1px solid rgba(245, 245, 245, 0.08);
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        /* Dot aligned with vertical line */
        .timeline-dot {
          position: absolute;
          left: -2.55rem;
          top: 2.3rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(245, 245, 245, 0.2);
          border: 2px solid #000000;
          transform: translateX(-50%);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        .timeline-dot.active {
          background: var(--accent-amber, #ffb400);
          box-shadow: 0 0 14px var(--accent-amber, #ffb400);
          transform: translateX(-50%) scale(1.5);
        }

        /* Individual Card styles */
        .timeline-card {
          position: relative;
          padding: 2.2rem;
          background: rgba(245, 245, 245, 0.012);
          border: 1px solid rgba(245, 245, 245, 0.03);
          border-radius: 8px;
          cursor: pointer;
          opacity: 0.3;
          transform: scale(0.97);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-card.active {
          opacity: 1;
          transform: scale(1);
          background: rgba(255, 180, 0, 0.015) !important;
          border-color: rgba(255, 180, 0, 0.2) !important;
          border-left: 3px solid var(--accent-amber, #ffb400) !important;
          padding-left: calc(2.2rem - 2px) !important;
          box-shadow: 0 15px 40px -15px rgba(255, 180, 0, 0.08), inset 0 1px 0px rgba(255, 255, 255, 0.05);
        }

        .timeline-card:hover {
          border-color: rgba(245, 245, 245, 0.12);
          background: rgba(245, 245, 245, 0.02);
        }

        .timeline-card.active:hover {
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.025) !important;
        }

        .timeline-card-title {
          font-family: var(--font-bebas-neue, "Bebas Neue", cursive);
          font-size: 1.6rem;
          letter-spacing: 0.05em;
          color: rgba(245, 245, 245, 0.85);
          margin-bottom: 0.8rem;
          transition: color 0.4s ease;
        }

        .timeline-card.active .timeline-card-title {
          color: var(--accent-amber, #ffb400);
        }

        .timeline-card-desc {
          font-family: var(--font-inter, "Inter", sans-serif);
          font-weight: 300;
          font-size: 1.05rem;
          line-height: 1.6;
          color: rgba(245, 245, 245, 0.5);
          transition: color 0.4s ease;
          margin-bottom: 0.6rem;
        }

        .timeline-card.active .timeline-card-desc {
          color: rgba(245, 245, 245, 0.85);
        }

        .timeline-card-details {
          font-family: var(--font-inter, "Inter", sans-serif);
          font-weight: 300;
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.25);
          transition: color 0.4s ease;
        }

        .timeline-card.active .timeline-card-details {
          color: rgba(245, 245, 245, 0.55);
        }

        /* Sticky container for desktop */
        .sticky-year-container {
          position: sticky;
          top: 25vh;
          height: 50vh;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .sticky-year-content {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .sticky-year-label {
          font-family: var(--font-jetbrains-mono, "JetBrains Mono", monospace);
          font-size: 0.75rem;
          letter-spacing: 0.4em;
          color: rgba(245, 245, 245, 0.2);
          margin-bottom: 0.5rem;
          transform: translateX(-15px);
        }

        /* Giant Year Slide-in animation */
        @keyframes yearSlideIn {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 0.85;
          }
        }

        .timeline-year-display {
          font-family: var(--font-bebas-neue, "Bebas Neue", cursive);
          font-size: clamp(10rem, 20vw, 20rem);
          line-height: 0.8;
          font-weight: 900;
          background: linear-gradient(180deg, var(--accent-amber, #ffb400) 40%, rgba(255, 180, 0, 0.3) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0.95;
          letter-spacing: -0.04em;
          filter: drop-shadow(0 0 40px rgba(255, 180, 0, 0.15));
          animation: yearSlideIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          user-select: none;
        }

        .sticky-year-details {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
          font-family: var(--font-jetbrains-mono, "JetBrains Mono", monospace);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.25);
          margin-top: 1.5rem;
          transform: translateX(-15px);
        }

        /* Mobile layout styling fallback */
        .mobile-year-badge {
          display: none;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .sticky-year-container {
            display: none !important;
          }
          
          .mobile-year-badge {
            display: inline-block;
            font-family: var(--font-jetbrains-mono, "JetBrains Mono", monospace);
            font-size: 0.7rem;
            color: var(--accent-amber, #ffb400);
            border: 1px solid rgba(255, 180, 0, 0.25);
            background: rgba(255, 180, 0, 0.06);
            padding: 0.25rem 0.6rem;
            border-radius: 4px;
            margin-bottom: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
          
          .timeline-card {
            opacity: 1 !important;
            transform: none !important;
            padding: 1.8rem !important;
          }

          .timeline-dot {
            top: 4.2rem !important; /* adjust for the badge space */
          }
        }
      `}</style>
    </section>
  );
}
