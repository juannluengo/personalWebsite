'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function RobotAnimation() {
  // Function to scroll to the Work Experience section
  const scrollToWorkExperience = () => {
    // Find the Work Experience section heading and scroll to it
    const element = document.getElementById('work-experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full h-full flex items-center">
      {/* Content with Prime Video style */}
      <div className="w-full h-full flex flex-col justify-center items-start z-10">
        {/* Coordinates like in Prime Video */}
        <div className="flex items-center mb-2">
          <div className="text-blue-400 text-xs tracking-wider font-mono">40°25'01.3"N 3°42'12.5"W</div>
        </div>
        
        {/* Title with large format like in Prime Video - wide enough to extend behind robot */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tighter w-[170%] relative z-5">
          JUAN LUENGO
        </h1>
        
        {/* Subtitle/tagline */}
        <div className="text-green-400 text-sm font-medium mb-2">People maximalist</div>
        
        {/* Quote */}
        <p className="text-gray-300 text-sm max-w-md mb-6">Some days building, some days thinking, some days improving. Always learning. Always living.</p>
        
        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={scrollToWorkExperience}
            className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition-colors"
          >
            <PlayCircle size={20} />
            <span className="font-medium">View Profile</span>
          </button>
          <Link href="/socials">
            <RainbowButton>
              <span className="font-medium text-white">More Info</span>
            </RainbowButton>
          </Link>
        </div>
      </div>
      
      {/* Robot Spline positioned to the right - higher z-index to be in front of text */}
      <div className="absolute right-[-10%] top-[-5%] w-[90%] md:w-[70%] h-[110%] z-10">
        <Card className="w-full h-full bg-transparent overflow-hidden border-none">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </Card>
      </div>
    </div>
  );
} 