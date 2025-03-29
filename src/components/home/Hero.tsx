import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import RobotAnimation from './RobotAnimation';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <section className="w-full mt-16">
      <div className="relative h-[80vh] max-h-[800px] w-full">
        <div className="absolute inset-0 bg-black"></div>
        
        <div className="relative h-full flex flex-col md:flex-row items-center container mx-auto px-4 py-16">
          {/* Robot Animation Section */}
          <RobotAnimation />
          
          {/* Introduction Text */}
          <HeroContent />
        </div>
      </div>
    </section>
  );
};

export default Hero;
