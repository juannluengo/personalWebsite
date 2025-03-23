import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface FreePreview {
  id: string;
  title: string;
  image: string;
}

const freePreviews: FreePreview[] = [
  {
    id: 'lessons-in-chemistry',
    title: 'Lessons in Chemistry',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/msLJofc38byLJWQVBgX4JA/738x416.webp'
  },
  {
    id: 'morning-show',
    title: 'The Morning Show',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/qth_eNoJqMWbjMUyn16jpA/738x416.webp'
  },
  {
    id: 'messi-meets-america',
    title: 'Messi Meets America',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/vB48H4eBprLJ-WdCBxXUkw/738x416.webp'
  },
  {
    id: 'hijack',
    title: 'Hijack',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/7Jr2Qpg5MC7YvW-lBxWK9g/738x416.webp'
  },
  {
    id: 'ted-lasso',
    title: 'Ted Lasso',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/3iAbZQ4pznOpDRenkvOhNA/738x416.webp'
  }
];

const FreePreviews = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Watch Premieres for Free</h2>
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
              {freePreviews.map((content) => (
                <CarouselItem key={content.id} className="pl-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <Card className="bg-transparent border-none content-card">
                    <CardContent className="p-0">
                      <Link href={`/show/${content.id}`}>
                        <div className="relative aspect-video overflow-hidden rounded-lg card-image">
                          <Image
                            src={content.image}
                            alt={content.title}
                            fill
                            className="object-cover"
                            unoptimized
                            loading="eager"
                          />
                          <div className="absolute top-2 right-2">
                            <Image
                              src="https://is1-ssl.mzstatic.com/image/thumb/blgN-xpESV1_uVJIGLDgQA/64x64bb.png"
                              alt="Apple TV+"
                              width={24}
                              height={24}
                              unoptimized
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <h3 className="text-white font-medium text-sm">{content.title}</h3>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
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

export default FreePreviews;
