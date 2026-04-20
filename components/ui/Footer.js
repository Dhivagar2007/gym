const FOOTER_LINKS = {
  programs: [
    { label: 'Strength Training', href: '#programs' },
    { label: 'HIIT & Cardio', href: '#programs' },
    { label: 'Yoga & Mobility', href: '#programs' },
    { label: 'CrossFit', href: '#programs' },
    { label: 'Nutrition', href: '#programs' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Our Team', href: '#trainers' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <span className="footer-logo">
              <span className="orange">Iron</span><span>Pulse</span>
            </span>
            <p className="footer-tagline">
              Where strength meets science. IronPulse Fitness is your premium destination for elite training, expert coaching, and a community that never quits.
            </p>
            <div className="socials" role="list">
              <a href="#" className="social-btn" role="listitem" aria-label="Instagram">📸</a>
              <a href="#" className="social-btn" role="listitem" aria-label="YouTube">▶️</a>
              <a href="#" className="social-btn" role="listitem" aria-label="Twitter">🐦</a>
              <a href="#" className="social-btn" role="listitem" aria-label="Facebook">📘</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Programs</h4>
            <ul className="footer-links">
              {FOOTER_LINKS.programs.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links" style={{ gap: 12 }}>
              <li style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>📍 123 Fitness Lane, Mumbai, MH 400001</li>
              <li style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>📞 +91 98765 43210</li>
              <li style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>✉️ hello@ironpulse.fit</li>
              <li style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>🕐 Mon–Sun: 5:00 AM – 11:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 <span style={{ color: 'var(--neon)' }}>IronPulse Fitness</span>. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
