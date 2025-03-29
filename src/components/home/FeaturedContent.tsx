'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

interface FeaturedContentProps {
  tabs: Tab[];
}

export default function FeaturedContent({ tabs }: FeaturedContentProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  return (
    <div className="py-4 container mx-auto">
      <div className="flex flex-col items-center">
        {/* Content area */}
        <div className="w-full mb-4">
          <AnimatePresence mode="wait">
            {tabs.map((tab) => 
              tab.id === activeTab && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {tab.content}
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
        
        {/* Dot indicators - like Prime Video's category selector */}
        <div className="flex space-x-2 justify-center mb-6">
          {tabs.map((tab) => (
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