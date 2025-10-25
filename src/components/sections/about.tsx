import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Trophy, Users } from 'lucide-react';

export function AboutSection() {
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
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-24 bg-[#00D9FF] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>
                I'm a final-year B.E. student in Computer Science and Artificial Intelligence at
                Visvesvaraya Technological University (CGPA: 9.0/10), graduating in 2026. My expertise
                spans machine learning model development, large language model fine-tuning, and full-stack
                web development.
              </p>
              <p>
                I recently completed a 2-month AI/ML internship at QUALBIZZ SOLUTIONS LLP, where I developed
                prototype algorithms for data classification and designed UI/UX solutions for regulatory
                compliance tools in the pharmaceutical domain.
              </p>
              <p>
                I'm passionate about building intelligent systems that solve real-world problems, with a
                strong foundation in PyTorch, Flask deployment, model explainability, and MLOps practices.
                I thrive in collaborative environments and enjoy sharing knowledge through workshops and
                technical mentorship.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#00D9FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#00D9FF]/20 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-[#00D9FF] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}