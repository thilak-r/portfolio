import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Trophy, Users, Github, Code2, GitCommit, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export function AboutSection() {
  const [githubStats, setGithubStats] = useState({
    totalContributions: 0,
    stars: 0,
    repos: 0
  });

  useEffect(() => {
    fetch('https://api.github.com/users/thilak-r')
      .then(res => res.json())
      .then(data => {
        setGithubStats({
          totalContributions: 708,
          stars: 21,
          repos: data.public_repos
        });
      })
      .catch(err => console.error('Error fetching GitHub data:', err));
  }, []);

  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education",
      description: "B.E. in CSE-AI, VTU (9.0 CGPA)"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Experience",
      description: "AI/ML Intern at QUALBIZZ SOLUTIONS"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Achievement",
      description: "1st Place - Environmental Monitoring Hackathon"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Leadership",
      description: "Conducted 2 Python workshops for 100+ students"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div style={{ fontFamily: 'rubik' }} className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-rubik text-white mb-4">About Me</h2>
          <div className="h-1 w-24 bg-[#00D9FF] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Bio Text (Takes 2 columns) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Bio Card */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8">
              <div className="space-y-5 text-gray-300 text-base leading-relaxed">
                <p className="text-justify">
                  I'm a final-year B.E. student in Computer Science and Artificial Intelligence at
                  Visvesvaraya Technological University (CGPA: 9.0/10), graduating in 2026. My expertise
                  spans machine learning model development, large language model fine-tuning, and full-stack
                  web development.
                </p>
                <p className="text-justify">
                  I recently completed a 2-month AI/ML internship at QUALBIZZ SOLUTIONS LLP, where I developed
                  prototype algorithms for data classification and designed UI/UX solutions for regulatory
                  compliance tools in the pharmaceutical domain.
                </p>
                <p className="text-justify">
                  I'm passionate about building intelligent systems that solve real-world problems, with a
                  strong foundation in PyTorch, Flask deployment, model explainability, and MLOps practices.
                  I thrive in collaborative environments and enjoy sharing knowledge through workshops and
                  technical mentorship.
                </p>
              </div>
            </div>

            {/* GitHub Stats Section - Below Bio */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#00D9FF]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Github className="h-6 w-6 text-[#00D9FF]" />
                <div>
                  <h3 className="text-xl font-semibold text-white">GitHub Activity</h3>
                </div>
              </div>
             
              {/* GitHub Stats Row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-3 text-center">
                  <GitCommit className="h-5 w-5 text-[#00D9FF] mx-auto mb-2" />
                  <div className="text-xl font-bold text-[#00D9FF]">{githubStats.totalContributions}+</div>
                  <div className="text-xs text-gray-400 mt-1">Contributions</div>
                </div>
                <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-3 text-center">
                  <Star className="h-5 w-5 text-[#A855F7] mx-auto mb-2" />
                  <div className="text-xl font-bold text-[#A855F7]">{githubStats.stars}</div>
                  <div className="text-xs text-gray-400 mt-1">Stars</div>
                </div>
                <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-3 text-center">
                  <Github className="h-5 w-5 text-[#00D9FF] mx-auto mb-2" />
                  <div className="text-xl font-bold text-[#00D9FF]">{githubStats.repos}</div>
                  <div className="text-xs text-gray-400 mt-1">Repos</div>
                </div>
              </div>

              {/* GitHub Contribution Graph */}
              <div className="relative overflow-hidden rounded-xl bg-[#0d1117] p-4 border border-[#2a2a2a]">
                <img
                  src="https://ghchart.rshah.org/00C647/thilak-r"
                  alt="GitHub Contribution Chart"
                  className="w-full h-auto"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights (Takes 1 column) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-1"
          >
            <div className="grid grid-cols-1 gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#00D9FF] transition-all duration-300"
                >
                  <div className="text-[#00D9FF] mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}