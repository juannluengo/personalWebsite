import React from 'react';
import Layout from '@/components/layout/Layout';
import { workExperiences, nonTechExperiences, WorkExperience } from '@/data/work-experience';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';

const WorkExperienceCard: React.FC<{ item: WorkExperience }> = ({ item }) => (
  <div id={item.id} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden h-full transition-transform duration-300 hover:scale-[1.02]">
    <div className="p-6 flex flex-row justify-between h-full">
      {/* Text Content - Left Side */}
      <div className="flex-1 pr-4">
        <h3 className="text-xl font-bold text-white mb-1">{item.company}</h3>
        <p className="text-base text-gray-300 mb-2">{item.role}</p>
        <p className="text-sm text-gray-500 mb-4">{item.period}</p>
        
        {/* Description */}
        {item.description && (
          <p className="text-gray-400 text-sm mb-4 flex-grow" 
             dangerouslySetInnerHTML={{ __html: item.description }}>
          </p>
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
          <div className="pt-4 border-t border-gray-800">
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Link Button */}
        {item.link && (
          <div className="mt-4 pt-4 border-t border-gray-800">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 bg-white text-black rounded-md hover:bg-white/90 transition-colors text-sm font-medium"
            >
              Visit 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Company Logo - Right Side */}
      {item.image && (
        <div className="w-32 flex-shrink-0 flex items-start justify-center">
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
            We are not all Mark Zuckerberg, some of us have to gain work experience before launching our own startup.
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
