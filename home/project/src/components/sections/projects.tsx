import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  const projects = [
    {
      title: "Glaucoma Detection",
      description: "Detecting glaucoma at early stages using ML for OCT/Fundus scans",
      image: "https://raw.githubusercontent.com/ThilakAmalkar/images/main/bg/glaucoma.jpg?height=400&width=600",
      tags: ["Python", "TensorFlow", "Flask"],
      code: "https://github.com/thilak-r/mini-project",
      link: "https://glaucoma-detection-f6xy.onrender.com/",
    },
    {
      title: "Bone Fracture Detection",
      description: "Deep learning-based system designed to detect bone fractures from X-ray images",
      image: "https://raw.githubusercontent.com/ThilakAmalkar/images/main/bg/bone.jpg?height=400&width=600",
      tags: ["Python", "Flask", "PyTorch"],
      code: "https://github.com/thilak-r/Bone-fracture-detection",
      link: "https://bone-fracture-detection-ukew.onrender.com/",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website with modern UI effects",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800",
      tags: ["TypeScript", "Tailwind CSS", "HTML"],
      code: "https://github.com/thilak-r/portfolio",
      link: "https://example.com/portfolio",
    },
    {
      title: "Oil spill detection",
      description: "Identifies oil spills in uploaded images using a pre-trained ResNet-18 model.",
      image: "https://res.cloudinary.com/dwxbt2t4q/image/upload/v1740309098/oil-spill-with-radar-corrected-full-e1578990505511-1200x801-1_xhfhcm.png?height=400&width=600",
      tags: ["OpenCV", "Tensorflow", "Python"],
      code: "https://github.com/thilak-r/oil-spill-detection-AI",
      link: "https://oil-spill-detector.onrender.com/",
    },
    {
      title: "Liver Fibrosis Detection",
      description: "Identifies liver fibrosis stages (F0–F4) using a fine-tuned ResNet-18 Model",
      image: "https://res.cloudinary.com/dwxbt2t4q/image/upload/v1740309036/images_ftgiwg.jpg?height=400&width=600",
      tags: ["Python", "Flask", "PyTorch"],
      code: "https://github.com/thilak-r/liver-fabrosis-detection",
      link: "https://liver-fabrosis-detection.onrender.com",
    },
    {
      title: "Diabetic Retinopathy Detection",
      description: "This AI system classifies diabetic retinopathy stages using a fine-tuned ResNet-18 model.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
      tags: ["Python", "Flask", "PyTorch"],
      code: "https://github.com/thilak-r/Diabetic-Retinopathy-Detection",
      link: "https://diabetic-retinopathy-detection-robb.onrender.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black/95">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Projects</h2>
          <p className="text-gray-400 mb-4">Some of my recent work</p>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-gray-900/50">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                    onClick={() => window.open(project.link)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                    onClick={() => window.open(project.code)}
                  >
                    <Code className="w-4 h-4 mr-2" /> Code
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-justify">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-purple-500/10 text-purple-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}