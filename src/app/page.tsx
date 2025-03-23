import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import ContentRow from '@/components/shared/ContentRow';
import WorkExperienceSection from '@/components/home/WorkExperience';
import SkillsEducation from '@/components/home/SkillsEducation';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/layout/Footer';
import { personalProjects, sideProjects, achievements } from '@/data/projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />

      <WorkExperienceSection />

      <ContentRow
        title="Personal Projects"
        seeAllLink="/projects"
        contents={personalProjects}
      />

      <SkillsEducation />

      <ContentRow
        title="Side Projects & Experiments"
        seeAllLink="/side-projects"
        contents={sideProjects}
      />

      <ContentRow
        title="Achievements & Publications"
        contents={achievements}
      />

      <ContactSection />

      <Footer />
    </main>
  );
}
