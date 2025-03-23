import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full hero-carousel mt-16">
      <div className="relative h-[80vh] max-h-[800px] w-full">
        <div className="absolute inset-0 bg-black"></div>
        
        <div className="relative h-full flex flex-col md:flex-row items-center container mx-auto px-4 py-16">
          {/* Profile Image Container with Gradient Mask */}
          <div className="relative w-full md:w-1/2 h-full flex items-center justify-center">
            {/* Subtle background glow effect */}
            <div className="absolute w-[90%] h-[90%] max-w-[550px] max-h-[650px] bg-blue-900/10 blur-[80px] rounded-full z-0 opacity-40"></div>
            
            <div className="relative w-[80%] h-[80%] max-w-[500px] max-h-[600px] profile-image-container z-10">
              {/* Gradient overlay that starts from left (20%) and fades to right */}
              <div className="absolute inset-0 w-full h-full z-10 
                bg-gradient-to-r from-transparent via-black/40 to-black 
                pointer-events-none"></div>
              
              {/* Blur effect for the edges */}
              <div className="absolute inset-0 z-[5] pointer-events-none 
                bg-gradient-to-r from-transparent via-transparent to-black/80"></div>
              
              {/* Top and bottom soft edges */}
              <div className="absolute inset-0 z-[5] pointer-events-none 
                bg-gradient-to-t from-black/40 via-transparent to-black/40"></div>
                
              <Image
                src="/images/profile/profile-placeholder.jpg"
                alt="Your Name"
                fill
                priority
                className="object-cover object-center z-0 profile-image"
                unoptimized
                loading="eager"
                style={{ 
                  maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0))',
                  WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0))',
                  transform: 'scale(0.85)'
                }}
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

export default Hero;
