'use client'

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import DetailModal from '@/components/shared/DetailModal';
import { getImagePath } from '@/lib/image-path';

interface ModalContent {
  title: string;
  content: React.ReactNode;
}

export default function AboutMePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (content: ModalContent) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

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
                    src={getImagePath('/images/profile/AppIconNFTCalavera.png')}
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
              <button 
                onClick={() => openModal({
                  title: "Core Values",
                  content: (
                    <div className="space-y-6">
                      <p className="text-gray-300">Our core values shape everything we do and define who we are as individuals and as a team.</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Continuous Learning</h4>
                          <p className="text-gray-300">I believe in the power of lifelong learning. Every day presents new opportunities to grow, learn, and improve. Whether it's mastering a new technology, understanding different perspectives, or developing new skills, I embrace each learning opportunity with enthusiasm.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Innovation</h4>
                          <p className="text-gray-300">Innovation is not just about creating something new; it's about finding better solutions to real problems. I constantly challenge myself to think differently and approach problems from unique angles.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Collaboration</h4>
                          <p className="text-gray-300">Great achievements come from working together. I value diverse perspectives and believe that the best solutions emerge from collaborative efforts where different viewpoints and skills come together.</p>
                        </div>
                      </div>
                    </div>
                  )
                })} 
                className="bg-gray-900 rounded-lg p-8 text-left transition-all duration-200 hover:bg-gray-800 hover:scale-[1.02] cursor-pointer w-full"
              >
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
              </button>

              <button 
                onClick={() => openModal({
                  title: "Future Goals",
                  content: (
                    <div className="space-y-6">
                      <p className="text-gray-300">My goals are driven by a desire to make a meaningful impact and push the boundaries of what's possible in technology.</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Tech Leadership</h4>
                          <p className="text-gray-300">Beyond just managing projects, I aim to inspire and guide teams to achieve extraordinary results. This includes fostering an environment of innovation, mentoring the next generation of tech leaders, and driving technological excellence.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Entrepreneurship</h4>
                          <p className="text-gray-300">My entrepreneurial spirit drives me to identify opportunities where technology can solve real-world problems. I'm passionate about building solutions that not only succeed commercially but also create positive social impact.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Global Impact</h4>
                          <p className="text-gray-300">Technology has the power to transform lives globally. I'm committed to working on projects and initiatives that can scale to help people worldwide, whether through innovative software solutions, sustainable technology, or educational platforms.</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
                className="bg-gray-900 rounded-lg p-8 text-left transition-all duration-200 hover:bg-gray-800 hover:scale-[1.02] cursor-pointer w-full"
              >
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
              </button>
            </div>
          </div>

          {/* Skills & Interests Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4 flex items-center">
              <span className="mr-3">🚀</span> Skills & Interests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <button
                onClick={() => openModal({
                  title: "Technical Skills",
                  content: (
                    <div className="space-y-6">
                      <p className="text-gray-300">My technical expertise spans across various domains of software development and engineering.</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Web Development</h4>
                          <p className="text-gray-300">Proficient in modern web technologies and frameworks, with a strong focus on building scalable, performant applications. Expert in React.js, Next.js, and the broader JavaScript/TypeScript ecosystem.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Backend & Cloud</h4>
                          <p className="text-gray-300">Experienced in designing and implementing robust backend systems using Python and Node.js. Well-versed in AWS services and cloud architecture principles.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Data & Analytics</h4>
                          <p className="text-gray-300">Strong background in data analysis and visualization, using Python's data science stack and modern BI tools to derive meaningful insights from complex datasets.</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
                className="bg-gray-900 rounded-lg p-8 text-left transition-all duration-200 hover:bg-gray-800 hover:scale-[1.02] cursor-pointer w-full">
                <h3 className="text-xl font-semibold mb-4 text-white">Technical Skills</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Full-stack Web Development</li>
                  <li>React.js & Next.js Ecosystem</li>
                  <li>TypeScript & JavaScript</li>
                  <li>Python & Data Analysis</li>
                  <li>Cloud Services (AWS)</li>
                </ul>
              </button>

              <button
                onClick={() => openModal({
                  title: "Business Skills",
                  content: (
                    <div className="space-y-6">
                      <p className="text-gray-300">Beyond technical expertise, I've developed strong business and interpersonal skills essential for successful project delivery.</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Project Management</h4>
                          <p className="text-gray-300">Experienced in leading cross-functional teams, managing project timelines, and ensuring successful delivery of complex technical projects.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Business Analysis</h4>
                          <p className="text-gray-300">Skilled in analyzing business requirements, identifying opportunities for improvement, and translating business needs into technical solutions.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Communication</h4>
                          <p className="text-gray-300">Strong ability to communicate complex technical concepts to non-technical stakeholders and maintain effective client relationships.</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
                className="bg-gray-900 rounded-lg p-8 text-left transition-all duration-200 hover:bg-gray-800 hover:scale-[1.02] cursor-pointer w-full">
                <h3 className="text-xl font-semibold mb-4 text-white">Business Skills</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Project Management</li>
                  <li>Business Analysis</li>
                  <li>International Relations</li>
                  <li>Strategic Planning</li>
                  <li>Client Communication</li>
                </ul>
              </button>

              <button
                onClick={() => openModal({
                  title: "Areas of Interest",
                  content: (
                    <div className="space-y-6">
                      <p className="text-gray-300">I'm passionate about emerging technologies and their potential to create positive change.</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">AI & Machine Learning</h4>
                          <p className="text-gray-300">Fascinated by the potential of AI to solve complex problems and create more intelligent systems. Particularly interested in practical applications of machine learning in business contexts.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Blockchain & Web3</h4>
                          <p className="text-gray-300">Exploring the possibilities of decentralized technologies and their potential to revolutionize various industries, from finance to supply chain management.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Sustainable Technology</h4>
                          <p className="text-gray-300">Committed to developing and promoting technologies that contribute to environmental sustainability and social responsibility.</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
                className="bg-gray-900 rounded-lg p-8 text-left transition-all duration-200 hover:bg-gray-800 hover:scale-[1.02] cursor-pointer w-full">
                <h3 className="text-xl font-semibold mb-4 text-white">Areas of Interest</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>AI & Machine Learning</li>
                  <li>Blockchain Technology</li>
                  <li>UX/UI Design</li>
                  <li>Sustainable Tech</li>
                  <li>EdTech Solutions</li>
                </ul>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <DetailModal
          isOpen={modalOpen}
          onClose={closeModal}
          title={modalContent.title}
        >
          {modalContent.content}
        </DetailModal>
      )}
    </Layout>
  );
}
