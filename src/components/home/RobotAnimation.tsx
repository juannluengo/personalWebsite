'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";

export default function RobotAnimation() {
  return (
    <div className="relative w-full md:w-1/2 h-full flex items-center justify-center">
      {/* Subtle background glow effect - keep this from the original ProfileImage */}
      <div className="absolute w-[90%] h-[90%] max-w-[550px] max-h-[650px] bg-blue-900/10 blur-[80px] rounded-full z-0 opacity-40"></div>
      
      <Card className="relative w-[80%] h-[80%] max-w-[500px] max-h-[600px] bg-black/[0.7] overflow-hidden z-10 border-none backdrop-blur-sm">
        {/* Robot Animation occupying the full space */}
        <div className="w-full h-full relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </Card>
    </div>
  );
} 