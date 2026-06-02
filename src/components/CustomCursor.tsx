'use client';
import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let hovered = false;

    const updateTransform = () => {
      const scale = hovered ? 'scale(2.5)' : 'scale(1)';
      cursor.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%)) ${scale}`;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      updateTransform();
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target;
      if (target instanceof Element && target.closest('[data-magnetic]')) {
        hovered = true;
        updateTransform();
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target;
      if (target instanceof Element && target.closest('[data-magnetic]')) {
        hovered = false;
        updateTransform();
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: '#f5f5f5',
        mixBlendMode: 'difference',
        zIndex: 10000,
        pointerEvents: 'none',
        transition: 'transform 0.1s, scale 0.2s',
        willChange: 'transform',
      }}
    />
  );
}
