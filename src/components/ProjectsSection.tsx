'use client';

import { useEffect, useRef, useState } from 'react';

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
    title: 'DEVFLOW',
    year: '2024',
    tags: ['SaaS', 'Next.js', 'AI'],
    description: 'Developer productivity tool — ship faster.',
  },
  {
    id: '02',
    title: 'CONTENTKIT',
    year: '2023',
    tags: ['Content', 'Creator Tools', 'React'],
    description: 'Content creation system for indie creators.',
  },
  {
    id: '03',
    title: 'LAUNCHKIT',
    year: '2022',
    tags: ['Template', 'Next.js', 'Tailwind'],
    description: 'Launch your startup in days, not weeks.',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid rgba(245,245,245,0.08)' }} />
        </div>
      </div>
    </section>
  );
}
