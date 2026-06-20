import { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChartBar, FaChartPie } from 'react-icons/fa6';
import { 
  SiLeetcode, 
  SiPython, 
  SiTensorflow, 
  SiPytorch, 
  SiLangchain, 
  SiMysql,
  SiStreamlit,
  SiDocker,
  SiGit,
  SiOpencv,
  SiPandas
} from 'react-icons/si';
import GlassCard from '../shared/GlassCard';
import { useTheme } from '../../hooks/useTheme';

const facts = [
  "I dream in Python 🐍",
  "AI/ML is my superpower ⚡",
  "Data analysis is one of my core strengths 📊",
  "6 projects & counting! 🚀",
  "IEEE published researcher 📝",
  "Bennett University CSE '26 🎓"
];

const floatingAssets = [
  // Left Side (spread widely across the left side of the Home section on desktop)
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/JustCallMeSidd',
    delay: '0.2s',
    className: '-left-14 top-[3%] sm:-left-24 md:-left-40 lg:-left-56'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'http://linkedin.com/in/justcallmesidd/',
    delay: '0.7s',
    className: '-left-28 top-[15%] sm:-left-44 md:-left-72 lg:-left-96'
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:justcallmesidd@gmail.com',
    delay: '1.3s',
    className: '-left-10 top-[27%] sm:-left-18 md:-left-28 lg:-left-44'
  },
  {
    name: 'Tableau',
    icon: FaChartBar,
    url: '#skills',
    delay: '0.5s',
    className: '-left-36 top-[39%] sm:-left-56 md:-left-88 lg:-left-[380px]'
  },
  {
    name: 'Power BI',
    icon: FaChartPie,
    url: '#skills',
    delay: '1.1s',
    className: '-left-20 top-[51%] sm:-left-36 md:-left-56 lg:-left-80'
  },
  {
    name: 'Streamlit',
    icon: SiStreamlit,
    url: '#skills',
    delay: '1.6s',
    className: '-left-40 top-[63%] sm:-left-64 md:-left-[280px] lg:-left-[440px]'
  },
  {
    name: 'Docker',
    icon: SiDocker,
    url: '#skills',
    delay: '0.9s',
    className: '-left-24 top-[75%] sm:-left-40 md:-left-64 lg:-left-88'
  },
  {
    name: 'Git',
    icon: SiGit,
    url: '#skills',
    delay: '1.4s',
    className: '-left-32 top-[87%] sm:-left-52 md:-left-80 lg:-left-[340px]'
  },
  // Right Side (spread widely across the right side of the Home section on desktop)
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    url: 'https://leetcode.com/u/SagedWithSid/',
    delay: '0.4s',
    className: '-right-28 top-[3%] sm:-right-44 md:-right-72 lg:-right-96'
  },
  {
    name: 'Python',
    icon: SiPython,
    url: '#skills',
    delay: '0.9s',
    className: '-right-14 top-[15%] sm:-right-24 md:-right-40 lg:-right-56'
  },
  {
    name: 'SQL',
    icon: SiMysql,
    url: '#skills',
    delay: '1.5s',
    className: '-right-36 top-[27%] sm:-right-56 md:-right-88 lg:-right-[380px]'
  },
  {
    name: 'PyTorch',
    icon: SiPytorch,
    url: '#skills',
    delay: '0.6s',
    className: '-right-20 top-[39%] sm:-right-36 md:-right-56 lg:-right-80'
  },
  {
    name: 'TensorFlow',
    icon: SiTensorflow,
    url: '#skills',
    delay: '1.2s',
    className: '-right-40 top-[51%] sm:-right-64 md:-right-[280px] lg:-right-[440px]'
  },
  {
    name: 'LangChain',
    icon: SiLangchain,
    url: '#skills',
    delay: '1.8s',
    className: '-right-16 top-[63%] sm:-right-28 md:-right-44 lg:-right-64'
  },
  {
    name: 'OpenCV',
    icon: SiOpencv,
    url: '#skills',
    delay: '0.8s',
    className: '-right-24 top-[75%] sm:-right-40 md:-right-64 lg:-right-88'
  },
  {
    name: 'Pandas',
    icon: SiPandas,
    url: '#skills',
    delay: '1.3s',
    className: '-right-32 top-[87%] sm:-right-52 md:-right-80 lg:-right-[340px]'
  }
];

