import { motion, useInView } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

function CountUp({ end, suffix = '', duration = 1500 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function AboutSection() {
  const stats = [
    { label: 'Work Experience', value: 3, suffix: '+', sublabel: 'Roles' },
    { label: 'Projects Built', value: 10, suffix: '+', sublabel: 'ML/AI' },
    { label: 'Certifications', value: 7, suffix: '+', sublabel: 'Verified' },
    { label: 'CGPA', value: 9, suffix: '.0', sublabel: '/10' },
  ];

  return (
    <section id="about" className="py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <p className="text-sm font-medium mb-2 tracking-wide uppercase" style={{ color: 'var(--color-accent)' }}>About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>A bit about me</h2>
          <div className="w-12 h-0.5" style={{ backgroundColor: 'var(--color-accent)' }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              I'm a passionate and driven Machine Learning practitioner with a strong interest in
              Deep Learning, Computer Vision, and Medical Imaging. I enjoy building AI systems that
              solve real-world problems, especially in healthcare and image-based diagnostics.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Over the years, I have worked on multiple end-to-end projects involving medical image
              classification, segmentation, thermography analysis, and computer vision pipelines.
              These projects strengthened my understanding of data preprocessing, model design,
              explainable AI, and deployment workflows.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              I'm continuously learning, experimenting, and improving my skills — focused on
              becoming a highly capable Machine Learning Engineer who can contribute to impactful
              AI-driven solutions.
            </p>

            {/* Education */}
            <div className="pt-4 flex items-start gap-3">
              <div className="p-2 rounded-lg mt-0.5" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                <GraduationCap className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
              </div>
              <div>
                <p className="font-medium text-sm" style={{ color: 'var(--color-text-primary)' }}>B.E. in Computer Science — Artificial Intelligence</p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Maharaja Institute of Technology Mysore · 2022 – 2026</p>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid with count-up */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true, margin: '-40px' }}
                className="p-5 rounded-xl card-hover"
                style={{
                  backgroundColor: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <p className="text-3xl font-bold mb-0.5" style={{ color: 'var(--color-text-primary)' }}>
                  <CountUp end={stat.value} suffix={stat.suffix} />
                  <span className="text-sm font-normal ml-0.5" style={{ color: 'var(--color-text-muted)' }}>{stat.sublabel}</span>
                </p>
                <p className="text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}