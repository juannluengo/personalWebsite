'use client'

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ContentItem = {
  id: string;
  title: string;
  image: string;
  link: string;
  subtitle?: string;
};

interface ContentSliderProps {
  title: string;
  viewAllLink?: string;
  items: ContentItem[];
}

export default function ContentSlider({ title, viewAllLink, items }: ContentSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  // Check if this is the Work Experience section to apply different styling
  const isWorkExperience = title === "Work Experience";

  return (
    <div className="py-6 px-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-xl font-medium">{title}</h2>
        {viewAllLink && (
          <Link 
            href={viewAllLink}
            className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
          >
            View all <ChevronRight size={16} />
          </Link>
        )}
      </div>

      <div className="relative group">
        {/* Left navigation button */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Content slider */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide py-2 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <Link key={item.id} href={item.link}>
              <motion.div 
                className={`flex-shrink-0 relative ${
                  isWorkExperience 
                    ? 'w-64 h-48 bg-gray-800/70 border border-gray-700' 
                    : 'w-48 h-64 bg-gray-800'
                } rounded-md overflow-hidden`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`${
                  isWorkExperience 
                    ? 'flex items-center justify-center p-6' 
                    : 'relative h-full w-full'
                }`}>
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill={!isWorkExperience}
                    width={isWorkExperience ? 150 : undefined}
                    height={isWorkExperience ? 80 : undefined}
                    className={`${
                      isWorkExperience 
                        ? 'object-contain relative' 
                        : 'object-cover absolute'
                    }`}
                  />
                </div>
                <div className={`absolute ${
                  isWorkExperience 
                    ? 'inset-x-0 bottom-0 bg-gray-900/90 py-2 px-3' 
                    : 'inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300'
                }`}>
                  <div className={`${
                    isWorkExperience 
                      ? '' 
                      : 'absolute bottom-2 left-2 right-2'
                  }`}>
                    <h3 className="text-white text-sm font-medium">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-gray-300 text-xs mt-1">{item.subtitle}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Right navigation button */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/80 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
} 