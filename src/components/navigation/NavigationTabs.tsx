'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

type NavTab = {
  title: string;
  href: string;
};

const tabs: NavTab[] = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'Experience', href: '/experience' },
  { title: 'Skills', href: '/skills' },
  { title: 'Contact', href: '/contact' }
];

export default function NavigationTabs() {
  const pathname = usePathname();

  return (
    <div className="bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-sm w-full h-16 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-full flex items-center">
        {/* Logo */}
        <Link href="/">
          <div className="mr-10 flex items-center">
            <span className="text-white font-bold text-xl">Juan</span>
            <span className="text-white/70 text-xl">.dev</span>
          </div>
        </Link>
        
        {/* Navigation Tabs */}
        <nav className="flex space-x-1 h-full items-center">
          {tabs.map((tab) => {
            const isActive = pathname === tab.href;
            
            return (
              <Link 
                key={tab.title} 
                href={tab.href}
                className="relative h-full flex items-center px-4"
              >
                <motion.div
                  className="relative h-full flex items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className={`${isActive ? 'text-white font-medium' : 'text-gray-300'} hover:text-white transition-colors`}>
                    {tab.title}
                  </span>
                  
                  {isActive && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-t-md"
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>
        
        {/* Right section */}
        <div className="ml-auto flex items-center">
          <button className="text-white hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 