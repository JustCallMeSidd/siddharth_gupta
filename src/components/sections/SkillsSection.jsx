import RevealSection from '../shared/RevealSection';
import { skillCategories } from '../../data/skills';
import { 
  FaChartBar, 
  FaChartPie, 
  FaFileExcel, 
  FaChartLine, 
  FaChartArea, 
  FaImages, 
  FaMicrosoft, 
  FaGear 
} from 'react-icons/fa6';
import {
  SiPython,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiOpencv,
  SiLangchain,
  SiHuggingface,
  SiSpacy,
  SiGit,
  SiDocker,
  SiLinux,
  SiMlflow,
  SiN8N,
  SiStreamlit,
  SiJupyter
} from 'react-icons/si';

/* Map icon name strings from data to actual components */
const iconMap = {
  SiPython,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiOpencv,
  SiLangchain,
  SiHuggingface,
  SiSpacy,
  SiGit,
  SiDocker,
  SiLinux,
  SiMlflow,
  SiN8N,
  SiStreamlit,
  SiJupyter,
  FaChartBar,
  FaChartPie,
  FaFileExcel,
  FaChartLine,
  FaChartArea,
  FaImages,
  FaMicrosoft,
  FaGear
};

/* Fallback icon when the mapping doesn't match */
function FallbackIcon() {
  return (
    <span className="w-5 h-5 rounded bg-chrome-200 dark:bg-chrome-700 inline-block" />
  );
}

function SkillsSection() {
  return (
    <RevealSection id="skills">
      <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-chrome-900 dark:text-chrome-100 text-center mb-1">
          Tech Stack
        </h2>
        <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-12" />

        <div className="space-y-10">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-lg font-semibold text-chrome-500 mb-3">
                {cat.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {cat.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || FallbackIcon;
                  return (
                    <div
                      key={skill.name}
                      className="glass p-4 rounded-xl flex items-center gap-3
                                 hover:translate-y-[-2px] hover:shadow-lg
                                 transition-all duration-200 cursor-default"
                    >
                      <IconComponent className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-sm font-medium text-chrome-700 dark:text-chrome-200">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

export default SkillsSection;
