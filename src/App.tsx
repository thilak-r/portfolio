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
import { ScrollProgress } from '@/components/ui/scroll-progress';

function App() {
  return (
    <div>
      <ScrollProgress />
      <Navigation />
      <main>
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
    </div>
  );
}

export default App;
