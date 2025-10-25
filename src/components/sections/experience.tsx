import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function ExperienceSection() {
  const experience = {
    company: "QUALBIZZ SOLUTIONS LLP",
    role: "AI/ML Intern",
    duration: "July 2025 - September 2025 (2 months)",
    location: "Mysuru, Karnataka",
    responsibilities: [
      "Developed prototype algorithms for pharmaceutical data classification using Python",
      "Designed UI/UX mockups for regulatory compliance tools",
      "Collaborated with cross-functional teams on AI solution development",
      "Applied ML techniques to automate regulatory data processing workflows"
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "UI/UX Design"]
  };

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="h-1 w-24 bg-[#00D9FF] mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00D9FF] hidden md:block"></div>

            <div className="md:ml-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 hover:border-[#00D9FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#00D9FF]/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#00D9FF]/10 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-[#00D9FF]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{experience.role}</h3>
                  <p className="text-xl text-[#00D9FF] mb-3">{experience.company}</p>

                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Key Responsibilities:</h4>
                <ul className="space-y-3">
                  {experience.responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-[#A855F7] flex-shrink-0"></div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-[#2a2a2a]">
                <p className="text-sm text-gray-400 mb-3">Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-[#A855F7]/10 border border-[#A855F7]/30 text-[#A855F7] rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
