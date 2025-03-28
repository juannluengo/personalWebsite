import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import ProjectDialog from './ProjectDialog';

export interface ContentItem {
  id: string;
  title: string;
  image: string;
  type?: string;
  status?: string;
  description?: string;
  technologiesUsed?: string[];
  link?: string;
}

interface ContentRowProps {
  title: string;
  seeAllLink?: string;
  contents: ContentItem[];
}

const ContentRow: React.FC<ContentRowProps> = ({ title, seeAllLink, contents }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {seeAllLink && (
            <Link
              href={seeAllLink}
              className="flex items-center text-white/80 hover:text-white text-sm font-medium"
            >
              See All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          )}
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
              {contents.map((content) => (
                <CarouselItem key={content.id} className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <ProjectDialog content={content}>
                    <ProjectCard content={content} />
                  </ProjectDialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="carousel-control left h-10 w-10 bg-black/50 hover:bg-black/70 border-none" />
            <CarouselNext className="carousel-control right h-10 w-10 bg-black/50 hover:bg-black/70 border-none" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ContentRow;
