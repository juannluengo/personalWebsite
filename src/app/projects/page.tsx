import React from 'react';
import Layout from '@/components/layout/Layout';
import { personalProjects, sideProjects, achievements, Project } from '@/data/projects';
import Image from 'next/image';
import { getImagePath } from '@/lib/image-path';
import Link from 'next/link';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div id={project.id} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden h-full transition-transform duration-300 hover:scale-[1.02]">
    <div className="p-6 flex flex-row justify-between h-full">
      {/* Text Content - Left Side */}
      <div className="flex-1 pr-4">
        {/* Project Title & Status */}
        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        {project.status && (
          <p className={`text-sm mb-4 ${
            project.status === 'Coming Soon' ? 'text-yellow-500' : 
            project.status === 'Released' ? 'text-green-500' : 
            project.status === 'In Progress' ? 'text-blue-500' : 
            'text-gray-500'
          }`}>
            {project.status}
          </p>
        )}
        
        {/* Description */}
        {project.description && (
          <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
        )}
        
        {/* Technologies Used */}
        {project.technologiesUsed && project.technologiesUsed.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologiesUsed.map((tech, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Project Link if available */}
        {project.link && (
          <div className="mt-auto pt-4 border-t border-gray-800">
            <a 
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white text-black text-xs font-medium rounded-md hover:bg-white/90 transition-colors"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
      
      {/* Project Image - Right Side */}
      {project.image && (
        <div className="w-32 flex-shrink-0 flex items-start justify-center">
          <Image 
            src={getImagePath(project.image)} 
            alt={`${project.title}`}
            width={120}
            height={120} 
            className="object-contain"
            unoptimized
          />
        </div>
      )}
    </div>
  </div>
);

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="bg-black text-white min-h-screen py-24 px-4 md:px-8">
        <div className="container mx-auto">
          {/* Larger heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Time to build 🫵</h1>
          <p className="text-lg text-gray-400 text-center mb-20 max-w-3xl mx-auto">
            A mix of ambition, creativity and experimentation. Nothing big yet, but you never know.
          </p>
          
          {/* Personal Projects Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4 flex items-center">
              <span className="mr-3">💻</span> Active Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {personalProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
          
          {/* Side Projects Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4 flex items-center">
              <span className="mr-3">🧪</span> Side Projects & Experiments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sideProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
