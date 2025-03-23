import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white/60 py-12 border-t border-zinc-800/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-medium mb-4">Shop and Learn</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Store</Link></li>
              <li><Link href="#" className="hover:text-white">Mac</Link></li>
              <li><Link href="#" className="hover:text-white">iPad</Link></li>
              <li><Link href="#" className="hover:text-white">iPhone</Link></li>
              <li><Link href="#" className="hover:text-white">Watch</Link></li>
              <li><Link href="#" className="hover:text-white">AirPods</Link></li>
              <li><Link href="#" className="hover:text-white">TV & Home</Link></li>
              <li><Link href="#" className="hover:text-white">AirTag</Link></li>
              <li><Link href="#" className="hover:text-white">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4">Apple Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Apple Music</Link></li>
              <li><Link href="#" className="hover:text-white">Apple TV+</Link></li>
              <li><Link href="#" className="hover:text-white">Apple Fitness+</Link></li>
              <li><Link href="#" className="hover:text-white">Apple News+</Link></li>
              <li><Link href="#" className="hover:text-white">Apple Arcade</Link></li>
              <li><Link href="#" className="hover:text-white">iCloud</Link></li>
              <li><Link href="#" className="hover:text-white">Apple One</Link></li>
              <li><Link href="#" className="hover:text-white">Apple Card</Link></li>
              <li><Link href="#" className="hover:text-white">Apple Books</Link></li>
              <li><Link href="#" className="hover:text-white">Apple Podcasts</Link></li>
              <li><Link href="#" className="hover:text-white">App Store</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4">Apple Store</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Find a Store</Link></li>
              <li><Link href="#" className="hover:text-white">Genius Bar</Link></li>
              <li><Link href="#" className="hover:text-white">Today at Apple</Link></li>
              <li><Link href="#" className="hover:text-white">Apple Camp</Link></li>
              <li><Link href="#" className="hover:text-white">Apple Store App</Link></li>
              <li><Link href="#" className="hover:text-white">Certified Refurbished</Link></li>
              <li><Link href="#" className="hover:text-white">Apple Trade In</Link></li>
              <li><Link href="#" className="hover:text-white">Financing</Link></li>
              <li><Link href="#" className="hover:text-white">Order Status</Link></li>
              <li><Link href="#" className="hover:text-white">Shopping Help</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-white">Sales and Refunds</Link></li>
              <li><Link href="#" className="hover:text-white">Legal</Link></li>
              <li><Link href="#" className="hover:text-white">Site Map</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800/40">
          <p className="text-sm">
            Copyright © {currentYear} Apple Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white">Terms of Use</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white">Sales and Refunds</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white">Legal</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white">Site Map</Link>
          </div>
          <p className="mt-4 text-sm">
            United States
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
