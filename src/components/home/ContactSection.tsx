import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
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
          
          {/* Contact Information */}
          <div className="bg-zinc-900/50 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <p className="text-white/80 mb-6">
                Feel free to reach out to me using the contact form or through any of the channels below. 
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-white/60 mr-3" />
                  <a href="mailto:your.email@example.com" className="text-white hover:text-white/80">
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Connect with me</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                  <Github className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection; 