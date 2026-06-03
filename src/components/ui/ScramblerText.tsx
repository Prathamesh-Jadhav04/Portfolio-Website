'use client';

import { useState, useEffect } from 'react';

interface ScramblerTextProps {
  text: string;
  className?: string;
}

export function ScramblerText({ text, className }: ScramblerTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => 
        text
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === '.' || char === '/' || char === '-' || char === '_') return char;
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
  }, [isHovered, text]);

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
