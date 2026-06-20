import { useRef } from 'react';
import gsap from 'gsap';
import { FaSun, FaMoon } from 'react-icons/fa6';

export default function ThemeToggle({ isDark, toggle }) {
  const iconRef = useRef(null);

  const handleClick = () => {
    if (iconRef.current) {
      gsap.fromTo(
        iconRef.current,
        { rotation: 0 },
        { rotation: 180, duration: 0.4, ease: 'power2.out' }
      );
    }
    toggle();
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-6 right-6 z-50 glass p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span ref={iconRef} className="inline-flex text-lg">
        {isDark ? (
          <FaSun className="text-amber-400" />
        ) : (
          <FaMoon className="text-indigo-500" />
        )}
      </span>
    </button>
  );
}
