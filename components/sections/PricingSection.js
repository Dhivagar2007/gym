import { useState } from 'react';
import JoinModal from '../modals/JoinModal';

const PLANS = [
  {
    key: 'starter', name: 'Starter',
    monthly: '1,500', annual: '1,050',
    features: ['Full gym floor access', 'Basic equipment usage', '2 group classes/week', 'Mobile app access', 'Progress tracking'],
    cta: 'Get Started', featured: false,
  },
  {
    key: 'pro', name: 'Pro',
    monthly: '1,000', annual: '700',
    features: ['Everything in Starter', 'Unlimited group classes', 'Dedicated locker', '1 PT session/month', 'Nutrition consultation', 'Guest passes (2/month)'],
    cta: 'Join Pro ⚡', featured: true,
    annualNote: '/month • ₹8,400 billed annually',
  },
  {
    key: 'elite', name: 'Elite',
    monthly: '5,000', annual: '3,500',
    features: ['Everything in Pro', 'Dedicated personal trainer', 'Custom diet plan', 'Priority class booking', 'Recovery & spa access', 'Monthly body composition'],
    cta: 'Go Elite', featured: false,
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const [modal, setModal] = useState(null);

  const openModal = (plan) => {
    const price = `₹${annual ? plan.annual : plan.monthly}`;
    const period = annual
      ? (plan.annualNote || '/month • Billed annually')
      : '/month • Billed monthly';
    setModal({ plan: plan.name, price, period });
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <div className="section-tag">Membership</div>
          <h2 className="section-title">Flexible <span>Plans</span> for Everyone</h2>
          <p className="section-sub" style={{ margin: '0 auto', textAlign: 'center' }}>No hidden fees. Cancel anytime. Start your transformation today.</p>
        </div>

        <div className="pricing-toggle-wrap fade-in">
          <span className={`toggle-label${!annual ? ' active' : ''}`}>Monthly</span>
          <div
            className={`toggle-switch${annual ? ' on' : ''}`}
            onClick={() => setAnnual((v) => !v)}
            role="switch"
            aria-checked={annual}
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setAnnual((v) => !v)}
          >
            <div className="toggle-thumb" />
          </div>
          <span className={`toggle-label${annual ? ' active' : ''}`}>Annual</span>
          <span className="save-badge">Save 30%</span>
        </div>

        <div className="pricing-grid fade-in">
          {PLANS.map((plan) => (
            <div key={plan.key} className={`pricing-card${plan.featured ? ' featured' : ''}`}>
              {plan.featured && <div className="plan-badge">⭐ Recommended</div>}
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">
                <span className="plan-currency">₹</span>
                <span className="plan-amount">{annual ? plan.annual : plan.monthly}</span>
              </div>
              <div className="plan-period">
                {annual
                  ? (plan.annualNote || '/month • Billed annually')
                  : '/month • Billed monthly'}
              </div>
              <div className="plan-divider" />
              <ul className="plan-features">
                {plan.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <button
                className={`btn plan-btn${plan.featured ? ' btn-neon' : ' btn-outline'}`}
                onClick={() => openModal(plan)}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <JoinModal
          plan={modal.plan}
          price={modal.price}
          period={modal.period}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  );
}
