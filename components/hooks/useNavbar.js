import { useEffect, useState } from 'react';

export default function useNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ['programs', 'bmi', 'pricing', 'schedule', 'trainers'];
    const handleScroll = () => {
      const sy = window.scrollY;
      setScrolled(sy > 60);
      let current = '';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && sy >= el.offsetTop - 120) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  return { scrolled, activeSection, menuOpen, toggleMenu, closeMenu };
}
