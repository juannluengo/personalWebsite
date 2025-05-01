'use client'

import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import DetailModal from '@/components/shared/DetailModal';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface AboutItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const aboutItems: AboutItem[] = [
  {
    id: 'about-1',
    title: 'Personal Summary',
    description: 'A doer. A changemaker. A tech enthusiast. I thrive on challenges and love to learn new things.',
    image: '/images/profile/AppIconNFTCalavera.png',
    link: '/about-me#summary'
  },
  {
    id: 'about-2',
    title: 'Values & Goals',
    description: 'Driven by continuous learning, innovation, and the desire to make a positive impact through technology.',
    image: '/images/projects/project3-placeholder.jpg',
    link: '/about-me#values'
  },
  {
    id: 'about-3',
    title: 'Skills & Interests',
    description: 'Full-stack development, cloud services, and a passion for creating impactful technology solutions.',
    image: '/images/projects/project2-placeholder.jpg',
    link: '/about-me#skills'
  }
];

const AboutSection = () => {
  const [selectedItem, setSelectedItem] = useState<AboutItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const openModal = (item: AboutItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4">
          <Link href="/about-me" className="group flex items-center">
            <h2 className="text-2xl font-bold text-white group-hover:text-white/80 transition-colors">About Me</h2>
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
              {aboutItems.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="h-full">
                    <Link href={item.link} passHref>
                      <div 
                        className="bg-zinc-800 rounded-lg p-4 cursor-pointer transition-transform hover:scale-105 h-full"
                      >
                        <div className="relative aspect-square overflow-hidden rounded-lg mb-3 flex items-center justify-center bg-transparent">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={180}
                            height={180}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                        <div>
                          <h3 className="text-white font-medium text-sm">{item.title}</h3>
                          <p className="text-white/70 text-xs mt-1 line-clamp-2">{item.description}</p>
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

      {selectedItem && (
        <DetailModal
          isOpen={modalOpen}
          onClose={closeModal}
          title={selectedItem.title}
          onViewAll={() => {
            closeModal();
            router.push('/about-me');
          }}
          viewAllText="View Full Profile"
        >
          <div className="space-y-4">
            <div className="w-full h-40 relative rounded-md overflow-hidden">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <p className="text-gray-300">{selectedItem.description}</p>
          </div>
        </DetailModal>
      )}
    </div>
  );
};

export default AboutSection;
