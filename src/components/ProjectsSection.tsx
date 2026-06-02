'use client';

import { useEffect, useRef, useState } from 'react';
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

const projects: Project[] = [
  {
    id: '01',
    title: 'NUROSEARCH',
    year: '2026',
    tags: ['AI/ML', 'Vector DB', 'RAG'],
    description: 'Custom vector database from scratch implementing HNSW indexing and a full-stack RAG pipeline.',
  },
  {
    id: '02',
    title: 'DPI ENGINE',
    year: '2026',
    tags: ['Systems', 'Python', 'Networking'],
    description: 'Multi-threaded deep packet inspection engine analyzing 500+ packets/sec with TLS SNI extraction.',
  },
  {
    id: '03',
    title: 'KOZUMIHUB',
    year: '2026',
    tags: ['TypeScript', 'Next.js', 'Web App'],
    description: 'Entertainment discovery platform for anime and movies featuring smart discovery and immersive UI.',
  },
  {
    id: '04',
    title: 'SPENDSTRACK',
    year: '2026',
    tags: ['Finance', 'TypeScript', 'Dashboard'],
    description: 'Personal wealth tracking application with dynamic visualization and category analytics.',
  },
  {
    id: '05',
    title: 'CODE CHATBOT',
    year: '2025',
    tags: ['AI', 'Python', 'LLM'],
    description: 'Automated AI assistant built to review pull requests and provide constructive feedback on code structure.',
  },
];

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

