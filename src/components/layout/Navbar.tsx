import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800/40">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center">
            <div className="text-white flex items-center">
              <img src="/images/NFTCalavera.png" alt="Logo" className="h-8 w-8" />
            </div>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Button variant="link" className="text-white hover:text-white/80">
              <Link href="/">Originals</Link>
            </Button>
            <Button variant="link" className="text-white hover:text-white/80">
              <Link href="/sports">Sports</Link>
            </Button>
            <Button variant="link" className="text-white hover:text-white/80">
              <Link href="/collections">Collections</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
