'use client';

import { useEffect, useRef, useState } from 'react';
import { ProjectDrawer } from './ProjectDrawer';

interface Project {
  id: string;
  title: string;
  year: string;
  tags: string[];
  description: string;
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

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (p: Project) => void }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger each card slightly
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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(project)}
      style={{
        borderTop: '1px solid rgba(245,245,245,0.08)',
        padding: '2.5rem 0',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s cubic-bezier(0.65, 0, 0.35, 1)`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        {/* Left: number + title + description */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', flex: 1 }}>
          {/* Project number */}
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              color: 'rgba(245,245,245,0.3)',
              flexShrink: 0,
            }}
          >
            {project.id}
          </span>

          {/* Title */}
          <span
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1,
              color: hovered ? '#ffb400' : '#f5f5f5',
              transition: 'color 0.4s cubic-bezier(0.65, 0, 0.35, 1)',
              letterSpacing: '0.02em',
            }}
          >
            {project.title}
          </span>

          {/* Description */}
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '0.85rem',
              color: 'rgba(245,245,245,0.4)',
              display: 'none',
            }}
            className="project-desc"
          >
            {project.description}
          </span>
        </div>

        {/* Right: tags + year + arrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexShrink: 0,
          }}
        >
          {/* Tags */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  color: 'rgba(245,245,245,0.4)',
                  border: '1px solid rgba(245,245,245,0.12)',
                  borderRadius: '999px',
                  padding: '0.25rem 0.75rem',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Year */}
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              color: 'rgba(245,245,245,0.3)',
              minWidth: '3rem',
              textAlign: 'right',
            }}
          >
            {project.year}
          </span>

          {/* Arrow */}
          <span
            aria-hidden="true"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '1.2rem',
              color: '#ffb400',
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateX(0)' : 'translateX(-8px)',
              transition: 'opacity 0.35s cubic-bezier(0.65, 0, 0.35, 1), transform 0.35s cubic-bezier(0.65, 0, 0.35, 1)',
              minWidth: '1.5rem',
              display: 'inline-block',
            }}
          >
            →
          </span>
        </div>
      </div>

      {/* Description row (visible on all screens) */}
      <div
        style={{
          paddingLeft: 'calc(2rem + 2ch + 2rem)',
          marginTop: '0.75rem',
        }}
      >
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontSize: '0.8rem',
            color: hovered ? 'rgba(245,245,245,0.55)' : 'rgba(245,245,245,0.3)',
            transition: 'color 0.4s cubic-bezier(0.65, 0, 0.35, 1)',
            letterSpacing: '0.01em',
          }}
        >
          {project.description}
        </span>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      style={{
        padding: '8rem 2rem',
        backgroundColor: '#0a0a0a',
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

        {/* Projects list */}
        <div>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onOpen={handleOpenDrawer}
            />
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid rgba(245,245,245,0.08)' }} />
        </div>
      </div>

      <ProjectDrawer 
        project={selectedProject} 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
      />
    </section>
  );
}
