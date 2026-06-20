import { useTheme } from './hooks/useTheme';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ResearchSection from './components/sections/ResearchSection';
import CertificationsSection from './components/sections/CertificationsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import Dock from './components/dock/Dock';
import ThemeToggle from './components/shared/ThemeToggle';

function App() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="relative min-h-screen">
      <ThemeToggle isDark={isDark} toggle={toggle} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
      <Dock />
    </div>
  );
}

export default App;
