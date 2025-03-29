'use client'

import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import ContentSlider from '@/components/home/ContentSlider';
import { personalProjects, sideProjects, achievements } from '@/data/projects';
import { skillsItems, experienceItems } from '@/data/content';

export default function Home() {
  return (
    <Layout>
      {/* Hero section with Robot */}
      <Hero />
      
      {/* Prime Video-style content sliders */}
      <div className="bg-black">
        <div id="work-experience">
          <ContentSlider 
            title="Work Experience" 
            viewAllLink="/experience"
            items={experienceItems}
          />
        </div>
        
        <ContentSlider 
          title="My Skills" 
          viewAllLink="/skills"
          items={skillsItems}
        />
        
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
    </Layout>
  );
}
