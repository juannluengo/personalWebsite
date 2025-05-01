import React from 'react';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';

export default function AboutMePage() {
  return (
    <Layout>
      <div className="bg-black text-white min-h-screen py-24 px-4 md:px-8">
        <div className="container mx-auto">
          {/* Larger heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">About Me</h1>
          <p className="text-lg text-gray-400 text-center mb-20 max-w-3xl mx-auto">
            People maximalist and extremelly optimistic for everything that is about to come. Want to know more about me?
          </p>

          {/* Personal Summary Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto items-center">
              <div className="flex items-center justify-center">
                <div className="relative w-[500px] h-[500px]">
                  <Image
                    src="/images/profile/AppIconNFTCalavera.png"
                    alt="NFT Profile"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              {/* Text Content */}
              <div className="flex flex-col justify-center mt-6 md:mt-0">
                <p className="text-lg text-gray-300 mb-4">
                  A doer. A changemaker. A tech enthusiast. I thrive on challenges
                  and love to learn new things. My whole goal is to leave a positive
                  impact on the world.
                </p>
                <p className="text-lg text-gray-300">
                  People oriented and technologically focused. Trying to be the
                  change I want to see in the world.
                </p>
              </div>
            </div>
          </div>

          {/* Values & Goals Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4 flex items-center">
              <span className="mr-3">🎯</span> Values & Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-900 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Continuous Learning</span>
                      <p className="text-gray-300 mt-1">Embracing new challenges and opportunities for growth</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Innovation</span>
                      <p className="text-gray-300 mt-1">Thinking outside the box to solve complex problems</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Collaboration</span>
                      <p className="text-gray-300 mt-1">Working together to achieve greater results</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Future Goals</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Tech Leadership</span>
                      <p className="text-gray-300 mt-1">Leading innovative projects and mentoring others</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Entrepreneurship</span>
                      <p className="text-gray-300 mt-1">Building solutions that make a difference</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Global Impact</span>
                      <p className="text-gray-300 mt-1">Contributing to meaningful technological advancement</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills & Interests Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4 flex items-center">
              <span className="mr-3">🎯</span> Skills & Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-900 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Technical Skills</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Full-stack Web Development</li>
                  <li>React.js & Next.js Ecosystem</li>
                  <li>TypeScript & JavaScript</li>
                  <li>Python & Data Analysis</li>
                  <li>Cloud Services (AWS)</li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Business Skills</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Project Management</li>
                  <li>Business Analysis</li>
                  <li>International Relations</li>
                  <li>Strategic Planning</li>
                  <li>Client Communication</li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Areas of Interest</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>AI & Machine Learning</li>
                  <li>Blockchain Technology</li>
                  <li>UX/UI Design</li>
                  <li>Sustainable Tech</li>
                  <li>EdTech Solutions</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
