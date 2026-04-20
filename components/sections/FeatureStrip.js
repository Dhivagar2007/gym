const items = [
  'STATE-OF-THE-ART EQUIPMENT', 'CERTIFIED TRAINERS',
  'GROUP & PERSONAL SESSIONS', 'NUTRITION COACHING',
  '24/7 GYM ACCESS', 'RECOVERY & WELLNESS SPA', 'IRONPULSE FITNESS',
];

export default function FeatureStrip() {
  const doubled = [...items, ...items];
  return (
    <div className="feature-strip" aria-hidden="true">
      <div className="strip-ticker">
        {doubled.map((item, i) => (
          <span key={i} className="strip-item">
            <span className="strip-dot" />{item}
          </span>
        ))}
      </div>
    </div>
  );
}
