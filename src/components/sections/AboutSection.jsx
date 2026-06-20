import RevealSection from '../shared/RevealSection';
import GlassCard from '../shared/GlassCard';

const stats = [
  { value: '6', label: 'Featured Projects' },
  { value: 'IEEE', label: 'Publication' },
  { value: '8.48', label: 'B.Tech CGPA' },
  { value: 'AI/ML', label: 'Specialization' },
];

function AboutSection() {
  return (
    <RevealSection id="about">
      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
        <GlassCard>
          <div className="p-8 sm:p-12">
            {/* Section Header */}
            <h2 className="text-3xl font-bold text-chrome-900 dark:text-chrome-100 mb-1">
              About Me
            </h2>
            <div className="w-12 h-1 bg-accent rounded-full mb-8" />

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left: Bio */}
              <div className="space-y-4 text-chrome-600 dark:text-chrome-300 leading-relaxed">
                <p>
                  I'm Siddharth Gupta, a passionate AI/ML Engineer and Full Stack
                  Developer pursuing B.Tech in Computer Science Engineering with
                  AI/ML specialization at Bennett University.
                </p>
                <p>
                  I specialize in building intelligent systems using deep learning,
                  natural language processing, and modern web technologies. From
                  medical AI to generative applications, I love pushing the
                  boundaries of what's possible with code.
                </p>
                <p>
                  When I'm not training models or debugging code, you'll find me
                  exploring the latest research papers, contributing to open-source
                  projects, or building tools that make a real-world impact.
                </p>
              </div>

              {/* Right: Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass rounded-xl p-5 flex flex-col items-center justify-center text-center"
                  >
                    <span className="text-2xl font-bold text-accent">
                      {stat.value}
                    </span>
                    <span className="text-sm text-chrome-500 dark:text-chrome-400 mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </RevealSection>
  );
}

export default AboutSection;
