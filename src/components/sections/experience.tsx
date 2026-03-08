import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      role: 'Data Scientist',
      company: 'IBM',
      duration: 'January 2026 – Present',
      location: 'Bengaluru, India',
      description: 'Working on AI deployment workflows, automation pipelines, and site reliability engineering for production ML systems.',
      technologies: ['Python', 'AI/ML', 'Automation', 'SRE'],
      current: true,
    },
    {
      role: 'Deep Learning Intern',
      company: 'RunShaw Technologies Pvt Ltd',
      duration: 'February 2026 – Present',
      location: 'Mysore, Karnataka',
      description: 'Developing and optimizing deep learning models for real-world applications, focusing on model architecture design and training pipeline optimization.',
      technologies: ['PyTorch', 'Deep Learning', 'Computer Vision'],
      current: true,
    },
    {
      role: 'AI Intern',
      company: 'QualBizz Solutions LLP',
      duration: 'July 2025 – September 2025',
      location: 'United States',
      description: 'Designed and implemented AI solutions including data preprocessing, model development, and ML/DL projects. Worked on SaaS applications and frontend development using React.',
      technologies: ['Python', 'Scikit-learn', 'React', 'Deep Learning'],
      current: false,
      certificateLink: 'https://drive.google.com/file/d/1ywj5E8LWt97Nd3ViskVAQSCR9zhR5xZ7/view?usp=sharing',
    },
  ];

  return (
    <section id="experience" className="py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <p className="text-sm font-medium mb-2 tracking-wide uppercase" style={{ color: 'var(--color-accent)' }}>Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Where I've worked</h2>
          <div className="w-12 h-0.5" style={{ backgroundColor: 'var(--color-accent)' }} />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Animated timeline line */}
          <motion.div
            className="absolute left-[11px] top-2 bottom-2 w-px"
            style={{ backgroundColor: 'var(--color-border)' }}
            initial={{ scaleY: 0, transformOrigin: 'top' }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-60px' }}
                className="relative pl-10"
              >
                <div
                  className="absolute left-0 top-2 w-[23px] h-[23px] rounded-full flex items-center justify-center"
                  style={{
                    border: exp.current ? '2px solid var(--color-accent)' : '2px solid var(--color-border-hover)',
                    backgroundColor: exp.current ? 'var(--color-accent-muted)' : 'var(--color-bg-card)',
                  }}
                >
                  {exp.current && <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />}
                </div>

                <div
                  className="p-6 rounded-xl card-hover"
                  style={{
                    backgroundColor: 'var(--color-bg-elevated)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>{exp.role}</h3>
                      <p className="font-medium text-sm" style={{ color: 'var(--color-accent)' }}>{exp.company}</p>
                    </div>
                    {exp.current && (
                      <span
                        className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full"
                        style={{
                          backgroundColor: 'rgba(34, 197, 94, 0.1)',
                          color: '#22C55E',
                          border: '1px solid rgba(34, 197, 94, 0.2)',
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs mb-4" style={{ color: 'var(--color-text-muted)' }}>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{exp.duration}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
                  </div>

                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-medium rounded-md"
                        style={{
                          backgroundColor: 'var(--color-bg-card)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.certificateLink && (
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium transition-colors"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      View Certificate <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}