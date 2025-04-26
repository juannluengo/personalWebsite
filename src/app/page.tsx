'use client'

'use client';

import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import ContentSlider from '@/components/home/ContentSlider';
import { personalProjects, sideProjects, achievements } from '@/data/projects';
import { experienceItems } from '@/data/content'; 
import { educationHistory } from '@/data/education';
import EducationSection from '@/components/home/EducationSection';

export default function Home() {
  return (
    <Layout>
      {/* Hero section with Robot */}
      <Hero />
      
      {/* Prime Video-style content sliders */}
      <div className="bg-black text-white py-12">
        <div id="work-experience" className="mb-12">
          <ContentSlider 
            title="Work Experience" 
            viewAllLink="/experience"
            items={experienceItems}
          />
        </div>
        
        <div id="personal-projects" className="mb-12">
          <ContentSlider 
            title="Personal Projects"
            viewAllLink="/projects"
            items={personalProjects.map(project => ({
              id: project.id,
              title: project.title,
              image: project.image,
              link: project.link || `/projects/${project.id}`
            }))}
          />
        </div>

        <div id="education-timeline" className="mb-12">
           <EducationSection items={educationHistory} />
        </div>
        
        <div id="side-projects" className="mb-12">
          <ContentSlider 
            title="Side Projects & Experiments"
            viewAllLink="/side-projects"
            items={sideProjects.map(project => ({
              id: project.id,
              title: project.title,
              image: project.image,
              link: project.link || `/side-projects/${project.id}`
            }))}
          />
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
