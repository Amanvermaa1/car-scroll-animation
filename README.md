# Car Scroll Animation - React

A scroll-driven hero section animation inspired by [paraschaturvedi/car-scroll-animation](https://paraschaturvedi.github.io/car-scroll-animation), built with React, Vite, Tailwind CSS, and GSAP.

## Features

- Scroll-based car animation that moves across the screen
- Letter-by-letter text reveal ("W E L C O M E I T Z F I Z Z") synchronized with scroll
- Statistics boxes (58%, 23%, 27%, 40%) that fade in on scroll
- Smooth, performant animations using GSAP ScrollTrigger
- Green trail following the car
- Fully responsive design

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4.2
- **Animation**: GSAP with ScrollTrigger
- **Language**: JavaScript

## Project Structure

```
itzfizz-scroll/
├── public/
├── src/
│   ├── assets/
│   │   └── car.png
│   ├── App.jsx          # Main animation component
│   ├── index.css        # Styles & Tailwind imports
│   └── main.jsx         # React entry point
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Pages CI/CD
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Quick Start

```bash
# Clone the repository
git clone https://github.com/Amanvermaa1/car-scroll-animation.git
cd itzfizz-scroll

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### GitHub Pages

The project is configured for GitHub Pages deployment with automatic CI/CD via GitHub Actions.

```bash
# Deploy to GitHub Pages
npm run deploy
```

### Live Demo

**GitHub Pages**: https://amanvermaa1.github.io/car-scroll-animation/

### Repository

**GitHub**: https://github.com/Amanvermaa1/car-scroll-animation

## Animation Details

### How It Works

1. **Car Movement**: As the user scrolls, the car moves from left to right across the road
2. **Letter Reveal**: Each letter of "WELCOME ITZFIZZ" appears as the car passes over it
3. **Statistics Boxes**: Four statistics boxes fade in at different scroll positions:
   - 58% Increase in pick up point use (yellow box)
   - 23% Decreased in customer phone calls (blue box)
   - 27% Increase in pick up point use (dark box)
   - 40% Decreased in customer phone calls (orange box)
4. **Green Trail**: A green trail follows behind the car as it moves

### Technical Implementation

- **GSAP ScrollTrigger**: Handles scroll-based animations with pinning
- **Sticky Positioning**: The track section stays fixed while content scrolls
- **Dynamic Opacity**: Letters and boxes animate based on scroll position
- **Scrub**: Smooth animation tied directly to scroll progress

## Internship Assignment

This project was created for the **Web Development Internship at Itzfizz Digital**.

- **Duration**: 6 Months