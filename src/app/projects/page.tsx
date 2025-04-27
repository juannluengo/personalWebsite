import React from 'react';
import Layout from '@/components/layout/Layout';
import { personalProjects, Project } from '@/data/projects';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div id={project.id} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden h-full transition-transform duration-300 hover:scale-[1.02]">
    <div className="p-6 flex flex-col h-full">
      {/* Project Image */}
      {project.image && (
        <div className="w-full h-40 mb-4 relative rounded-md overflow-hidden">
          <Image 
            src={project.image} 
            alt={`${project.title}`} 
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
      
      {/* Project Title & Status */}
      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
      {project.status && (
        <p className={`text-sm mb-4 ${project.status === 'Coming Soon' ? 'text-yellow-500' : 'text-green-500'}`}>
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
              <span key={index} className="px-2 py-1 text-xs bg-gray-800 text-blue-400 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Project Link if available */}
      {project.link && (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-xs font-medium rounded-md hover:bg-blue-700 transition-colors mt-auto"
        >
          View Project
        </a>
      )}
    </div>
  </div>
);

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="bg-black min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
