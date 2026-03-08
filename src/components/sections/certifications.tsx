import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';

export function CertificationsSection() {
  const certifications = [
    { title: 'IBM Machine Learning Professional Certificate', issuer: 'IBM via Coursera', topics: 'Supervised/Unsupervised Learning, Deep Learning, Reinforcement Learning, Capstone', verifyLink: 'https://coursera.org/verify/professional-cert/1FZ0G6HFBOPH' },
    { title: 'MLOps with Vertex AI: Manage Features', issuer: 'Google Cloud via Coursera', topics: 'Feature Store, Containerized ML workflows, Scalable training/inference', verifyLink: 'https://coursera.org/verify/ZDIE5VQ4NBI9' },
    { title: 'Supervised Machine Learning: Regression', issuer: 'IBM via Coursera', topics: 'Linear Regression, Polynomial Regression, Regularization, Model Evaluation' },
    { title: 'Machine Learning Capstone', issuer: 'IBM via Coursera', topics: 'End-to-end ML pipeline, Feature Engineering, Model Deployment' },
    { title: 'Exploratory Data Analysis for Machine Learning', issuer: 'IBM via Coursera', topics: 'Data Visualization, Feature Selection, Data Cleaning, Statistical Methods' },
    { title: 'Unsupervised Machine Learning', issuer: 'IBM via Coursera', topics: 'Clustering, Dimensionality Reduction, Principal Component Analysis' },
  ];

  return (
    <section id="certifications" className="py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <p className="text-sm font-medium mb-2 tracking-wide uppercase" style={{ color: 'var(--color-accent)' }}>Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Professional credentials</h2>
          <div className="w-12 h-0.5" style={{ backgroundColor: 'var(--color-accent)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: '-60px' }}
              className="p-5 rounded-xl card-hover flex flex-col"
              style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                  <Award className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-tight mb-1" style={{ color: 'var(--color-text-primary)' }}>{cert.title}</h3>
                  <p className="text-xs font-medium" style={{ color: 'var(--color-text-muted)' }}>{cert.issuer}</p>
                </div>
              </div>

              <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: 'var(--color-text-secondary)' }}>{cert.topics}</p>

              <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--color-border)' }}>
                <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: '#22C55E' }}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>
                {cert.verifyLink && (
                  <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium transition-colors" style={{ color: 'var(--color-accent)' }}>
                    Verify <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}