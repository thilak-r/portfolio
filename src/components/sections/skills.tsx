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
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="h-1 w-24 bg-[#00D9FF] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#00D9FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#00D9FF]/20 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-[#00D9FF]">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}