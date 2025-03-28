import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';
import { personalInfo } from '@/data/personal';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
}

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <Linkedin className="h-5 w-5 text-white" />,
      href: personalInfo.social.linkedin,
      ariaLabel: "LinkedIn Profile"
    },
    {
      icon: <Github className="h-5 w-5 text-white" />,
      href: personalInfo.social.github,
      ariaLabel: "GitHub Profile"
    },
    {
      icon: <Twitter className="h-5 w-5 text-white" />,
      href: personalInfo.social.twitter,
      ariaLabel: "Twitter Profile"
    }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.href} 
          aria-label={link.ariaLabel}
          className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 