import RevealSection from '../shared/RevealSection';
import GlassCard from '../shared/GlassCard';
import TiltCard from '../shared/TiltCard';
import { projects } from '../../data/projects';
import { FaGithub } from 'react-icons/fa6';

function ProjectsSection() {
  return (
    <RevealSection id="projects">
      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-chrome-900 dark:text-chrome-100 text-center mb-1">
          Projects
        </h2>
        <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-12" />

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <TiltCard key={project.title}>
              <GlassCard hover>
                <div className="p-6 flex flex-col h-full">
                  {/* Colored accent bar */}
                  <div
                    className="w-full h-[3px] rounded-full mb-4"
                    style={{ backgroundColor: project.color }}
                  />

                  {/* Title */}
                  <h3 className="text-xl font-bold text-chrome-900 dark:text-chrome-100 mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-chrome-500 dark:text-chrome-400 line-clamp-3 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs
                                   bg-chrome-100 dark:bg-chrome-800
                                   text-chrome-600 dark:text-chrome-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold
                                 bg-chrome-100/50 hover:bg-accent/15 dark:bg-chrome-800/50 dark:hover:bg-accent/15
                                 text-chrome-700 hover:text-accent dark:text-chrome-300 dark:hover:text-accent
                                 px-4 py-2 rounded-xl transition-all duration-300 w-fit no-underline mt-2"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>View Project →</span>
                    </a>
                  )}
                </div>
              </GlassCard>
            </TiltCard>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

export default ProjectsSection;
