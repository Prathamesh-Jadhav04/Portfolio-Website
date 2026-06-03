'use client';

import { useState, useRef, useEffect } from 'react';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  teaser: string;
  description: string;
  details?: string;
  technologies: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: '2022',
    title: 'COMMENCEMENT OF ENGINEERING JOURNEY',
    teaser: 'Entered Computer Science foundations, diving into algorithms and core computing logic.',
    description: 'Stepped into the world of computational thinking, logical structures, and database principles. Immersed myself in learning foundational engineering mathematics and digital electronics.',
    details: 'Acquired core logic and basic troubleshooting patterns early on.',
    technologies: ['C Language', 'CS Fundamentals', 'Boolean Logic']
  },
  {
    id: 2,
    year: '2022',
    title: 'THE FIRST LINE OF CODE',
    teaser: 'Wrote my very first "Hello World" terminal program, igniting a passion for software construction.',
    description: 'Began building basic terminal games, calculators, and automation scripts. Explored control flow structure, debugging routines, and compiling mechanics.',
    details: 'Spent hours debugging pointer offsets and system syntax anomalies.',
    technologies: ['Python', 'C Language', 'Scripting']
  },
  {
    id: 3,
    year: '2023',
    title: 'FIRST FULL-STACK WEB APPLICATION',
    teaser: 'Designed, coded, and deployed my first database-driven live server site.',
    description: 'Mastered standard relational database structures, SQL query structures, and server routing. Deployed first responsive media portal hosting, resolving client-server data flows.',
    details: 'Optimized page load configurations and local caching schemas.',
    technologies: ['React', 'Node.js', 'Express', 'SQL Databases']
  },
  {
    id: 4,
    year: '2024',
    title: 'DATA SCIENCE INTERNSHIP',
    teaser: 'Joined Uptricks Services Pvt. Ltd. to run statistical modeling and pre-processing.',
    description: 'Processed high-dimensional tabular datasets. Evaluated predictive machine learning models to capture actionable analytics patterns.',
    details: 'Wrote robust validation suites to filter noisy logistics dataset entries.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Statistical Modeling']
  },
  {
    id: 5,
    year: '2024',
    title: 'SYSTEMS-LEVEL PIPELINES',
    teaser: 'Architected automated data ingest workflows, reducing database import overheads.',
    description: 'Designed and deployed automated pre-processing pipelines to optimize model ingest latency.',
    details: 'Gained hands-on exposure to CI/CD triggers and Linux deployment environments.',
    technologies: ['Python', 'Shell Scripting', 'ETL Pipelines', 'Database Optimization']
  },
  {
    id: 6,
    year: '2025',
    title: 'GENAI & LLM API INTEGRATIONS',
    teaser: 'Engineered FastAPI endpoints and LangChain RAG pipelines for contextual bots.',
    description: 'Built secure webhook aggregators to review git diffs. Designed vector search integration layers serving low-latency context injections to LLM prompts.',
    details: 'Engineered prompt templates with metadata filters to prevent context leaks.',
    technologies: ['FastAPI', 'LangChain', 'OpenAI APIs', 'Vector Embeddings']
  },
  {
    id: 7,
    year: '2026',
    title: 'ENGINEERING GRADUATION (CGPA 7.8)',
    teaser: 'Successfully completed degree. Built a Capstone Clinical Decision Support System.',
    description: 'Completed Bachelor of Engineering in Computer Science. Designed and defended CDSS capstone model merging multi-modal clinical markers for prognosis analytics.',
    details: 'Maintained a strong cumulative CGPA of 7.8 across rigorous coursework semesters.',
    technologies: ['Predictive Modeling', 'Data Visualization', 'Capstone Project']
  },
  {
    id: 8,
    year: '2026',
    title: 'PRODUCTION SYSTEMS DEVELOPMENT',
    teaser: 'Built custom HNSW vector database (NuroSearch) & packet inspector (DPI Engine).',
    description: 'Implemented low-latency index graphs and multi-threaded raw network packet capturing listeners. Focused on memory allocations and concurrent graph insertions.',
    details: 'Architected custom scalar quantization scripts to compress memory footprints.',
    technologies: ['Rust', 'Python', 'C Language', 'HNSW Graph', 'Multithreading', 'Scapy']
  }
];

