import { motion } from 'framer-motion';
import { Github, Linkedin, Code, Mail, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { SplineScene } from '@/components/ui/splite';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const roles = [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Problem Solver"
  ];
  
  const [, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left pl-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Hello, I'm Thilak R
            </h1>

            <TypewriterEffect words={roles} className="text-2xl md:text-3xl text-gray-300 mb-8" />

            <p className="text-xl text-gray-400 mb-8 max-w-2xl text-justify">
            I'm a driven Computer Science and Artificial Intelligence student with a strong foundation in software development and a passion for AI, web technologies, and problem-solving.
            </p>

            
            <div className="flex items-center gap-6 mb-12">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/thilak-r"
                target="_blank"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/thilak120/"
                target="_blank"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:thilak22005@gmail.com"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Mail size={24} />
              </motion.a>

              {/* LeetCode link */}
              <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://codolio.com/profile/thilak_r"
                  target="_blank"
                  className="text-gray-400 hover:text-purple-500 transition-colors"
                >
                  {/* Choose any icon from lucide-react, for example <Code />, <Braces />, or <Terminal /> */}
                  <Code size={24} />
                </motion.a>

            </div>
            
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6"
              onClick={() => window.open('https://thilak-r.github.io/portfolio/Thilak-R-Resume.pdf')}
            >
              <FileDown className="mr-2 h-5 w-5" /> Download CV
            </Button>
          </motion.div>

          <div className="relative h-[500px] md:h-[600px] md:block">
            {/* Preload the 3D model with optimized settings */}
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
