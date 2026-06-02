'use client';

import { useState, useRef, useEffect } from 'react';
import { Magnetic } from './ui/Magnetic';

interface CommandLog {
  type: 'input' | 'output' | 'system' | 'welcome';
  text: string;
}

interface DeveloperConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeveloperConsole({ isOpen, onClose }: DeveloperConsoleProps) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    { type: 'welcome', text: '==================================================' },
    { type: 'welcome', text: 'PRATHAMESH JADHAV // AI & SYSTEMS DEVELOPMENT CORE' },
    { type: 'welcome', text: '==================================================' },
    { type: 'welcome', text: 'Type "help" for a list of registered queries.' },
    { type: 'welcome', text: 'Type "exit" or click outside to close system shell.' },
    { type: 'welcome', text: ' ' },
  ]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<HTMLDivElement>(null);

  // Focus input automatically when console opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Auto-scroll to bottom of terminal output
  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.scrollTop = streamRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleTerminalClick = (e: React.MouseEvent) => {
    // Prevent closing when clicking inside the panel
    e.stopPropagation();
    inputRef.current?.focus();
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    // Append user input to history
    const updatedHistory: CommandLog[] = [...history, { type: 'input', text: `guest@prathamesh:~$ ${inputVal}` }];
    
    // Command Router
    switch (cmd) {
      case 'help':
        updatedHistory.push({
          type: 'output',
          text: `
Registered system queries:
  about    - Displays profile summary and systems focus
  skills   - Lists technical framework & algorithm specs
  projects - Displays active production-grade directories
  contact  - Outputs secure mailbox and connection channels
  neofetch - Shows system hardware and configuration
  exit     - Shuts down system shell
  clear    - Flushes console output log history
          `.trim()
        });
        break;
        
      case 'about':
        updatedHistory.push({
          type: 'output',
          text: `
Prathamesh Jadhav — Engineering-focused AI/ML developer.
Specializing in building production-grade vector databases, low-latency RAG architectures, and multi-threaded systems-level network analysis.
Focus: Custom indexing (HNSW), concurrency control, and data throughput optimizations.
          `.trim()
        });
        break;
        
      case 'skills':
        updatedHistory.push({
          type: 'output',
          text: `
Technical Competencies:
  [Vector Engines]     HNSW Graph Indexing, Scalar Quantization
  [Systems & Networking] Multithreading, C, Python (Scapy, pcap)
  [GenAI / RAG]          FastAPI, LangChain, OpenAI APIs
  [Web Frameworks]       Next.js, React 19, TypeScript, CSS Grid
          `.trim()
        });
        break;
        
      case 'projects':
        updatedHistory.push({
          type: 'output',
          text: `
Production Repositories:
  01 / NUROSEARCH   - HNSW-indexed vector database [Rust/Python/FastAPI]
  02 / DPI ENGINE   - Multi-threaded raw packet interceptor [C/Python/Scapy]
  03 / KOZUMIHUB    - Entertainment indexing orchestrator [TypeScript/NextJS]
  04 / SPENDSTRACK  - Offline-first transactional dashboard [TypeScript]
  05 / PR REVIEWER  - Automated AI code reviewing webhook chatbot [FastAPI]
          `.trim()
        });
        break;
        
      case 'contact':
        updatedHistory.push({
          type: 'output',
          text: `
Ingestion Gateways:
  Email:    Prathamesh.Jadhav.Office@gmail.com
  GitHub:   https://github.com/Prathamesh-Jadhav04
  LinkedIn: https://linkedin.com/in/prathamesh-jadhav04
          `.trim()
        });
        break;
        
      case 'neofetch':
        updatedHistory.push({
          type: 'output',
          text: `
 _  _              guest@prathamesh-jadhav
 |  |  _|_  |_|    -----------------------
 |__|   |_  | |    OS: NextJS Core OS (Windows WSL2)
 _                 KERNEL: React 19.2.4 (Turbopack)
 |_) ._ _._|_|_    UPTIME: 22h 45m
 |   | (_| |_| |   SHELL: jsh v1.0.0
                   RESOLUTION: 1920x1080
                   THEME: Dark Brutalist Amber
                   COMPILER: TypeScript v5
          `.trim()
        });
        break;
        
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        setInputVal('');
        return;
        
      default:
        updatedHistory.push({
          type: 'output',
          text: `jsh: command not recognized: "${cmd}". Type "help" for instructions.`
        });
        break;
    }

    setHistory(updatedHistory);
    setInputVal('');
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10, 10, 10, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 6000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      {/* Terminal panel */}
      <div
        onClick={handleTerminalClick}
        style={{
          width: '100%',
          maxWidth: '850px',
          backgroundColor: '#050505',
          border: '1px solid rgba(245,245,245,0.08)',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.8)',
          cursor: 'text',
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            padding: '0.75rem 1.25rem',
            backgroundColor: 'rgba(245,245,245,0.015)',
            borderBottom: '1px solid rgba(245,245,245,0.04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Minimal Window Dots */}
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button
              onClick={onClose}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'rgba(245,245,245,0.1)',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ff4444'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(245,245,245,0.1)'}
            />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-amber, #ffb400)', opacity: 0.6 }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'rgba(245,245,245,0.1)' }} />
          </div>

          <span
            style={{
              fontFamily: 'var(--font-jetbrains-mono, monospace)',
              fontSize: '0.6rem',
              letterSpacing: '0.25em',
              color: 'rgba(245,245,245,0.3)',
              textTransform: 'uppercase',
            }}
          >
            guest@prathamesh-jadhav: ~ (DOUBLE-CLICK BRAND TO EXIT)
          </span>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(245,245,245,0.3)',
              fontFamily: 'monospace',
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#ffb400'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(245,245,245,0.3)'}
          >
            ✕
          </button>
        </div>

        {/* Terminal Console Stream */}
        <div
          ref={streamRef}
          className="terminal-stream"
          style={{
            height: '380px',
            overflowY: 'auto',
            padding: '1.5rem',
            fontFamily: 'var(--font-jetbrains-mono, monospace)',
            fontSize: '0.85rem',
            lineHeight: 1.5,
            color: 'rgba(245,245,245,0.7)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            textAlign: 'left',
            position: 'relative',
          }}
          data-lenis-prevent
        >
          {/* SCANLINE EFFECT */}
          <div className="terminal-scanlines" />

          {/* Log Stream Output */}
          {history.map((log, index) => {
            if (log.type === 'welcome') {
              return (
                <div key={index} style={{ color: 'rgba(245,245,245,0.4)', whiteSpace: 'pre' }}>
                  {log.text}
                </div>
              );
            }
            if (log.type === 'input') {
              return (
                <div key={index} style={{ color: 'var(--accent-amber, #ffb400)', fontWeight: 500 }}>
                  {log.text}
                </div>
              );
            }
            return (
              <div key={index} style={{ whiteSpace: 'pre-wrap', color: 'rgba(245,245,245,0.75)', marginBottom: '0.5rem' }}>
                {log.text}
              </div>
            );
          })}
          
          {/* Active Command Input Line */}
          <form onSubmit={handleCommandSubmit} style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
            <span style={{ color: 'var(--accent-amber, #ffb400)', marginRight: '0.5rem', flexShrink: 0 }}>
              guest@prathamesh:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck="false"
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#f5f5f5',
                fontFamily: 'var(--font-jetbrains-mono, monospace)',
                fontSize: '0.85rem',
                padding: 0,
                caretColor: 'var(--accent-amber, #ffb400)',
                cursor: 'text',
              }}
            />
          </form>
          {/* End of Stream marker */}
        </div>
      </div>

      <style>{`
        .terminal-stream::-webkit-scrollbar {
          width: 4px;
        }
        .terminal-stream::-webkit-scrollbar-track {
          background: rgba(245,245,245,0.01);
        }
        .terminal-stream::-webkit-scrollbar-thumb {
          background: rgba(245,245,245,0.08);
          border-radius: 2px;
        }
        
        .terminal-scanlines {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%, 
            rgba(0, 0, 0, 0.25) 50%
          );
          background-size: 100% 4px;
          z-index: 10;
          pointer-events: none;
          opacity: 0.15;
        }
      `}</style>
    </div>
  );
}
