import { motion } from 'framer-motion';
import { Code2, Brain, Rocket } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8 text-purple-400" />,
      title: "Full Stack Solutions",
      description: "Designing end-to-end systems across front-end and back-end."
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-400" />,
      title: "AI & ML",
      description: "Training and deploying machine learning models"
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-400" />,
      title: "Innovation Driven",
      description: "Leveraging AI tools to increase efficiency"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/95">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col max-w-4xl mx-auto">
          <div className="text-gray-300 text-lg mb-16">
          <p className="mb-6 text-justify">
  I am a Computer Science and Artificial Intelligence student currently in my sixth semester, with a strong focus on Machine Learning, Deep Learning, and MLOps. I have honed my skills in Python, C, and PHP, which I utilize to develop and deploy intelligent systems and data-driven solutions.
</p>
<p className="text-justify">
  My academic and project experience has sharpened my analytical abilities and ignited a passion for leveraging cutting-edge technologies to solve complex problems. I am dedicated to advancing my expertise in ML, DL, and MLOps, and I aspire to contribute to innovative projects that transform industries through automation and intelligent insights.
</p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="rotating-icon bg-purple-500/10 rounded-full p-6 mb-4 hover:bg-purple-500/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}