const TESTIMONIALS = [
  {
    stars: 5,
    text: "IronPulse completely transformed my body in just 4 months. The trainers are world-class and the equipment is impeccable. Best investment I've ever made.",
    name: 'Rahul Verma',
    meta: 'Pro Member • Lost 18 kg',
    initial: 'R',
  },
  {
    stars: 5,
    text: "The yoga classes here changed my life. Priya is an amazing instructor. I've never felt stronger or more at peace. The atmosphere is motivating and welcoming.",
    name: 'Sneha Pillai',
    meta: 'Elite Member • 2 years',
    initial: 'S',
  },
  {
    stars: 5,
    text: "From 90 kg to 72 kg in 6 months. My doctor is amazed. Rohan's strength program and Meera's diet plan worked like magic. Absolutely no looking back!",
    name: 'Karan Joshi',
    meta: 'Starter Member • Lost 18 kg',
    initial: 'K',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <div className="section-tag">Success Stories</div>
          <h2 className="section-title">Real Results, <span>Real People</span></h2>
        </div>

        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testi-card fade-in">
              <div className="testi-stars" aria-label="5 stars">★★★★★</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-av" aria-hidden="true">{t.initial}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-meta">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
