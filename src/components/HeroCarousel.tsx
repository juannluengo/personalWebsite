import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface FeaturedShow {
  id: string;
  title: string;
  image: string;
  logo?: string;
  genre: string;
  rating: string;
  description: string;
}

const featuredShows: FeaturedShow[] = [
  {
    id: 'dark-matter',
    title: 'Dark Matter',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/SEsiWD2cTDShiwvM-5a-Hw/1679x945sr.webp',
    genre: 'Sci-Fi',
    rating: 'TV-MA',
    description: 'One life. Infinite possibilities. Watch all episodes on Apple TV+.'
  },
  {
    id: 'lessons-in-chemistry',
    title: 'Lessons in Chemistry',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/HE3CGz2v66OzGOeKQPIkbg/1679x945sr.webp',
    genre: 'Drama',
    rating: 'TV-MA',
    description: 'A brilliant scientist becomes a TV cooking show host. Watch new episodes Fridays.'
  },
  {
    id: 'presumed-innocent',
    title: 'Presumed Innocent',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Features113/v4/73/17/5f/73175f3c-ff92-4925-cd19-16a5b08a4909/ce1d5820-dd16-46b9-bdb5-79d3f4afbf7d.lsr/1679x945sr.webp',
    genre: 'Crime',
    rating: 'TV-MA',
    description: 'Jake Gyllenhaal is a married prosecutor suspected of murder. Watch all episodes.'
  },
];

const HeroCarousel = () => {
  return (
    <div className="w-full hero-carousel mt-16">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {featuredShows.map((show) => (
            <CarouselItem key={show.id} className="relative h-[80vh] max-h-[800px]">
              <div className="relative w-full h-full">
                <Image
                  src={show.image}
                  alt={show.title}
                  fill
                  priority
                  className="object-cover"
                  unoptimized
                  loading="eager"
                />
                <div className="absolute inset-0 hero-gradient" />
                <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3 lg:w-1/2">
                  {show.logo ? (
                    <Image src={show.logo} alt={show.title} width={400} height={100} className="mb-4" unoptimized />
                  ) : (
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">{show.title}</h2>
                  )}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-white text-sm md:text-base">{show.genre}</span>
                    <span className="inline-block px-2 py-1 text-xs border border-white/30 rounded text-white/90 bg-black/30">{show.rating}</span>
                  </div>
                  <p className="text-white/90 text-base md:text-lg mb-6">{show.description}</p>
                  <Button className="bg-white text-black hover:bg-white/90">
                    Go to Show
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 h-10 w-10 bg-black/50 hover:bg-black/70 border-none" />
        <CarouselNext className="right-4 h-10 w-10 bg-black/50 hover:bg-black/70 border-none" />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
