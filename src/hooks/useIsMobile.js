import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 640 || !window.matchMedia('(hover: hover)').matches;
  });

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 640 || !window.matchMedia('(hover: hover)').matches);
    };
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile;
}
