import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 300;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleMobileLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}
    >
      <div className="section-container">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${isScrolled
              ? 'backdrop-blur-xl rounded-2xl px-8 py-3'
              : ''
            }`}
          style={isScrolled ? {
            backgroundColor: 'var(--nav-bg)',
            border: '1px solid var(--color-border)',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
          } : undefined}
        >
          <a
            href="#home"
            className="text-sm font-semibold tracking-tight transition-colors duration-200"
            style={{ color: 'var(--color-text-primary)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-text-primary)')}
          >
            Thilak R
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-[13px] font-medium rounded-full transition-all duration-200"
                style={{
                  color: activeSection === item.href.substring(1) ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                  backgroundColor: activeSection === item.href.substring(1) ? 'var(--color-border)' : 'transparent',
                }}
                onMouseEnter={e => {
                  if (activeSection !== item.href.substring(1)) e.currentTarget.style.color = 'var(--color-text-primary)';
                }}
                onMouseLeave={e => {
                  if (activeSection !== item.href.substring(1)) e.currentTarget.style.color = 'var(--color-text-secondary)';
                }}
              >
                {item.label}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-2 p-2 rounded-full transition-all duration-200"
              style={{
                color: 'var(--color-text-muted)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--color-text-primary)';
                e.currentTarget.style.backgroundColor = 'var(--color-border)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--color-text-muted)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 z-50"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              className="z-50 p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              style={{ color: 'var(--color-text-primary)' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 backdrop-blur-xl flex items-center justify-center md:hidden"
            style={{ backgroundColor: 'var(--color-bg)' }}
          >
            <div className="flex flex-col items-center gap-6">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={handleMobileLinkClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl font-medium transition-colors duration-200"
                  style={{
                    color: activeSection === item.href.substring(1) ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}