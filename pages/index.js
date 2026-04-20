import { useEffect, useState } from 'react';
import Navbar from '../components/ui/Navbar';
import BackToTop from '../components/ui/BackToTop';
import Footer from '../components/ui/Footer';
import HeroSection from '../components/sections/HeroSection';
import FeatureStrip from '../components/sections/FeatureStrip';
import ProgramsSection from '../components/sections/ProgramsSection';
import BMISection from '../components/sections/BMISection';
import PricingSection from '../components/sections/PricingSection';
import ScheduleSection from '../components/sections/ScheduleSection';
import TrainersSection from '../components/sections/TrainersSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import useFadeIn from '../components/hooks/useFadeIn';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useFadeIn();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
    }, 1800);
    document.body.style.overflow = 'hidden';
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      {loading && (
        <div
          id="loader"
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'linear-gradient(135deg, #fff4ec 0%, #ffe8d6 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 20,
            transition: 'opacity 0.6s ease, visibility 0.6s ease',
          }}
        >
          <div style={{
            fontSize: '2rem', fontWeight: 900, letterSpacing: 2,
            background: 'linear-gradient(90deg, #FF8C42, #ff6b1a)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'pulse-text 1.2s ease-in-out infinite alternate',
          }}>
            ⚡ IRONPULSE
          </div>
          <div style={{ width: 200, height: 3, background: 'rgba(255,140,66,0.15)', borderRadius: 9, overflow: 'hidden' }}>
            <div style={{ height: '100%', background: 'var(--neon)', borderRadius: 9, width: 0, animation: 'load-bar 1.8s ease forwards' }} />
          </div>
          <style jsx>{`
            @keyframes load-bar { to { width: 100%; } }
            @keyframes pulse-text {
              from { opacity: 0.6; text-shadow: 0 0 20px rgba(255,140,66,0.4); }
              to   { opacity: 1;   text-shadow: 0 0 40px rgba(255,140,66,0.4); }
            }
          `}</style>
        </div>
      )}

      <Navbar />
      <HeroSection />
      <FeatureStrip />
      <ProgramsSection />
      <BMISection />
      <PricingSection />
      <ScheduleSection />
      <TrainersSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <BackToTop />
    </>
  );
}
