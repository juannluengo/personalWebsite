"use client"

import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { workExperiences, WorkExperience } from '@/data/work-experience';
import DetailModal from '@/components/shared/DetailModal';
import ContentBlock from '@/components/shared/ContentBlock';
import { getImagePath } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const WorkExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<WorkExperience | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const openModal = (experience: WorkExperience) => {
    setSelectedExperience(experience);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4">
          <Link href="/experience" className="group flex items-center">
            <h2 className="text-2xl font-bold text-white group-hover:text-white/80 transition-colors">Work</h2>
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
              {workExperiences.map((experience) => (
                <CarouselItem key={experience.id} className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="h-full">
                    <Link href={`/experience#${experience.id}`} passHref>
                      <div 
                        className="bg-zinc-800 rounded-lg p-4 cursor-pointer transition-transform hover:scale-105 h-full"
                      >
                        {/*  para cambiar la altura a la que salen los logos */}
                        <div className="relative aspect-video overflow-hidden rounded-lg mb-3 flex items-center justify-center">
                          <div className="h-36 w-36 flex items-center justify-center">
                            <Image
                              src={getImagePath(experience.image)}
                              alt={experience.company}
                              width={150}
                              height={150}
                              className="work-experience-logo object-contain"
                              unoptimized
                              priority
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-white font-medium text-sm">{experience.company}</h3>
                          <p className="text-white/70 text-xs mt-1">{experience.role}</p>
                          <p className="text-white/60 text-xs">{experience.period}</p>
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

      {selectedExperience && (
        <DetailModal isOpen={modalOpen} onClose={closeModal}>
          <div className="py-4">
            <div className="flex items-center mb-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-lg flex items-center justify-center bg-zinc-800 p-2 mr-4">
                <Image
                  src={getImagePath(selectedExperience.image)}
                  alt={selectedExperience.company}
                  width={120}
                  height={120}
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">{selectedExperience.company}</h2>
                <p className="text-white/70 text-sm">
                  {selectedExperience.role} | {selectedExperience.period}
                </p>
              </div>
            </div>

            <ContentBlock title="Overview">
              <p>{selectedExperience.description}</p>
            </ContentBlock>

            {selectedExperience.responsibilities && (
              <ContentBlock title="Responsibilities">
                <ul className="list-disc list-inside space-y-1">
                  {selectedExperience.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </ContentBlock>
            )}

            {selectedExperience.achievements && (
              <ContentBlock title="Key Achievements">
                <ul className="list-disc list-inside space-y-1">
                  {selectedExperience.achievements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </ContentBlock>
            )}

            {selectedExperience.technologies && (
              <ContentBlock title="Technologies Used">
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-zinc-800 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </ContentBlock>
            )}
          </div>
        </DetailModal>
      )}
    </div>
  );
};

export default WorkExperienceSection;
