# ✨ Siddharth Gupta — Liquid Chrome Portfolio

A stunning, macOS-inspired developer portfolio featuring a **liquid chrome** aesthetic with glassmorphism, metallic text effects, smooth GSAP animations, and an interactive Three.js background.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)
![Three.js](https://img.shields.io/badge/Three.js-r170-000000?style=flat-square&logo=threedotjs)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square&logo=greensock)

---

## 🎨 Design Philosophy

- **Liquid Chrome** — Metallic gradient text effects that shimmer like polished chrome
- **Glassmorphism** — Frosted glass panels with subtle backdrop blur and translucent borders
- **macOS Aesthetic** — Clean, minimal UI inspired by Apple's design language
- **Dark/Light Mode** — Seamless theme switching with system preference detection
- **Accessibility-First** — Respects `prefers-reduced-motion` and provides keyboard navigation

---

## 🛠 Tech Stack

| Category       | Technology                        |
| -------------- | --------------------------------- |
| **Framework**  | React 18                          |
| **Bundler**    | Vite 6                            |
| **Styling**    | Tailwind CSS v4 (CSS-first)       |
| **3D/WebGL**   | Three.js + @react-three/fiber     |
| **Animations** | GSAP 3 + ScrollTrigger            |
| **Icons**      | react-icons (Si + Fa icon packs)  |
| **Fonts**      | Inter Variable, Press Start 2P    |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/siddharthgupta/liquid-chrome-portfolio.git

# Navigate to the project
cd liquid-chrome-portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The development server will start at `http://localhost:5173`.

---

## 📦 Build for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

The production bundle will be output to the `dist/` directory.

---

## 🌐 Deployment

### GitHub Pages

1. Install the `gh-pages` package:

   ```bash
   npm install -D gh-pages
   ```

2. Add deployment scripts to `package.json`:

   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Set the `base` in `vite.config.js` to your repository name:

   ```js
   export default defineConfig({
     base: '/liquid-chrome-portfolio/',
     // ...
   });
   ```

4. Deploy:

   ```bash
   npm run deploy
   ```

### Vercel / Netlify

Simply connect your GitHub repository — both platforms auto-detect Vite projects and deploy with zero configuration.

---

## 🔐 Environment Variables

Copy `.env.example` to `.env` and configure as needed:

```bash
cp .env.example .env
```

| Variable                | Description                     | Default |
| ----------------------- | ------------------------------- | ------- |
| `VITE_CONTACT_EMAIL`    | Contact form recipient email    | —       |
| `VITE_GA_TRACKING_ID`   | Google Analytics tracking ID    | —       |

---

## 📁 Project Structure

```
liquid-chrome-portfolio/
├── public/                  # Static assets
├── src/
│   ├── components/          # React UI components
│   │   ├── layout/          # Navbar, Footer, Dock
│   │   ├── sections/        # Hero, About, Projects, Skills, Contact
│   │   └── three/           # Three.js scene components
│   ├── data/                # Static data (projects, skills, certs, social)
│   ├── hooks/               # Custom React hooks
│   │   ├── useTheme.js      # Dark/light mode management
│   │   ├── useReducedMotion.js
│   │   ├── useIsMobile.js
│   │   └── useMousePosition.js
│   ├── utils/               # Constants and helper utilities
│   ├── App.jsx              # Root application component
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind v4 CSS-first config & globals
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind config (if needed)
├── package.json
├── .env.example
└── README.md
```

---

## ✨ Features

- 🌗 **Dark/Light Mode** — Automatic system detection + manual toggle
- 🎭 **Chrome Text Effect** — Multi-stop metallic gradient with drop shadow
- 🔮 **Glass Panels** — Frosted backdrop-blur containers
- 🎯 **GSAP ScrollTrigger** — Scroll-driven reveal animations
- 🌐 **Three.js Background** — Interactive 3D particle/mesh scene
- 📱 **Fully Responsive** — Mobile-first design with touch support
- ♿ **Accessible** — Reduced motion support, semantic HTML, keyboard nav
- ⚡ **Blazing Fast** — Vite HMR + optimized production builds

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with 💚 by <strong>Siddharth Gupta</strong>
</p>
