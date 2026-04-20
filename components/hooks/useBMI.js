import { useState } from 'react';

export default function useBMI() {
  const [unit, setUnit] = useState('metric');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);
  const [shake, setShake] = useState(false);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h || w <= 0 || h <= 0) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

    let bmi;
    if (unit === 'imperial') {
      bmi = (703 * w) / (h * h);
    } else {
      const hM = h / 100;
      bmi = w / (hM * hM);
    }
    bmi = Math.round(bmi * 10) / 10;

    let color, label, msg, gaugePos;
    if (bmi < 18.5) {
      color = '#00b4ff'; label = 'Underweight';
      msg = 'Consider increasing caloric intake with a nutrition plan and strength training to build muscle mass.';
      gaugePos = Math.max(2, (bmi / 18.5) * 22);
    } else if (bmi < 25) {
      color = '#39ff14'; label = 'Normal Weight ✓';
      msg = "Great job! Maintain your healthy weight with regular exercise and a balanced diet.";
      gaugePos = 22 + ((bmi - 18.5) / 6.5) * 26;
    } else if (bmi < 30) {
      color = '#f5c518'; label = 'Overweight';
      msg = 'Consider increasing cardio activity and optimizing your diet. Our trainers can help you create a custom plan.';
      gaugePos = 48 + ((bmi - 25) / 5) * 26;
    } else {
      color = '#ff4d4d'; label = 'Obese';
      msg = 'We recommend consulting a healthcare professional. Our Elite plan includes personalized coaching to help you transform.';
      gaugePos = Math.min(96, 74 + ((bmi - 30) / 10) * 22);
    }

    setResult({ bmi, color, label, msg, gaugePos });
  };

  return { unit, setUnit, weight, setWeight, height, setHeight, result, calculate, shake };
}
