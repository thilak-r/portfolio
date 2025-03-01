import { motion } from 'framer-motion';
import { Code2, Brain, Rocket } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Web Development",
      description: "Experienced in frontend technologies"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & ML",
      description: "Training and deploying machine learning models"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Innovation Driven",
      description: "Leveraging AI tools to increase efficiency"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/95">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">About Me</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-300">
            <p className="mb-6 text-lg text-justify">
              I am Thilak R, a Computer Science and Artificial Intelligence student currently in my sixth semester. With a strong foundation in programming languages like Python, Java, C++, and JavaScript, I specialize in developing machine learning models and full-stack web applications.
            </p>
            <p className="text-lg text-justify">
              My education has equipped me with analytical problem-solving skills and a passion for innovation. In the future, I aim to contribute to groundbreaking advancements in AI and its applications in fields like healthcare, environmental sustainability, and forensic science.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="rotating-icon bg-purple-500/10 rounded-full p-6 mb-4">
                  <div className="text-purple-500">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white text-center mb-2">{item.title}</h3>
                <p className="text-gray-400 text-center text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}