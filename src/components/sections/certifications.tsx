import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function CertificationsSection() {
  const certifications = [
    {
      title: "IBM Machine Learning Professional Certificate",
      issuer: "IBM via Coursera",
      topics: "Supervised/Unsupervised Learning, Deep Learning, Reinforcement Learning, Capstone",
      logo: "IBM"
    },
    {
      title: "MLOps with Vertex AI",
      issuer: "Coursera (Google Cloud)",
      topics: "Feature Store, Containerized ML workflows, Scalable training/inference",
      logo: "Google Cloud"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
          <div className="h-1 w-24 bg-[#00D9FF] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 hover:border-[#00D9FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#00D9FF]/20 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#00D9FF]/10 p-3 rounded-lg">
                  <Award className="h-8 w-8 text-[#00D9FF]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-[#A855F7] font-semibold mb-3">{cert.issuer}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <span className="text-gray-300 font-semibold">Topics Covered: </span>
                  {cert.topics}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
