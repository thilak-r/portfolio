import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  // 1. Add state for the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // 2. Add useEffect to prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);


  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  // 3. Helper function to close the menu
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-lg py-4 border-b border-[#2a2a2a]/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-1xl font-bold text-white hover:text-[#00D9FF] transition-colors"
            style={{ fontFamily: "" }}
          >
            Thilak R
          </a>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 relative group font-medium ${
                  activeSection === item.href.substring(1) ? 'text-[#00D9FF]' : ''
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D9FF] transition-all duration-300 group-hover:w-full ${
                  activeSection === item.href.substring(1) ? 'w-full' : ''
                }`}></span>
              </a>
            ))}
          </div>

          {/* 4. Update the hamburger button */}
          <button
            className="md:hidden text-white z-50" // z-50 to ensure it's above the menu
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle state
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {/* 5. Conditionally render "X" or "Menu" icon */}
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" // "X" icon
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" // Hamburger icon
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 6. Add the mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#0a0a0a] flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleMobileLinkClick} // Close menu on click
                  className={`text-3xl text-gray-300 hover:text-[#00D9FF] transition-colors duration-300 ${
                    activeSection === item.href.substring(1) ? 'text-[#00D9FF]' : ''
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}