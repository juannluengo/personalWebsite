'use client'

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import RobotAnimation from './RobotAnimation';
import { renderCanvas } from "@/components/ui/canvas";

const Hero = () => {
  // Initialize the canvas animation when component mounts
  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <section className="w-full relative overflow-hidden">
      {/* Hero banner with fixed height similar to Prime Video */}
      <div className="relative h-[60vh] max-h-[600px] w-full">
        {/* Background layer */}
        <div className="absolute inset-0 bg-black z-0"></div>
        
        {/* Interactive particle canvas - z-index between background and content */}
        <div className="absolute inset-0 z-[5] overflow-hidden">
          <canvas
            className="absolute top-0 left-0 w-full h-full pointer-events-auto"
            id="canvas"
          ></canvas>
        </div>
        
        {/* Content layer - higher z-index to be above the canvas */}
        <div className="relative h-full flex flex-col md:flex-row items-center container mx-auto px-4 py-8 z-[15]">
          {/* Robot Animation Section */}
          <RobotAnimation />
        </div>
      </div>
    </section>
  );
};

export default Hero;
