import { useState } from 'react';
import TRAINERS from '../hooks/trainersData';
import TrainerModal from '../modals/TrainerModal';

const FILTERS = [
  { key: 'all', label: 'All Trainers' },
  { key: 'strength', label: 'Strength 💪' },
  { key: 'yoga', label: 'Yoga 🧘' },
  { key: 'cardio', label: 'Cardio 🏃' },
  { key: 'nutrition', label: 'Nutrition 🥗' },
];

export default function TrainersSection() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const visible = filter === 'all'
    ? TRAINERS
    : TRAINERS.filter((t) => t.tags.includes(filter));

  return (
    <section id="trainers" className="trainers-section">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <div className="section-tag">Expert Team</div>
          <h2 className="section-title">Meet Your <span>Trainers</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Certified, passionate, and results-driven coaches who will transform your fitness journey.</p>
        </div>

        <div className="trainer-filters fade-in">
          {FILTERS.map(({ key, label }) => (
            <button key={key} className={`tf-btn${filter === key ? ' active' : ''}`} onClick={() => setFilter(key)}>
              {label}
            </button>
          ))}
        </div>

        <div className="trainers-grid">
          {visible.map((trainer) => (
            <div
              key={trainer.id}
              className="trainer-card fade-in"
              tabIndex={0}
              role="button"
              onClick={() => setSelected(trainer)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelected(trainer)}
            >
              {trainer.isBadgeTop && (
                <div className="tr-badge-wrap">
                  <span className="tr-badge top">🏆 Top Trainer</span>
                </div>
              )}
              <div className="trainer-img-wrap">
                {trainer.image ? (
                  <img src={trainer.image} alt={trainer.name} className="trainer-avatar-img" />
                ) : (
                  <div className="trainer-avatar-svg">
                    <span className="avatar-icon">{trainer.icon}</span>
                  </div>
                )}
                <div className="trainer-overlay">
                  <div className="trainer-overlay-cta">View Profile →</div>
                </div>
              </div>
              <div className="trainer-info">
                <div className="trainer-info-top">
                  <div>
                    <div className="trainer-name">{trainer.name}</div>
                    <div className="trainer-role">{trainer.role}</div>
                  </div>
                  <div className="trainer-rating">⭐ {trainer.rating}</div>
                </div>
                <div className="trainer-exp-tag">🕐 {trainer.exp} · {trainer.clients} clients</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && <TrainerModal trainer={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
