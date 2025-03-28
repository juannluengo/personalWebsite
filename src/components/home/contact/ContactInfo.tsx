import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import SocialLinks from './SocialLinks';

interface ContactInfoProps {
  email: string;
  description: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ email, description }) => {
  return (
    <div className="bg-zinc-900/50 rounded-lg p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
        <p className="text-white/80 mb-6 whitespace-pre-line">
          {description}
        </p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-white/60 mr-3" />
            <a href={`mailto:${email}`} className="text-white hover:text-white/80">
              {email}
            </a>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Connect with me</h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactInfo; 