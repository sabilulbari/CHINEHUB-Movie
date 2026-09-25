# 🎬 CINEHUB — Modern Movie & TV Show Discovery Platform

**CINEHUB** is a high-performance, modern web application designed for browsing, searching, and discovering movies and TV shows from around the globe. Built with React, TypeScript, and Tailwind CSS, CINEHUB features an executive-grade dark UI design system optimized for modern display standards.

---

## 🌐 Live Demo

Experience the live application deployed on Vercel/Netlify:

👉 **[Launch CINEHUB Live Application](https://chunehub.vercel.app/)**

## 🌟 Key Features

* **⚡ Real-Time Search:** Instant filtering and search capabilities by title.
* **🎨 Modern Visual Design System:** Dark Navy (`#0B132B`) paired with high-contrast Neon Green (`#39FF88`) accents, ambient radial glow layers, and glassmorphism elements.
* **📱 Fully Responsive Architecture:** Seamless user experience across Desktop, Tablet, and Mobile devices with flexible touch targets and drop-down menu navigation.
* **🎬 Interactive Movie Grid:** Card-based UI architecture displaying poster graphics, star ratings, release years, and genre tags.
* **🚀 Lightweight & Performant:** Built with utility-first CSS and component-driven architecture for rapid rendering.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React.js / Next.js
* **Styling:** Tailwind CSS
* **Icons:** Custom SVG Vector Suite / Heroicons
* **Data Provider:** TVMaze API / Open Movie Database *(Integrated via REST API)*

---

## 📁 Project Architecture

src/
├── components/
│   ├── Navbar.jsx        # Responsive Top Navigation & CTA
│   ├── HeroBanner.jsx    # High-Impact Hero Banner Section
│   ├── MovieCard.jsx     # Reusable Movie Card Sub-Component
│   └── Footer.jsx        # Footer Navigation & Social Links
├── pages/
│   └── MovieListing.jsx  # Main Movie Listing Page with Live Search
├── styles/
│   └── globals.css       # Global Design System Utilities & Keyframes
└── App.tsx               # Primary Application Container

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/cinehub.git](https://github.com/your-username/cinehub.git)
cd cinehub

npm install
# or
yarn installnpm run dev
# or
yarn dev
