import { useState } from 'react';

const SCHEDULE = {
  mon: [
    { time: '6:00', ampm: 'AM', name: 'Morning Yoga', trainer: 'Priya Sharma', tag: 'Beginner' },
    { time: '8:30', ampm: 'AM', name: 'HIIT Blast', trainer: 'Arjun Mehta', tag: 'Intermediate' },
    { time: '11:00', ampm: 'AM', name: 'Strength Training', trainer: 'Rohan Das', tag: 'All Levels' },
    { time: '5:00', ampm: 'PM', name: 'CrossFit WOD', trainer: 'Aditya Rao', tag: 'Advanced' },
    { time: '7:00', ampm: 'PM', name: 'Power Lifting', trainer: 'Rohan Das', tag: 'Intermediate' },
  ],
  tue: [
    { time: '7:00', ampm: 'AM', name: 'Cardio Burn', trainer: 'Meera Nair', tag: 'All Levels' },
    { time: '9:00', ampm: 'AM', name: 'CrossFit Circuit', trainer: 'Aditya Rao', tag: 'Advanced' },
    { time: '12:00', ampm: 'PM', name: 'Pilates Core', trainer: 'Priya Sharma', tag: 'Beginner' },
    { time: '6:30', ampm: 'PM', name: 'Kickboxing', trainer: 'Arjun Mehta', tag: 'Intermediate' },
  ],
  wed: [
    { time: '6:00', ampm: 'AM', name: 'Sunrise HIIT', trainer: 'Arjun Mehta', tag: 'All Levels' },
    { time: '10:00', ampm: 'AM', name: 'Yoga Flow', trainer: 'Priya Sharma', tag: 'Beginner' },
    { time: '4:00', ampm: 'PM', name: 'Strength & Conditioning', trainer: 'Rohan Das', tag: 'Intermediate' },
    { time: '7:30', ampm: 'PM', name: 'Body Sculpt', trainer: 'Meera Nair', tag: 'All Levels' },
  ],
  thu: [
    { time: '7:00', ampm: 'AM', name: 'Endurance Run', trainer: 'Vikram Singh', tag: 'Intermediate' },
    { time: '9:30', ampm: 'AM', name: 'Upper Body Strength', trainer: 'Rohan Das', tag: 'All Levels' },
    { time: '5:00', ampm: 'PM', name: 'Boxing Fit', trainer: 'Arjun Mehta', tag: 'Advanced' },
    { time: '7:00', ampm: 'PM', name: 'Meditation & Stretch', trainer: 'Priya Sharma', tag: 'Beginner' },
  ],
  fri: [
    { time: '6:30', ampm: 'AM', name: 'HIIT & Core', trainer: 'Arjun Mehta', tag: 'Intermediate' },
    { time: '9:00', ampm: 'AM', name: 'CrossFit Open Gym', trainer: 'Aditya Rao', tag: 'All Levels' },
    { time: '11:30', ampm: 'AM', name: 'Lower Body Burn', trainer: 'Meera Nair', tag: 'Beginner' },
    { time: '5:00', ampm: 'PM', name: 'Power Hour', trainer: 'Rohan Das', tag: 'Advanced' },
    { time: '7:30', ampm: 'PM', name: 'Friday Yoga', trainer: 'Priya Sharma', tag: 'All Levels' },
  ],
  sat: [
    { time: '7:00', ampm: 'AM', name: 'Bootcamp', trainer: 'Aditya Rao', tag: 'Advanced' },
    { time: '9:30', ampm: 'AM', name: 'Weekend HIIT', trainer: 'Arjun Mehta', tag: 'Intermediate' },
    { time: '11:00', ampm: 'AM', name: 'Zumba Dance', trainer: 'Meera Nair', tag: 'All Levels' },
    { time: '4:00', ampm: 'PM', name: 'Abs & Core', trainer: 'Vikram Singh', tag: 'All Levels' },
    { time: '6:00', ampm: 'PM', name: 'Power Yoga', trainer: 'Priya Sharma', tag: 'Intermediate' },
  ],
  sun: [
    { time: '8:00', ampm: 'AM', name: 'Relaxation Yoga', trainer: 'Priya Sharma', tag: 'Beginner' },
    { time: '10:00', ampm: 'AM', name: 'Recovery Stretch', trainer: 'Meera Nair', tag: 'All Levels' },
    { time: '12:00', ampm: 'PM', name: 'Open Strength Gym', trainer: 'Rohan Das', tag: 'All Levels' },
  ],
};

const DAYS = [
  { key: 'mon', label: 'Monday' }, { key: 'tue', label: 'Tuesday' },
  { key: 'wed', label: 'Wednesday' }, { key: 'thu', label: 'Thursday' },
  { key: 'fri', label: 'Friday' }, { key: 'sat', label: 'Saturday' },
  { key: 'sun', label: 'Sunday' },
];

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState('mon');
  const classes = SCHEDULE[activeDay] || [];

  return (
    <section id="schedule" className="schedule-section">
      <div className="container">
        <div className="fade-in">
          <div className="section-tag">Class Schedule</div>
          <h2 className="section-title">Weekly <span>Timetable</span></h2>
          <p className="section-sub">Browse our weekly class schedule and book your spot. New classes added every month.</p>
        </div>

        <div className="schedule-tabs fade-in">
          {DAYS.map(({ key, label }) => (
            <button key={key} className={`tab-btn${activeDay === key ? ' active' : ''}`} onClick={() => setActiveDay(key)}>
              {label}
            </button>
          ))}
        </div>

        <div className="classes-grid fade-in">
          {classes.map((cls, i) => (
            <div key={i} className="class-card">
              <div className="class-time">
                <span className="class-time-hour">{cls.time}</span>
                <span className="class-time-ampm">{cls.ampm}</span>
              </div>
              <div>
                <div className="class-name">{cls.name}</div>
                <div className="class-trainer">with {cls.trainer}</div>
                <span className="class-tag">{cls.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
