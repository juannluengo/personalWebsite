'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

export default function RobotAnimation() {
  return (
    <div className="relative w-full h-full flex items-center">
      {/* Content with Prime Video style */}
      <div className="w-full h-full flex flex-col justify-center items-start z-10">
        {/* Coordinates like in Prime Video */}
        <div className="flex items-center mb-2">
          <div className="text-blue-400 text-xs tracking-wider font-mono">48°52.6'S 123°23.6'W</div>
        </div>
        
        {/* Title with large format like in Prime Video - wide enough to extend behind robot */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tighter w-[170%] relative z-5">
          JUAN LUENGO GALLEGO
        </h1>
        
        {/* Subtitle/tagline */}
        <div className="text-green-400 text-sm font-medium mb-2">People maximalist</div>
        
        {/* Quote */}
        <p className="text-gray-300 text-sm max-w-md mb-6">Some days building, some days thinking, some days improving. Always learning. Always living.</p>
        
        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition-colors">
            <PlayCircle size={20} />
            <span className="font-medium">View Profile</span>
          </button>
          <button className="bg-gray-800/80 text-white px-6 py-2 rounded-md hover:bg-gray-700/80 transition-colors">
            <span className="font-medium">More Info</span>
          </button>
        </div>
      </div>
      
      {/* Robot Spline positioned to the right - higher z-index to be in front of text */}
      <div className="absolute right-[-5%] top-0 w-[80%] md:w-[60%] h-full z-10">
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