function ProjectCard({
  project,
  index,
  isActive,
  isExpanded,
  onToggle
}: {
  project: Project;
  index: number;
  isActive: boolean;
  isExpanded: boolean;
  onToggle: (id: string, e: React.MouseEvent) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const details = caseStudiesData[project.id];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      data-id={project.id}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => onToggle(project.id, e)}
      className={`project-card ${isExpanded ? 'expanded' : ''} ${isActive ? 'active' : ''}`}
      style={{
        display: 'grid',
        gridTemplateRows: isExpanded ? 'auto 1fr' : 'auto 0fr',
        overflow: 'hidden',
        opacity: visible ? undefined : 0,
        transform: visible ? undefined : 'translateY(40px)',
      }}
    >
      {/* Header Row: Title, Teaser Description, and Toggle Button */}
      <div>
        {/* Mobile Project Badge */}
        <div className="mobile-project-badge">
          PROJECT {project.id}
        </div>

        {/* Project Dot aligned with vertical line */}
        <div className={`project-dot ${isActive ? 'active' : ''}`} />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          {/* Left: number + title */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', flex: 1 }}>
            <span
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                color: isExpanded ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.2)',
                transition: 'color 0.4s ease',
                flexShrink: 0,
              }}
            >
              {project.id}
            </span>

            <span
              className="project-title-text"
              style={{
                fontFamily: 'var(--font-heading, sans-serif)',
                lineHeight: 1,
                letterSpacing: '0.02em',
              }}
            >
              {project.title}
            </span>
          </div>

          {/* Right: tags + year + action button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexShrink: 0,
            }}
          >
            {/* Tags (Desktop) */}
            <div className="project-tags-container" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    color: isExpanded ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.4)',
                    border: isExpanded ? '1px solid rgba(255, 180, 0, 0.25)' : '1px solid rgba(245,245,245,0.12)',
                    borderRadius: '999px',
                    padding: '0.25rem 0.75rem',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Year */}
            <span
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                color: 'rgba(245,245,245,0.3)',
                minWidth: '3rem',
                textAlign: 'right',
              }}
            >
              {project.year}
            </span>

            {/* In-Place Toggle Button */}
            <button
              onClick={(e) => onToggle(project.id, e)}
              className="project-trigger-btn"
              style={{
                background: 'none',
                color: isExpanded ? 'var(--accent-amber, #ffb400)' : 'rgba(245, 245, 245, 0.4)',
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                padding: '0.35rem 0.75rem',
                border: isExpanded ? '1px solid rgba(255, 180, 0, 0.25)' : '1px solid rgba(245, 245, 245, 0.1)',
                borderRadius: '4px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                flexShrink: 0,
              }}
            >
              {isExpanded ? '[ - CLOSE ]' : '[ + CASE STUDY ]'}
            </button>
          </div>
        </div>

        {/* Description Teaser */}
        <div className="project-card-desc-container">
          <span
            style={{
              fontFamily: 'var(--font-sans, sans-serif)',
              fontWeight: 300,
              fontSize: '0.9rem',
              color: isExpanded ? 'rgba(245,245,245,0.7)' : isActive ? 'rgba(245,245,245,0.75)' : 'rgba(245,245,245,0.35)',
              transition: 'color 0.4s cubic-bezier(0.65, 0, 0.35, 1)',
              letterSpacing: '0.01em',
            }}
          >
            {project.description}
          </span>
        </div>
      </div>

      {/* Expanded Content Panel (Accordion Logic) */}
      <div style={{ minHeight: '0', overflow: 'hidden', opacity: isExpanded ? 1 : 0, transition: 'opacity 0.4s ease' }}>
        <div
          className="project-card-expanded-content"
          style={{
            paddingTop: '2rem',
            marginTop: '1.5rem',
            borderTop: '1px solid rgba(245,245,245,0.04)',
          }}
        >
          {/* Custom SVG Schematic */}
          <ProjectSchematic id={project.id} />

          {details && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '2rem', textAlign: 'left' }} className="project-expanded-grid">
              {/* Left Side: Role, Challenges, Solutions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h4 className="spec-title">ROLE</h4>
                  <p className="spec-text" style={{ color: '#f5f5f5', fontWeight: 400 }}>{details.role}</p>
                </div>
                <div>
                  <h4 className="spec-title">KEY CHALLENGES</h4>
                  <ul className="spec-list">
                    {details.challenges.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="spec-title">SOLUTIONS</h4>
                  <ul className="spec-list">
                    {details.solutions.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              </div>

              {/* Right Side: Metrics, Tech badges, GitHub button */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'space-between' }}>
                <div>
                  <h4 className="spec-title">OUTCOMES & KEY METRICS</h4>
                  <ul className="spec-list" style={{ color: 'var(--accent-amber, #ffb400)' }}>
                    {details.metrics.map((m, i) => <li key={i}>{m}</li>)}
                  </ul>
                </div>

                <div>
                  <h4 className="spec-title">SYSTEM SPECIFICATION</h4>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                    {details.technologies.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'var(--font-mono, monospace)',
                          fontSize: '0.55rem',
                          letterSpacing: '0.08em',
                          color: 'var(--accent-amber, #ffb400)',
                          background: 'rgba(255, 180, 0, 0.04)',
                          border: '1px solid rgba(255, 180, 0, 0.15)',
                          borderRadius: '3px',
                          padding: '0.25rem 0.5rem',
                          textTransform: 'uppercase',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '1rem' }} onClick={(e) => e.stopPropagation()}>
                  <Magnetic range={50} strength={0.3}>
                    <a
                      href={details.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        border: '1px solid var(--accent-amber, #ffb400)',
                        background: 'transparent',
                        color: 'var(--accent-amber, #ffb400)',
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.15em',
                        padding: '0.75rem 1.8rem',
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
            </div>
          )}
        </div>
      </div>

      <style>{`
        .spec-title {
          font-family: var(--font-mono, monospace);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.35);
          margin-bottom: 0.4rem;
          text-transform: uppercase;
        }

        .spec-text {
          font-family: var(--font-sans, sans-serif);
          font-weight: 300;
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.75);
        }

        .spec-list {
          padding-left: 1rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .spec-list li {
          font-family: var(--font-sans, sans-serif);
          font-weight: 300;
          font-size: 0.85rem;
          line-height: 1.4;
          color: rgba(245, 245, 245, 0.7);
        }

        /* Hover behaviors for trigger buttons */
        .project-trigger-btn:hover {
          color: var(--accent-amber, #ffb400) !important;
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.03);
        }

        @media (max-width: 768px) {
          .project-expanded-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .project-tags-container {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<string>('01');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const handleToggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  useEffect(() => {
    // Header reveal observer
    const el = headerRef.current;
    if (!el) return;

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          headerObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    headerObserver.observe(el);

    // Scroll tracker observer for active project
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setActiveProjectId(id);
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

    const cards = sectionRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card) => projectObserver.observe(card));

    return () => {
      headerObserver.disconnect();
      projectObserver.disconnect();
    };
  }, []);

  const activeProject = projects.find((p) => p.id === activeProjectId);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        padding: '8rem 2rem',
        backgroundColor: '#0a0a0a',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section label */}
        <div
          ref={headerRef}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: '#ffb400',
            marginBottom: '3rem',
            textTransform: 'uppercase',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        >
          02 / Work
        </div>

        {/* Section heading */}
        <h2
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(3rem, 6vw, 6rem)',
            lineHeight: 0.9,
            color: '#f5f5f5',
            margin: '0 0 5rem 0',
            letterSpacing: '0.02em',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        >
          SELECTED WORK
        </h2>

        {/* 2-Column Split Layout */}
        <div className="projects-grid">
          {/* Left Column: Timeline + Project Cards */}
          <div>
            {/* Scrollable Project Timeline Cards */}
            <div className="projects-timeline-container">
              {projects.map((project, index) => {
                const isActive = activeProjectId === project.id;
                return (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index} 
                    isActive={isActive}
                    isExpanded={expandedProjectId === project.id}
                    onToggle={handleToggleExpand}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky dynamic Project Number display */}
          <div className="sticky-project-container">
            <div className="sticky-project-content">
              <span className="sticky-project-label">PROJECT</span>
              <div key={activeProjectId} className="project-id-display">
                {activeProjectId}
              </div>
              <div className="sticky-project-details">
                <span>// NAME: {activeProject?.title}</span>
                <span>// YEAR: {activeProject?.year}</span>
                <span>// STACK: {activeProject?.tags.join(', ')}</span>
                <span>// INFRASTRUCTURE: OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* 2-column Grid configuration */
        .projects-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 6rem;
          align-items: start;
          position: relative;
        }

        /* Timeline vertical line */
        .projects-timeline-container {
          position: relative;
          padding-left: 2.5rem;
          border-left: 1px solid rgba(245, 245, 245, 0.08);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Dot aligned with vertical line */
        .project-dot {
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

        .project-dot.active {
          background: var(--accent-amber, #ffb400);
          box-shadow: 0 0 14px var(--accent-amber, #ffb400);
          transform: translateX(-50%) scale(1.5);
        }

        /* Individual Project Card styles */
        .project-card {
          position: relative;
          padding: 1.8rem;
          background: rgba(245, 245, 245, 0.01);
          border: 1px solid rgba(245, 245, 245, 0.025);
          border-radius: 8px;
          cursor: pointer;
          opacity: 0.35;
          transform: scale(0.985);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card.expanded {
          opacity: 1;
          transform: scale(1);
          background: rgba(245, 245, 245, 0.02) !important;
          border-color: rgba(245, 245, 245, 0.08) !important;
          box-shadow: 0 10px 40px -25px rgba(0, 0, 0, 0.5);
        }

        .project-card.active {
          opacity: 0.85;
          border-color: rgba(245, 245, 245, 0.06);
        }

        .project-card.active.expanded {
          opacity: 1;
          border-left: 3px solid var(--accent-amber, #ffb400) !important;
          padding-left: calc(1.8rem - 2px) !important;
          border-color: rgba(255, 180, 0, 0.2) !important;
          background: rgba(255, 180, 0, 0.015) !important;
          box-shadow: 0 15px 40px -15px rgba(255, 180, 0, 0.06), inset 0 1px 0px rgba(255, 255, 255, 0.05) !important;
        }

        .project-card:hover {
          border-color: rgba(245, 245, 245, 0.1);
          background: rgba(245, 245, 245, 0.015);
          opacity: 0.85;
        }

        .project-card.expanded:hover {
          background: rgba(245, 245, 245, 0.02) !important;
          border-color: rgba(245, 245, 245, 0.08) !important;
          opacity: 1;
        }

        .project-card.active:hover {
          opacity: 1;
        }

        .project-card.active.expanded:hover {
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.025) !important;
        }

        /* Project Title styles */
        .project-title-text {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.8rem, 4vw, 3rem);
          line-height: 1;
          color: rgba(245, 245, 245, 0.7);
          transition: color 0.4s ease;
          letter-spacing: 0.02em;
        }

        .project-card.active .project-title-text {
          color: rgba(245, 245, 245, 0.95);
        }

        .project-card.active.expanded .project-title-text {
          color: var(--accent-amber, #ffb400);
        }

        /* Hover behavior for inner trigger button */
        .project-card:hover .project-trigger-btn {
          color: rgba(245, 245, 245, 0.8);
          border-color: rgba(245, 245, 245, 0.25);
        }

        .project-card:hover .project-trigger-btn:hover {
          color: var(--accent-amber, #ffb400) !important;
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.03);
        }

        /* Description container indentation */
        .project-card-desc-container {
          padding-left: 3.5rem;
          margin-top: 0.75rem;
        }

        .project-card-expanded-content {
          padding-left: 3.5rem;
        }

        /* Sticky container for desktop */
        .sticky-project-container {
          position: sticky;
          top: 25vh;
          height: 50vh;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .sticky-project-content {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .sticky-project-label {
          font-family: var(--font-mono, "JetBrains Mono", monospace);
          font-size: 0.75rem;
          letter-spacing: 0.4em;
          color: rgba(245, 245, 245, 0.2);
          margin-bottom: 0.5rem;
          transform: translateX(-15px);
        }

        /* Giant ID Slide-in animation */
        @keyframes idSlideIn {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 0.95;
          }
        }

        .project-id-display {
          font-family: var(--font-heading, "Bebas Neue", cursive);
          font-size: clamp(10rem, 20vw, 20rem);
          line-height: 0.8;
          font-weight: 900;
          background: linear-gradient(180deg, var(--accent-amber, #ffb400) 40%, rgba(255, 180, 0, 0.3) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0.95;
          letter-spacing: -0.04em;
          filter: drop-shadow(0 0 40px rgba(255, 180, 0, 0.15));
          animation: idSlideIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          user-select: none;
        }

        .sticky-project-details {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
          font-family: var(--font-mono, "JetBrains Mono", monospace);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.25);
          margin-top: 1.5rem;
          transform: translateX(-15px);
        }

        /* Mobile layout styling fallback */
        .mobile-project-badge {
          display: none;
        }

        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .sticky-project-container {
            display: none !important;
          }
          
          .mobile-project-badge {
            display: inline-block;
            font-family: var(--font-mono, "JetBrains Mono", monospace);
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
          
          .project-card {
            opacity: 1 !important;
            transform: none !important;
            padding: 1.8rem !important;
          }

          .project-dot {
            top: 4.2rem !important; /* adjust for the badge space */
          }

          .project-card-desc-container {
            padding-left: 0 !important;
          }

          .project-card-expanded-content {
            padding-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
