export default function CTASection() {
  return (
    <section id="cta-banner" className="cta-section">
      <div className="cta-bg" aria-hidden="true" />
      <div className="container cta-content fade-in">
        <div className="section-tag">Ready to Begin?</div>
        <h2 className="cta-title">
          Your Strongest Self<br />
          Starts <span>Today.</span>
        </h2>
        <p className="cta-sub">Join 1,200+ members who've already transformed their lives. No excuses. No delays.</p>
        <div className="cta-btns">
          <a href="#pricing" className="btn btn-neon">Join IronPulse Now ⚡</a>
          <a href="#schedule" className="btn btn-outline">View Schedule</a>
        </div>
      </div>
    </section>
  );
}
