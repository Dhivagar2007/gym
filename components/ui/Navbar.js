import { useEffect } from 'react';
import useNavbar from '../hooks/useNavbar';

const NAV_ITEMS = [
  { href: '#programs', label: 'Programs' },
  { href: '#bmi',      label: 'BMI Tool' },
  { href: '#pricing',  label: 'Pricing' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#trainers', label: 'Trainers' },
];

export default function Navbar() {
  const { scrolled, activeSection, menuOpen, toggleMenu, closeMenu } = useNavbar();

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const offset = 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo">
          <span className="orange">Iron</span><span className="dark">Pulse</span>
        </a>
        <ul className="nav-links">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={activeSection === href.slice(1) ? 'active' : ''}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <a href="#pricing" className="btn btn-neon">Join Now ⚡</a>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_ITEMS.map(({ href, label }) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a href="#pricing" className="btn btn-neon" onClick={closeMenu}>Join Now ⚡</a>
      </div>
    </nav>
  );
}
