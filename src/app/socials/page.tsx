'use client';

import React from 'react';
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { personalInfo } from '@/data/personal';
import Layout from '@/components/layout/Layout';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function SocialsPage() {
  // Social icon mapping with proper typing
  const socialIcons: Record<string, React.ReactNode> = {
    github: <Github size={32} className="text-white" />,
    linkedin: <Linkedin size={32} className="text-white" />,
    twitter: <Twitter size={32} className="text-white" />
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Gooey Text animation */}
          <div className="h-[200px] flex items-center justify-center mb-12">
            <GooeyText
              texts={["Connect", "Reach Out", "Let's Talk"]}
              morphTime={1}
              cooldownTime={0.25}
              className="font-bold"
            />
          </div>

          {/* Social links section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Find me online</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(personalInfo.social).map(([platform, url]) => (
                <a 
                  href={url}
                  key={platform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RainbowButton className="w-full h-32">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-4xl mb-4">
                        {platform in socialIcons ? socialIcons[platform] : null}
                      </div>
                      <span className="text-xl capitalize text-white">{platform}</span>
                    </div>
                  </RainbowButton>
                </a>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-400 max-w-2xl mx-auto">
                {personalInfo.contactDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 