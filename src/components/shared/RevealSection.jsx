import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export default function RevealSection({ children, className = '', id }) {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    if (!sectionRef.current) return;

    if (prefersReducedMotion) {
      gsap.set(sectionRef.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} id={id} className={className}>
      {children}
    </section>
  );
}
