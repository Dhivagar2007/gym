# IronPulse Fitness - Next.js App

A premium fitness gym website built with Next.js and React. Features a responsive design with interactive BMI calculator, trainer profiles, pricing plans, class schedules, and more.

## 🚀 Features

- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Interactive BMI Calculator** - Calculate BMI with personalized fitness recommendations
- **Fitness Assistant** - AI-powered workout and nutrition suggestions
- **Trainer Profiles** - Detailed trainer information with booking system
- **Dynamic Pricing** - Monthly/Annual pricing toggle with modal signup
- **Class Schedule** - Weekly class timetable with filtering
- **Testimonials** - Customer success stories
- **Smooth Animations** - Fade-in effects and scroll animations

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework for production
- **React 18** - Component-based UI library
- **CSS Modules** - Scoped styling
- **Google Fonts** - Poppins font family

## 📁 Project Structure

```
ironpulse/
├── components/
│   ├── hooks/           # Custom React hooks
│   │   ├── useFadeIn.js
│   │   ├── useCounter.js
│   │   ├── useNavbar.js
│   │   ├── useBMI.js
│   │   └── trainersData.js
│   ├── modals/          # Modal components
│   │   ├── JoinModal.js
│   │   └── TrainerModal.js
│   ├── sections/        # Page sections
│   │   ├── HeroSection.js
│   │   ├── FeatureStrip.js
│   │   ├── ProgramsSection.js
│   │   ├── BMISection.js
│   │   ├── PricingSection.js
│   │   ├── ScheduleSection.js
│   │   ├── TrainersSection.js
│   │   ├── TestimonialsSection.js
│   │   └── CTASection.js
│   └── ui/              # UI components
│       ├── Navbar.js
│       ├── Footer.js
│       └── BackToTop.js
├── pages/
│   ├── _app.js
│   └── index.js
├── styles/
│   └── globals.css
├── public/
├── package.json
└── README.md
```

## 🎨 Design Features

- **Custom Color Scheme** - Orange/Neon theme with warm earth tones
- **Typography** - Poppins font for modern, clean look
- **Animations** - Smooth scroll effects, hover states, transitions
- **Responsive Grid** - Mobile-first design approach
- **Accessibility** - ARIA labels and semantic HTML

## 🔧 Customization

### Colors
Edit CSS variables in `styles/globals.css`:
```css
:root {
  --neon: #FF8C42;
  --bg: #fffaf6;
  --text: #2d1a0e;
  /* ... */
}
```

### Content
- **Programs**: Edit `ProgramsSection.js`
- **Trainers**: Edit `trainersData.js`
- **Pricing**: Edit `PricingSection.js`
- **Schedule**: Edit `ScheduleSection.js`

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: < 768px
- **Desktop**: < 1024px
- **Large Desktop**: > 1024px

## 🌟 Key Components

### BMI Calculator
- Metric/Imperial unit toggle
- Real-time calculation
- Visual gauge indicator
- Personalized fitness recommendations

### Trainer Booking System
- Filter trainers by specialty
- Detailed trainer profiles
- Interactive booking form
- Weekly schedule display

### Pricing Plans
- 3 tier system (Starter, Pro, Elite)
- Monthly/Annual toggle with savings
- Feature comparison
- Modal signup form

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Support

For support, email hello@ironpulse.fit or visit our contact page.

---

Built with ⚡ by IronPulse Fitness Team
