import { useState } from 'react';
import useBMI from '../hooks/useBMI';

const GOAL_DATA = {
  gain: [
    { icon: '🍚', text: '<strong>Diet:</strong> Eat in a caloric surplus (+500 kcal daily).' },
    { icon: '🥩', text: '<strong>Protein:</strong> High intake! Eggs, Chicken, Milk, Nuts.' },
    { icon: '🏋️', text: '<strong>Workout:</strong> Heavy compound strength training 4-5 days/wk.' },
    { icon: '😴', text: '<strong>Recovery:</strong> 8+ hours of sleep minimum for muscle repair.' },
  ],
  lose: [
    { icon: '📉', text: '<strong>Diet:</strong> Maintain a caloric deficit (-500 kcal daily).' },
    { icon: '🥗', text: '<strong>Nutrition:</strong> Low carb, high protein & high fiber intake.' },
    { icon: '🏃', text: '<strong>Workout:</strong> 3x Cardio + 3x Resistance training weekly.' },
    { icon: '💧', text: '<strong>Hydration:</strong> Drink 3-4 liters of water daily.' },
  ],
  maintain: [
    { icon: '⚖️', text: '<strong>Diet:</strong> Hit maintenance calories precisely each day.' },
    { icon: '🍽️', text: '<strong>Macros:</strong> Balanced diet (40% Carb, 30% Protein, 30% Fat).' },
    { icon: '💪', text: '<strong>Workout:</strong> Mix of hypertrophy and steady-state cardio.' },
    { icon: '🚶', text: '<strong>Activity:</strong> Stay active, aim for 10,000 steps a day.' },
  ],
};

function FitnessAssistant({ bmi, weight, height, useImperial }) {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activity, setActivity] = useState('');
  const [goal, setGoal] = useState(null);

  const calcCalories = (g) => {
    if (!weight || !height || !age || !gender || !activity) return null;
    let wKg = useImperial ? weight * 0.453592 : weight;
    let hCm = useImperial ? height * 2.54 : height;
    let bmr = gender === 'male'
      ? (10 * wKg) + (6.25 * hCm) - (5 * age) + 5
      : (10 * wKg) + (6.25 * hCm) - (5 * age) - 161;
    let tdee = bmr * parseFloat(activity);
    if (g === 'gain') tdee += 500;
    else if (g === 'lose') tdee -= 500;
    return Math.round(tdee);
  };

  const calories = goal ? calcCalories(goal) : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', marginBottom: 4 }}>Fitness Assistant 🤖</h3>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: 18 }}>Let's customize a plan based on your results.</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <input type="number" placeholder="Age" min={10} max={100} className="fa-input" value={age} onChange={(e) => setAge(e.target.value)} aria-label="Age" />
        <select className="fa-input" value={gender} onChange={(e) => setGender(e.target.value)} aria-label="Gender">
          <option value="" disabled>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select className="fa-input" style={{ flex: '100%' }} value={activity} onChange={(e) => setActivity(e.target.value)} aria-label="Activity Level">
          <option value="" disabled>Activity Level</option>
          <option value="1.2">Sedentary (Little or no exercise)</option>
          <option value="1.375">Lightly Active (1-3 days/week)</option>
          <option value="1.55">Moderately Active (3-5 days/week)</option>
          <option value="1.725">Very Active (6-7 days/week)</option>
        </select>
      </div>

      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>What is your goal?</h4>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 20 }}>
        {[{ key: 'gain', label: 'Gain Weight 💪' }, { key: 'lose', label: 'Lose Weight 🔥' }, { key: 'maintain', label: 'Maintain ⚖️' }].map(({ key, label }) => (
          <button key={key} className={`fa-goal-btn${goal === key ? ' active' : ''}`} onClick={() => setGoal(key)}>{label}</button>
        ))}
      </div>

      {goal && (
        <div className="fa-plan-card">
          <div className="fa-stat-box">
            <span className="fa-stat-title">Suggested Daily Calories</span>
            <span className="fa-stat-val">{calories ? `${calories} kcal / day` : 'Fill info above for calories'}</span>
          </div>
          <ul className="fa-suggestions">
            {GOAL_DATA[goal].map((item, i) => (
              <li key={i}>
                <span className="fa-icon">{item.icon}</span>
                <span dangerouslySetInnerHTML={{ __html: item.text }} />
              </li>
            ))}
          </ul>
          <button className="btn btn-outline" style={{ width: '100%', marginTop: 20, justifyContent: 'center' }} onClick={() => setGoal(null)}>
            Regenerate Plan 🔄
          </button>
        </div>
      )}
    </div>
  );
}

