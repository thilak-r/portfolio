import { motion } from 'framer-motion';
import { Bot, BarChart3, Cloud, FileCode, Cpu, Container } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      icon: <Cpu className="w-5 h-5" />,
      title: 'LLM & Agentic AI',
      skills: ['LLM Fine-tuning & Prompting (OpenAI, Claude, Llama)', 'LangChain & LlamaIndex', 'RAG Systems', 'Vector DBs (Pinecone, Weaviate, Chroma)', 'Agentic Workflows & Multi-Agent Systems', 'Function Calling & Tool Use'],
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: 'Quantum Computing',
      skills: ['Qiskit (IBM Quantum)', 'Quantum Algorithms & Circuits', 'Quantum Machine Learning', 'IBM Quantum Experience'],
    },
    {
      icon: <Container className="w-5 h-5" />,
      title: 'SRE/MLOps Stack',
      skills: ['Kubernetes & Docker', 'Prometheus & Grafana', 'CI/CD (Jenkins, GitLab CI)', 'Infrastructure as Code (Terraform)', 'Model Deployment & Monitoring'],
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: 'Cloud & DevOps',
      skills: ['IBM Cloud', 'AWS / Azure / GCP', 'MLflow & Kubeflow', 'Site Reliability Engineering'],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: 'Data Science & ML',
      skills: ['PyTorch & TensorFlow', 'Computer Vision (CNNs, YOLO)', 'Pandas, NumPy, Scikit-learn', 'EDA & Statistical Analysis'],
    },
    {
      icon: <FileCode className="w-5 h-5" />,
      title: 'Core Development',
      skills: ['Python', 'C / C++', 'JavaScript & TypeScript', 'React', 'Flask & REST APIs', 'Git'],
    },
  ];

  return (
    <section id="skills" className="py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <p className="text-sm font-medium mb-2 tracking-wide uppercase" style={{ color: 'var(--color-accent)' }}>Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Technical expertise</h2>
          <div className="w-12 h-0.5" style={{ backgroundColor: 'var(--color-accent)' }} />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true, margin: '-60px' }}
              className="p-6 rounded-xl card-hover group"
              style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}
            >
              <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                <div
                  className="p-2 rounded-lg transition-colors duration-200"
                  style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', color: 'var(--color-accent)' }}
                >
                  {category.icon}
                </div>
                <h3 className="text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.04 + idx * 0.03 }}
                    viewport={{ once: true }}
                    className="px-2.5 py-1 text-xs font-medium rounded-md cursor-default transition-colors duration-200"
                    style={{
                      backgroundColor: 'var(--color-bg-card)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-secondary)',
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}