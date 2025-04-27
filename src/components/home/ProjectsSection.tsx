"use client"

import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { personalProjects, Project } from '@/data/projects';
import DetailModal from '@/components/shared/DetailModal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4">
          <Link href="/projects" className="group flex items-center">
            <h2 className="text-2xl font-bold text-white group-hover:text-white/80 transition-colors">Projects</h2>
            <ChevronRight className="h-6 w-6 text-white/60 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="carousel-container">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              slidesToScroll: 1,
            }}
          >
            <CarouselContent className="-ml-4">
              {personalProjects.map((project) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="h-full">
                    <Link href={`/projects#${project.id}`} passHref>
                      <div 
                        className="bg-zinc-800 rounded-lg p-4 cursor-pointer transition-transform hover:scale-105 h-full"
                      >
                        <div className="relative aspect-video overflow-hidden rounded-lg mb-3 flex items-center justify-center">
                          <Image 
                            src={project.image} 
                            alt={project.title}
                            width={100}
                            height={100}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        <div>
                          <h3 className="text-white font-medium text-sm">{project.title}</h3>
                          {project.status && (
                            <p className={`text-xs mt-1 ${project.status === 'Coming Soon' ? 'text-yellow-400' : 'text-green-400'}`}>
                              {project.status}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="carousel-control left h-10 w-10 bg-black/50 hover:bg-black/70 border-none" />
            <CarouselNext className="carousel-control right h-10 w-10 bg-black/50 hover:bg-black/70 border-none" />
          </Carousel>
        </div>
      </div>
      
      {selectedProject && (
        <DetailModal
          isOpen={modalOpen}
          onClose={closeModal}
          title={selectedProject.title}
          onViewAll={() => {
            closeModal();
            router.push('/projects');
          }}
          viewAllText="View All Projects"
        >
          <div className="space-y-4">
            {selectedProject.image && (
              <div className="w-full h-40 relative rounded-md overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
            
            {selectedProject.status && (
              <p className={`text-sm ${selectedProject.status === 'Coming Soon' ? 'text-yellow-500' : 'text-green-500'}`}>
                {selectedProject.status}
              </p>
            )}
            
            {selectedProject.description && (
              <p className="text-gray-300">{selectedProject.description}</p>
            )}
            
            {selectedProject.technologiesUsed && selectedProject.technologiesUsed.length > 0 && (
              <div>
                <h4 className="text-white font-medium mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologiesUsed.map((tech, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-gray-800 text-blue-400 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {selectedProject.link && (
              <div className="pt-2">
                <a 
                  href={selectedProject.link}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            )}
          </div>
        </DetailModal>
      )}
    </div>
  );
};

export default ProjectsSection;
