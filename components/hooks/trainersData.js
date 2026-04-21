const TRAINERS = [
  {
    id: 0, image: '/arjun-trainer.png', icon: '💪', name: 'Arjun Mehta', role: 'CrossFit & HIIT Coach',
    rating: '4.9', exp: '12 years', clients: '500+', tags: ['strength', 'cardio'],
    bio: 'Arjun is a former national-level athlete who turned his passion for high-intensity training into a decade-long coaching career. Known for his explosive HIIT circuits and CrossFit WODs, he has helped hundreds of clients break plateaus and achieve elite fitness levels.',
    specs: ['HIIT Training', 'CrossFit WOD', 'Functional Fitness', 'Fat Loss', 'Athletic Conditioning'],
    certs: ['CrossFit Level 3', 'ACSM Certified PT', 'First Aid & CPR'],
    highlights: '🏆 Helped 50+ clients compete in CrossFit regionals. Average client fat loss: 8 kg in 12 weeks. Featured trainer in IronPulse annual championships.',
    week: [
      { day: 'MON', label: 'Strength', active: true }, { day: 'TUE', label: 'HIIT', active: true },
      { day: 'WED', label: 'REST', active: false }, { day: 'THU', label: 'CrossFit', active: true },
      { day: 'FRI', label: 'Cardio', active: true }, { day: 'SAT', label: 'WOD', active: true }, { day: 'SUN', label: 'REST', active: false }
    ],
    isBadgeTop: true,
  },
  {
    id: 1, image: '/priya-trainer.png', icon: '🧘', name: 'Priya Sharma', role: 'Yoga & Wellness Coach',
    rating: '4.8', exp: '9 years', clients: '300+', tags: ['yoga'],
    bio: 'Priya blends traditional hatha yoga with modern mindfulness techniques. Trained in Rishikesh and certified internationally, she creates personalised flows that improve flexibility, mental clarity, and overall wellness.',
    specs: ['Hatha Yoga', 'Power Yoga', 'Prenatal Yoga', 'Meditation', 'Breathwork'],
    certs: ['RYT-500 (Rishikesh)', 'Mindfulness Coach', 'Prenatal Yoga Certified'],
    highlights: '✨ 200+ students completed her 30-day yoga challenge. Clients report 60% reduction in stress levels. Conducted corporate wellness workshops for 10+ companies.',
    week: [
      { day: 'MON', label: 'Hatha', active: true }, { day: 'TUE', label: 'Power', active: true },
      { day: 'WED', label: 'Meditation', active: true }, { day: 'THU', label: 'REST', active: false },
      { day: 'FRI', label: 'Flow', active: true }, { day: 'SAT', label: 'Workshop', active: true }, { day: 'SUN', label: 'REST', active: false }
    ],
  },
  {
    id: 2, image: '/rohan-trainer.png', icon: '🏋️', name: 'Rohan Das', role: 'Strength & Power Coach',
    rating: '5.0', exp: '15 years', clients: '700+', tags: ['strength'],
    bio: "With a background in competitive powerlifting and 15 years of coaching experience, Rohan Das is IronPulse's most decorated strength coach. He specialises in progressive overload programs and compound lift mastery.",
    specs: ['Powerlifting', 'Bodybuilding', 'Hypertrophy', 'Olympic Lifting', 'Injury Rehab'],
    certs: ['NSCA-CSCS', 'USA Weightlifting Level 2', 'Precision Nutrition L1'],
    highlights: '🔥 Average client bench press increase: +25 kg in 6 months. 3 clients achieved state-level powerlifting records.',
    week: [
      { day: 'MON', label: 'Chest+Tri', active: true }, { day: 'TUE', label: 'Back+Bi', active: true },
      { day: 'WED', label: 'Legs', active: true }, { day: 'THU', label: 'REST', active: false },
      { day: 'FRI', label: 'Shoulders', active: true }, { day: 'SAT', label: 'Full Body', active: true }, { day: 'SUN', label: 'REST', active: false }
    ],
    isBadgeTop: true,
  },
  {
    id: 3, image: '/meera-trainer.png', icon: '🥗', name: 'Meera Nair', role: 'Nutrition Coach',
    rating: '4.7', exp: '8 years', clients: '400+', tags: ['nutrition'],
    bio: 'Meera is a certified dietitian who believes food is medicine. She creates science-backed, culturally-sensitive meal plans that work for real Indian families. Her approach is sustainable, realistic, and deeply personal.',
    specs: ['Weight Loss Diets', 'Sports Nutrition', 'Gut Health', 'Macro Planning', 'Supplement Guidance'],
    certs: ['RD (Registered Dietitian)', 'ISSA Nutritionist', 'Plant-Based Nutrition Certificate'],
    highlights: '📉 Clients average 6 kg fat loss in 8 weeks. 100% client satisfaction rate on meal planning.',
    week: [
      { day: 'MON', label: 'Consult', active: true }, { day: 'TUE', label: 'Plan', active: true },
      { day: 'WED', label: 'Follow-up', active: true }, { day: 'THU', label: 'Group', active: true },
      { day: 'FRI', label: 'Consult', active: true }, { day: 'SAT', label: 'Workshop', active: true }, { day: 'SUN', label: 'REST', active: false }
    ],
  },
  {
    id: 4, image: '/vikram-trainer.png', icon: '🏃', name: 'Vikram Singh', role: 'Endurance Specialist',
    rating: '4.8', exp: '11 years', clients: '350+', tags: ['cardio'],
    bio: 'Vikram is a marathon finisher and certified endurance coach who has trained athletes across distances from 5K fun runs to ultra-marathons. He uses heart-rate-based training and periodisation.',
    specs: ['Running Coaching', 'Marathon Prep', 'Triathlon Training', 'VO2 Max', 'Cycling & Swimming'],
    certs: ['RRCA Certified Running Coach', 'USA Triathlon Level 1', 'Exercise Physiology Cert'],
    highlights: '🏅 25 clients completed their first marathon under his guidance. Average 10K time improvement per cycle: -8 minutes.',
    week: [
      { day: 'MON', label: 'Easy Run', active: true }, { day: 'TUE', label: 'Intervals', active: true },
      { day: 'WED', label: 'Cross', active: true }, { day: 'THU', label: 'Tempo', active: true },
      { day: 'FRI', label: 'REST', active: false }, { day: 'SAT', label: 'Long Run', active: true }, { day: 'SUN', label: 'Recovery', active: true }
    ],
  }
];

export default TRAINERS;
