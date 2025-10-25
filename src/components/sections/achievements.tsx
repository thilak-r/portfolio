import { motion } from 'framer-motion';
import { Trophy, Mic, Globe } from 'lucide-react';

export function AchievementsSection() {
  const achievements = [
    {
      icon: <Trophy className="h-10 w-10" />,
      title: "1st Place - Devpost Hackathon",
      description: "Environmental monitoring and oil spill detection challenge",
      color: "#00D9FF"
    },
    {
      icon: <Mic className="h-10 w-10" />,
      title: "Workshop Facilitator",
      description: "Conducted 2 hands-on Python workshops for 100+ peers on project building and portfolio development",
      color: "#A855F7"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Multilingual Communicator",
      description: "Fluent in English, Kannada, Marathi, and Hindi",
      color: "#00D9FF"
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-[#0a0a0a] ">
      <div   style={{ fontFamily:'rubik'}} className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Achievements & Leadership</h2>
          <div className="h-1 w-24 bg-[#00D9FF] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 hover:border-[#00D9FF] transition-all duration-300 hover:shadow-lg hover:shadow-[#00D9FF]/20 hover:-translate-y-1 text-center"
            >
              <div className="inline-flex items-center justify-center mb-6">
                <div
                  className="p-4 rounded-full"
                  style={{ backgroundColor: `${achievement.color}20`, color: achievement.color }}
                >
                  {achievement.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
              <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
