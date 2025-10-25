import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

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
    technologies: ["Python", "Scikit-learn", "Pandas", "UI/UX Design"],
    certificateLink: "https://drive.google.com/file/d/1ywj5E8LWt97Nd3ViskVAQSCR9zhR5xZ7/view?usp=sharing"
  };

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div   style={{ fontFamily:'rubik'}} className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="h-1 w-24 bg-[#00D9FF] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00D9FF] rounded-full hidden md:block"></div>

            <div className="md:ml-12 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-2xl p-8 transition-colors duration-200 hover:border-[#00D9FF]">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#00D9FF]/10 p-3 rounded-xl border border-[#00D9FF]/20">
                  <Briefcase className="h-6 w-6 text-[#00D9FF]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{experience.role}</h3>
                  <p className="text-xl text-[#00D9FF] font-semibold mb-3">{experience.company}</p>

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

              <div className="space-y-4 mb-6">
                <h4 className="text-lg font-semibold text-white">Key Responsibilities:</h4>
                <ul className="space-y-3">
                  {experience.responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-300 leading-relaxed"
                    >
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-[#A855F7] flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#2a2a2a]">
                <p className="text-sm font-medium text-gray-400 mb-3">Technologies Used:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      style={{ borderRadius: '10px' }}
                      className="px-4 py-2 bg-[#A855F7]/10 border border-[#A855F7]/30 text-[#A855F7] rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={experience.certificateLink}
                  target="_blank"
                  style={{ borderRadius: '10px' }}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D9FF] text-black !font-semibold rounded-lg transition-all duration-200 hover:bg-[#00B8D4] hover:shadow-lg hover:shadow-[#00D9FF]/30"
                >
                  View Certificate
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}