export default function Avatar() {
  const { isDark } = useTheme();
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const glassPathRef = useRef(null);
  const [activeFact, setActiveFact] = useState(null);
  const timeoutRef = useRef(null);

  // Mouse tracking states
  const mouseViewportPos = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const activeRef = useRef(false);
  const radiusRef = useRef(0);
  const timeRef = useRef(0);
  const animFrameRef = useRef(null);

  // Pick a random fact
  const handleProfileClick = () => {
    let newFact;
    do {
      newFact = facts[Math.floor(Math.random() * facts.length)];
    } while (newFact === activeFact && facts.length > 1);

    setActiveFact(newFact);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setActiveFact(null);
    }, 3000);
  };

  useEffect(() => {
    const homeEl = document.getElementById('home');

    // Track mouse globally over the whole viewport (centered on Home section)
    const handleMouseMove = (e) => {
      mouseViewportPos.current = { x: e.clientX, y: e.clientY };

      if (homeEl) {
        const homeRect = homeEl.getBoundingClientRect();
        const inHomeX = e.clientX >= homeRect.left && e.clientX <= homeRect.right;
        const inHomeY = e.clientY >= homeRect.top && e.clientY <= homeRect.bottom;
        activeRef.current = inHomeX && inHomeY;
      }
    };

    const handleScroll = () => {
      if (homeEl) {
        const homeRect = homeEl.getBoundingClientRect();
        if (window.scrollY > window.innerHeight * 0.9) {
          activeRef.current = false;
        } else {
          const inHomeX = mouseViewportPos.current.x >= homeRect.left && mouseViewportPos.current.x <= homeRect.right;
          const inHomeY = mouseViewportPos.current.y >= homeRect.top && mouseViewportPos.current.y <= homeRect.bottom;
          activeRef.current = inHomeX && inHomeY;
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Animation frame loop
    const updateAmoeba = () => {
      timeRef.current += 0.035;

      const targetRadius = activeRef.current ? 75 : 0;
      radiusRef.current += (targetRadius - radiusRef.current) * 0.1;

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const targetX = mouseViewportPos.current.x - rect.left;
        const targetY = mouseViewportPos.current.y - rect.top;

        currentPosRef.current.x += (targetX - currentPosRef.current.x) * 0.12;
        currentPosRef.current.y += (targetY - currentPosRef.current.y) * 0.12;
      }

      const r = radiusRef.current;
      const { x, y } = currentPosRef.current;

      if (r > 0.5) {
        const numPoints = 40;
        const points = [];
        const time = timeRef.current;

        for (let i = 0; i < numPoints; i++) {
          const angle = (i / numPoints) * Math.PI * 2;
          const wobble = Math.sin(angle * 3 + time * 1.8) * 8 + 
                         Math.cos(angle * 5 - time * 1.2) * 5 + 
                         Math.sin(angle * 2 + time * 0.8) * 3;
          
          const currentRadius = r + wobble;
          const px = x + currentRadius * Math.cos(angle);
          const py = y + currentRadius * Math.sin(angle);
          points.push(`${px.toFixed(1)},${py.toFixed(1)}`);
        }

        const pathD = `M ${points.join(' L ')} Z`;

        if (pathRef.current) pathRef.current.setAttribute('d', pathD);
        if (glassPathRef.current) {
          glassPathRef.current.setAttribute('d', pathD);
          glassPathRef.current.setAttribute('opacity', '1');
        }
      } else {
        if (pathRef.current) pathRef.current.setAttribute('d', '');
        if (glassPathRef.current) glassPathRef.current.setAttribute('opacity', '0');
      }

      animFrameRef.current = requestAnimationFrame(updateAmoeba);
    };

    animFrameRef.current = requestAnimationFrame(updateAmoeba);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleIconClick = (e, url) => {
    if (url.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(url);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex flex-col items-center select-none my-0 mx-8 sm:mx-12 md:mx-16">
      {/* Speech Bubble "Hi I am Siddharth" floating above profile */}
      <div 
        className="absolute bottom-[104%] left-1/2 -translate-x-1/2 z-30 animate-float pointer-events-none"
        style={{ animationDelay: '0.2s' }}
      >
        <div className="relative glass px-5 py-3 rounded-2xl shadow-xl border-accent/20 whitespace-nowrap">
          <p className="font-pixel text-[8px] sm:text-[9px] text-chrome-500 dark:text-chrome-400 leading-none text-center">
            HI, I AM
          </p>
          <p className="font-sans font-extrabold text-sm sm:text-base text-chrome-950 dark:text-white mt-1.5 leading-none tracking-wide text-center">
            Siddharth
          </p>
          
          {/* Tail pointing down towards the profile photo */}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/70 dark:bg-chrome-900/70 border-r border-b border-white/20 dark:border-white/10 rotate-45 backdrop-blur-xl" />
        </div>
      </div>

      {/* Main Wrapper (handles click and mouse tracking, overflow: visible) */}
      <div 
        ref={containerRef}
        className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[400px] cursor-pointer relative overflow-visible"
        onClick={handleProfileClick}
      >
        {/* Inner Image Wrapper (clipped/rounded-3xl) */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-2xl z-10">
          {/* Layer 1: Grayscale Base Image */}
          <img 
            src="/profile.png" 
            alt="Siddharth Gupta"
            className="w-full h-full object-cover filter grayscale select-none pointer-events-none"
          />

          {/* Layer 2: Color Image (Masked by SVG clipPath) */}
          <div 
            className="absolute inset-0 pointer-events-none z-10"
            style={{ clipPath: 'url(#amoeba-clip)' }}
          >
            <img 
              src="/profile.png" 
              alt="Siddharth Gupta Color"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </div>
        </div>

        {/* SVG clipPath definition */}
        <svg className="absolute w-0 h-0">
          <defs>
            <clipPath id="amoeba-clip" clipPathUnits="userSpaceOnUse">
              <path ref={pathRef} d="" />
            </clipPath>
          </defs>
        </svg>

        {/* Layer 3: Glassy/Specule Amoeba Ring Overlay (drawn over the whole area, overflow: visible) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
          <path 
            ref={glassPathRef} 
            d="" 
            fill={isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(10, 10, 11, 0.04)"} 
            stroke={isDark ? "rgba(255, 255, 255, 0.6)" : "rgba(10, 10, 11, 0.55)"} 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0"
            style={{ 
              filter: isDark 
                ? 'drop-shadow(0 0 10px rgba(255,255,255,0.4))' 
                : 'drop-shadow(0 0 8px rgba(0,0,0,0.22))' 
            }}
          />
        </svg>

        {/* Desktop Interactive Floating Assets on Both Sides */}
        {floatingAssets.map((asset, index) => {
          const Icon = asset.icon;
          return (
            <a
              key={asset.name}
              href={asset.url}
              target={asset.url.startsWith('#') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              onClick={(e) => handleIconClick(e, asset.url)}
              className={`absolute hidden sm:flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full glass border border-white/25 shadow-lg 
                         text-chrome-600 hover:text-accent dark:text-chrome-300 dark:hover:text-accent
                         hover:border-accent/40 hover:scale-110 active:scale-95 hover:shadow-accent/10
                         transition-all duration-300 z-30 ${asset.className} animate-float-rnd-${(index % 12) + 1}`}
              style={{ animationDelay: asset.delay }}
              title={asset.name}
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}

        {/* Fact Overlay Banner on the lower part of the profile pic */}
        <div 
          className={`absolute bottom-4 left-4 right-4 z-30 transition-all duration-300 transform pointer-events-none ${
            activeFact 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
          }`}
        >
          <GlassCard className="px-3 py-2.5 border-accent/30 text-xs sm:text-sm font-semibold text-center text-chrome-950 dark:text-white shadow-2xl bg-white/90 dark:bg-chrome-900/90 backdrop-blur-xl">
            {activeFact}
          </GlassCard>
        </div>
      </div>

      <span className="text-xs text-chrome-400 dark:text-chrome-500 font-light mt-4 animate-pulse">
        Click my photo to learn a fact! 👆
      </span>

      {/* Mobile Interactive Row (stacks below profile for responsive screens) */}
      <div className="flex sm:hidden flex-wrap justify-center gap-2 mt-4 max-w-[280px] z-20">
        {floatingAssets.map((asset) => {
          const Icon = asset.icon;
          return (
            <a
              key={asset.name}
              href={asset.url}
              target={asset.url.startsWith('#') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              onClick={(e) => handleIconClick(e, asset.url)}
              className="flex items-center justify-center w-9 h-9 rounded-full glass border border-white/20 shadow-md 
                         text-chrome-600 active:text-accent dark:text-chrome-300 dark:active:text-accent"
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

