import React from 'react';
import Layout from '@/components/layout/Layout';
import { workExperiences, nonTechExperiences, WorkExperience } from '@/data/work-experience';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';

const WorkExperienceCard: React.FC<{ item: WorkExperience }> = ({ item }) => (
  <div id={item.id} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden h-full transition-transform duration-300 hover:scale-[1.02]">
    <div className="p-6 flex flex-col h-full">
      {/* Company Logo */}
      {item.image && (
        <div className="w-32 h-16 mb-4 mx-auto flex items-center justify-center">
          <Image 
            src={getImagePath(item.image)} 
            alt={`${item.company} logo`} 
            width={item.imageSize?.width || 100} 
            height={item.imageSize?.height || 50}
            className="object-contain"
            unoptimized
          />
        </div>
      )}
      
      {/* Company & Role */}
      <h3 className="text-xl font-bold text-white mb-1">{item.company}</h3>
      <p className="text-base text-gray-300 mb-2">{item.role}</p>
      <p className="text-sm text-gray-500 mb-4">{item.period}</p>
      
      {/* Description */}
      {item.description && (
        <p className="text-gray-400 text-sm mb-4 flex-grow">{item.description}</p>
      )}
      
      {/* Responsibilities */}
      {item.responsibilities && item.responsibilities.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Responsibilities:</h4>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
            {item.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Achievements */}
      {item.achievements && item.achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Achievements:</h4>
          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
            {item.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Technologies Tags */}
      {item.technologies && item.technologies.length > 0 && (
        <div className="mt-auto pt-4 border-t border-gray-800">
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default function ExperiencePage() {
  return (
    <Layout>
      <div className="bg-black text-white min-h-screen py-24 px-4 md:px-8">
        <div className="container mx-auto">
          {/* Larger heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Work Experience</h1>
          <p className="text-lg text-gray-400 text-center mb-20 max-w-3xl mx-auto">
            A showcase of my professional journey and the companies I've had the privilege to work with throughout my career.
          </p>

          {/* Work Experience Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4 flex items-center">
              <span className="mr-3">💼</span> Professional Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {workExperiences.map((item) => (
                <WorkExperienceCard key={item.id} item={item} />
              ))}
            </div>
          </div>
          
          {/* Non-Tech Related Experience Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4 flex items-center">
              <span className="mr-3">🔧</span> Not Tech Related Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {nonTechExperiences.map((item) => (
                <WorkExperienceCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
