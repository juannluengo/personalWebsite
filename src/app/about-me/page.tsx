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
                      <p className="text-gray-300">Our core values shape everything we do and define who we are. Having a clear vision and understanding of them is key to being able to make the right decisions. This is still an ongoing process for me.</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">👉 Respect first, always</h4>
                          <p className="text-gray-300">I lead with respect. It's non-negotiable. Whether it's collaboration, critique, or conflict, it starts with treating others with dignity.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">👉 Relentless self-improvement</h4>
                          <p className="text-gray-300">Every day is a shot at becoming a sharper, stronger, more grounded version of yourself. Personally, professionally and intellectually, there's always room for improvement.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">👉 Family and loved ones as the North Star</h4>
                          <p className="text-gray-300">No achievement matters if it comes at the cost of your people. Loved ones come first, full stop.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">👉 Practicality + velocity</h4>
                          <p className="text-gray-300">I move fast and smart. Solutions must be actionable, lean, and built for momentum, not over-engineered theory. Most decisiones are two way doors, not one way streets.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">👉 Directness and kindness. Together</h4>
                          <p className="text-gray-300">Say what you mean. Don't sugarcoat, but also, don't be a jerk. Honesty and kindness aren't opposites. Both will save us a lot of time and energy, and will help us build a system.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">👉 There's always a better way</h4>
                          <p className="text-gray-300">Never settling for “good enough” when things can be faster, simpler, or more effective. It's about assuming that improvement is always possible. Hunt friction, even the invisible kind.</p>
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
                      <span className="font-medium text-white">Respect first, always</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Relentless self-improvement</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Family and loved ones as the north star</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Practicality + velocity</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Directness and kindness. Together</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">There's always a better way</span>
                    </div>
                  </li>
                </ul>
              </button>

              <button 
                onClick={() => openModal({
                  title: "Future Goals",
                  content: (
                    <div className="space-y-6">
                      <p className="text-gray-300">My goals are driven by a desire to make a meaningful impact. My greatest achivements will be measured not by the status or money but by the smiles I was able to put on people's faces and the relive I was able to give them.</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Create meaning with impact</h4>
                          <p className="text-gray-300">I don't just want to build. I want to make something that matters. A product, a system or a movement. Something that makes people's lives better in real, tangible ways.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Leave a mark, not a footprint</h4>
                          <p className="text-gray-300">I want to exit the world better than I found it. Smarter systems, more human connections and fewer pointless frictions. Legacy through contribution. Individually, on my corner of world, and globally, through the impact of the systems I help create.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Build something people actually use</h4>
                          <p className="text-gray-300">Not vaporware. Not slides. I want to create things that are used, loved, and even depended on. Where code, design, and vision meet real need.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Fully experience life, not just pass through it</h4>
                          <p className="text-gray-300">We only get one shot at this. I want to live a life that is worth remembering. Happiness, in all its forms, is everyones goal.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Learn relentlessly, curiously and broadly</h4>
                          <p className="text-gray-300">I'm chasing understanding. Tech, strategy, people, life. Everything is a system to map, a problem to unpack, or a lesson waiting.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Connect deeply to understand humanity</h4>
                          <p className="text-gray-300">I value clarity and speed, but also depth. I want to learn what makes people tick, not just in theory, but through shared experiences, stories, and mutual respect.</p>
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
                      <span className="font-medium text-white">Create meaning with impact</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Leave a mark, not a footprint</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Build something people actually use</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Fully experience life, not just pass through it</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Learn relentlessly, curiously and broadly</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <div>
                      <span className="font-medium text-white">Connect deeply to understand humanity</span>
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
