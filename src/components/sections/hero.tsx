import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Mail, FileDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-[#0a0a0a]">
      {/* Key Changes:
        1. Changed `h-screen` to `min-h-screen` to prevent content overflow on tall mobile screens.
        2. Added `pt-24 pb-12 md:pt-0 md:pb-0` to give space at the top/bottom on mobile, 
           while letting `items-center` handle desktop vertical centering.
      */}
      <div className="container mx-auto px-6 max-w-7xl min-h-screen flex items-center pt-24 pb-12 md:pt-0 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            // Key Change: Center text on mobile, left-align on desktop.
            className="text-center md:text-left space-y-6"
          >
            <motion.h1
              // Key Change: Reduced base font size for small screens
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
               style={{ fontFamily: 'Bahnschrift' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hello, I'm <span className="text-[#00D9FF]">Thilak R</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-3xl font-semibold text-[#A855F7]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ fontFamily: 'Bahnschrift' }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-Stack AI/ML Engineer
            </motion.h2>

            <motion.p
              // Key Change: Reduced base font size for small screens
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ fontFamily: 'Rubik' }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Final-year Computer Science & AI student specializing in machine learning,
              LLM fine-tuning, and end-to-end AI system development. Experienced in building
              production-ready models and deploying intelligent solutions.
            </motion.p>

            <motion.div
              // Key Change: Center buttons on mobile, left-align on desktop
              className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                style={{ borderRadius: '10px', fontFamily: 'Bahnschrift' }}
                className="bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00D9FF]/50"
                onClick={() => window.open('https://thilak-r.github.io/portfolio/Thilak-R-Resume.pdf')}
              >
                <FileDown className="mr-2 h-5 w-5" /> Download Resume
              </Button>

              <Button
                size="lg"
                variant="outline"
                style={{ borderRadius: '10px', fontFamily: 'Bahnschrift' }}
                className="border-2 border-[#A855F7] text-[#A855F7] hover:bg-[#A855F7] hover:text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                onClick={scrollToProjects}
              >
                View Projects <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              // Key Change: Center icons on mobile, left-align on desktop
              className="flex items-center gap-6 pt-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/thilak-r"
                target="_blank"
                className="text-gray-400 hover:text-[#00D9FF] transition-colors duration-300"
              >
                <Github size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/thilak120/"
                target="_blank"
                className="text-gray-400 hover:text-[#00D9FF] transition-colors duration-300"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:thilak22005@gmail.com"
                className="text-gray-400 hover:text-[#00D9FF] transition-colors duration-300"
              >
                <Mail size={28} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            // Key Changes:
            // 1. Removed restrictive heights (`h-[400px] md:h-[600px]`).
            // 2. Center-align image on mobile (`justify-center`), end-align on desktop (`md:justify-end`).
            // 3. Removed mobile-specific padding (`pr-8`).
            // 4. Added margin-top on mobile (`mt-12`) for separation, removed on desktop (`md:mt-0`).
            className="relative flex items-center justify-center md:justify-end mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              // Key Change: Responsive width/height for the image.
              className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="thilak.png"
                alt="Thilak R"
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}