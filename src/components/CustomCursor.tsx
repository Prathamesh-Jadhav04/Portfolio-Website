'use client';
import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const coords = coordsRef.current;
    const status = statusRef.current;

    if (!dot || !ring) return;

    // Start coordinates in the center of the window to avoid initial hiding
    let targetX = typeof window !== 'undefined' ? window.innerWidth / 2 : 200;
    let targetY = typeof window !== 'undefined' ? window.innerHeight / 2 : 200;
    let ringX = targetX;
    let ringY = targetY;
    let isHovered = false;
    let active = true;

    // Make cursor visible immediately on mount
    dot.style.opacity = '1';
    ring.style.opacity = '1';
    dot.style.transform = `translate3d(calc(${targetX}px - 50%), calc(${targetY}px - 50%), 0)`;
    ring.style.transform = `translate3d(calc(${ringX}px - 50%), calc(${ringY}px - 50%), 0)`;

    // Listen to mouse movements
    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    // Listen to mouseover for hover scale effect on buttons/links
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target;
      if (target instanceof Element) {
        const isHoverable = target.closest('[data-magnetic]') || target.closest('a, button, [role="button"]');
        if (isHoverable) {
          isHovered = true;
          if (status) {
            status.textContent = 'SYS_LOCK';
            status.style.color = '#ffb400';
            status.style.textShadow = '0 0 5px rgba(255, 180, 0, 0.5)';
          }
          ring.classList.add('hovered');
        } else {
          isHovered = false;
          if (status) {
            status.textContent = 'SYS_OK';
            status.style.color = 'rgba(255, 180, 0, 0.4)';
            status.style.textShadow = 'none';
          }
          ring.classList.remove('hovered');
        }
      }
    };

    // Listen to mousedown/mouseup for clicking pings
    const onMouseDown = () => {
      if (status) status.textContent = 'EXEC_CMD';
      ring.classList.add('clicked');
    };

    const onMouseUp = () => {
      if (status) status.textContent = isHovered ? 'SYS_LOCK' : 'SYS_OK';
      ring.classList.remove('clicked');
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Dynamic animation loop for coordinates text & smooth spring lag
    let animId: number;
    const updatePosition = () => {
      if (active) {
        // Custom dot translation
        dot.style.transform = `translate3d(calc(${targetX}px - 50%), calc(${targetY}px - 50%), 0)`;

        // Spring physics interpolation for reticle ring lag
        const dx = targetX - ringX;
        const dy = targetY - ringY;
        ringX += dx * 0.16; // Lerp factor
        ringY += dy * 0.16;

        ring.style.transform = `translate3d(calc(${ringX}px - 50%), calc(${ringY}px - 50%), 0) ${isHovered ? 'rotate(90deg)' : 'rotate(0deg)'}`;

        // Direct DOM update of telemetry text coordinates
        if (coords) {
          coords.textContent = `[X:${Math.round(targetX)} Y:${Math.round(targetY)}]`;
        }
      }

      animId = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* 1. Core Target Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: '#ffb400',
          boxShadow: '0 0 0 1px rgba(10, 10, 10, 0.85), 0 0 4px rgba(10, 10, 10, 0.85)',
          zIndex: 30000,
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
        }}
      />

      {/* 2. Systems Reticle HUD Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="hud-reticle-ring"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px dashed rgba(255, 180, 0, 0.45)',
          boxShadow: '0 0 0 1px rgba(10, 10, 10, 0.75), inset 0 0 0 1px rgba(10, 10, 10, 0.75)',
          zIndex: 29999,
          pointerEvents: 'none',
          opacity: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1), height 0.4s cubic-bezier(0.16, 1, 0.3, 1), border 0.3s, opacity 0.3s ease',
          willChange: 'transform',
        }}
      >
        {/* Reticle ticks */}
        <div className="reticle-tick tick-top" />
        <div className="reticle-tick tick-bottom" />
        <div className="reticle-tick tick-left" />
        <div className="reticle-tick tick-right" />

        {/* Coords and Telemetry readout logs adjacent to ring */}
        <div className="reticle-telemetry">
          <span ref={coordsRef} className="telemetry-item coords-log">[X:000 Y:000]</span>
          <span ref={statusRef} className="telemetry-item status-log">SYS_OK</span>
        </div>
      </div>

      <style jsx global>{`
        /* Hide default mouse everywhere */
        * {
          cursor: none !important;
        }

        .hud-reticle-ring.hovered {
          width: 44px !important;
          height: 44px !important;
          border: 1.5px solid rgba(255, 180, 0, 0.85) !important;
          background: rgba(255, 180, 0, 0.05);
          box-shadow: 0 0 15px rgba(255, 180, 0, 0.25), 0 0 0 1.2px rgba(10, 10, 10, 0.85), inset 0 0 0 1.2px rgba(10, 10, 10, 0.85) !important;
        }

        .hud-reticle-ring.clicked {
          width: 24px !important;
          height: 24px !important;
          border: 2px solid #ffb400 !important;
          box-shadow: 0 0 20px rgba(255, 180, 0, 0.45), 0 0 0 1.2px rgba(10, 10, 10, 0.85), inset 0 0 0 1.2px rgba(10, 10, 10, 0.85) !important;
        }

        /* Reticle alignment ticks */
        .reticle-tick {
          position: absolute;
          background: var(--accent-amber, #ffb400);
          box-shadow: 0 0 2px rgba(10, 10, 10, 0.95);
          transition: transform 0.4s, background-color 0.3s;
        }
        
        .tick-top {
          top: -4px;
          left: calc(50% - 0.5px);
          width: 1px;
          height: 4px;
        }
        .tick-bottom {
          bottom: -4px;
          left: calc(50% - 0.5px);
          width: 1px;
          height: 4px;
        }
        .tick-left {
          left: -4px;
          top: calc(50% - 0.5px);
          width: 4px;
          height: 1px;
        }
        .tick-right {
          right: -4px;
          top: calc(50% - 0.5px);
          width: 4px;
          height: 1px;
        }

        /* Telemetry logs layout */
        .reticle-telemetry {
          position: absolute;
          left: 42px;
          top: calc(50% - 7px);
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          pointer-events: none;
          font-family: var(--font-mono, monospace);
          font-size: 6.5px;
          line-height: 1;
          white-space: nowrap;
          text-shadow: 1px 1px 1px rgba(10, 10, 10, 0.95), -1px -1px 1px rgba(10, 10, 10, 0.95), 0 0 3px rgba(10, 10, 10, 0.9);
        }

        .telemetry-item {
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: color 0.3s;
        }

        .coords-log {
          color: rgba(255, 180, 0, 0.85);
        }

        .status-log {
          color: rgba(255, 180, 0, 0.45);
        }

        .hud-reticle-ring.hovered .coords-log {
          color: rgba(255, 255, 255, 0.95);
        }
      `}</style>
    </>
  );
}
