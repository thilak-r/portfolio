import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Github } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Diabetic Retinopathy Detection System',
      description: 'End-to-end deep learning pipeline using ensemble learning (ResNet18, DenseNet121, EfficientNet-B0, ResNeXt50) with Grad-CAM explainability. Integrated Gemini 2.5 Pro for automated diagnostic report generation.',
      tags: ['PyTorch', 'Flask', 'Grad-CAM', 'Gemini API'],
      metrics: ['70% Accuracy', '0.73 Kappa Score'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/thilak-r/Ensembling-xAI-towards-Diabetic-Retinopathy',
    },
    {
      title: 'Real-Time Forest Fire Detection',
      description: 'YOLOv8-based computer vision system trained on 1,722 annotated images. Deployed with Flask and OpenCV for live camera feed inference with rule-based alerting.',
      tags: ['YOLOv8', 'Flask', 'OpenCV', 'Python'],
      metrics: ['85.6% mAP@0.5', '53.7% mAP@0.5:0.95'],
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/thilak-r/Forest-fire-detection-using-YOLOv8',
    },
    {
      title: '10+ ML Projects',
      description: 'Extensive portfolio of machine learning projects spanning computer vision, NLP, and data science — including image classification, object detection, sentiment analysis, and predictive modeling.',
      tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
      link: 'https://github.com/thilak-r',
    },
  ];

  const websites = [
    { title: 'Ekvion AI', url: 'https://www.insightbridge.co.in/', tags: ['React', 'Tailwind', 'Google OAuth', 'Supabase'] },
    { title: 'Techtatva 2025', url: 'https://ekvion-event.netlify.app/', tags: ['React', 'Tailwind'] },
  ];

  return (
    <section id="projects" className="py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <p className="text-sm font-medium mb-2 tracking-wide uppercase" style={{ color: 'var(--color-accent)' }}>Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Featured work</h2>
          <p className="text-base mb-4" style={{ color: 'var(--color-text-muted)' }}>Building intelligent solutions with real-world impact</p>
          <div className="w-12 h-0.5" style={{ backgroundColor: 'var(--color-accent)' }} />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-60px' }}
              className="rounded-xl overflow-hidden card-hover group flex flex-col"
              style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0" style={{ backgroundColor: 'var(--color-overlay)' }} />
                {project.metrics && (
                  <div className="absolute top-3 left-3 flex gap-2">
                    {project.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-semibold backdrop-blur-sm rounded-md"
                        style={{
                          backgroundColor: 'var(--nav-bg)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-accent)',
                        }}
                      >
                        <TrendingUp className="w-3 h-3" />
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-base font-semibold mb-2 transition-colors duration-200" style={{ color: 'var(--color-text-primary)' }}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--color-text-secondary)' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4 pt-3" style={{ borderTop: '1px solid var(--color-border)' }}>
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[11px] font-medium rounded"
                      style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                  style={{ color: 'var(--color-accent)' }}
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {websites.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: '-60px' }}
            className="mt-12"
          >
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Web Applications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {websites.map((site, index) => (
                <a
                  key={index}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl card-hover group"
                  style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}
                >
                  <div>
                    <p className="font-medium text-sm transition-colors" style={{ color: 'var(--color-text-primary)' }}>{site.title}</p>
                    <div className="flex gap-1.5 mt-2">
                      {site.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-[10px] font-medium rounded" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 flex-shrink-0 transition-colors" style={{ color: 'var(--color-text-muted)' }} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}