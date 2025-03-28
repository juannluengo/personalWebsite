import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { ContentItem } from './ContentRow';

interface ProjectCardProps {
  content: ContentItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ content }) => {
  return (
    <Card className="bg-transparent border-none content-card cursor-pointer transition-transform hover:scale-105">
      <CardContent className="p-0">
        <div className="relative aspect-video overflow-hidden rounded-lg card-image">
          <Image
            src={content.image}
            alt={content.title}
            fill
            className="object-cover"
            unoptimized
            loading="eager"
          />
        </div>
        <div className="mt-2">
          <h3 className="text-white font-medium text-sm truncate">{content.title}</h3>
          {content.status && (
            <p className="text-white/60 text-xs mt-1">{content.status}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard; 