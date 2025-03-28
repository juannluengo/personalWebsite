import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm = () => {
  return (
    <div className="bg-zinc-900/50 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm text-white/80 mb-1">Name</label>
          <Input 
            id="name" 
            placeholder="Your Name" 
            className="bg-zinc-800 border-zinc-700 text-white"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm text-white/80 mb-1">Email</label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your.email@example.com" 
            className="bg-zinc-800 border-zinc-700 text-white"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm text-white/80 mb-1">Message</label>
          <Textarea 
            id="message" 
            placeholder="Your message..." 
            className="bg-zinc-800 border-zinc-700 text-white min-h-[150px]"
          />
        </div>
        
        <Button className="w-full bg-white text-black hover:bg-white/90">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm; 