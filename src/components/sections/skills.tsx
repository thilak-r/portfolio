import { motion } from 'framer-motion';
import { Bot, Code, Database, BarChart3, Cloud, FileCode } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Machine Learning & AI",
      skills: [
        "PyTorch",
        "Scikit-learn",
        "TensorFlow basics",
        "Model training & fine-tuning",
        "Grad-CAM & explainability",
        "Computer vision (YOLOv8, CNNs)"
      ]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "LLM & Advanced AI",
      skills: [
        "Fine-tuning Llama models with QLoRA",
        "Chain-of-Thought (CoT) prompting",
        "Unsloth framework",
        "Dataset curation & processing"
      ]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Development & Deployment",
      skills: [
        "Flask API development",
        "MongoDB database management",
        "Git version control",
        "REST API design"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Science",
      skills: [
        "Pandas, NumPy",
        "Matplotlib, Seaborn",
        "EDA & data preprocessing",
        "Statistical analysis"
      ]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "MLOps & Cloud (Certified)",
      skills: [
        "Vertex AI (Google Cloud)",
        "Feature Store management",
        "Containerized ML workflows",
        "Model monitoring basics"
      ]
    },
    {
      icon: <FileCode className="h-8 w-8" />,
      title: "Languages",
      skills: [
        "Python",
        "C",
        "JavaScript",
        "TypeScript"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div   style={{ fontFamily:'rubik'}} className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="h-1 w-24 bg-[#00D9FF] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-2xl p-6 transition-colors duration-200 hover:border-[#00D9FF] group"
            >
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#2a2a2a]">
                <div className="bg-[#00D9FF]/10 p-3 rounded-xl border border-[#00D9FF]/20 text-[#00D9FF] transition-all duration-200 group-hover:bg-[#00D9FF]/20">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-[#A855F7] flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}