import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import ContentRow from '@/components/shared/ContentRow';
import WorkExperienceSection from '@/components/home/WorkExperience';
import SkillsEducation from '@/components/home/SkillsEducation';
import { personalProjects, sideProjects, achievements } from '@/data/projects';

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  );
}
