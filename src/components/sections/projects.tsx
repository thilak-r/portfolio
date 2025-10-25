import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Lock } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: "PyLlama 3.1 1B - Python Code Generation",
      description: "Fine-tuned Llama 3.1 1B model on custom Chain-of-Thought dataset for Python code generation. Implemented QLoRA and Unsloth for efficient training. Deployed locally via Flask API for real-time inference.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800",
      tags: ["PyTorch", "Unsloth", "QLoRA", "Flask", "Transformers"],
      isPrivate: true,
      code: "#",
      demo: "#"
    },
    {
      title: "Diabetic Retinopathy Detection System",
      description: "End-to-end deep learning pipeline using ensemble learning (ResNet18, DenseNet121, EfficientNet-B0, ResNeXt50) with Grad-CAM explainability. Integrated Gemini 2.5 Pro for automated diagnostic report generation. Achieved 70% accuracy and 0.73 Cohen's Kappa on external validation.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
      tags: ["PyTorch", "Flask", "Grad-CAM", "Gemini API"],
      metrics: ["70% Accuracy", "0.73 Kappa Score"],
      code: "https://github.com/thilak-r/Diabetic-Retinopathy-Detection",
      demo: "https://diabetic-retinopathy-detection-robb.onrender.com"
    },
    {
      title: "Real-Time Forest Fire Detection",
      description: "YOLOv8-based computer vision system trained on 1,722 annotated images. Deployed with Flask and OpenCV for live camera feed inference. Features rule-based alerting for immediate fire detection notifications.",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800",
      tags: ["YOLOv8", "Flask", "OpenCV", "Python"],
      metrics: ["85.6% mAP@0.5", "53.7% mAP@0.5:0.95"],
      code: "https://github.com/thilak-r/oil-spill-detection-AI",
      demo: "https://oil-spill-detector.onrender.com"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400 mb-6">Building intelligent solutions with real-world impact</p>
          <div className="h-1 w-24 bg-[#00D9FF] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#00D9FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#00D9FF]/20 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
                {project.isPrivate && (
                  <div className="absolute top-4 right-4 bg-[#A855F7] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
                    <Lock className="h-3 w-3" />
                    Private
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-[#00D9FF] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {project.metrics && (
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] rounded-lg text-xs font-semibold"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#A855F7]/10 text-[#A855F7] rounded-lg text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-[#00D9FF] text-[#00D9FF] hover:bg-[#00D9FF] hover:text-black transition-all duration-300"
                    onClick={() => window.open(project.code, '_blank', 'noopener,noreferrer')}
                    disabled={project.isPrivate}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {project.isPrivate ? 'Private' : 'GitHub'}
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-[#A855F7] hover:bg-[#A855F7]/80 text-white transition-all duration-300"
                    onClick={() => window.open(project.demo, '_blank', 'noopener,noreferrer')}
                    disabled={project.isPrivate}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.isPrivate ? 'N/A' : 'Demo'}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}