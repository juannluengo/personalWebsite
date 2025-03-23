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
              <svg className="h-8 w-8" viewBox="0 0 202 246" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M149.629 85.6795C149.537 72.1818 155.873 61.3584 168.541 52.6866C160.46 40.6635 148.072 34.1152 131.511 33.034C115.872 31.9844 98.5908 42.1826 91.2587 42.1826C83.617 42.1826 68.6872 33.3429 57.001 33.3429C29.2299 33.7752 0 55.5022 0 100.214C0 112.138 2.32984 124.516 6.98736 137.349C13.4217 154.632 39.521 202 66.5647 201.48C79.0321 201.236 87.7967 193.069 103.736 193.069C119.32 193.069 127.384 201.48 140.89 201.48C168.014 201.154 191.962 158.162 198 140.86C163.884 125.262 149.629 106.226 149.629 85.6795Z" />
                <path d="M122.006 25.4323C131.744 13.4089 129.738 2.37445 129.219 0C118.237 0.57038 105.309 6.82093 98.1895 14.9587C90.3414 23.9742 86.3932 34.6091 87.263 42.1827C99.3232 43.1711 112.023 37.4546 122.006 25.4323Z" />
              </svg>
              <span className="ml-1 text-xl font-semibold apple-tv-logo">tv+</span>
            </div>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Button variant="link" className="text-white hover:text-white/80">
              <Link href="/">Originals</Link>
            </Button>
            <Button variant="link" className="text-white hover:text-white/80">
              <Link href="/mls">MLS Season Pass</Link>
            </Button>
            <Button variant="link" className="text-white hover:text-white/80">
              <Link href="/store">Store</Link>
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
