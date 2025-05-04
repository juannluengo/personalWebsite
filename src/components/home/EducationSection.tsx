'use client';

import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { EducationItem } from '@/data/education';
import DetailModal from '@/components/shared/DetailModal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getImagePath } from '@/lib/utils';

interface EducationSectionProps {
  items: EducationItem[];
}

export default function EducationSection({ items }: EducationSectionProps) {
  const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  
  // Order the items in the specific order: TUE, UPM, UPM, SEK
  const sortedItems = [...items].sort((a, b) => {
    // Custom order: TUE first, then UPM (CS), then UPM (BBA), and SEK last
    const orderMap: Record<string, number> = { 'tue': 0, 'upm-cs': 1, 'upm-bba': 2, 'sek': 3 };
    return orderMap[a.id] - orderMap[b.id];
  });

  const openModal = (education: EducationItem) => {
    setSelectedEducation(education);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4">
          <Link href="/education" className="group flex items-center">
            <h2 className="text-2xl font-bold text-white group-hover:text-white/80 transition-colors">Education Journey</h2>
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
              {sortedItems.map((education) => (
                <CarouselItem key={education.id} className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="h-full">
                    <Link href={`/education#${education.id}`} passHref>
                      <div 
                        className="bg-zinc-800 rounded-lg p-4 cursor-pointer transition-transform hover:scale-105 h-full"
                      >
                        <div className="flex justify-between">
                          <div className="flex-1 pr-2">
                            <h3 className="text-white font-medium text-sm">{education.institution}</h3>
                            <p className="text-white/70 text-xs mt-1">{education.degree}</p>
                            <p className="text-white/60 text-xs">{education.dates}</p>
                            {education.status && (
                              <p className={`text-xs mt-1 ${education.status === 'Ongoing' ? 'text-yellow-400' : education.status === 'Completed' ? 'text-green-400' : 'text-blue-400'}`}>
                                {education.status}
                              </p>
                            )}
                          </div>
                          <div className="w-16 flex-shrink-0 flex items-start justify-center">
                            <Image 
                              src={getImagePath(education.id === 'sek' ? '/images/universities/SEKAppIcon.png' : education.iconImage)} 
                              alt={education.institution}
                              width={50}
                              height={50}
                              className="object-contain"
                              unoptimized
                            />
                          </div>
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
      
      {selectedEducation && (
        <DetailModal
          isOpen={modalOpen}
          onClose={closeModal}
          title={selectedEducation.institution}
          onViewAll={() => {
            closeModal();
            router.push('/education');
          }}
          viewAllText="View Full Education"
        >
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <div className="flex-1 pr-4">
                <h3 className="text-lg font-bold text-white">{selectedEducation.degree}</h3>
                <p className="text-white/70 text-sm">{selectedEducation.dates}</p>
                
                {selectedEducation.status && (
                  <p className={`text-sm mt-1 ${selectedEducation.status === 'Ongoing' ? 'text-yellow-500' : selectedEducation.status === 'Completed' ? 'text-green-500' : 'text-blue-500'}`}>
                    {selectedEducation.status}
                  </p>
                )}
              </div>
              
              <div className="w-24 flex-shrink-0 flex items-start justify-center">
                <Image
                  src={getImagePath(selectedEducation.id === 'sek' ? '/images/universities/SEKAppIcon.png' : selectedEducation.iconImage)}
                  alt={selectedEducation.institution}
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            
            {selectedEducation.description && (
              <p className="text-gray-300 mt-4">{selectedEducation.description}</p>
            )}
            
            {selectedEducation.skills && selectedEducation.skills.length > 0 && (
              <div className="mt-4">
                <h4 className="text-white font-medium mb-2">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedEducation.skills.map((skill, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-gray-800 text-blue-400 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DetailModal>
      )}
    </div>
  );
}
