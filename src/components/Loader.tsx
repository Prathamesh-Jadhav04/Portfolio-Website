'use client';

import { useEffect, useRef, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
  onStartTransition?: () => void;
}

export function Loader({ onComplete, onStartTransition }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const logsContainerRef = useRef<HTMLDivElement>(null);
  
  const [displayText, setDisplayText] = useState('');
  const [bootLogs, setBootLogs] = useState<string[]>([]);
  const [scrambleFinished, setScrambleFinished] = useState(false);
  const [logsFinished, setLogsFinished] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const targetText = 'PRATHAMESH JADHAV';

  const systemLogs = [
    'SYS_BOOT // SHIELD_INTEGRITY: 100%',
    'SYS_BOOT // MOUNTING_INDEX: HNSW_VECTOR_GRAPH...',
    'SYS_BOOT // PIPELINE_RESOLVED: RESEND_SMTP_CORE...',
    'SYS_BOOT // ESTABLISHED_SECURE_NODE: NODE_AI_26_01...',
    'SYS_BOOT // LATENCY: 12MS [STABLE]',
    'SYS_BOOT // SYSTEM_SHELL: STATUS_READY_TO_LAUNCH'
  ];

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Trigger bar fill animation
    const barTimeout = setTimeout(() => {
      bar.classList.add('loaded');
    }, 100);

    // Text scramble animation
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#@$%&*';
    let iterations = 0;
    
    const scrambleInterval = setInterval(() => {
      setDisplayText(
        targetText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iterations) return targetText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iterations += 1 / 3.5;
      
      if (iterations >= targetText.length) {
        clearInterval(scrambleInterval);
        setDisplayText(targetText);
        setScrambleFinished(true);
      }
    }, 30);

    return () => {
      clearTimeout(barTimeout);
      clearInterval(scrambleInterval);
    };
  }, []);

  // Animate terminal logs after title scramble completes
  useEffect(() => {
    if (!scrambleFinished) return;

    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < systemLogs.length) {
        setBootLogs((prev) => [...prev, systemLogs[logIndex]]);
        logIndex++;
        
        // Auto-scroll logs
        if (logsContainerRef.current) {
          logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight;
        }
      } else {
        clearInterval(logInterval);
        setLogsFinished(true);
      }
    }, 180);

    return () => clearInterval(logInterval);
  }, [scrambleFinished]);

  const handleEnterClick = () => {
    if (isEntering) return;
    setIsEntering(true);

    const loader = loaderRef.current;
    if (!loader) return;

    loader.classList.add('hidden');
    
    if (onStartTransition) {
      onStartTransition();
    }

    setTimeout(() => {
      onComplete();
    }, 1800);
  };

  return (
    <div ref={loaderRef} className="loader">
      <div className="loader-content">
        <span className="loader-text visible">
          {displayText}
        </span>
        <div ref={barRef} className="loader-bar" />
        
        {/* Hacker diagnostic boot terminal */}
        {scrambleFinished && (
          <div ref={logsContainerRef} className="loader-terminal-logs">
            {bootLogs.map((log, index) => (
              <div key={index} className="loader-log-line">
                <span className="cyan-dash">&gt;</span> {log}
              </div>
            ))}
          </div>
        )}

        {logsFinished && (
          <div className="loader-action-wrapper">
            <button 
              onClick={handleEnterClick} 
              className={`loader-enter-btn ${isEntering ? 'entering' : ''}`}
            >
              ENTER SYSTEM
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .loader-terminal-logs {
          margin-top: 1.5rem;
          height: 80px;
          overflow-y: hidden;
          font-family: var(--font-mono, monospace);
          font-size: 0.58rem;
          color: rgba(245, 245, 245, 0.45);
          text-align: left;
          width: 280px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 0.5rem;
          background: rgba(10, 10, 10, 0.5);
          border: 1px solid rgba(255, 180, 0, 0.05);
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        .loader-log-line {
          animation: fadeLog 0.3s ease forwards;
        }

        .cyan-dash {
          color: var(--accent-amber, #ffb400);
          margin-right: 0.25rem;
        }

        .loader-action-wrapper {
          margin-top: 2rem;
          opacity: 0;
          transform: translateY(15px);
          animation: fadeUpEnterBtn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }

        .loader-enter-btn {
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          color: var(--accent-amber, #ffb400);
          background: transparent;
          border: 1px solid rgba(255, 180, 0, 0.3);
          padding: 0.65rem 2.2rem;
          border-radius: 4px;
          letter-spacing: 0.35em;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
        }

        .loader-enter-btn:hover:not(.entering) {
          border-color: var(--accent-amber, #ffb400);
          background: rgba(255, 180, 0, 0.08);
          box-shadow: 0 0 25px rgba(255, 180, 0, 0.2);
          text-shadow: 0 0 8px rgba(255, 180, 0, 0.6);
        }

        .loader-enter-btn.entering {
          opacity: 0.3;
          letter-spacing: 0.5em;
          border-color: rgba(255, 180, 0, 0.1);
          cursor: not-allowed;
        }

        @keyframes fadeLog {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUpEnterBtn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
