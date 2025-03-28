import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { type WorkExperience, workExperiences } from '@/data/work-experience';

const WorkExperienceSection = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Work</h2>
          <ChevronRight className="h-6 w-6 text-white/60 ml-2" />
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="bg-transparent border-none content-card cursor-pointer transition-transform hover:scale-105">
                        <CardContent className="p-0">
                          <div className="relative aspect-video overflow-hidden rounded-lg card-image">
                            <Image
                              src={experience.image}
                              alt={experience.company}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          <div className="mt-2">
                            <h3 className="text-white font-medium text-sm">{experience.company}</h3>
                            <p className="text-white/70 text-xs mt-1">{experience.role}</p>
                            <p className="text-white/60 text-xs">{experience.period}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-bold">{experience.company}</DialogTitle>
                        <DialogDescription className="text-white/70">
                          {experience.role} | {experience.period}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-4">
                          <Image
                            src={experience.image}
                            alt={experience.company}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <p className="text-white/90">{experience.description}</p>
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

export default WorkExperienceSection;
