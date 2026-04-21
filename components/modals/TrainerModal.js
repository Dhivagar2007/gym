import { useState, useEffect } from 'react';

export default function TrainerModal({ trainer, onClose }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingDone, setBookingDone] = useState(false);
  const [chatMsg, setChatMsg] = useState('💬 Chat with Trainer');
  const [bkName, setBkName] = useState('');
  const [bkContact, setBkContact] = useState('');
  const [bkDate, setBkDate] = useState('');
  const [bkSlot, setBkSlot] = useState('');
  const [bkError, setBkError] = useState('');

  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleConfirm = () => {
    if (!bkName || !bkContact || !bkDate || !bkSlot) { setBkError('⚠️ Please fill all fields!'); return; }
    setBookingDone(true);
  };

  const handleChat = () => {
    setChatMsg('⏳ Connecting...');
    setTimeout(() => setChatMsg('💬 Chat – Coming Soon!'), 1200);
  };

  if (!trainer) return null;

  return (
    <div className="tmodal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="tmodal">
        <div className="tmodal-hero">
          <div className="tmodal-avatar">
            {trainer.image ? (
              <img src={trainer.image} alt={trainer.name} className="tmodal-avatar-img" />
            ) : (
              trainer.icon
            )}
          </div>
          <div style={{ flex: 1 }}>
            <div className="tmodal-name">{trainer.name}</div>
            <div className="tmodal-role">{trainer.role}</div>
            <div className="tmodal-badges">
              <span className="tmodal-badge">⭐ {trainer.rating}</span>
              <span className="tmodal-badge">🕐 {trainer.exp}</span>
              <span className="tmodal-badge">👥 {trainer.clients} clients</span>
            </div>
            <div className="tmodal-stat">
              <span>⭐ {trainer.rating} Rating</span>
              <span>📅 {trainer.exp} Experience</span>
              <span>👥 {trainer.clients} Clients</span>
            </div>
          </div>
          <button className="tmodal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="tmodal-body">
          <div>
            <div className="tmodal-section-title">About</div>
            <p className="tmodal-bio">{trainer.bio}</p>
          </div>

          <div>
            <div className="tmodal-section-title">Specializations</div>
            <div className="tmodal-specs">
              {trainer.specs.map((s) => <span key={s} className="tmodal-spec-tag">{s}</span>)}
            </div>
          </div>

          <div>
            <div className="tmodal-section-title">Certifications</div>
            <div className="tmodal-specs">
              {trainer.certs.map((c) => <span key={c} className="tmodal-spec-tag">✅ {c}</span>)}
            </div>
          </div>

          <div>
            <div className="tmodal-section-title">Client Highlights</div>
            <p className="tmodal-bio">{trainer.highlights}</p>
          </div>

          <div>
            <div className="tmodal-section-title">Sample Weekly Schedule</div>
            <div className="tmodal-week-grid">
              {trainer.week.map((d) => (
                <div key={d.day} className={`tmodal-day${d.active ? ' active' : ''}`}>
                  <span className="tmodal-day-label">{d.day}</span>
                  <div style={{ fontSize: '0.62rem', lineHeight: 1.3 }}>{d.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="tmodal-cta-row">
            <button className="btn btn-neon" onClick={() => setBookingOpen(true)}>
              📅 Book Session
            </button>
            <button className="btn-outline-orange" onClick={handleChat}>{chatMsg}</button>
          </div>

          {bookingOpen && !bookingDone && (
            <div className="tmodal-booking">
              <h4>📅 Book a Session with {trainer.name}</h4>
              <div className="booking-form-grid">
                <div className="bk-field">
                  <label>Your Name</label>
                  <input type="text" placeholder="Full name" value={bkName} onChange={(e) => setBkName(e.target.value)} />
                </div>
                <div className="bk-field">
                  <label>Phone / Email</label>
                  <input type="text" placeholder="Phone or email" value={bkContact} onChange={(e) => setBkContact(e.target.value)} />
                </div>
                <div className="bk-field">
                  <label>Select Date</label>
                  <input type="date" min={today} value={bkDate} onChange={(e) => setBkDate(e.target.value)} />
                </div>
                <div className="bk-field">
                  <label>Time Slot</label>
                  <select value={bkSlot} onChange={(e) => setBkSlot(e.target.value)}>
                    <option value="">Choose slot</option>
                    <option value="6:00 AM">🌅 6:00 AM – Morning</option>
                    <option value="9:00 AM">☀️ 9:00 AM – Morning</option>
                    <option value="12:00 PM">🕛 12:00 PM – Noon</option>
                    <option value="5:00 PM">🌤️ 5:00 PM – Evening</option>
                    <option value="7:30 PM">🌙 7:30 PM – Evening</option>
                  </select>
                </div>
                <div className="bk-full">
                  {bkError && <p style={{ color: '#ff6b6b', fontSize: '0.82rem', marginBottom: 8 }}>{bkError}</p>}
                  <button className="btn btn-neon" style={{ width: '100%', justifyContent: 'center' }} onClick={handleConfirm}>
                    Confirm Booking ✅
                  </button>
                </div>
              </div>
            </div>
          )}

          {bookingDone && (
            <div className="tmodal-booking booking-success">
              <div className="booking-success-icon">🎉</div>
              <h4>Session Booked Successfully!</h4>
              <p>Hey <strong>{bkName}</strong>! Your session with <strong>{trainer.name}</strong> is confirmed for <strong>{bkDate}</strong> at <strong>{bkSlot}</strong>.</p>
              <p style={{ marginTop: 8 }}>We'll reach you at <strong>{bkContact}</strong> with confirmation details. See you there! 💪</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
