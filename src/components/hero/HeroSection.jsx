import Avatar from './Avatar';
import BookCallPill from './BookCallPill';

const Leaf1 = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="absolute top-10 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 text-emerald-500/20 dark:text-emerald-950/20 blur-[12px] rotate-45 select-none pointer-events-none z-0"
  >
    <path 
      fill="currentColor"
      d="M50,0 C30,30 20,45 20,65 C20,80 35,90 50,90 C65,90 80,80 80,65 C80,45 70,30 50,0 Z" 
    />
    <path 
      fill="currentColor"
      opacity="0.5"
      d="M50,20 C35,45 28,55 28,70 C28,80 38,87 50,87 C62,87 72,80 72,70 C72,55 65,45 50,20 Z" 
    />
  </svg>
);

const Leaf2 = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="absolute bottom-10 left-10 w-52 h-52 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] text-teal-500/20 dark:text-teal-950/15 blur-[16px] -rotate-12 select-none pointer-events-none z-0"
  >
    <path 
      fill="currentColor"
      d="M50,0 C45,15 35,25 25,30 C35,35 40,45 35,55 C45,58 48,70 40,80 C50,85 50,95 50,100 C50,95 50,85 60,80 C52,70 55,58 65,55 C60,45 65,35 75,30 C65,25 55,15 50,0 Z" 
    />
  </svg>
);

const Leaf3 = () => (
  <svg 
    viewBox="0 0 100 100" 
    className="absolute top-1/3 left-1/4 w-32 h-32 sm:w-48 sm:h-48 text-emerald-400/15 dark:text-emerald-900/10 blur-[8px] -rotate-45 select-none pointer-events-none z-0"
  >
    <path 
      fill="currentColor"
      d="M50,10 C40,35 30,45 10,50 C30,55 40,65 50,90 C60,65 70,55 90,50 C70,45 60,35 50,10 Z" 
    />
  </svg>
);

const ValleyBackground = () => (
  <svg 
    viewBox="0 0 1000 300" 
    preserveAspectRatio="none" 
    className="absolute bottom-0 left-0 w-full h-[120px] sm:h-[165px] md:h-[210px] pointer-events-none z-0 select-none"
  >
    <path 
      d="M0,150 Q250,80 500,160 T1000,120 L1000,300 L0,300 Z" 
      fill="currentColor"
      className="text-emerald-800/10 dark:text-emerald-950/15 blur-[2px]"
    />
    <path 
      d="M0,200 Q300,140 600,220 T1000,180 L1000,300 L0,300 Z" 
      fill="currentColor"
      className="text-emerald-600/10 dark:text-emerald-900/10"
    />
  </svg>
);

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-surface dark:bg-surface-dark px-4 pt-28 pb-20"
    >
      {/* Background Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Starry Night Sky (active in dark mode with twinkling animations) */}
        <div className="starry-sky starry-sky-1" />
        <div className="starry-sky starry-sky-2" />

        {/* Ambient Blur Glows for lighting highlights */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent/10 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-chrome-400/10 dark:bg-chrome-700/10 blur-[80px]" />

        {/* Greenery / Leaf Silhouettes with soft shape-defining blur */}
        <Leaf1 />
        <Leaf2 />
        <Leaf3 />

        {/* Valley Theme Silhouette */}
        <ValleyBackground />

        {/* Glass Screen Partition (backdrop filter overlays all background elements) */}
        <div className="absolute inset-0 bg-transparent backdrop-blur-[6px] saturate-[110%] z-5 border-b border-white/5" />
      </div>

      {/* Center Hero Block (gently centered inside Home viewport) */}
      <div className="w-full max-w-4xl flex flex-col items-center justify-center z-10 select-none">
        
        {/* Profile Container with Speech Bubble */}
        <div className="relative z-20">
          <Avatar />
        </div>
      </div>

      <BookCallPill />

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-float pointer-events-none">
        <span className="text-xs font-medium text-chrome-400 dark:text-chrome-500 tracking-wider">
          Scroll to explore
        </span>
        <span className="text-sm text-chrome-400 dark:text-chrome-500 mt-1 animate-bounce">
          ↓
        </span>
      </div>
    </section>
  );
}
