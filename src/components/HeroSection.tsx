export function HeroSection() {
  return (
    <section id="hero" className="full-screen">
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="bg-video"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-ink-swirling-in-water-4331-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay" />
      </div>

      <div className="hero-content container">
        <div className="hero-text-wrapper">
          <div className="year-badge">EST. 2022</div>

          <h1 className="hero-headline">
            <div className="line">
              <span>I BUILD.</span>
            </div>
            <div className="line">
              <span>I SHIP.</span>
            </div>
            <div className="line">
              <span>I OPTIMIZE.</span>
            </div>
          </h1>

          <p className="hero-subtext">AI/ML Developer. Data Scientist. GenAI Engineer.</p>
        </div>

        <div className="scroll-explore">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
        </div>
      </div>
      <style>{`
        .year-badge {
          border: 1px solid rgba(255, 180, 0, 0.15) !important;
          background: rgba(255, 180, 0, 0.02) !important;
          padding: 0.35rem 0.85rem !important;
          border-radius: 4px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .year-badge:hover {
          border-color: rgba(255, 180, 0, 0.45) !important;
          background: rgba(255, 180, 0, 0.06) !important;
          box-shadow: 0 0 20px rgba(255, 180, 0, 0.18);
          transform: translateY(-2px) !important;
        }

        .scroll-explore {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-explore:hover {
          color: var(--accent-amber, #ffb400) !important;
          transform: translateY(3px);
        }

        .scroll-explore:hover .scroll-line {
          background: var(--accent-amber, #ffb400) !important;
          animation: lineStretch 0.8s infinite alternate ease-in-out;
        }

        @keyframes lineStretch {
          from {
            width: 30px;
          }
          to {
            width: 55px;
          }
        }
      `}</style>
    </section>
  );
}
