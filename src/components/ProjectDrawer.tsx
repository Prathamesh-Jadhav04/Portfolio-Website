'use client';

import React, { useEffect } from 'react';
import { Magnetic } from './ui/Magnetic';

interface Project {
  id: string;
  title: string;
  year: string;
  tags: string[];
  description: string;
}

interface CaseStudyDetails {
  role: string;
  challenges: string[];
  solutions: string[];
  metrics: string[];
  technologies: string[];
  githubUrl: string;
}

const caseStudiesData: Record<string, CaseStudyDetails> = {
  '01': {
    role: 'Lead AI Systems Architect',
    challenges: [
      'Standard high-dimensional vector lookups scale at O(N) linear time, causing massive latency bottlenecks for production RAG systems.',
      'Ensuring thread safety and low latency during concurrent index builds and query phases.'
    ],
    solutions: [
      'Implemented a Hierarchical Navigable Small World (HNSW) vector index from scratch, bringing search complexity down to O(log N).',
      'Designed dynamic thread-safe insertion rules using custom locking nodes and pointer synchronization.',
      'Built a complete chunk-level semantic cache in FastAPI integrated with OpenAI embeddings.'
    ],
    metrics: [
      'Reduced average query retrieval latency to <15ms on 100,000+ vector nodes.',
      'Achieved a 35% memory footprint reduction through scalar quantization codecs.'
    ],
    technologies: ['Python', 'Rust', 'FastAPI', 'NumPy', 'OpenAI API', 'HNSW Indexing'],
    githubUrl: 'https://github.com/Prathamesh-Jadhav04/NuroSearch'
  },
  '02': {
    role: 'Backend & Networking Systems Engineer',
    challenges: [
      'Extracting TLS Server Name Indication (SNI) hostnames in real-time under high-throughput network loads without packets dropping.',
      'Developing thread-safe logging pipes to prevent memory leak build-ups during continuous stream capture.'
    ],
    solutions: [
      'Developed a multi-threaded C/Python ingestion listener wrapping libpcap for zero packet drop.',
      'Designed a synchronized circular queue isolating raw packet ingestion from header parsing buffers.',
      'Engineered an SNI extraction filter isolating client hello packets.'
    ],
    metrics: [
      'Successfully sustained analysis rates of 500+ packets/sec with 0% packet loss.',
      'Decrypted, mapped, and structured SNI metadata logs instantly into audit database indices.'
    ],
    technologies: ['Python', 'C Language', 'Scapy', 'Network Protocols', 'Multithreading', 'pcap'],
    githubUrl: 'https://github.com/Prathamesh-Jadhav04/DPI-Engine'
  },
  '03': {
    role: 'Full-Stack Developer',
    challenges: [
      'Managing API rate limit bottlenecks and aggregation delays across separate third-party catalogues (Jikan, TMDB).',
      'Minimizing frontend layout cumulative shifts while dynamically rendering card images.'
    ],
    solutions: [
      'Developed a unified Next.js API route acting as an orchestrator with internal redis cache mapping.',
      'Crafted custom fluid CSS grids layout utilizing relative skeleton placeholder layers.',
      'Configured static asset prefetching rules inside Next.js middleware layers.'
    ],
    metrics: [
      'Achieved dynamic gallery page rendering times of <200ms.',
      'Secured zero Cumulative Layout Shift (CLS) scores during rapid page-page jumps.'
    ],
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'REST APIs', 'Node.js'],
    githubUrl: 'https://github.com/Prathamesh-Jadhav04/KozumiHub'
  },
  '04': {
    role: 'Frontend & Analytics Developer',
    challenges: [
      'Creating responsive financial tracking graphs that render dynamically without crashing on mobile devices.',
      'Ensuring secure offline database capability with smooth transaction synchronization.'
    ],
    solutions: [
      'Implemented Chart.js layout wrappers optimized for aspect-ratio responsive scale changes.',
      'Designed transactional state engines syncing automatically to structured local storage stores.',
      'Engineered dynamic category filtering rules for instantaneous chart redraw triggers.'
    ],
    metrics: [
      'Instantly updates interactive graphs with zero animation lags.',
      'Supports complete offline capability with zero transaction sync conflicts.'
    ],
    technologies: ['Next.js', 'TypeScript', 'Chart.js', 'LocalStorage API', 'CSS Grid', 'TailwindCSS'],
    githubUrl: 'https://github.com/Prathamesh-Jadhav04/SpendsTrack'
  },
  '05': {
    role: 'DevOps & AI Integration Engineer',
    challenges: [
      'LLM context limits require chunking diffs while retaining context of pull request logic flow.',
      'Interfacing secure webhook servers that respond instantly and prevent PR review duplicate triggers.'
    ],
    solutions: [
      'Engineered an intelligent AST diff chunker feeding filtered context trees into LLM prompts.',
      'Constructed a reliable FastAPI hook server with internal checksum ID deduplication logic.',
      'Integrated LangChain prompt logic mapped dynamically to GitHub API comment lines.'
    ],
    metrics: [
      'Reviews and comments on pull requests in <8 seconds from commit push.',
      'Achieved 85% satisfaction rating from developers using the automated reviews.'
    ],
    technologies: ['Python', 'FastAPI', 'LangChain', 'LLM APIs', 'GitHub Webhooks', 'CI/CD Pipelines'],
    githubUrl: 'https://github.com/Prathamesh-Jadhav04/Code-Review-Chatbot'
  }
};

