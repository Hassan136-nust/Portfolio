# 3D Scrollable Resume

A professional, production-ready 3D scrollable resume web application built with React, Three.js, and Tailwind CSS. Features smooth scroll-based 3D transitions, interactive elements, and a clean, minimalist design.

## Features

- **3D Interactive Elements**: Floating shapes and animations powered by Three.js and React Three Fiber
- **Smooth Scroll Experience**: Seamless transitions between sections with parallax effects
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Modern UI**: Clean, professional design inspired by Apple/Stripe design language
- **Accessible**: Keyboard navigation and proper contrast ratios
- **Contact Form**: Interactive form with validation
- **Resume Download**: Download resume as PDF

## Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Backend (Optional)
- **Node.js** - Runtime
- **Express** - API server

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── 3d/
│   │   │   │   ├── FloatingShape.tsx    # Animated 3D shapes
│   │   │   │   └── Scene3D.tsx          # 3D canvas wrapper
│   │   │   ├── sections/
│   │   │   │   ├── HeroSection.tsx      # Landing section
│   │   │   │   ├── AboutSection.tsx     # About me
│   │   │   │   ├── SkillsSection.tsx    # Skills showcase
│   │   │   │   ├── ProjectsSection.tsx  # Project cards
│   │   │   │   ├── ExperienceSection.tsx # Timeline
│   │   │   │   └── ContactSection.tsx   # Contact form
│   │   │   └── Navigation.tsx           # Top navigation bar
│   │   └── App.tsx                      # Main component
│   ├── data/
│   │   └── resumeData.ts                # Resume data
│   ├── hooks/
│   │   └── useScrollProgress.ts         # Scroll tracking hook
│   ├── services/
│   │   └── api.ts                       # API service layer
│   └── styles/
│       ├── theme.css                    # Theme tokens
│       └── fonts.css                    # Font imports
├── server/                              # Backend (optional)
│   ├── data/
│   │   ├── profile.json
│   │   └── projects.json
│   ├── index.js                         # Express server
│   └── package.json
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d-resume
```

2. Install frontend dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will be available in the preview window.

### Running the Backend (Optional)

If you want to use the Express backend instead of mock data:

1. Navigate to the server directory:
```bash
cd server
```

2. Install server dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The API will run on `http://localhost:3001`.

## Customization

### Update Your Information

Edit `/src/data/resumeData.ts` to customize:
- Personal information (name, title, bio)
- Contact details
- Social media links
- Skills (frontend, backend, tools)
- Work experience
- Education
- Projects

### Customize Colors

The color scheme uses a professional palette with:
- Primary: Blue (`#4a90e2`)
- Neutrals: Grays (`#6b7280`, `#9ca3af`)
- Background: White/Charcoal

To customize, edit the color values in:
- `/src/styles/theme.css` - Theme tokens
- Component files - Inline Tailwind classes

### Add More Sections

1. Create a new component in `/src/app/components/sections/`
2. Import and add it to `App.tsx`
3. Update the `sections` array in `Navigation.tsx`
4. Adjust scroll calculations in `useScrollProgress.ts`

## API Endpoints

If using the backend server:

- `GET /api/profile` - Returns profile information
- `GET /api/projects` - Returns all projects
- `POST /api/contact` - Handles contact form submissions

## Performance Optimization

The application is optimized for performance:
- Lazy loading of 3D scenes with `Suspense`
- Passive scroll listeners
- Optimized re-renders with proper React hooks
- Low-poly 3D models for faster rendering
- Efficient CSS with Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

WebGL support is required for 3D features.

## Deployment

### Build for Production

```bash
pnpm build
```

The production build will be in the `dist` folder.

### Deploy Options

- **Vercel**: Zero-config deployment for Vite apps
- **Netlify**: Drag and drop or Git integration
- **AWS S3 + CloudFront**: For full control
- **GitHub Pages**: Free hosting for static sites

## Accessibility

- Keyboard navigation support
- ARIA labels on interactive elements
- Proper heading hierarchy
- Color contrast meets WCAG AA standards
- Reduced motion support (respects prefers-reduced-motion)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this for your own portfolio!

## Credits

Built with ❤️ using:
- [React](https://react.dev)
- [Three.js](https://threejs.org)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
