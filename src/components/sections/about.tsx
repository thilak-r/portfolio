import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Trophy, Users } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export function AboutSection() {
  const highlights = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Education",
      description: "B.E. in CSE-AI, VTU (9.0 CGPA)"
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Experience",
      description: "AI/ML Intern at QUALBIZZ SOLUTIONS"
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      title: "Achievement",
      description: "1st Place - Environmental Monitoring Hackathon"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Leadership",
      description: "Conducted 2 Python workshops for 100+ students"
    }
  ];

  return (
    <section id="about" className="py-24 bg-black">
      <div style={{ fontFamily: 'rubik' }} className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-rubik text-white mb-4">About Me</h2>
          <div className="h-1 w-24 bg-[#00D9FF] mx-auto"></div>
        </motion.div>

        {/* Bento Grid */}
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-4 lg:gap-4">
          {/* Bio Card - Large spanning card */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="min-h-[20rem] list-none md:[grid-area:1/1/5/8]"
          >
            <div className="relative h-full rounded-2xl border border-[#1a1a1a] p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-[#0a0a0a] p-6 md:p-8 shadow-[0px_0px_27px_0px_#1a1a1a]">
                <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
                  <p className="text-justify">
                    I'm a final-year B.E. student in Computer Science and Artificial Intelligence at
                    Visvesvaraya Technological University (CGPA: 9.0/10), graduating in 2026. My expertise
                    spans machine learning model development, large language model fine-tuning, and full-stack
                    web development.
                  </p>
                  <p className="text-justify">
                    I recently completed a 2-month AI/ML internship at QUALBIZZ SOLUTIONS LLP, where I developed
                    prototype algorithms for data classification and designed UI/UX solutions for regulatory
                    compliance tools in the pharmaceutical domain.
                  </p>
                  <p className="text-justify">
                    I'm passionate about building intelligent systems that solve real-world problems, with a
                    strong foundation in PyTorch, Flask deployment, model explainability, and MLOps practices.
                    I thrive in collaborative environments and enjoy sharing knowledge through workshops and
                    technical mentorship.
                  </p>
                </div>
              </div>
            </div>
          </motion.li>

          {/* Education Card */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="min-h-[14rem] list-none md:[grid-area:1/8/3/13]"
          >
            <div className="relative h-full rounded-2xl border border-[#1a1a1a] p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-[#0a0a0a] p-6 shadow-[0px_0px_27px_0px_#1a1a1a]">
                <div className="relative flex flex-1 flex-col justify-between gap-3">
                  <div className="w-fit rounded-lg border border-[#2a2a2a] p-2 bg-[#0f0f0f]">
                    <GraduationCap className="h-5 w-5 text-[#00D9FF]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-sans text-xl md:text-2xl font-semibold text-white">
                      {highlights[0].title}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-gray-400">
                      {highlights[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.li>

          {/* Experience Card */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="min-h-[14rem] list-none md:[grid-area:3/8/5/13]"
          >
            <div className="relative h-full rounded-2xl border border-[#1a1a1a] p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-[#0a0a0a] p-6 shadow-[0px_0px_27px_0px_#1a1a1a]">
                <div className="relative flex flex-1 flex-col justify-between gap-3">
                  <div className="w-fit rounded-lg border border-[#2a2a2a] p-2 bg-[#0f0f0f]">
                    <Briefcase className="h-5 w-5 text-[#00D9FF]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-sans text-xl md:text-2xl font-semibold text-white">
                      {highlights[1].title}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-gray-400">
                      {highlights[1].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.li>

          {/* Achievement Card */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="min-h-[14rem] list-none md:[grid-area:5/1/7/7]"
          >
            <div className="relative h-full rounded-2xl border border-[#1a1a1a] p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-[#0a0a0a] p-6 shadow-[0px_0px_27px_0px_#1a1a1a]">
                <div className="relative flex flex-1 flex-col justify-between gap-3">
                  <div className="w-fit rounded-lg border border-[#2a2a2a] p-2 bg-[#0f0f0f]">
                    <Trophy className="h-5 w-5 text-[#00D9FF]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-sans text-xl md:text-2xl font-semibold text-white">
                      {highlights[2].title}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-gray-400">
                      {highlights[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.li>

          {/* Leadership Card */}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="min-h-[14rem] list-none md:[grid-area:5/7/7/13]"
          >
            <div className="relative h-full rounded-2xl border border-[#1a1a1a] p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-[#0a0a0a] p-6 shadow-[0px_0px_27px_0px_#1a1a1a]">
                <div className="relative flex flex-1 flex-col justify-between gap-3">
                  <div className="w-fit rounded-lg border border-[#2a2a2a] p-2 bg-[#0f0f0f]">
                    <Users className="h-5 w-5 text-[#00D9FF]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-sans text-xl md:text-2xl font-semibold text-white">
                      {highlights[3].title}
                    </h3>
                    <p className="font-sans text-sm md:text-base text-gray-400">
                      {highlights[3].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}