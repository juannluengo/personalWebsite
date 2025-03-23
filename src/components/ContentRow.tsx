import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Content {
  id: string;
  title: string;
  image: string;
  type?: string;
  status?: string;
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
                          <h3 className="text-white font-medium text-sm truncate">{content.title}</h3>
                          {content.status && (
                            <p className="text-white/60 text-xs mt-1">{content.status}</p>
                          )}
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

export default ContentRow;
