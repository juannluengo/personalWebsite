import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { ContentItem } from './ContentRow';
import { motion } from 'framer-motion';
import { getImagePath } from '@/lib/utils';

interface ProjectCardProps {
  content: ContentItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ content }) => {
  return (
    <Card className="bg-transparent border-none content-card cursor-pointer transition-transform hover:scale-105">
      <CardContent className="p-0">
        <div className="flex flex-row items-start">
          <div className="flex-1 pr-3">
            <h3 className="text-white font-medium text-sm truncate">{content.title}</h3>
            {content.status && (
              <p className="text-white/60 text-xs mt-1">{content.status}</p>
            )}
          </div>
          <div className="w-20 flex-shrink-0 flex items-center justify-center">
            <Image
              src={getImagePath(content.image)}
              alt={content.title}
              width={80}
              height={80}
              className="object-contain"
              unoptimized
              loading="eager"
              priority
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard; 