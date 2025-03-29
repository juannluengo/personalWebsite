import React, { ReactNode } from 'react';
import Footer from './Footer';
import NavigationTabs from '../navigation/NavigationTabs';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <NavigationTabs />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 