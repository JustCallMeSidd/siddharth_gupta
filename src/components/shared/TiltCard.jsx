import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useIsMobile } from '../../hooks/useIsMobile';

export default function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const isMobile = useIsMobile();
  const quickToX = useRef(null);
  const quickToY = useRef(null);

  useGSAP(() => {
    if (isMobile || !cardRef.current) return;

    gsap.set(cardRef.current, { transformPerspective: 800 });
    quickToX.current = gsap.quickTo(cardRef.current, 'rotationY', {
      duration: 0.4,
      ease: 'power2.out',
    });
    quickToY.current = gsap.quickTo(cardRef.current, 'rotationX', {
      duration: 0.4,
      ease: 'power2.out',
    });
  }, [isMobile]);

  const handleMouseMove = (e) => {
    if (isMobile || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const xNorm = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const yNorm = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    quickToX.current?.(xNorm * 6);
    quickToY.current?.(-yNorm * 6);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    quickToX.current?.(0);
    quickToY.current?.(0);
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ transformStyle: 'preserve-3d' }}>{children}</div>
    </div>
  );
}
