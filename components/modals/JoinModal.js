import { useState, useEffect } from 'react';

export default function JoinModal({ plan, price, period, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) { setError('Please fill in your name and email.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Please enter a valid email.'); return; }
    setSuccess(true);
  };

  return (
    <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>

        {success ? (
          <div className="modal-success">
            <div className="modal-success-icon">🎉</div>
            <h2>You're In!</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 6 }}>Welcome to IronPulse, {name}!</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: 28 }}>
              A confirmation email has been sent to <strong style={{ color: '#fff' }}>{email}</strong>. Our team will reach out within 24 hours.
            </p>
            <button className="modal-submit" onClick={onClose}>Let's Go! 🏋️</button>
          </div>
        ) : (
          <>
            <div className="modal-tag">Join IronPulse</div>
            <div className="modal-title">{plan} Plan</div>
            <div className="modal-price">
              {price} <span className="modal-period">{period}</span>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <input
                className="modal-input" type="text" placeholder="Full Name"
                value={name} onChange={(e) => setName(e.target.value)} required
              />
              <input
                className="modal-input" type="email" placeholder="Email Address"
                value={email} onChange={(e) => setEmail(e.target.value)} required
              />
              <input
                className="modal-input" type="tel" placeholder="Phone Number (optional)"
                value={phone} onChange={(e) => setPhone(e.target.value)}
              />
              {error && <p style={{ color: '#ff6b6b', fontSize: '0.82rem', marginBottom: 10 }}>{error}</p>}
              <button type="submit" className="modal-submit">Secure My Spot ⚡</button>
            </form>
            <p className="modal-security">🔒 Your data is safe. No spam. Cancel anytime.</p>
          </>
        )}
      </div>
    </div>
  );
}
