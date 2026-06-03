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
        className="social-console-btn"
      >
        {link.icon}
        <span>{link.label}</span>
        <span className="btn-terminal-tag">{hovered ? '➔ STACK' : '// LINK'}</span>
      </a>
    </Magnetic>
  );
}

function Oscilloscope() {
  const [time, setTime] = useState(0);

  // Oscilloscope Animation Frame loop
  useEffect(() => {
    let frameId: number;
    const update = () => {
      setTime((t) => (t + 0.04) % (Math.PI * 2));
      frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const getWavePath1 = () => {
    let points = [];
    for (let x = 0; x <= 220; x += 4) {
      const y = 25 + Math.sin(x * 0.055 + time * 1.8) * 8;
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  const getWavePath2 = () => {
    let points = [];
    for (let x = 0; x <= 220; x += 4) {
      const y = 25 + Math.sin(x * 0.045 - time * 1.4 + Math.PI / 3) * 5;
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  return (
    <div className="console-oscilloscope-container">
      <svg width="100%" height="50" viewBox="0 0 220 50" preserveAspectRatio="none">
        {/* Grid overlay inside oscilloscope */}
        <g stroke="rgba(255, 180, 0, 0.04)" strokeWidth="0.5">
          <line x1="0" y1="12.5" x2="220" y2="12.5" />
          <line x1="0" y1="25" x2="220" y2="25" />
          <line x1="0" y1="37.5" x2="220" y2="37.5" />
          <line x1="55" y1="0" x2="55" y2="50" />
          <line x1="110" y1="0" x2="110" y2="50" />
          <line x1="165" y1="0" x2="165" y2="50" />
        </g>
        {/* Oscillating Path 2 (Muted Out of Phase Channel) */}
        <path d={getWavePath2()} fill="none" stroke="rgba(255, 180, 0, 0.2)" strokeWidth="0.8" />
        {/* Oscillating Path 1 (Primary Channel) */}
        <path d={getWavePath1()} fill="none" stroke="#ffb400" strokeWidth="1.2" style={{ filter: 'drop-shadow(0 0 3px rgba(255, 180, 0, 0.5))' }} />
      </svg>
    </div>
  );
}

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  
  // Unique connection telemetry node generated on client mount
  const [sessionId, setSessionId] = useState('');
  // Transmission terminal logs
  const [transmittingLogs, setTransmittingLogs] = useState<string[]>([]);

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



  // Generate session node ID
  useEffect(() => {
    const rand = Math.random().toString(16).substring(2, 8).toUpperCase();
    setSessionId(`LINK-NODE-${rand}`);
  }, []);

  // Simulated transmission pipeline logs stepper
  const logSteps = [
    '// INITIALIZING PIPELINE INGESTION TO ETH0...',
    '// SSL HANDSHAKE SECURE WITH GATEWAY: SUCCESS',
    '// SERIALIZING PAYLOAD BLOCKS INTO JSON_STREAM...',
    '// TRANSMITTING PACKET OVER ENCRYPTED UDP TUNNEL...',
    '// VERIFYING CHECKSUM WITH REMOTE INSTANCE...',
    '// ACK RECEIVED: 200 OK (SAVED TO QUEUE)'
  ];

  useEffect(() => {
    if (status !== 'sending') return;

    setTransmittingLogs([logSteps[0]]);

    const timers = logSteps.map((log, index) => {
      if (index === 0) return null;
      return setTimeout(() => {
        setTransmittingLogs((prev) => [...prev, log]);
      }, index * 180);
    });

    return () => {
      timers.forEach((t) => t && clearTimeout(t));
    };
  }, [status]);

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

      // Allow visual logging to complete before showing success
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1300);

    } catch (err: any) {
      console.error(err);
      setTimeout(() => {
        setErrorMsg(err.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }, 1300);
    }
  };



  return (
    <section id="contact" className="contact-section-container">
      <div className="contact-grid-overlay" />
      
      <div ref={sectionRef} className="contact-inner-wrapper">
        
        {/* Double Column Grid Layout */}
        <div className="contact-dashboard-grid">
          
          {/* LEFT COLUMN: System Telemetry & Gateways */}
          <div className={`contact-telemetry-panel ${visible ? 'fade-in-up' : ''}`} style={{ transitionDelay: '0.1s' }}>
            
            {/* Header label */}
            <div className="contact-hud-label">// 03 / BUILD</div>
            
            {/* Immersive Title */}
            <h2 className="contact-hud-title">ESTABLISH SECURE LINK</h2>
            
            <p className="contact-hud-teaser">
              Have an architectural challenge or scaling requirement? Initialize a secure socket transmission below.
            </p>

            {/* Hardware Telemetry Card */}
            <div className="hardware-console-card">
              <div className="console-card-header">
                <span className="terminal-title">// LOG_RECEIVER_TELEMETRY.conf</span>
                <span className="blinking-dot-container">
                  <span className="blinking-dot" />
                  STATUS: ESTABLISHED
                </span>
              </div>
              
              {/* Dual-Channel Live Waveform */}
              <Oscilloscope />

              {/* Metrics Readout */}
              <div className="console-readout-rows">
                <div className="readout-row">
                  <span className="readout-label">SYSTEM STATE:</span>
                  <span className="readout-val color-green">NOMINAL (99.8%)</span>
                </div>
                <div className="readout-row">
                  <span className="readout-label">SESSION ID:</span>
                  <span className="readout-val monospace">{sessionId || 'LINKING...'}</span>
                </div>
                <div className="readout-row">
                  <span className="readout-label">CRYPTO SUITE:</span>
                  <span className="readout-val monospace">ECDH_P256 / AES-GCM-256</span>
                </div>
                <div className="readout-row">
                  <span className="readout-label">PING METRIC:</span>
                  <span className="readout-val color-amber">14ms (RTT_OPTIMAL)</span>
                </div>
              </div>
            </div>

            {/* Social Gateways Links inside Card Slots */}
            <div className="social-gateways-container">
              <span className="gateways-label">// PUBLIC KEY ENDPOINTS</span>
              <div className="social-links-grid">
                {socialLinks.map((link) => (
                  <SocialButton key={link.label} link={link} />
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Transmission Form Interface */}
          <div className={`contact-form-panel ${visible ? 'fade-in-up' : ''}`} style={{ transitionDelay: '0.2s' }}>
            
            {/* Success Telemetry View */}
            {status === 'success' ? (
              <div className="terminal-result-card success">
                <div className="terminal-result-header">// TRANSACTION_VERIFIED</div>
                <div className="terminal-result-body">
                  <div className="success-code-log">[VERIFIED] TRANSMISSION ESTABLISHED</div>
                  <h3 className="success-heading">MESSAGE INGESTED</h3>
                  
                  <div className="terminal-logs-window font-mono">
                    <div className="terminal-log-line color-green">&gt; Packet checksum verified: 0xFD8E42</div>
                    <div className="terminal-log-line color-green">&gt; Ingesting message stream payloads...</div>
                    <div className="terminal-log-line color-green">&gt; Writing record block to PostgreSQL DB...</div>
                    <div className="terminal-log-line">&gt; Pipeline shutdown. Connection standby mode.</div>
                  </div>

                  <p className="success-subtext">
                    Your transmission was saved securely. Prathamesh will review your packet nodes and respond shortly.
                  </p>
                  
                  <Magnetic strength={0.2} range={60}>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="transmit-submit-btn cursor-pointer"
                    >
                      [ NEW_TRANSMISSION() ]
                    </button>
                  </Magnetic>
                </div>
              </div>
            ) : status === 'sending' ? (
              /* Sending/Transmitting logs View */
              <div className="terminal-result-card transmitting">
                <div className="terminal-result-header">// PIPELINE_ACTIVE (TRANSMITTING)</div>
                <div className="terminal-result-body flex flex-col justify-between">
                  <div>
                    <div className="success-code-log animate-pulse">TRANSMITTING PACKETS...</div>
                    
                    <div className="terminal-logs-window font-mono min-h-[140px] mt-4">
                      {transmittingLogs.map((log, index) => (
                        <div key={index} className="terminal-log-line">
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="progress-bar-container mt-6">
                    <div className="progress-bar-fill" />
                  </div>
                </div>
              </div>
            ) : (
              /* Core Form Telemetry inputs */
              <form onSubmit={handleSubmit} className="console-form-container">
                <div className="console-form-header">
                  <span>// STREAM_INGEST_FORM</span>
                  <span>SECURE CHANNEL</span>
                </div>
                
                <div className="contact-inputs-grid">
                  
                  {/* Name field */}
                  <div className="console-form-group">
                    <div className="console-form-group-header">
                      <span className="param-label">[PARAM: name]</span>
                      <span className="param-type">string</span>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="console-input"
                      placeholder="Enter name"
                    />
                    <div className="console-focus-underline" />
                  </div>

                  {/* Email field */}
                  <div className="console-form-group">
                    <div className="console-form-group-header">
                      <span className="param-label">[PARAM: email]</span>
                      <span className="param-type">email</span>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="console-input"
                      placeholder="name@domain.com"
                    />
                    <div className="console-focus-underline" />
                  </div>

                </div>

                {/* Subject field */}
                <div className="console-form-group">
                  <div className="console-form-group-header">
                    <span className="param-label">[PARAM: subject]</span>
                    <span className="param-type">string</span>
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="console-input"
                    placeholder="Enter subject header"
                  />
                  <div className="console-focus-underline" />
                </div>

                {/* Message field */}
                <div className="console-form-group">
                  <div className="console-form-group-header">
                    <span className="param-label">[PARAM: message]</span>
                    <span className="param-type">text</span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="console-textarea"
                    placeholder="Enter project specs, pipeline requirements, or message details..."
                  />
                  <div className="console-focus-underline" />
                </div>

                {status === 'error' && (
                  <div className="terminal-error-log font-mono">
                    // [CRITICAL ERROR] Failed to transmit packet: {errorMsg}
                  </div>
                )}

                {/* Submit Action */}
                <div className="submit-btn-row">
                  <Magnetic strength={0.15} range={60}>
                    <button
                      type="submit"
                      className="transmit-submit-btn cursor-pointer"
                    >
                      [ EXECUTE TRANSMIT_MESSAGE() ]
                    </button>
                  </Magnetic>
                </div>

              </form>
            )}

          </div>

        </div>

        {/* Footer copyright section */}
        <div className={`contact-footer-line ${visible ? 'fade-in-up' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <span className="footer-copyright-text">
            © 2026 PRATHAMESH JADHAV. BUILT WITH SYSTEMS FOCUS & SOLID INFRASTRUCTURE.
          </span>
        </div>

      </div>

      <style>{`
        .contact-section-container {
          position: relative;
          padding: 8rem 5rem 4rem 5rem;
          background-color: #0a0a0a;
          box-sizing: border-box;
          border-top: 1px solid rgba(245, 245, 245, 0.05);
          overflow: hidden;
        }

        .contact-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(rgba(255, 180, 0, 0.02) 1.5px, transparent 1.5px),
            linear-gradient(to right, rgba(255,255,255,0.008) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.008) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.85;
          pointer-events: none;
          z-index: 1;
        }

        .contact-inner-wrapper {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          z-index: 3;
        }

        .contact-dashboard-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: 6rem;
          align-items: start;
        }

        .contact-telemetry-panel {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }

        .contact-hud-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          color: #ffb400;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        .contact-hud-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 4.5vw, 4.5rem);
          line-height: 0.95;
          color: #f5f5f5;
          margin: 0;
          letter-spacing: 0.02em;
        }

        .contact-hud-teaser {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 1.05rem;
          line-height: 1.6;
          color: rgba(245, 245, 245, 0.5);
          margin: 1.5rem 0 2rem 0;
        }

        /* Telemetry Box Card */
        .hardware-console-card {
          width: 100%;
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(255, 180, 0, 0.12);
          border-radius: 6px;
          padding: 1.5rem;
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .console-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(245, 245, 245, 0.06);
          padding-bottom: 0.75rem;
        }

        .terminal-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.05em;
          color: rgba(245, 245, 245, 0.35);
        }

        .blinking-dot-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.55rem;
          font-weight: bold;
          color: #10b981;
          letter-spacing: 0.05em;
        }

        .blinking-dot {
          width: 5px;
          height: 5px;
          background-color: #10b981;
          border-radius: 50%;
          display: inline-block;
          animation: terminalBlink 1.4s infinite ease-in-out;
        }

        @keyframes terminalBlink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }

        .console-oscilloscope-container {
          width: 100%;
          background-color: #050505;
          border: 1px solid rgba(245, 245, 245, 0.04);
          border-radius: 4px;
          overflow: hidden;
          padding: 0.25rem 0;
        }

        .console-readout-rows {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .readout-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          letter-spacing: 0.05em;
        }

        .readout-label {
          font-family: 'JetBrains Mono', monospace;
          color: rgba(245, 245, 245, 0.3);
        }

        .readout-val {
          font-family: 'Inter', sans-serif;
          color: #f5f5f5;
        }

        .readout-val.monospace {
          font-family: 'JetBrains Mono', monospace;
        }

        .readout-val.color-green {
          color: #10b981;
          font-weight: 600;
        }

        .readout-val.color-amber {
          color: #ffb400;
        }

        /* Gateways container */
        .social-gateways-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }

        .gateways-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: rgba(245, 245, 245, 0.25);
          letter-spacing: 0.1em;
        }

        .social-links-grid {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          width: 100%;
        }

        .social-console-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(245,245,245,0.4);
          background: rgba(245, 245, 245, 0.02);
          border: 1px solid rgba(245, 245, 245, 0.08);
          border-radius: 4px;
          text-decoration: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
          padding: 0.7rem 1.2rem;
          justify-content: space-between;
          min-width: 150px;
        }

        .social-console-btn:hover {
          color: #ffb400;
          border-color: rgba(255, 180, 0, 0.3);
          background: rgba(255, 180, 0, 0.02);
        }

        .btn-terminal-tag {
          font-size: 0.55rem;
          color: rgba(245, 245, 245, 0.2);
          transition: color 0.3s ease;
        }

        .social-console-btn:hover .btn-terminal-tag {
          color: #ffb400;
        }

        /* Form styling */
        .contact-form-panel {
          width: 100%;
        }

        .console-form-container {
          background: rgba(10, 10, 10, 0.5);
          border: 1px solid rgba(245, 245, 245, 0.06);
          border-radius: 6px;
          padding: 2.5rem;
          box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          gap: 2.2rem;
        }

        .console-form-header {
          display: flex;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: rgba(245, 245, 245, 0.25);
          border-bottom: 1px solid rgba(245, 245, 245, 0.06);
          padding-bottom: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .contact-inputs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .console-form-group {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .console-form-group-header {
          display: flex;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .param-label {
          color: rgba(245, 245, 245, 0.3);
          transition: color 0.3s ease;
        }

        .param-type {
          color: rgba(255, 180, 0, 0.35);
        }

        .console-input, .console-textarea {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 0.95rem;
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

        .console-focus-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #ffb400;
          box-shadow: 0 0 6px #ffb400;
          transition: width 0.35s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .console-input:focus ~ .console-focus-underline,
        .console-textarea:focus ~ .console-focus-underline {
          width: 100%;
        }

        .console-form-group:focus-within .param-label {
          color: #ffb400;
        }

        .console-textarea {
          min-height: 140px;
          resize: vertical;
        }

        .terminal-error-log {
          font-size: 0.7rem;
          color: #ef4444;
          letter-spacing: 0.05em;
        }

        .submit-btn-row {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .transmit-submit-btn {
          border: 1px solid #ffb400;
          color: #ffb400;
          background: transparent;
          padding: 1.1rem 3rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
          border-radius: 4px;
        }

        .transmit-submit-btn:hover {
          color: #0a0a0a;
          background-color: #ffb400;
          box-shadow: 0 0 15px rgba(255, 180, 0, 0.4);
        }

        /* Result cards styling (Transmitting and Success States) */
        .terminal-result-card {
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(245, 245, 245, 0.08);
          border-radius: 6px;
          padding: 3rem;
          box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          min-height: 420px;
          display: flex;
          flex-direction: column;
        }

        .terminal-result-card.success {
          border-color: rgba(16, 185, 129, 0.2);
          box-shadow: 0 15px 45px -15px rgba(16, 185, 129, 0.1);
        }

        .terminal-result-card.transmitting {
          border-color: rgba(255, 180, 0, 0.2);
          box-shadow: 0 15px 45px -15px rgba(255, 180, 0, 0.1);
        }

        .terminal-result-header {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.3);
          border-bottom: 1px solid rgba(245, 245, 245, 0.06);
          padding-bottom: 0.75rem;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }

        .terminal-result-card.success .terminal-result-header {
          color: #10b981;
        }

        .terminal-result-card.transmitting .terminal-result-header {
          color: #ffb400;
        }

        .terminal-result-body {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .success-code-log {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: #ffb400;
          margin-bottom: 0.75rem;
        }

        .terminal-result-card.success .success-code-log {
          color: #10b981;
        }

        .success-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.8rem;
          color: #f5f5f5;
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
          line-height: 1;
        }

        .terminal-logs-window {
          background-color: #050505;
          border: 1px solid rgba(245, 245, 245, 0.04);
          border-radius: 4px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }

        .terminal-log-line {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: rgba(245, 245, 245, 0.55);
          letter-spacing: 0.02em;
          line-height: 1.4;
        }

        .terminal-log-line.color-green {
          color: #10b981;
        }

        .success-subtext {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(245, 245, 245, 0.6);
          margin-bottom: 2rem;
        }

        .progress-bar-container {
          width: 100%;
          height: 3px;
          background-color: rgba(245, 245, 245, 0.04);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background-color: #ffb400;
          width: 0%;
          animation: transmitProgressBar 1.1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          box-shadow: 0 0 6px #ffb400;
        }

        @keyframes transmitProgressBar {
          to { width: 100%; }
        }

        /* Footer line */
        .contact-footer-line {
          margin-top: 8rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(245, 245, 245, 0.06);
          text-align: center;
        }

        .footer-copyright-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: rgba(245, 245, 245, 0.25);
          text-transform: uppercase;
        }

        /* Intersection Observer entry animations */
        .fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .contact-telemetry-panel, .contact-form-panel, .contact-footer-line {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.65, 0, 0.35, 1), transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
        }

        @media (max-width: 992px) {
          .contact-section-container {
            padding: 6rem 2rem 4rem 2rem;
          }

          .contact-dashboard-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .contact-hud-title {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .contact-inputs-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .terminal-result-card {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
