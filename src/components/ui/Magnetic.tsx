'use client';

import React, { useRef, useState, useEffect } from 'react';

interface MagneticProps {
  children: React.ReactElement;
  range?: number;
  strength?: number;
}

export function Magnetic({ children, range = 60, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from mouse to center of element
      const dx = clientX - centerX;
      const dy = clientY - centerY;
      const distance = Math.hypot(dx, dy);

      if (distance < range) {
        // Pull towards cursor
        const x = dx * strength;
        const y = dy * strength;
        setPosition({ x, y });
      } else {
        // Reset position
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [range, strength]);

  const child = React.Children.only(children) as React.ReactElement<any>;

  return React.cloneElement(child, {
    ref,
    style: {
      ...child.props.style,
      transform: `translate(${position.x}px, ${position.y}px)`,
      transition: position.x === 0 && position.y === 0 
        ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' 
        : 'transform 0.1s ease-out',
      willChange: 'transform',
      display: child.props.style?.display || 'inline-block',
    },
  });
}
