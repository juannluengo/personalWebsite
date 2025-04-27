'use client';

import React, { useState } from 'react';
import { EducationItem } from '@/data/education';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface EducationSectionProps {
  items: EducationItem[];
}

export default function EducationSection({ items }: EducationSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Order the items in the specific order: TUE, UPM, UPM, SEK
  const sortedItems = [...items].sort((a, b) => {
    // Custom order: TUE first, then UPM (CS), then UPM (BBA), and SEK last
    const orderMap: Record<string, number> = { 'tue': 0, 'upm-cs': 1, 'upm-bba': 2, 'sek': 3 };
    return orderMap[a.id] - orderMap[b.id];
  });

  // Get phases for each item
  const getPhase = (index: number) => {
    if (index === 0) return { name: "Development", color: "from-blue-500" };
    if (index === 1) return { name: "Specialization", color: "from-purple-500" };
    if (index === 2) return { name: "Specialization", color: "from-emerald-500" };
    return { name: "Foundation", color: "from-amber-500" };
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Education Journey</h2>
      </div>

      <Link href="/education" className="block">
        <div className="relative">
          {/* Futuristic timeline with active info panels */}
          <div className="mb-16 relative">
            {/* Timeline line */}
            <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full"></div>
            
            {/* Dots and years positioned exactly on the timeline */}
            {sortedItems.map((item, index) => (
              <div 
                key={`dot-${item.id}`} 
                className="absolute top-0 transform -translate-y-1/2 text-center"
                style={{ left: `${(index * 100) / (sortedItems.length - 1)}%`, transform: 'translate(-50%, -50%)' }}
              >
                <motion.div 
                  className={`w-3 h-3 rounded-full bg-white mx-auto ${activeIndex === index ? 'ring-4 ring-white/30' : ''}`}
                  animate={{ scale: activeIndex === index ? 1.5 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="text-center text-sm text-gray-400 mt-6">
                  {item.dates}
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            {sortedItems.map((item, index) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >

                {/* Education card with hover effect */}
                <motion.div
                  className={`bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-lg p-4 cursor-pointer flex flex-col h-full
                    ${activeIndex === index ? 'bg-opacity-100 ring-1 ring-white/20' : 'hover:bg-gray-900/90'}`}
                  animate={{ 
                    y: activeIndex === index ? -5 : 0,
                    scale: activeIndex === index ? 1.02 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Phase tag */}
                  <div className={`text-xs font-medium px-2 py-0.5 rounded mb-2 inline-block 
                    bg-gradient-to-r ${getPhase(index).color} to-transparent text-white`}>
                    {getPhase(index).name}
                  </div>

                  {/* Institution */}
                  <h3 className="text-white text-sm font-medium">{item.institution}</h3>
                  
                  {/* Degree */}
                  <p className="text-gray-400 text-xs mt-1 line-clamp-2">{item.degree}</p>
                  
                  {/* Description preview */}
                  {item.description && (
                    <motion.p 
                      className="text-gray-500 text-xs mt-2 mb-3"
                      animate={{ 
                        maxHeight: activeIndex === index ? '200px' : '2.5rem',
                        overflow: activeIndex === index ? 'visible' : 'hidden'
                      }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                  
                  {/* Skills preview - always visible */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="mt-auto pt-2 flex flex-wrap gap-1">
                      {item.skills.slice(0, 3).map((skill, i) => (
                        <span key={i} className="text-[10px] py-0.5 px-1.5 bg-gray-800 text-gray-400 rounded">
                          {skill}
                        </span>
                      ))}
                      {item.skills.length > 3 && (
                        <span className="text-[10px] py-0.5 px-1.5 bg-gray-800 text-gray-400 rounded">
                          +{item.skills.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
