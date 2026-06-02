'use client';
import { useEffect, useRef } from 'react';

interface LoaderProps {
  onComplete: () => void;
  onStartTransition?: () => void;
}

export function Loader({ onComplete, onStartTransition }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const text = textRef.current;
    const bar = barRef.current;

    if (!loader || !text || !bar) return;

    const t1 = setTimeout(() => {
      text.classList.add('visible');
    }, 100);

    const t2 = setTimeout(() => {
      bar.classList.add('loaded');
    }, 200);

    const t3 = setTimeout(() => {
      loader.classList.add('hidden');
      if (onStartTransition) onStartTransition();
    }, 1800);

    const t4 = setTimeout(() => {
      onComplete();
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="loader">
      <div className="loader-content">
        <span ref={textRef} className="loader-text">
          PRATHAMESH JADHAV
        </span>
        <div ref={barRef} className="loader-bar" />
      </div>
    </div>
  );
}
