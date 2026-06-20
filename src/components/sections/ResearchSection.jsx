import RevealSection from '../shared/RevealSection';
import GlassCard from '../shared/GlassCard';
import { FaFileLines, FaPuzzlePiece, FaGraduationCap } from 'react-icons/fa6';

const achievements = [
  {
    title: 'IEEE Research Publication',
    subtitle: 'Integrating Deep Learning Concepts with Blood Diagnosis | IEEE CISES 2025',
    description: 'Proposed a novel framework that transforms structured blood test data into image-like tensors, enabling convolutional neural networks to classify hematological conditions and demonstrating the potential of AI-driven healthcare diagnostics.',
    link: 'https://ieeexplore.ieee.org/document/11265644',
    badge: 'IEEE Published',
    icon: FaFileLines,
    color: '#10B981',
  },
  {
    title: 'Cognify AI',
    subtitle: 'Production-ready Microsoft Edge Extension | LLM APIs, JS, Python',
    description: 'Developed and deployed a production-ready AI browser/desktop extension providing real-time chat, image analysis, and PDF export for seamless workflow integration.',
    link: 'https://microsoftedge.microsoft.com/addons/detail/cognify-ai/hekmbonjdkdomcodihfmaoakielfbbne',
    badge: 'Live Deployment',
    icon: FaPuzzlePiece,
    color: '#8B5CF6',
  },
  {
    title: 'Data Analytics Training',
    subtitle: 'Apponix Academy | Professional Certificate',
    description: 'Completed intensive training in data analytics methodologies, business intelligence tools, data visualization with Power BI & Tableau, and professional reporting workflows.',
    link: 'https://drive.google.com/file/d/1JW5grXsItT_cwPP3JrXOCtAnB2qUgmEz/view?usp=drive_link',
    badge: 'Apponix Certified',
    icon: FaGraduationCap,
    color: '#3B82F6',
  },
];

function ResearchSection() {
  return (
    <RevealSection id="research">
      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-chrome-900 dark:text-chrome-100 text-center mb-1">
          Publications &amp; Deployments
        </h2>
        <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-12" />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.title} hover className="flex flex-col h-full">
                <div className="p-8 flex flex-col h-full text-center space-y-4">
                  {/* Decorative Icon Wrapper */}
                  <div 
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mx-auto mb-2 transition-transform duration-300 hover:scale-110"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-chrome-900 dark:text-chrome-100">
                    {item.title}
                  </h3>

                  <h4 className="text-xs font-semibold text-accent tracking-wider uppercase">
                    {item.subtitle}
                  </h4>

                  <p className="text-chrome-500 dark:text-chrome-400 text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>

                  <div className="pt-4 flex flex-col items-center gap-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-chrome-100 dark:bg-chrome-800 text-chrome-600 dark:text-chrome-300">
                      {item.badge}
                    </span>
                    
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-accent hover:underline flex items-center gap-1 mt-1"
                    >
                      View Resource/Publication →
                    </a>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
}

export default ResearchSection;
