'use client';

import { useEffect, useRef, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
  onStartTransition?: () => void;
}

export function Loader({ onComplete, onStartTransition }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState('');
  const [scrambleFinished, setScrambleFinished] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const targetText = 'PRATHAMESH JADHAV';

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

      iterations += 1 / 3.5; // Controls the speed of the scramble reveal
      
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

  const handleEnterClick = () => {
    if (isEntering) return;
    setIsEntering(true);

    const loader = loaderRef.current;
    if (!loader) return;

    // 1. Slide up loader page
    loader.classList.add('hidden');
    
    // 2. Trigger the page reveal stagger (scramblers, badge fade-ins)
    if (onStartTransition) {
      onStartTransition();
    }

    // 3. Unmount loader once transition completes (1.8s)
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
        
        {scrambleFinished && (
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
        .loader-action-wrapper {
          margin-top: 2rem;
          opacity: 0;
          transform: translateY(15px);
          animation: fadeUpEnterBtn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
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
