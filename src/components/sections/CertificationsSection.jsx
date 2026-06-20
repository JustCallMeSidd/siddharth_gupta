import RevealSection from '../shared/RevealSection';
import GlassCard from '../shared/GlassCard';
import { certifications } from '../../data/certifications';

function CertificationsSection() {
  return (
    <RevealSection id="certifications">
      <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-chrome-900 dark:text-chrome-100 text-center mb-1">
          Certifications
        </h2>
        <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-12" />

        {/* Cert Cards */}
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4 sm:pb-0 snap-x snap-mandatory sm:snap-none">
          {certifications.map((cert) => (
            <div key={cert.title} className="min-w-[250px] sm:min-w-0 snap-start">
              <GlassCard>
                <div className="p-5 flex items-start gap-3">
                  {/* Colored dot */}
                  <span
                    className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: cert.color }}
                  />

                  <div>
                    <h3 className="font-semibold text-chrome-900 dark:text-chrome-100">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-chrome-400 mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

export default CertificationsSection;
