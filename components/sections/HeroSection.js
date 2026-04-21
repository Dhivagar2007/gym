import { useEffect, useState } from 'react';
import useCounter from '../hooks/useCounter';

function StatItem({ target, label }) {
  const [count, ref] = useCounter(target);
  return (
    <div className="hero-stat" ref={ref}>
      <span className="hero-stat-num">
        {target >= 1000 ? count.toLocaleString('en-IN') : count}+
      </span>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  useEffect(() => {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 22; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 3 + 1;
      p.style.cssText = `
        width:${size}px;height:${size}px;
        left:${Math.random() * 100}%;
        bottom:${Math.random() * -20}%;
        animation-duration:${8 + Math.random() * 14}s;
        animation-delay:${Math.random() * 8}s;
      `;
      container.appendChild(p);
    }
    return () => { if (container) container.innerHTML = ''; };
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg" style={{ backgroundImage: `url('${basePath}/hero-bg.png')` }} />
      <div className="hero-grid" />
      <div className="particles" id="particles" />

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-ring" />
        <div className="hero-ring" />
        <div className="hero-ring" />
        <div className="hero-center" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="dot" />
          NOW ACCEPTING NEW MEMBERS — LIMITED SPOTS
        </div>
        <h1 className="hero-h1">
          Push Your <em>Limits.</em><br />
          Redefine Your<br />
          <em>Strength.</em>
        </h1>
        <p className="hero-sub">
          Train smarter, lift harder, and transform your body with elite coaching, cutting-edge equipment, and a community that never quits.
        </p>
        <div className="hero-cta">
          <a href="#pricing" className="btn btn-neon">Start Your Journey ⚡</a>
          <a href="#programs" className="btn btn-outline">Explore Programs</a>
        </div>
        <div className="hero-stats">
          <StatItem target={1200} label="Active Members" />
          <StatItem target={15} label="Expert Trainers" />
          <StatItem target={30} label="Weekly Classes" />
          <StatItem target={8} label="Years of Excellence" />
        </div>
      </div>
    </section>
  );
}