export default function BMISection() {
  const { unit, setUnit, weight, setWeight, height, setHeight, result, calculate, shake } = useBMI();

  return (
    <section id="bmi" className="bmi-section">
      <div className="container">
        <div className="fade-in" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <div className="section-tag">Health Check</div>
          <h2 className="section-title">Know Your <span>BMI</span></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Calculate your Body Mass Index instantly and get personalized insights.</p>
        </div>

        <div className="bmi-wrapper fade-in">
          <div className={`bmi-card${shake ? ' bmi-shake' : ''}`} style={shake ? { animation: 'shake 0.4s ease' } : {}}>
            <div className="bmi-form-title">BMI Calculator</div>
            <div className="bmi-form-sub">Enter your measurements below</div>

            <div className="unit-toggle">
              <button className={`unit-btn${unit === 'metric' ? ' active' : ''}`} onClick={() => setUnit('metric')}>Metric (kg/cm)</button>
              <button className={`unit-btn${unit === 'imperial' ? ' active' : ''}`} onClick={() => setUnit('imperial')}>Imperial (lb/in)</button>
            </div>

            <div className="form-group">
              <label>{unit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}</label>
              <input type="number" placeholder={unit === 'metric' ? 'e.g. 75' : 'e.g. 165'}
                value={weight} onChange={(e) => setWeight(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && calculate()} />
            </div>
            <div className="form-group">
              <label>{unit === 'metric' ? 'Height (cm)' : 'Height (inches)'}</label>
              <input type="number" placeholder={unit === 'metric' ? 'e.g. 175' : 'e.g. 69'}
                value={height} onChange={(e) => setHeight(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && calculate()} />
            </div>

            <button className="btn btn-neon bmi-calc-btn" onClick={calculate}>Calculate BMI ⚡</button>

            {result && (
              <div className="bmi-result">
                <div className="bmi-gauge">
                  <div className="gauge-bar">
                    <div className="gauge-marker" style={{ left: `${result.gaugePos}%` }} />
                  </div>
                  <div className="gauge-labels">
                    <span>Underweight</span><span>Normal</span><span>Overweight</span><span>Obese</span>
                  </div>
                </div>
                <div className="bmi-result-val" style={{ color: result.color }}>{result.bmi}</div>
                <div className="bmi-result-label" style={{ color: result.color }}>{result.label}</div>
                <div className="bmi-result-msg">{result.msg}</div>
              </div>
            )}
          </div>

          <div className="bmi-info-side fade-in">
            {!result ? (
              <>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text)', marginBottom: 8 }}>BMI Categories</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: 20 }}>Understanding where you fall helps us craft the perfect program for you.</p>
                {[
                  { color: '#00b4ff', name: 'Underweight', range: 'BMI below 18.5', action: 'Build Muscle →' },
                  { color: '#39ff14', name: 'Normal Weight', range: 'BMI 18.5 – 24.9', action: 'Maintain →' },
                  { color: '#f5c518', name: 'Overweight', range: 'BMI 25 – 29.9', action: 'Lose Fat →' },
                  { color: '#ff4d4d', name: 'Obese', range: 'BMI 30 and above', action: 'Transform →' },
                ].map((cat) => (
                  <div key={cat.name} className="bmi-cat-card">
                    <div className="cat-dot" style={{ background: cat.color }} />
                    <div style={{ flex: 1 }}>
                      <div className="cat-name">{cat.name}</div>
                      <div className="cat-range">{cat.range}</div>
                    </div>
                    <div className="cat-action">{cat.action}</div>
                  </div>
                ))}
                <div style={{ marginTop: 8, padding: '18px 20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)' }}>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.7 }}>
                    ⚠️ BMI is a general indicator and doesn't account for muscle mass, bone density, or individual health factors. Always consult a healthcare professional.
                  </p>
                </div>
              </>
            ) : (
              <FitnessAssistant bmi={result.bmi} weight={parseFloat(weight)} height={parseFloat(height)} useImperial={unit === 'imperial'} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
