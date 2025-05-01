import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/data/personal';
import { getImagePath } from '@/lib/image-path';

const ProfileImage = () => {
  return (
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
          src={getImagePath('/images/profile/profile-placeholder.JPG')}
          alt={personalInfo.name}
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
  );
};

export default ProfileImage; 