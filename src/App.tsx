import { Suspense, lazy } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { ProjectsSection } from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { MagicCursor } from '@/components/ui/magic-cursor';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { Toaster } from '@/components/ui/toaster';

// Preload the Spline runtime
import('@splinetool/runtime');

function App() {
  return (
    <div className="bg-black min-h-screen">
      <MagicCursor />
      <ScrollProgress />
      <Navigation />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
      <Toaster />
    </div>
  );
}

export default App;
