'use client';

import { useEffect, useRef, useState } from 'react';
import { Magnetic } from './ui/Magnetic';

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

function GitHubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Prathamesh-Jadhav04',
    icon: <GitHubIcon />,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/prathamesh-jadhav04',
    icon: <LinkedInIcon />,
  },
];

function SocialButton({ link }: { link: SocialLink }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Magnetic>
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: hovered ? '#ffb400' : 'rgba(245,245,245,0.4)',
          textDecoration: 'none',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          transition: 'color 0.3s cubic-bezier(0.65, 0, 0.35, 1)',
          padding: '0.5rem',
        }}
      >
        {link.icon}
        <span>{link.label}</span>
      </a>
    </Magnetic>
  );
}

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMsg('All fields are required.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to transmit message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: '8rem 2rem',
        borderTop: '1px solid rgba(245,245,245,0.08)',
        backgroundColor: '#0a0a0a',
      }}
    >
      <div
        ref={sectionRef}
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Section label */}
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: '#ffb400',
            marginBottom: '2rem',
            textTransform: 'uppercase',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        >
          03 / Build
        </div>

        {/* Big heading */}
        <h2
          style={{
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: 'clamp(3.5rem, 8vw, 8rem)',
            lineHeight: 0.9,
            color: '#f5f5f5',
            margin: '0 0 2rem 0',
            letterSpacing: '0.02em',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition:
              'opacity 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        >
          LET&apos;S BUILD SOMETHING.
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
            color: 'rgba(245,245,245,0.5)',
            margin: '0 0 4rem 0',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition:
              'opacity 0.7s 0.2s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.2s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        >
          Have an idea? Let&apos;s make it real.
        </p>

        {/* Contact Form OR Success State */}
        <div
          style={{
            maxWidth: '650px',
            margin: '0 auto',
            textAlign: 'left',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s 0.25s cubic-bezier(0.65, 0, 0.35, 1), transform 0.8s 0.25s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        >
          {status === 'success' ? (
            <div
              style={{
                background: 'rgba(255, 180, 0, 0.02)',
                border: '1px solid rgba(255, 180, 0, 0.2)',
                borderRadius: '8px',
                padding: '3rem 2rem',
                textAlign: 'center',
                boxShadow: '0 15px 40px -15px rgba(255, 180, 0, 0.05)',
              }}
            >
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  color: '#ffb400',
                  marginBottom: '1rem',
                }}
              >
                [SUCCESS] TRANSMISSION ESTABLISHED
              </div>
              <h3
                style={{
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontSize: '2.5rem',
                  color: '#f5f5f5',
                  marginBottom: '1rem',
                  letterSpacing: '0.02em',
                }}
              >
                MESSAGE LOGGED
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: 'rgba(245,245,245,0.6)',
                  marginBottom: '2rem',
                }}
              >
                Thank you. Your message has been ingested securely. Prathamesh will review your query and reply shortly.
              </p>
              <Magnetic strength={0.2} range={60}>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="submit-btn"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </Magnetic>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {/* Name */}
                <div className="contact-form-group">
                  <label htmlFor="name" className="contact-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="contact-input"
                    placeholder="Enter your name"
                    disabled={status === 'sending'}
                  />
                </div>

                {/* Email */}
                <div className="contact-form-group">
                  <label htmlFor="email" className="contact-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="contact-input"
                    placeholder="Enter your email"
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="contact-form-group">
                <label htmlFor="subject" className="contact-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="contact-input"
                  placeholder="Enter message subject"
                  disabled={status === 'sending'}
                />
              </div>

              {/* Message */}
              <div className="contact-form-group">
                <label htmlFor="message" className="contact-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="contact-textarea"
                  placeholder="Enter details of your project or query..."
                  disabled={status === 'sending'}
                />
              </div>

              {status === 'error' && (
                <div
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.7rem',
                    color: '#ff4444',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  // [ERROR]: {errorMsg}
                </div>
              )}

              {/* Submit CTA Button */}
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <Magnetic strength={0.2} range={80}>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="submit-btn"
                  >
                    {status === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
                  </button>
                </Magnetic>
              </div>
            </form>
          )}
        </div>

        {/* Social links row */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            marginTop: '5rem',
            flexWrap: 'wrap',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition:
              'opacity 0.7s 0.4s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.4s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        >
          {socialLinks.map((link) => (
            <SocialButton key={link.label} link={link} />
          ))}
        </div>

        {/* Footer line */}
        <div
          style={{
            marginTop: '6rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(245,245,245,0.08)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.7s 0.5s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        >
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: 'rgba(245,245,245,0.3)',
              textTransform: 'uppercase',
            }}
          >
            © 2026 PRATHAMESH JADHAV. BUILT WITH PURPOSE.
          </span>
        </div>
      </div>

      <style>{`
        .contact-form-group {
          position: relative;
          margin-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
        }
        
        .contact-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.3);
          text-transform: uppercase;
          margin-bottom: 0.6rem;
          transition: color 0.3s ease;
        }

        .contact-input, .contact-textarea {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 1rem;
          color: #f5f5f5;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(245, 245, 245, 0.12);
          padding: 0.8rem 0;
          transition: all 0.3s ease;
          width: 100%;
          outline: none;
          cursor: text !important;
        }

        .contact-input:focus, .contact-textarea:focus {
          border-bottom-color: var(--accent-amber, #ffb400);
        }

        .contact-form-group:focus-within .contact-label {
          color: var(--accent-amber, #ffb400);
        }

        .contact-textarea {
          min-height: 120px;
          resize: vertical;
        }
        
        .submit-btn {
          border: 1px solid #ffb400;
          color: #ffb400;
          background: transparent;
          padding: 1rem 3rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
          display: inline-block;
        }

        .submit-btn:hover {
          color: #0a0a0a;
          background-color: #ffb400;
        }
        
        .submit-btn:disabled {
          border-color: rgba(245, 245, 245, 0.2);
          color: rgba(245, 245, 245, 0.3);
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .contact-form-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
