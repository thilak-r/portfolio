import { motion } from 'framer-motion';
import { Trophy, Mic, Globe } from 'lucide-react';

export function AchievementsSection() {
  const achievements = [
    { icon: <Trophy className="w-5 h-5" />, title: '1st Place — Devpost Hackathon', description: 'Won the environmental monitoring and oil spill detection challenge with an innovative AI-powered solution.' },
    { icon: <Mic className="w-5 h-5" />, title: 'Workshop Facilitator', description: 'Conducted 2 hands-on Python workshops for 100+ peers covering project building and portfolio development.' },
    { icon: <Globe className="w-5 h-5" />, title: 'Multilingual Communicator', description: 'Fluent in English, Kannada, Marathi, and Hindi — enabling effective cross-cultural collaboration.' },
  ];

  return (
    <section id="achievements" className="py-24" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <p className="text-sm font-medium mb-2 tracking-wide uppercase" style={{ color: 'var(--color-accent)' }}>Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Beyond the code</h2>
          <div className="w-12 h-0.5" style={{ backgroundColor: 'var(--color-accent)' }} />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-60px' }}
              className="p-6 rounded-xl card-hover text-center"
              style={{ backgroundColor: 'var(--color-bg-elevated)', border: '1px solid var(--color-border)' }}
            >
              <div className="inline-flex items-center justify-center mb-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)', color: 'var(--color-accent)' }}>
                  {item.icon}
                </div>
              </div>
              <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