function ProjectSchematic({ id }: { id: number }) {
  if (id === 1) {
    return (
      <svg width="100%" height="120" viewBox="0 0 400 120" style={{ background: '#111', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1rem 0' }}>
        <circle cx="80" cy="60" r="12" fill="rgba(255,180,0,0.08)" stroke="#ffb400" strokeWidth="1" />
        <circle cx="200" cy="60" r="12" fill="none" stroke="rgba(245,245,245,0.15)" strokeWidth="1" />
        <circle cx="320" cy="60" r="12" fill="none" stroke="rgba(245,245,245,0.15)" strokeWidth="1" />
        <line x1="92" y1="60" x2="188" y2="60" stroke="rgba(245,245,245,0.08)" strokeDasharray="3" />
        <line x1="212" y1="60" x2="308" y2="60" stroke="rgba(245,245,245,0.08)" strokeDasharray="3" />
        <text x="80" y="63" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">CS</text>
        <text x="200" y="63" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">DS</text>
        <text x="320" y="63" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">AI</text>
        <text x="15" y="18" fill="rgba(255,180,0,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7">CS FOUNDATION INDEX</text>
      </svg>
    );
  }
  if (id === 2) {
    return (
      <svg width="100%" height="120" viewBox="0 0 400 120" style={{ background: '#111', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1rem 0' }}>
        <rect x="25" y="25" width="350" height="70" rx="4" fill="#050505" stroke="rgba(245,245,245,0.05)" />
        <text x="40" y="52" fill="rgba(245,245,245,0.35)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8.5">&gt;&gt;&gt; print("Hello World")</text>
        <text x="40" y="72" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8.5">Hello World</text>
        <rect x="110" y="62" width="5" height="10" fill="#ffb400" opacity="0.8" />
        <text x="15" y="18" fill="rgba(255,180,0,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7">COMPILER SHELL EXECUTION</text>
      </svg>
    );
  }
  if (id === 3) {
    return (
      <svg width="100%" height="120" viewBox="0 0 400 120" style={{ background: '#111', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1rem 0' }}>
        <rect x="35" y="35" width="90" height="45" rx="3" fill="none" stroke="rgba(245,245,245,0.12)" />
        <rect x="275" y="35" width="90" height="45" rx="3" fill="none" stroke="rgba(245,245,245,0.12)" />
        <path d="M 125 58 L 275 58" stroke="#ffb400" strokeDasharray="3" />
        <text x="80" y="53" fill="#f5f5f5" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">USERS_DB</text>
        <text x="80" y="65" fill="rgba(245,245,245,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" textAnchor="middle">PK: user_id</text>
        <text x="320" y="53" fill="#f5f5f5" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">POSTS_DB</text>
        <text x="320" y="65" fill="rgba(245,245,245,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" textAnchor="middle">FK: author_id</text>
        <text x="200" y="50" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" textAnchor="middle">RELATIONAL MAP</text>
        <text x="15" y="18" fill="rgba(255,180,0,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7">DATABASE SCHEMA</text>
      </svg>
    );
  }
  if (id === 4) {
    return (
      <svg width="100%" height="120" viewBox="0 0 400 120" style={{ background: '#111', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1rem 0' }}>
        <path d="M 40 60 L 140 60 M 260 60 L 360 60" stroke="rgba(245,245,245,0.15)" />
        <rect x="140" y="42" width="120" height="36" rx="3" fill="none" stroke="#ffb400" />
        <text x="200" y="64" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">CLEANSE & MODEL</text>
        <circle cx="90" cy="60" r="3" fill="#f5f5f5" opacity="0.3" />
        <circle cx="310" cy="60" r="3" fill="#ffb400" />
        <text x="15" y="18" fill="rgba(255,180,0,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7">UPTRICKS DATA REFINEMENT FLOW</text>
      </svg>
    );
  }
  if (id === 5) {
    return (
      <svg width="100%" height="120" viewBox="0 0 400 120" style={{ background: '#111', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1rem 0' }}>
        <g stroke="rgba(245,245,245,0.1)" strokeWidth="1" fill="none">
          <rect x="40" y="45" width="60" height="28" rx="2" />
          <rect x="170" y="45" width="60" height="28" rx="2" />
          <rect x="300" y="45" width="60" height="28" rx="2" />
          <path d="M 100 59 L 170 59 M 230 59 L 300 59" stroke="#ffb400" />
        </g>
        <text x="70" y="62" fill="rgba(245,245,245,0.5)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">RAW</text>
        <text x="200" y="62" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">FILTER</text>
        <text x="330" y="62" fill="rgba(245,245,245,0.5)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">STORE</text>
        <text x="15" y="18" fill="rgba(255,180,0,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7">AUTOMATED PIPELINE LOAD (ETL)</text>
      </svg>
    );
  }
  if (id === 6) {
    return (
      <svg width="100%" height="120" viewBox="0 0 400 120" style={{ background: '#111', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1rem 0' }}>
        <rect x="30" y="40" width="80" height="36" rx="3" fill="none" stroke="rgba(245,245,245,0.12)" />
        <rect x="160" y="40" width="80" height="36" rx="3" fill="none" stroke="#ffb400" strokeWidth="1.5" />
        <rect x="290" y="40" width="80" height="36" rx="3" fill="none" stroke="rgba(245,245,245,0.12)" />
        <path d="M 110 58 L 160 58 M 240 58 L 290 58" stroke="rgba(245,245,245,0.12)" />
        <text x="70" y="62" fill="rgba(245,245,245,0.6)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" textAnchor="middle">PROMPT</text>
        <text x="200" y="62" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" textAnchor="middle">RAG MODEL</text>
        <text x="330" y="62" fill="rgba(245,245,245,0.6)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" textAnchor="middle">OUTPUT</text>
        <text x="15" y="18" fill="rgba(255,180,0,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7">SEMANTIC CONTEXT RETRIEVAL LAYER</text>
      </svg>
    );
  }
  if (id === 7) {
    return (
      <svg width="100%" height="120" viewBox="0 0 400 120" style={{ background: '#111', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1rem 0' }}>
        <rect x="150" y="35" width="100" height="36" rx="4" fill="rgba(255,180,0,0.02)" stroke="#ffb400" strokeWidth="1.5" />
        <text x="200" y="57" fill="#ffb400" fontFamily="var(--font-bebas-neue, sans-serif)" fontSize="14" letterSpacing="0.05em" textAnchor="middle">B.E. GRADUATE</text>
        <text x="200" y="94" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">CGPA: 7.8 // CAPSTONE DEPLOYED</text>
        <text x="15" y="18" fill="rgba(255,180,0,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7">ACADEMIC DEGREE VERIFICATION</text>
      </svg>
    );
  }
  if (id === 8) {
    return (
      <svg width="100%" height="120" viewBox="0 0 400 120" style={{ background: '#111', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1rem 0' }}>
        <circle cx="110" cy="60" r="18" fill="none" stroke="#ffb400" strokeWidth="1.5" />
        <circle cx="290" cy="60" r="18" fill="none" stroke="rgba(245,245,245,0.15)" strokeWidth="1.5" />
        <line x1="128" y1="60" x2="272" y2="60" stroke="#ffb400" strokeDasharray="3" />
        <text x="110" y="63" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="middle">NUROSEARCH</text>
        <text x="290" y="63" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="middle">DPI_ENGINE</text>
        <text x="200" y="50" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" textAnchor="middle">SYSTEMS ARCH</text>
        <text x="15" y="18" fill="rgba(255,180,0,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7">CUSTOM ENGINE GRAPH</text>
      </svg>
    );
  }
  return null;
}

interface Tag {
  text: string;
  x: number;
  y: number;
  z: number;
}

function TechSphere({ onHoverChange }: { onHoverChange: (hovering: boolean) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const skillsList = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 
    'Python', 'Rust', 'C Language', 'C++', 'FastAPI', 
    'LangChain', 'OpenAI API', 'HNSW Graph', 'Vector DB', 'RAG Pipelines',
    'SQL Databases', 'NoSQL', 'MongoDB', 'Redis', 'Docker', 
    'Git', 'Linux', 'Shell Scripting', 'ETL Pipelines', 'Scikit-Learn', 
    'Pandas', 'NumPy', 'Multithreading', 'Scapy', 'Network Protocols'
  ];
  const skills = Array.from(new Set(skillsList));

  useEffect(() => {
    const radius = 130;
    const N = skills.length;
    const initialTags: Tag[] = skills.map((text, i) => {
      const k = -1 + (2 * (i + 1) - 1) / N;
      const phi = Math.acos(k);
      const theta = Math.sqrt(N * Math.PI) * phi;

      return {
        text,
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
      };
    });
    setTags(initialTags);
  }, []);

  useEffect(() => {
    let rafId: number;
    let angleX = 0.002;
    let angleY = 0.002;

    const update = () => {
      if (isDraggingRef.current) {
        rafId = requestAnimationFrame(update);
        return;
      }

      if (isHoveredRef.current) {
        angleX = -mouseRef.current.y * 0.00004;
        angleY = mouseRef.current.x * 0.00004;
      } else {
        angleX = angleX * 0.98 + 0.001 * 0.02;
        angleY = angleY * 0.98 + 0.0015 * 0.02;
      }

      setTags((prevTags) => {
        return prevTags.map((tag) => {
          const cosX = Math.cos(angleX);
          const sinX = Math.sin(angleX);
          const y1 = tag.y * cosX - tag.z * sinX;
          const z1 = tag.y * sinX + tag.z * cosX;

          const cosY = Math.cos(angleY);
          const sinY = Math.sin(angleY);
          const x2 = tag.x * cosY + z1 * sinY;
          const z2 = -tag.x * sinY + z1 * cosY;

          return { ...tag, x: x2, y: y1, z: z2 };
        });
      });

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    isDraggingRef.current = true;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY
    };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    isDraggingRef.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    if (e.touches.length > 0) {
      dragStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    
    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;

    mouseRef.current = {
      x: clientX - cx,
      y: clientY - cy,
    };

    if (isDraggingRef.current) {
      const deltaX = clientX - dragStartRef.current.x;
      const deltaY = clientY - dragStartRef.current.y;
      
      dragStartRef.current = {
        x: clientX,
        y: clientY
      };

      const dragFactor = 0.006;
      const angleXVal = -deltaY * dragFactor;
      const angleYVal = deltaX * dragFactor;

      setTags((prevTags) => {
        return prevTags.map((tag) => {
          const cosX = Math.cos(angleXVal);
          const sinX = Math.sin(angleXVal);
          const y1 = tag.y * cosX - tag.z * sinX;
          const z1 = tag.y * sinX + tag.z * cosX;

          const cosY = Math.cos(angleYVal);
          const sinY = Math.sin(angleYVal);
          const x2 = tag.x * cosY + z1 * sinY;
          const z2 = -tag.x * sinY + z1 * cosY;

          return { ...tag, x: x2, y: y1, z: z2 };
        });
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    
    mouseRef.current = {
      x: e.clientX - cx,
      y: e.clientY - cy,
    };

    if (isDraggingRef.current) {
      const deltaX = e.clientX - dragStartRef.current.x;
      const deltaY = e.clientY - dragStartRef.current.y;
      
      dragStartRef.current = {
        x: e.clientX,
        y: e.clientY
      };

      const dragFactor = 0.005;
      const angleXVal = -deltaY * dragFactor;
      const angleYVal = deltaX * dragFactor;

      setTags((prevTags) => {
        return prevTags.map((tag) => {
          const cosX = Math.cos(angleXVal);
          const sinX = Math.sin(angleXVal);
          const y1 = tag.y * cosX - tag.z * sinX;
          const z1 = tag.y * sinX + tag.z * cosX;

          const cosY = Math.cos(angleYVal);
          const sinY = Math.sin(angleYVal);
          const x2 = tag.x * cosY + z1 * sinY;
          const z2 = -tag.x * sinY + z1 * cosY;

          return { ...tag, x: x2, y: y1, z: z2 };
        });
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        onHoverChange(false);
        handleMouseUp();
      }}
      onMouseEnter={() => {
        isHoveredRef.current = true;
        onHoverChange(true);
      }}
      onTouchStart={(e) => {
        onHoverChange(true);
        handleTouchStart(e);
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => {
        onHoverChange(false);
        handleMouseUp();
      }}
      onDragStart={(e) => e.preventDefault()}
      style={{
        position: 'relative',
        width: '320px',
        height: '320px',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        touchAction: 'none',
      }}
    >
      {tags.map((tag, idx) => {
        const radius = 130;
        const depth = 280;
        const scale = (depth + tag.z) / depth;
        const left = 160 + tag.x * scale;
        const top = 160 + tag.y * scale;
        
        const opacity = (tag.z + radius) / (2 * radius) * 0.8 + 0.2;
        const zIndex = Math.round(tag.z + radius);

        return (
          <span
            key={idx}
            style={{
              position: 'absolute',
              left: `${left}px`,
              top: `${top}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              fontSize: '0.75rem',
              fontFamily: 'var(--font-jetbrains-mono, monospace)',
              fontWeight: tag.z > 0 ? 500 : 300,
              color: tag.z > 0 ? 'var(--accent-amber, #ffb400)' : 'rgba(245, 245, 245, 0.35)',
              opacity: opacity,
              zIndex: zIndex,
              whiteSpace: 'nowrap',
              textTransform: 'uppercase',
              pointerEvents: tag.z > 0 ? 'auto' : 'none',
              background: tag.z > 0 ? 'rgba(255, 180, 0, 0.04)' : 'transparent',
              border: tag.z > 0 ? '1px solid rgba(255, 180, 0, 0.15)' : '1px solid transparent',
              borderRadius: '4px',
              padding: '0.2rem 0.5rem',
              transition: 'color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
              boxShadow: tag.z > 40 ? '0 0 10px rgba(255, 180, 0, 0.08)' : 'none',
            }}
          >
            {tag.text}
          </span>
        );
      })}
    </div>
  );
}

export function AboutSection() {
  const [activeYear, setActiveYear] = useState<string>('2022');
  const [activeCardId, setActiveCardId] = useState<number>(1);
  const [expandedCardId, setExpandedCardId] = useState<number | null>(1);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [isHoveringSphere, setIsHoveringSphere] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Section visibility tracker to prevent scroll wars when section is offscreen
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.05
      }
    );
    sectionObserver.observe(sectionEl);

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
              const parsedId = parseInt(id, 10);
              setActiveCardId(parsedId);
              setExpandedCardId(parsedId);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-10% 0px -20% 0px',
        threshold: 0.05
      }
    );

    const cards = sectionRef.current?.querySelectorAll('.timeline-card');
    cards?.forEach((card) => timelineObserver.observe(card));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
      timelineObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isSectionInView) return;

    // Scroll stop snap-alignment handler - runs only when section is active in viewport
    let scrollTimeout: NodeJS.Timeout;
    const handleScrollSnap = () => {
      if (isHoveringSphere) return; // Prevent autoscroll snapping while interacting with the 3D Sphere
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const activeCard = sectionRef.current?.querySelector('.timeline-card.active') as HTMLElement;
        if (activeCard) {
          const rect = activeCard.getBoundingClientRect();
          const targetOffset = window.innerHeight * 0.25;
          const targetTop = window.scrollY + rect.top - targetOffset;
          // Only scroll if we are not already close to the target alignment (within 8px)
          if (Math.abs(rect.top - targetOffset) > 8) {
            window.scrollTo({
              top: targetTop,
              behavior: 'smooth'
            });
          }
        }
      }, 200);
    };

    window.addEventListener('scroll', handleScrollSnap);

    return () => {
      window.removeEventListener('scroll', handleScrollSnap);
      clearTimeout(scrollTimeout);
    };
  }, [isSectionInView, isHoveringSphere]);

  const toggleExpand = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const isCollapsing = expandedCardId === id;
    setExpandedCardId(isCollapsing ? null : id);
    
    // Smooth scroll the clicked card to line up with the year display (25vh offset)
    if (!isCollapsing) {
      setTimeout(() => {
        const cardEl = sectionRef.current?.querySelector(`[data-id="${id}"]`) as HTMLElement;
        if (cardEl) {
          const rect = cardEl.getBoundingClientRect();
          const targetOffset = window.innerHeight * 0.25;
          const targetTop = window.scrollY + rect.top - targetOffset;
          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });
        }
      }, 120); // wait for layout height transition to begin
    }
  };

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

                {/* 3D Spinning Tech Stack Sphere */}
                <div className="about-tech-sphere-container">
                  <div className="sphere-hud-label">// DRAG & ORBIT TECHNICAL CORE</div>
                  <TechSphere onHoverChange={setIsHoveringSphere} />
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
              // Interactive Journey & Milestones (Click Overview to Expand)
            </div>

            {/* Scrollable Milestones Timeline Cards */}
            <div className="timeline-container">
              {timelineEvents.map((event) => {
                const isActive = activeCardId === event.id;
                const isExpanded = expandedCardId === event.id;

                return (
                  <div
                    key={event.id}
                    data-year={event.year}
                    data-id={event.id}
                    className={`timeline-card ${isExpanded ? 'expanded' : ''} ${isActive ? 'active' : ''}`}
                    onClick={(e) => toggleExpand(event.id, e)}
                    style={{
                      display: 'grid',
                      gridTemplateRows: isExpanded ? 'auto 1fr' : 'auto 0fr',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Header Row (Always Visible) */}
                    <div>
                      {/* Mobile Year Badge */}
                      <div className="mobile-year-badge">
                        {event.year}
                      </div>

                      {/* Timeline Dot */}
                      <div className={`timeline-dot ${isActive ? 'active' : ''}`} />

                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem' }}>
                        <h3 className="timeline-card-title">
                          {event.title}
                        </h3>
                        <span className="card-index" style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)', fontSize: '0.6rem', color: isExpanded ? 'var(--accent-amber, #ffb400)' : 'rgba(245, 245, 245, 0.2)', transition: 'color 0.4s ease' }}>
                          0{event.id}
                        </span>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', marginTop: '0.2rem' }}>
                        <p className="timeline-card-teaser" style={{ fontFamily: 'var(--font-inter, sans-serif)', fontWeight: 300, fontSize: '0.9rem', color: isActive ? 'rgba(245, 245, 245, 0.75)' : 'rgba(245, 245, 245, 0.35)', transition: 'color 0.4s ease', margin: 0, flex: 1 }}>
                          {event.teaser}
                        </p>
                        
                        {/* Expand Trigger Button */}
                        <button
                          onClick={(e) => toggleExpand(event.id, e)}
                          className="expand-trigger-btn"
                          style={{
                            background: 'none',
                            color: isExpanded ? 'var(--accent-amber, #ffb400)' : 'rgba(245, 245, 245, 0.4)',
                            fontFamily: 'var(--font-jetbrains-mono, monospace)',
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
                          {isExpanded ? '[ - CLOSE ]' : '[ + OVERVIEW ]'}
                        </button>
                      </div>
                    </div>

                    {/* Expandable Content Panel */}
                    <div style={{ minHeight: '0', overflow: 'hidden', opacity: isExpanded ? 1 : 0, transition: 'opacity 0.4s ease' }}>
                      <div style={{ paddingTop: '1.2rem', borderTop: '1px solid rgba(245,245,245,0.04)', marginTop: '1.2rem' }}>
                        <p className="timeline-card-desc">
                          {event.description}
                        </p>

                        {/* Custom Embedded SVG Schematic */}
                        <ProjectSchematic id={event.id} />

                        {event.details && (
                          <p className="timeline-card-details">
                            {event.details}
                          </p>
                        )}

                        {/* Tech spec tags */}
                        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                          {event.technologies.map((t) => (
                            <span
                              key={t}
                              style={{
                                fontFamily: 'var(--font-jetbrains-mono, monospace)',
                                fontSize: '0.55rem',
                                color: 'rgba(245, 245, 245, 0.5)',
                                background: 'rgba(245, 245, 245, 0.03)',
                                border: '1px solid rgba(245, 245, 245, 0.08)',
                                padding: '0.2rem 0.5rem',
                                borderRadius: '3px',
                                textTransform: 'uppercase',
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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

        .about-tech-sphere-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 3rem;
          padding: 2.5rem 1rem;
          background: rgba(245, 245, 245, 0.01);
          border: 1px solid rgba(245, 245, 245, 0.03);
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          width: 100%;
          user-select: none;
        }

        .sphere-hud-label {
          font-family: var(--font-jetbrains-mono, "JetBrains Mono", monospace);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.2);
          text-transform: uppercase;
          margin-bottom: 2rem;
          pointer-events: none;
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
          gap: 1.5rem;
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
          padding: 1.8rem;
          background: rgba(245, 245, 245, 0.01);
          border: 1px solid rgba(245, 245, 245, 0.025);
          border-radius: 8px;
          cursor: pointer;
          opacity: 0.35;
          transform: scale(0.985);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-card.expanded {
          opacity: 1;
          transform: scale(1);
          background: rgba(245, 245, 245, 0.02) !important;
          border-color: rgba(245, 245, 245, 0.08) !important;
          box-shadow: 0 10px 40px -25px rgba(0, 0, 0, 0.5);
        }

        .timeline-card.active {
          opacity: 0.85;
          border-color: rgba(245, 245, 245, 0.06);
        }

        .timeline-card.active.expanded {
          opacity: 1;
          border-left: 3px solid var(--accent-amber, #ffb400) !important;
          padding-left: calc(1.8rem - 2px) !important;
          border-color: rgba(255, 180, 0, 0.2) !important;
          background: rgba(255, 180, 0, 0.015) !important;
          box-shadow: 0 15px 40px -15px rgba(255, 180, 0, 0.06), inset 0 1px 0px rgba(255, 255, 255, 0.05) !important;
        }

        .timeline-card:hover {
          border-color: rgba(245, 245, 245, 0.1);
          background: rgba(245, 245, 245, 0.015);
          opacity: 0.85;
        }

        .timeline-card.expanded:hover {
          background: rgba(245, 245, 245, 0.02) !important;
          border-color: rgba(245, 245, 245, 0.08) !important;
          opacity: 1;
        }

        .timeline-card.active:hover {
          opacity: 1;
        }

        .timeline-card.active.expanded:hover {
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.025) !important;
        }

        /* Hover behavior for inner trigger button */
        .timeline-card:hover .expand-trigger-btn {
          color: rgba(245, 245, 245, 0.8);
          border-color: rgba(245, 245, 245, 0.25);
        }

        .timeline-card:hover .expand-trigger-btn:hover {
          color: var(--accent-amber, #ffb400) !important;
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.03);
        }

        .timeline-card-title {
          font-family: var(--font-bebas-neue, "Bebas Neue", cursive);
          font-size: 1.4rem;
          letter-spacing: 0.05em;
          color: rgba(245, 245, 245, 0.7);
          margin-bottom: 0.4rem;
          transition: color 0.4s ease;
        }

        .timeline-card.active .timeline-card-title {
          color: rgba(245, 245, 245, 0.95);
        }

        .timeline-card.active.expanded .timeline-card-title {
          color: var(--accent-amber, #ffb400);
        }

        .timeline-card-desc {
          font-family: var(--font-inter, "Inter", sans-serif);
          font-weight: 300;
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(245, 245, 245, 0.8);
          margin-bottom: 0.6rem;
        }

        .timeline-card-details {
          font-family: var(--font-inter, "Inter", sans-serif);
          font-weight: 300;
          font-size: 0.85rem;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.5);
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
            opacity: 0.95;
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
