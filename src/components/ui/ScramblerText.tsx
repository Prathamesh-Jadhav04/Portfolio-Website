'use client';

import { useState, useEffect } from 'react';

interface ScramblerTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function ScramblerText({ text, className, delay = 0 }: ScramblerTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(delay === 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle delay on mount
  useEffect(() => {
    if (delay === 0 || !mounted) return;
    const timeout = setTimeout(() => {
      setReady(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay, mounted]);

  useEffect(() => {
    if (!ready || !mounted) {
      // Show randomized characters initially during the delay so it looks like active computing
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      setDisplayText(
        text
          .split('')
          .map((char) => {
            if ([' ', '.', '/', '-', '_', ',', '—'].includes(char)) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      return;
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => 
        text
          .split('')
          .map((char, index) => {
            if ([' ', '.', '/', '-', '_', ',', '—'].includes(char)) return char;
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iterations += 1/3;
      if (iterations >= text.length) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isHovered, text, mounted, ready]);

  return (
    <span 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      className={className}
      style={{ 
        position: 'relative', 
        display: 'inline-block', 
        cursor: 'default',
        userSelect: 'none',
        WebkitUserSelect: 'none'
      }}
    >
      {/* Invisible original text to reserve exact layout space & prevent shifts */}
      <span style={{ opacity: 0, pointerEvents: 'none', userSelect: 'none', WebkitUserSelect: 'none' }}>
        {text}
      </span>
      {/* Absolutely positioned text containing the active scrambled/normal text */}
      <span style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', whiteSpace: 'nowrap' }}>
        {displayText}
      </span>
    </span>
  );
}

export function ParagraphScrambler({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} style={{ display: 'inline' }}>
      {text.split(' ').map((word, idx) => (
        <span key={idx} style={{ display: 'inline-block', marginRight: '0.25em' }}>
          <ScramblerText text={word} />
        </span>
      ))}
    </span>
  );
}
