import React from 'react';
import { Button } from '@/components/ui/button';

const PromotionalBanner = () => {
  return (
    <div className="bg-blue-600 w-full py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">All Apple Originals. Only on Apple TV+.</h2>
        <p className="text-white/90 mb-4 text-lg">
          Start watching with 7 days free. Or 3 months free when you buy an eligible Apple device.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-white text-black hover:bg-white/90 min-w-[120px]">
            Try It Free
          </Button>
          <Button variant="link" className="text-white hover:text-white/80">
            See offer details
          </Button>
        </div>
        <p className="text-white/60 text-xs mt-4">
          7 days free, then $9.99/month. Terms apply.
        </p>
      </div>
    </div>
  );
};

export default PromotionalBanner;
