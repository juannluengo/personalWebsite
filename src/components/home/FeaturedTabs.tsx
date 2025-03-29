'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredTabs, FeaturedTab } from '@/data/content';

export default function FeaturedTabs() {
  const [activeTab, setActiveTab] = useState(featuredTabs[0]?.id || '');

  // Function to render content based on the active tab
  const renderContent = (tabId: string) => {
    switch (tabId) {
      case 'featured-1':
        return (
          <div className="bg-gray-800 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Featured Project</h3>
            <p className="mb-6">This would be your most impressive or recent work highlighted here.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              View Project
            </button>
          </div>
        );
      case 'featured-2':
        return (
          <div className="bg-gray-800 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">About Juan</h3>
            <p className="mb-6">A brief summary of your background, skills, and what you're passionate about.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Read More
            </button>
          </div>
        );
      case 'featured-3':
        return (
          <div className="bg-gray-800 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-6">Interested in working together? Feel free to reach out!</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Contact Me
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-4 container mx-auto">
      <div className="flex flex-col items-center">
        {/* Content area */}
        <div className="w-full mb-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent(activeTab)}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Dot indicators - like Prime Video's category selector */}
        <div className="flex space-x-2 justify-center mb-6">
          {featuredTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="focus:outline-none"
            >
              <motion.div
                className={`h-2.5 w-2.5 rounded-full ${activeTab === tab.id ? 'bg-white' : 'bg-gray-600'}`}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                animate={{ 
                  scale: activeTab === tab.id ? 1.2 : 1,
                  backgroundColor: activeTab === tab.id ? '#fff' : '#4b5563' 
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 