function ProjectSchematic({ id }: { id: string }) {
  if (id === '01') {
    return (
      <svg width="100%" height="180" viewBox="0 0 400 180" style={{ background: '#121212', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1.5rem 0' }}>
        <g stroke="rgba(255,180,0,0.15)" strokeWidth="1">
          <line x1="100" y1="40" x2="300" y2="40" />
          <line x1="70" y1="90" x2="200" y2="90" />
          <line x1="200" y1="90" x2="330" y2="90" />
          <line x1="50" y1="140" x2="150" y2="140" />
          <line x1="150" y1="140" x2="250" y2="140" />
          <line x1="250" y1="140" x2="350" y2="140" />
          <line x1="100" y1="40" x2="70" y2="90" strokeDasharray="3" />
          <line x1="300" y1="40" x2="330" y2="90" strokeDasharray="3" />
          <line x1="200" y1="90" x2="150" y2="140" strokeDasharray="3" />
          <line x1="200" y1="90" x2="250" y2="140" strokeDasharray="3" />
        </g>
        <circle cx="100" cy="40" r="5" fill="#ffb400" />
        <circle cx="300" cy="40" r="5" fill="#ffb400" />
        <circle cx="70" cy="90" r="4.5" fill="#f5f5f5" opacity="0.8" />
        <circle cx="200" cy="90" r="4.5" fill="#ffb400" />
        <circle cx="330" cy="90" r="4.5" fill="#f5f5f5" opacity="0.8" />
        <circle cx="50" cy="140" r="4" fill="#f5f5f5" opacity="0.4" />
        <circle cx="150" cy="140" r="4" fill="#f5f5f5" opacity="0.4" />
        <circle cx="250" cy="140" r="4" fill="#ffb400" />
        <circle cx="350" cy="140" r="4" fill="#f5f5f5" opacity="0.4" />
        <text x="15" y="20" fill="rgba(255,180,0,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8">HNSW LAYERED SEARCH TOPOLOGY</text>
        <text x="105" y="35" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7">ENTRY LAYER</text>
        <text x="255" y="152" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7">NEAREST NEIGHBOR</text>
      </svg>
    );
  }
  if (id === '02') {
    return (
      <svg width="100%" height="180" viewBox="0 0 400 180" style={{ background: '#121212', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1.5rem 0' }}>
        <g stroke="rgba(255,180,0,0.15)" strokeWidth="1" fill="none">
          <rect x="20" y="60" width="70" height="35" rx="3" />
          <rect x="150" y="60" width="90" height="35" rx="3" />
          <rect x="300" y="60" width="80" height="35" rx="3" />
          <path d="M 90 77 L 150 77" stroke="#ffb400" />
          <path d="M 240 77 L 300 77" stroke="#ffb400" />
        </g>
        <text x="55" y="81" fill="#f5f5f5" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">libpcap</text>
        <text x="195" y="81" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">parser-queue</text>
        <text x="340" y="81" fill="#f5f5f5" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">TLS SNI</text>
        <circle cx="110" cy="77" r="2.5" fill="#ffb400" />
        <circle cx="130" cy="77" r="2.5" fill="#ffb400" />
        <circle cx="260" cy="77" r="2.5" fill="#ffb400" />
        <circle cx="280" cy="77" r="2.5" fill="#ffb400" />
        <text x="15" y="20" fill="rgba(255,180,0,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8">DPI STREAM INGESTION FLOW</text>
        <text x="150" y="130" fill="rgba(245,245,245,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7">// Multi-threaded circular packet buffer</text>
      </svg>
    );
  }
  if (id === '03') {
    return (
      <svg width="100%" height="180" viewBox="0 0 400 180" style={{ background: '#121212', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1.5rem 0' }}>
        <g stroke="rgba(255,180,0,0.15)" strokeWidth="1" fill="none">
          <rect x="20" y="30" width="360" height="18" rx="2" />
          <rect x="20" y="60" width="105" height="100" rx="3" />
          <rect x="147" y="60" width="105" height="100" rx="3" />
          <rect x="275" y="60" width="105" height="100" rx="3" />
        </g>
        <rect x="147" y="60" width="105" height="100" rx="3" fill="rgba(255,180,0,0.02)" stroke="#ffb400" strokeWidth="1" />
        <circle cx="200" cy="110" r="7" fill="#ffb400" opacity="0.6" />
        <text x="15" y="20" fill="rgba(255,180,0,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8">IMMERSIVE MEDIA CATALOG GRID</text>
        <text x="30" y="42" fill="rgba(245,245,245,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6">SEARCH ENTERTAINMENT TITLE...</text>
      </svg>
    );
  }
  if (id === '04') {
    return (
      <svg width="100%" height="180" viewBox="0 0 400 180" style={{ background: '#121212', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1.5rem 0' }}>
        <g stroke="rgba(245,245,245,0.03)" strokeWidth="1">
          <line x1="40" y1="40" x2="360" y2="40" />
          <line x1="40" y1="80" x2="360" y2="80" />
          <line x1="40" y1="120" x2="360" y2="120" />
        </g>
        <line x1="40" y1="20" x2="40" y2="150" stroke="rgba(245,245,245,0.15)" strokeWidth="1.5" />
        <line x1="40" y1="150" x2="370" y2="150" stroke="rgba(245,245,245,0.15)" strokeWidth="1.5" />
        <path d="M 40 130 Q 90 110 140 90 T 240 60 T 340 30" fill="none" stroke="#ffb400" strokeWidth="2" />
        <circle cx="340" cy="30" r="3.5" fill="#ffb400" />
        <text x="15" y="15" fill="rgba(255,180,0,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8">WEALTH GROWTH RATE PREVIEW</text>
        <text x="345" y="24" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7">BALANCE</text>
      </svg>
    );
  }
  if (id === '05') {
    return (
      <svg width="100%" height="180" viewBox="0 0 400 180" style={{ background: '#121212', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1.5rem 0' }}>
        <g stroke="rgba(245,245,245,0.1)" strokeWidth="1.5" fill="none">
          <path d="M 30 90 L 370 90" />
          <path d="M 100 90 C 140 90, 160 45, 200 45 L 300 45 C 330 45, 340 90, 360 90" />
        </g>
        <circle cx="50" cy="90" r="4.5" fill="#f5f5f5" opacity="0.3" />
        <circle cx="100" cy="90" r="4.5" fill="#f5f5f5" opacity="0.3" />
        <circle cx="160" cy="45" r="4.5" fill="#ffb400" />
        <circle cx="240" cy="45" r="4.5" fill="#ffb400" />
        <circle cx="360" cy="90" r="5.5" fill="#ffb400" />
        <rect x="180" y="80" width="130" height="35" rx="3" fill="#181818" stroke="#ffb400" strokeWidth="1" />
        <path d="M 240 45 L 240 80" stroke="#ffb400" strokeDasharray="3" />
        <text x="190" y="93" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7">LLM PR REVIEW: ACTIVE</text>
        <text x="190" y="106" fill="rgba(245,245,245,0.6)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6.5">"Optimize lines 12-25..."</text>
        <text x="15" y="20" fill="rgba(255,180,0,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8">GITHUB PR WEBHOOK PIPELINE</text>
      </svg>
    );
  }
  return null;
}

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDrawer({ project, isOpen, onClose }: ProjectDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!project) return null;
  const details = caseStudiesData[project.id];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 5000,
        pointerEvents: isOpen ? 'all' : 'none',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(10, 10, 10, 0.75)',
          backdropFilter: 'blur(10px)',
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Drawer content panel */}
      <div
        className="drawer-panel"
        data-lenis-prevent
        style={{
          position: 'relative',
          width: 'clamp(350px, 45vw, 600px)',
          height: '100%',
          backgroundColor: '#0a0a0a',
          borderLeft: '1px solid rgba(245, 245, 245, 0.08)',
          boxShadow: '-10px 0px 40px rgba(0, 0, 0, 0.5)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 5001,
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '2rem 2.5rem',
            borderBottom: '1px solid rgba(245, 245, 245, 0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-jetbrains-mono, monospace)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: 'var(--accent-amber, #ffb400)',
            }}
          >
            PROJECT // {project.id}
          </span>
          <Magnetic range={40} strength={0.35}>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(245, 245, 245, 0.5)',
                fontSize: '1rem',
                cursor: 'pointer',
                fontFamily: 'monospace',
                padding: '0.5rem',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffb400')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245, 245, 245, 0.5)')}
            >
              ✕
            </button>
          </Magnetic>
        </div>

        {/* Scrollable details */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '2.5rem',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-bebas-neue, sans-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 0.9,
              color: '#f5f5f5',
              marginBottom: '1rem',
              letterSpacing: '0.02em',
            }}
          >
            {project.title}
          </h3>

          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'var(--font-jetbrains-mono, monospace)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.1em',
                  color: 'rgba(245, 245, 245, 0.5)',
                  border: '1px solid rgba(245, 245, 245, 0.08)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <p
            style={{
              fontFamily: 'var(--font-inter, sans-serif)',
              fontWeight: 300,
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'rgba(245, 245, 245, 0.6)',
              marginBottom: '1.5rem',
            }}
          >
            {project.description}
          </p>

          {/* Schematic SVG Image */}
          <ProjectSchematic id={project.id} />

          {details && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
              {/* Role */}
              <div>
                <h4 className="detail-section-title">ROLE</h4>
                <p className="detail-section-text" style={{ color: '#f5f5f5', fontWeight: 400 }}>
                  {details.role}
                </p>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="detail-section-title">KEY CHALLENGES</h4>
                <ul className="detail-section-list">
                  {details.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h4 className="detail-section-title">SOLUTIONS</h4>
                <ul className="detail-section-list">
                  {details.solutions.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              {/* Key Metrics */}
              <div>
                <h4 className="detail-section-title">OUTCOMES & METRICS</h4>
                <ul className="detail-section-list" style={{ color: 'var(--accent-amber, #ffb400)' }}>
                  {details.metrics.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="detail-section-title">SYSTEM SPECIFICATION</h4>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  {details.technologies.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-jetbrains-mono, monospace)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.08em',
                        color: 'var(--accent-amber, #ffb400)',
                        background: 'rgba(255, 180, 0, 0.04)',
                        border: '1px solid rgba(255, 180, 0, 0.15)',
                        borderRadius: '3px',
                        padding: '0.3rem 0.6rem',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code link */}
              <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
                <Magnetic range={50} strength={0.3}>
                  <a
                    href={details.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="drawer-cta"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      border: '1px solid var(--accent-amber, #ffb400)',
                      background: 'transparent',
                      color: 'var(--accent-amber, #ffb400)',
                      fontFamily: 'var(--font-jetbrains-mono, monospace)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      padding: '0.8rem 2rem',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent-amber, #ffb400)';
                      e.currentTarget.style.color = '#0a0a0a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--accent-amber, #ffb400)';
                    }}
                  >
                    EXPLORE CODEBASE &nbsp; →
                  </a>
                </Magnetic>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .detail-section-title {
          font-family: var(--font-jetbrains-mono, monospace);
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.35);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .detail-section-text {
          font-family: var(--font-inter, sans-serif);
          font-weight: 300;
          font-size: 0.95rem;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.7);
        }

        .detail-section-list {
          padding-left: 1.2rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .detail-section-list li {
          font-family: var(--font-inter, sans-serif);
          font-weight: 300;
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.7);
        }

        @media (max-width: 768px) {
          .drawer-panel {
            width: 100vw !important;
            border-left: none !important;
          }
        }
      `}</style>
    </div>
  );
}
