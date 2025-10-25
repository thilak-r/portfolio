import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ExperienceSection } from '@/components/sections/experience';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { CertificationsSection } from '@/components/sections/certifications';
import { AchievementsSection } from '@/components/sections/achievements';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { MagicCursor } from '@/components/ui/magic-cursor';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { Toaster } from '@/components/ui/toaster';

import('@splinetool/runtime');

function App() {
  return (
    <div >
      {/* <MagicCursor /> */}
      <ScrollProgress />
      <Navigation />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </main>
      <Toaster />
    </div>
  );
}

export default App;
