import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useIsMobile } from '../../hooks/useIsMobile';
import {
  FaHouse,
  FaUser,
  FaLayerGroup,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const navItems = [
  { icon: FaHouse, label: 'Home', href: '#home' },
  { icon: FaUser, label: 'About', href: '#about' },
  { icon: FaLayerGroup, label: 'Skills', href: '#skills' },
  { icon: FaCode, label: 'Projects', href: '#projects' },
  { icon: FaEnvelope, label: 'Contact', href: '#contact' },
];

const externalItems = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/JustCallMeSidd' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'http://linkedin.com/in/justcallmesidd/' },
  { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/u/SagedWithSid/' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/siddharth.gupta_02?igsh=MW1tNzhnM2Z6eHFyag==' },
  { icon: FaEnvelope, label: 'Email', href: 'mailto:justcallmesidd@gmail.com' },
];

function Dock() {
  const dockRef = useRef(null);
  const isMobile = useIsMobile();

  useGSAP(() => {
    if (isMobile || !dockRef.current) return;

    const container = dockRef.current;
    const icons = container.querySelectorAll('.dock-icon');

    // Set transform origin
    gsap.set(icons, { transformOrigin: 'bottom center' });

    const handleMouseMove = (e) => {
      icons.forEach((icon) => {
        const rect = icon.getBoundingClientRect();
        const iconCenterX = rect.left + rect.width / 2;
        const distance = Math.abs(e.clientX - iconCenterX);

        const scale = gsap.utils.clamp(
          1,
          1.6,
          gsap.utils.mapRange(120, 0, 1, 1.6, distance)
        );
        const y = -(scale - 1) * 16;

        gsap.to(icon, {
          scale,
          y,
          duration: 0.25,
          ease: 'power2.out',
          overwrite: true,
        });
      });
    };

    const handleMouseLeave = () => {
      gsap.to(icons, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: true,
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  return (
    <div
      ref={dockRef}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50
                 glass rounded-2xl px-3 py-2 flex items-end gap-0.5"
    >
      {/* Internal nav items */}
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="dock-icon group flex flex-col items-center p-2 rounded-xl
                     hover:bg-chrome-100/50 dark:hover:bg-chrome-800/50 transition-colors"
        >
          <item.icon className="w-6 h-6 text-chrome-600 dark:text-chrome-300" />
          <span className="text-[10px] text-chrome-500 dark:text-chrome-400
                           opacity-0 group-hover:opacity-100 transition-opacity mt-0.5">
            {item.label}
          </span>
        </a>
      ))}

      {/* Divider */}
      <div className="w-px h-6 bg-chrome-300 dark:bg-chrome-600 mx-1 self-center" />

      {/* External links */}
      {externalItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-icon group flex flex-col items-center p-2 rounded-xl
                     hover:bg-chrome-100/50 dark:hover:bg-chrome-800/50 transition-colors"
        >
          <item.icon className="w-6 h-6 text-chrome-600 dark:text-chrome-300" />
          <span className="text-[10px] text-chrome-500 dark:text-chrome-400
                           opacity-0 group-hover:opacity-100 transition-opacity mt-0.5">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
}

export default Dock;
