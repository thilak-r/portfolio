import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com/thilak-r', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/thilakramalkar', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:thilak22005@gmail.com', icon: Mail, label: 'Email' },
  ];

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Top border accent */}
      <div className="w-full h-px" style={{ backgroundColor: 'var(--color-border)' }} />

      <div className="section-container py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-10">
          {/* Brand column */}
          <div className="space-y-4">
            <a
              href="#home"
              className="text-lg font-bold tracking-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Thilak R
            </a>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Data Scientist at IBM. Specializing in Machine Learning, Deep Learning, and building AI systems that solve real-world problems.
            </p>
          </div>

          {/* Quick Links column */}
          <div className="space-y-4">
            <h4
              className="text-sm font-semibold tracking-wide uppercase"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect column */}
          <div className="space-y-4">
            <h4
              className="text-sm font-semibold tracking-wide uppercase"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Connect
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg transition-all duration-200"
                  style={{
                    color: 'var(--color-text-muted)',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-bg-elevated)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--color-accent)';
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            © {currentYear} Thilak R. All rights reserved.
          </p>
          <p
            className="text-xs flex items-center gap-1.5"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}