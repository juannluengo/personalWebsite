import React from 'react';
import Layout from '@/components/layout/Layout';
import { educationHistory, EducationItem } from '@/data/education';
import Image from 'next/image';
import Link from 'next/link';

// Separate formal education from other courses
const educationDegrees = educationHistory;
// We'll add outside courses later if needed
const outsideCourses: EducationItem[] = [];

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => (
  <div id={item.id} className="bg-gray-900 rounded-lg shadow-xl overflow-hidden h-full transition-transform duration-300 hover:scale-[1.02]">
    <div className="p-6 flex flex-col h-full">
      {/* Optional Institution Logo */}
      {item.logo && (
        <div className="w-12 h-12 mb-4 mx-auto">
          <Image src={item.logo} alt={`${item.institution} logo`} width={48} height={48} className="rounded-full" />
        </div>
      )}
      
      {/* Institution & Degree */}
      <h3 className="text-xl font-bold text-white mb-1">{item.institution}</h3>
      <p className="text-base text-gray-300 mb-2">{item.degree}</p>
      <p className="text-sm text-gray-500 mb-4">{item.dates}</p>
      
      {/* Description */}
      {item.description && (
        <p className="text-gray-400 text-sm mb-4 flex-grow">{item.description}</p>
      )}
      
      {/* Special button for UPM Computer Science */}
      {item.id === 'upm-bba' && (
        <div className="mb-4">
          <a 
            href="https://oa.upm.es/87893/1/TFG_JUAN_LUENGO_GALLEGO.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-1.5 bg-white text-black text-xs font-medium rounded-md hover:bg-gray-200 transition-colors"
          >
            Thesis
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
      
      {/* Skills Tags */}
      {item.skills && item.skills.length > 0 && (
        <div className="mt-auto pt-4 border-t border-gray-800">
          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill, index) => (
              <span key={index} className="bg-gray-800 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default function EducationPage() {
  return (
    <Layout>
      <div className="bg-black text-white min-h-screen py-24 px-4 md:px-8">
        <div className="container mx-auto">
          {/* Larger heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">My Education Journey</h1>
          <p className="text-lg text-gray-400 text-center mb-20 max-w-3xl mx-auto">
            Though I'm a huge believer in self-learning, that doesn't exempt me from formal education. More than knowledge, they taught me values and gave me the opportunity to meet amazing people.
          </p>

          {/* Education Degrees Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4 flex items-center">
              <span className="mr-3">🎓</span> Education Degrees
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {educationDegrees.map((item) => (
                <EducationCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Outside Courses Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4 flex items-center">
              <span className="mr-3">📚</span> Outside Courses
            </h2>
            
            {outsideCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {outsideCourses.map((item) => (
                  <EducationCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-12">
                <p>Coming soon! I'm currently organizing my outside course achievements.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
