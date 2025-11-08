import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Mail, FileDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Lightning from '@/components/Lightning';

export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-black min-h-screen relative overflow-hidden">
      {/* Lightning Background - Subtle and less intense */}
      <div style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0,
        zIndex: 0,
        opacity: 0.5
      }}>
        <Lightning
          xOffset={1.4}
          speed={0.5}
          intensity={0.9}
         
        />
      </div>
     
      <div className="container mx-auto px-6 max-w-7xl min-h-screen flex items-center pt-24 pb-12 md:pt-0 md:pb-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-6"
          >
       
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white"
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
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ fontFamily: 'Rubik' }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Final-year Computer Science & AI student specializing in machine learning,
              Deep learning, and end-to-end AI system development. Experienced in building
              production-ready models and deploying intelligent solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                style={{ borderRadius: '10px', fontFamily: 'Bahnschrift' }}
                className="bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-semibold px-8 py-5 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00D9FF]/50"
                onClick={() => window.open('https://thilak-r.github.io/portfolio/Thilak-R-Resume.pdf')}
              >
                <FileDown className="mr-2 h-5 w-5" /> Download Resume
              </Button>

              <Button
                size="lg"
                style={{ borderRadius: '10px', fontFamily: 'Bahnschrift' }}
                className="bg-[#00D9FF] hover:bg-[#00B8D4] text-black font-semibold px-8 py-5 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00D9FF]/50"
                onClick={() => window.location.href = '#contact'}
              >
                Hire Me
              </Button>
            </motion.div>

            <motion.div
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
            className="relative flex items-center justify-center md:justify-end mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
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