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
    </section>
  );
}
