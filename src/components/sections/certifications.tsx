import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle2, BookOpen } from 'lucide-react';

export function CertificationsSection() {
  const certifications = [
    {
      title: "IBM Machine Learning Professional Certificate",
      issuer: "IBM via Coursera",
      topics: "Supervised/Unsupervised Learning, Deep Learning, Reinforcement Learning, Capstone",
      verifyLink: "https://coursera.org/verify/professional-cert/1FZ0G6HFBOPH"
    },
    {
      title: "MLOps with Vertex AI",
      issuer: "Coursera (Google Cloud)",
      topics: "Feature Store, Containerized ML workflows, Scalable training/inference",
      verifyLink: "https://coursera.org/verify/ZDIE5VQ4NBI9"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-black ">
      <div   style={{ fontFamily:'rubik'}} className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Certifications</h2>
          <div className="h-1 w-24 bg-[#00D9FF] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-2xl p-8 transition-colors duration-200 hover:border-[#00D9FF]"
            >
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#2a2a2a]">
              <div className="bg-[#FFD700]/10 p-3 rounded-xl border border-[#FFD700]/20">
  <Award className="h-7 w-7 text-[#FFD700]" />
</div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                  <p className="text-[#A855F7] font-medium text-sm">{cert.issuer}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-start gap-2 mb-3">
                  <BookOpen className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-medium text-gray-400">Topics Covered</p>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {cert.topics}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#2a2a2a]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-xs text-gray-400 font-medium">Verified</span>
                </div>
                
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D9FF] text-black text-sm font-semibold rounded-lg transition-colors duration-200 hover:bg-[#00B8D4]"
                >
                  View Certificate
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}