const PROGRAMS = [
  { icon: '🏋️', title: 'Strength Training', desc: 'Build raw power and muscle with our progressive overload programs guided by elite coaches.' },
  { icon: '🔥', title: 'HIIT & Cardio', desc: 'Burn fat fast with high-intensity interval training designed to maximize your metabolic rate.' },
  { icon: '🧘', title: 'Yoga & Mobility', desc: 'Improve flexibility, reduce injury risk, and find mental clarity through structured yoga flow.' },
  { icon: '⚔️', title: 'CrossFit', desc: 'Functional movements at high intensity — the ultimate test of endurance, strength, and speed.' },
  { icon: '🥗', title: 'Nutrition Coaching', desc: 'Personalized diet plans crafted by certified nutritionists to fuel your performance goals.' },
  { icon: '🏃', title: 'Endurance Running', desc: 'From 5K to marathon — structured running plans to build your stamina and break your limits.' },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="programs-section">
      <div className="container">
        <div className="fade-in">
          <div className="section-tag">Our Programs</div>
          <h2 className="section-title">Train Like a <span>Champion</span></h2>
          <p className="section-sub">From beginners to elite athletes — every program is designed to push boundaries and deliver results.</p>
        </div>
        <div className="programs-grid">
          {PROGRAMS.map(({ icon, title, desc }) => (
            <div key={title} className="prog-card fade-in" tabIndex={0}>
              <div className="prog-icon">{icon}</div>
              <div className="prog-title">{title}</div>
              <p className="prog-desc">{desc}</p>
              <span className="prog-arrow">Explore →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
