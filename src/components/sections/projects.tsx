import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, TrendingUp } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: "Diabetic Retinopathy Detection System",
      description: "End-to-end deep learning pipeline using ensemble learning (ResNet18, DenseNet121, EfficientNet-B0, ResNeXt50) with Grad-CAM explainability. Integrated Gemini 2.5 Pro for automated diagnostic report generation. Achieved 70% accuracy and 0.73 Cohen's Kappa on external validation.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
      tags: ["PyTorch", "Flask", "Grad-CAM", "Gemini API"],
      metrics: ["70% Accuracy", "0.73 Kappa Score"],
      link: "https://github.com/thilak-r/Diabetic-Retinopathy-Detection"
    },
    {
      title: "Real-Time Forest Fire Detection",
      description: "YOLOv8-based computer vision system trained on 1,722 annotated images. Deployed with Flask and OpenCV for live camera feed inference. Features rule-based alerting for immediate fire detection notifications.",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800",
      tags: ["YOLOv8", "Flask", "OpenCV", "Python"],
      metrics: ["85.6% mAP@0.5", "53.7% mAP@0.5:0.95"],
      link: "https://github.com/thilak-r/oil-spill-detection-AI"
    },
    {
      title: "More than 10+ ML Projects",
      description: "Extensive portfolio of machine learning projects spanning computer vision, NLP, and data science. Projects include image classification, object detection, sentiment analysis, and predictive modeling using state-of-the-art frameworks and algorithms.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800",
      tags: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
      link: "https://github.com/thilak-r"
    }
  ];

  const websites = [
    {
      title: "Ekvion AI",
      url: "https://www.insightbridge.co.in/",
      tags: ["React", "Tailwind", "Google OAuth", "Supabase"]
    },
    {
      title: "Techtatva 2025",
      url: "https://ekvion-event.netlify.app/",
      tags: ["React", "Tailwind"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black">
      <div style={{ fontFamily:'rubik'}} className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 mb-6">Building intelligent solutions with real-world impact</p>
          <div className="h-1 w-24 bg-[#00D9FF] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a]/40 backdrop-blur-xl border-2 border-[#2a2a2a]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00D9FF]/50 hover:shadow-[0_0_30px_rgba(0,217,255,0.15)] group flex flex-col"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
                {project.metrics && (
                  <div className="absolute top-4 left-4 bg-[#00D9FF]/90 backdrop-blur-sm text-black px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 shadow-lg">
                    <Award className="h-3 w-3" />
                    High Performance
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-[#00D9FF]">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {project.metrics && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}   
                        className="px-3 py-1.5 bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] rounded-lg text-xs font-semibold flex items-center gap-1.5"
                      >
                        <TrendingUp className="h-3 w-3" />
                        {metric}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2a2a2a]">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx} 
                      style={{ borderRadius: '5px' }}
                      className="px-3 py-1.5 bg-[#A855F7]/10 border border-[#A855F7]/20 text-[#A855F7] rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    size="sm" 
                    style={{ borderRadius: '5px' }}
                    className="w-full bg-[#00D9FF] hover:bg-[#00D9FF]/80 text-black transition-all duration-200 font-semibold rounded-lg border-2 border-transparent hover:border-[#00D9FF]"
                    onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Click Here to View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Websites Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-[#1a1a1a]/40 backdrop-blur-xl border border-[#2a2a2a]/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-[#A855F7]">●</span> Built Websites
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {websites.map((site, index) => (
                <div
                  key={index}
                  className="bg-[#0a0a0a]/50 border border-[#2a2a2a]/50 rounded-lg p-4 hover:border-[#A855F7]/30 transition-all duration-200 group cursor-pointer"
                  onClick={() => window.open(site.url, '_blank', 'noopener,noreferrer')}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-base font-semibold text-white group-hover:text-[#A855F7] transition-colors">
                      {site.title}
                    </h4>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#A855F7] transition-colors flex-shrink-0" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {site.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#A855F7]/10 text-[#A855F7] rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}