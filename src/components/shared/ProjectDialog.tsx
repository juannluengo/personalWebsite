import React, { ReactNode } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from 'next/image';
import { ContentItem } from './ContentRow';
import { getImagePath } from '@/lib/utils';

interface ProjectDialogProps {
  content: ContentItem;
  children: ReactNode;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({ content, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] bg-zinc-900 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{content.title}</DialogTitle>
          {content.status && (
            <DialogDescription className="text-white/70">
              {content.status}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="mt-4">
          <div className="flex items-start mb-6">
            <div className="flex-1 pr-4">
              {content.status && (
                <p className="text-sm text-white/70 mb-2">{content.status}</p>
              )}
              {content.description && (
                <p className="text-white/90">{content.description}</p>
              )}
            </div>
            <div className="w-32 flex-shrink-0 flex items-center justify-center">
              <div className="h-28 w-28 flex items-center justify-center">
                <Image
                  src={getImagePath(content.image)}
                  alt={content.title}
                  width={150}
                  height={150}
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>
          {content.technologiesUsed && content.technologiesUsed.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white/90 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {content.technologiesUsed.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          {content.link && (
            <a 
              href={content.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-white/90 transition-colors"
            >
              View Project
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog; 