import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Content {
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
  contents: Content[];
}

const ContentRow: React.FC<ContentRowProps> = ({ title, seeAllLink, contents }) => {
  return (
    <div className="py-8">
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="bg-transparent border-none content-card cursor-pointer transition-transform hover:scale-105">
                        <CardContent className="p-0">
                          <div className="relative aspect-video overflow-hidden rounded-lg card-image">
                            <Image
                              src={content.image}
                              alt={content.title}
                              fill
                              className="object-cover"
                              unoptimized
                              loading="eager"
                            />
                          </div>
                          <div className="mt-2">
                            <h3 className="text-white font-medium text-sm truncate">{content.title}</h3>
                            {content.status && (
                              <p className="text-white/60 text-xs mt-1">{content.status}</p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[550px] bg-zinc-900 text-white">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold">{content.title}</DialogTitle>
                        {content.status && (
                          <DialogDescription className="text-white/70">
                            {content.status}
                          </DialogDescription>
                        )}
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
                          <Image
                            src={content.image}
                            alt={content.title}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        {content.description && (
                          <p className="text-white/90 mb-4">{content.description}</p>
                        )}
                        {content.technologiesUsed && content.technologiesUsed.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-white/90 mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {content.technologiesUsed.map((tech, index) => (
                                <span 
                                  key={index} 
                                  className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {content.link && (
                          <a 
                            href={content.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-white/90 transition-colors"
                          >
                            View Project
                          </a>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="carousel-control left h-10 w-10 bg-black/50 hover:bg-black/70 border-none" />
            <CarouselNext className="carousel-control right h-10 w-10 bg-black/50 hover:bg-black/70 border-none" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ContentRow;
