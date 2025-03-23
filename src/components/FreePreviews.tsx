import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  image: string;
  description: string;
}

const workExperiences: WorkExperience[] = [
  {
    id: 'company-1',
    company: 'Company Name 1',
    role: 'Senior Position',
    period: '2021 - Present',
    image: '/images/companies/company1-placeholder.jpg', // Updated path
    description: 'Brief description of your role and responsibilities at this company. Highlight key achievements and skills developed during this position.'
  },
  {
    id: 'company-2',
    company: 'Company Name 2',
    role: 'Mid-level Position',
    period: '2018 - 2021',
    image: '/images/companies/company2-placeholder.jpg', // Updated path
    description: 'Brief description of your role and responsibilities at this company. Highlight key achievements and skills developed during this position.'
  },
  {
    id: 'company-3',
    company: 'Company Name 3',
    role: 'Junior Position',
    period: '2016 - 2018',
    image: '/images/companies/company3-placeholder.jpg', // Updated path
    description: 'Brief description of your role and responsibilities at this company. Highlight key achievements and skills developed during this position.'
  },
  {
    id: 'company-4',
    company: 'Company Name 4',
    role: 'Internship',
    period: '2015 - 2016',
    image: '/images/companies/company4-placeholder.jpg', // Updated path
    description: 'Brief description of your role and responsibilities at this company. Highlight key achievements and skills developed during this position.'
  },
  {
    id: 'company-5',
    company: 'Company Name 5',
    role: 'Part-time Role',
    period: '2014 - 2015',
    image: '/images/companies/company5-placeholder.jpg', // Updated path
    description: 'Brief description of your role and responsibilities at this company. Highlight key achievements and skills developed during this position.'
  }
];

const WorkExperience = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Work Experience</h2>
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

export default WorkExperience;
