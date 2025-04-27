import React from 'react';
import Link from 'next/link';
import { EducationItem } from '@/data/education';

interface EducationTimelineProps {
  items: EducationItem[];
}

// Define an array of gradient colors for timeline nodes
const nodeColors = [
  'from-blue-500 to-blue-700',
  'from-emerald-500 to-emerald-700',
  'from-purple-500 to-purple-700',
  'from-red-500 to-red-700',
  'from-amber-500 to-amber-700'
];

const EducationTimeline: React.FC<EducationTimelineProps> = ({ items }) => {
  // Reverse items to display chronologically from left to right
  const reversedItems = [...items].reverse();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Education Journey</h2>
        <Link href="/education" className="ml-auto">
          <span className="text-blue-400 hover:text-blue-300 text-sm flex items-center transition-colors">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>

      {/* Horizontal Timeline with Gradients */}
      <div className="relative w-full h-32">
        {/* Connecting line */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-1 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40 rounded"></div>
        </div>

        {/* Timeline nodes */}
        <div className="relative z-10 flex justify-between items-center h-full px-4">
          {reversedItems.map((item, index) => (
            <Link href="/education" key={item.id} className="relative h-full flex flex-col items-center group">
              {/* Dot aligned on line: bottom of dot on center */}
              <div className="absolute left-1/2 top-[calc(50%-0.75rem)] -translate-x-1/2">
                <div className={`h-6 w-6 rounded-full bg-gradient-to-br ${nodeColors[index % nodeColors.length]} shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]`}></div>
              </div>

              {/* Year indicator below dot */}
              <div className="mt-8 text-xs text-gray-400">
                {item.dates.split(' - ')[0]}
              </div>

              {/* Popup on hover with arrow */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none w-52 scale-95 group-hover:scale-100">
                <div className="bg-gray-900 p-3 rounded-lg shadow-xl border border-gray-800">
                  <p className="font-bold text-white text-xs mb-1">{item.institution}</p>
                  <p className="text-xs text-gray-300">{item.degree}</p>
                </div>
                {/* Triangle pointer */}
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900 mx-auto"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to action button */}
      <div className="text-center">
        <Link href="/education">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Explore My Full Education Background
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EducationTimeline;
