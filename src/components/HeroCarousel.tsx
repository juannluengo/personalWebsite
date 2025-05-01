import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { getImagePath } from '@/lib/image-path';

const HeroCarousel = () => {
  return (
    <div className="w-full hero-carousel mt-16">
      <div className="relative h-[80vh] max-h-[800px] w-full">
        <div className="absolute inset-0 bg-black"></div>
        
        <div className="relative h-full flex flex-col md:flex-row items-center container mx-auto px-4 py-16">
          {/* Profile Image Container with Gradient Mask */}
          <div className="relative w-full md:w-1/2 h-full flex items-center justify-center">
            <div className="relative w-[80%] h-[80%] max-w-[500px] max-h-[600px]">
              <div className="absolute inset-0 w-full h-full z-10 bg-gradient-to-r from-transparent via-black/0 to-black pointer-events-none"></div>
              <Image
                src={getImagePath('/images/profile/profile-placeholder.JPG')}
                alt="Your Name"
                fill
                priority
                className="object-contain object-left z-0"
                unoptimized
                loading="eager"
                style={{ maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 50%, rgba(0,0,0,0))' }}
              />
            </div>
          </div>
          
          {/* Introduction Text */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Your Name</h1>
            <h2 className="text-xl md:text-2xl text-white/80 mb-6">Your Title or Tagline</h2>
            <p className="text-white/90 text-base md:text-lg mb-8">
              Write a brief introduction about yourself here. This section should summarize your 
              professional background, key skills, and what makes you unique. Keep it concise 
              but engaging.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-white text-black hover:bg-white/90">
                Contact Me
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
