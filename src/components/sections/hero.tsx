import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, FileDown, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

import { SplineScene } from '@/components/ui/SplineScene';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const splineY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen relative flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >

      <div className="section-container relative z-10 w-full py-24 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center md:text-left space-y-8 order-2 md:order-1"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mx-auto md:mx-0"
              style={{
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg-elevated)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span
                className="text-xs font-medium tracking-wide"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Data Scientist @ IBM (SRE Developer team)
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight"
                style={{
                  color: 'var(--color-text-secondary)',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                Hi, I'm
              </div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] flex justify-center md:justify-start items-center"
                style={{
                  color: 'var(--color-accent)',
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {"Thilak R".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, display: 'none' }}
                    animate={{ opacity: 1, display: 'inline' }}
                    transition={{ duration: 0.05, delay: 0.5 + index * 0.1 }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                  className="inline-block w-[3px] sm:w-[5px] h-[0.9em] ml-2"
                  style={{ backgroundColor: 'var(--color-text-primary)' }}
                />
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{
                color: 'var(--color-text-secondary)',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Data Scientist at IBM working in the SRE Developer team. My core focus areas include LLM fine-tuning, Agentic AI development, and Quantum Computing research. Building the next generation of intelligent and scalable systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="https://thilak-r.github.io/portfolio/Thilak-R-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-white text-sm font-semibold rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: '0 4px 16px rgba(59, 130, 246, 0.2)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.35)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(59, 130, 246, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FileDown className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold rounded-xl transition-all duration-300 relative overflow-hidden"
                style={{
                  border: '1.5px solid var(--color-border)',
                  color: 'var(--color-text-primary)',
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: 'var(--color-bg)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)';
                  e.currentTarget.style.backgroundColor = 'var(--color-bg-elevated)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(59, 130, 246, 0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.backgroundColor = 'var(--color-bg)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4 pt-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              {[
                { href: 'https://github.com/thilak-r', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/thilakramalkar', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:thilak22005@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group p-3 rounded-xl transition-all duration-300"
                  style={{
                    color: 'var(--color-text-muted)',
                    border: '1px solid transparent',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--color-accent)';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.backgroundColor = 'var(--color-bg-elevated)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Spline Scene — hidden on mobile for performance */}
          <motion.div
            className="hidden md:flex justify-center md:justify-end order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ y: splineY }}
          >
            <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] relative">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}