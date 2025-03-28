import React from 'react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/personal';

interface HeroContentProps {
  name?: string;
  title?: string;
  description?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({
  name = personalInfo.name,
  title = personalInfo.title,
  description = personalInfo.description
}) => {
  return (
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center z-10">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{name}</h1>
      <h2 className="text-xl md:text-2xl text-white/80 mb-6">{title}</h2>
      <p className="text-white/90 text-base md:text-lg mb-8">
        {description}
      </p>
    </div>
  );
};

export default HeroContent; 