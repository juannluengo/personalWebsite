'use client'

import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import ContentSlider from '@/components/home/ContentSlider';
import { personalProjects, sideProjects, achievements } from '@/data/projects';
import { educationHistory } from '@/data/education';
import EducationSection from '@/components/home/EducationSection';
import WorkExperienceSection from '@/components/home/WorkExperienceSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import AboutSection from '@/components/home/AboutSection';

export default function Home() {
  return (
    <Layout>
      {/* Hero section with Robot */}
      <Hero />
      
      {/* Prime Video-style content sliders */}
      <div className="bg-black text-white py-12">
        <div id="work-experience" className="mb-12">
          <WorkExperienceSection />
        </div>
        
        <div id="personal-projects" className="mb-12">
          <ProjectsSection />
        </div>

        <div id="education-timeline" className="mb-12">
           <EducationSection items={educationHistory} />
        </div>
        
        {/* About Me Section with 4 parts */}
        <div id="about-me" className="mb-12">
          <AboutSection />
        </div>
        
        <div id="achievements">
          <ContentSlider 
            title="Achievements & Publications"
            items={achievements.map(item => ({
              id: item.id,
              title: item.title,
              image: item.image,
              link: item.link || `/achievements/${item.id}`
            }))}
          />
        </div>
      </div>
    </Layout>
  );
}
