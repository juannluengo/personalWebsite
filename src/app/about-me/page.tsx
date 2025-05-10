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
                          <p className="text-gray-300">Never settling for "good enough" when things can be faster, simpler, or more effective. It's about assuming that improvement is always possible. Hunt friction, even the invisible kind.</p>
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
                          <h4 className="text-white font-semibold mb-2">👉 Create meaning with impact</h4>
                          <p className="text-gray-300">I don't just want to build. I want to make something that matters. A product, a system or a movement. Something that makes people's lives better in real, tangible ways.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">👉 Leave a mark, not a footprint</h4>
                          <p className="text-gray-300">I want to exit the world better than I found it. Smarter systems, more human connections and fewer pointless frictions. Legacy through contribution. Individually, on my corner of world, and globally, through the impact of the systems I help create.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">👉 Build something people actually use</h4>
                          <p className="text-gray-300">Not vaporware. Not slides. I want to create things that are used, loved, and even depended on. Where code, design, and vision meet real need.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">👉 Fully experience life, not just pass through it</h4>
                          <p className="text-gray-300">We only get one shot at this. I want to live a life that is worth remembering. Happiness, in all its forms, is everyones goal.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">👉 Learn relentlessly, curiously and broadly</h4>
                          <p className="text-gray-300">I'm chasing understanding. Tech, strategy, people, life. Everything is a system to map, a problem to unpack, or a lesson waiting.</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">👉 Connect deeply to understand humanity</h4>
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
                  title: "Basics",
                  content: (
                    <div className="space-y-6">
                      <ul className="space-y-6 text-gray-300">
                        <li>
                          <span className="mr-2">👉</span>
                          I was born and raised in
                          <a href="https://en.wikipedia.org/wiki/Madrid" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-2 py-1 bg-white text-black text-xs font-medium rounded-md hover:bg-gray-200 transition-colors mx-1">
                            Madrid
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          </a>, Spain, in what I proudly call the city's best neighborhood:
                          <a href="https://es.wikipedia.org/wiki/Arganzuela" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-2 py-1 bg-white text-black text-xs font-medium rounded-md hover:bg-gray-200 transition-colors mx-1">
                            Arganzuela
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          </a>.
                          I'm not technically a "gato"—those born to Madrid-born parents—but this city runs deep in my veins. Its diversity, talent, and vibrant day-to-day life are unmatched, and few places in the world offer the quality of life Spain does. I love this country.
                        </li>
                        <li>
                          <span className="mr-2">👉</span>
                          Sports have always played a big role in my life. I've dabbled in everything from roller skating to swimming, but basketball was my home court for years. These days, I hit the gym for health and hiking when I want joy and peace. If the time allows it, I go to the mountains, if not, a stroll around Madrid does the job just fine.
                        </li>
                        <li>
                          <span className="mr-2">👉</span>
                          I'm a passionate traveler. While Spain offers nearly every landscape under the sun, discovering other cultures remains one of my biggest joys. A recent trip to China and Japan blew my mind—two incredible, complex, and inspiring countries that expanded my perspective in ways I'm still processing.
                        </li>
                        <li>
                          <span className="mr-2">👉</span>
                          Since I was a kid, I've wanted to build things. I used to spend hours dismantling toys, organizing their components, and reassembling them into something new. (I still have boxes full of tiny motors and random circuits.) That builder's mindset stuck with me.
                        </li>
                        <li>
                          <span className="mr-2">👉</span>
                          Now, I'm working at Amazon, mainly using SQL to build internal tools that help teams across Europe measure and improve employee safety. It's not just technical—it's about enabling people to make better, faster decisions at scale.
                        </li>
                        <li>
                          <span className="mr-2">👉</span>
                          I've also had the chance to live abroad, in
                          <a href="https://en.wikipedia.org/wiki/Niort" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-2 py-1 bg-white text-black text-xs font-medium rounded-md hover:bg-gray-200 transition-colors mx-1">
                            Niort
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          </a>, France and
                          <a href="https://en.wikipedia.org/wiki/Eindhoven" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-2 py-1 bg-white text-black text-xs font-medium rounded-md hover:bg-gray-200 transition-colors mx-1">
                            Eindhoven
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          </a>, Netherlands. Each place challenged me in unexpected ways and added new layers to how I see the world—and myself.
                        </li>
                      </ul>
                    </div>
                  )
                })}
                className="bg-gray-900 rounded-lg p-8 text-left transition-all duration-200 hover:bg-gray-800 hover:scale-[1.02] cursor-pointer w-full">
                <h3 className="text-xl font-semibold mb-4 text-white">Basics</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Born and raised in Madrid, Spain</li>
                  <li>Love reading, traveling, and being outside</li>
                  <li>Always liked to take things apart and put them back together</li>
                  <li>Hiking passionate</li>
                  <li>My love language is prioritization</li>
                </ul>
              </button>

              <button
                onClick={() => openModal({
                  title: "People I admire",
                  content: (
                    <div className="space-y-6">
                      <p className="text-gray-300">text</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">head</h4>
                          <p className="text-gray-300">text</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">head</h4>
                          <p className="text-gray-300">text</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">head</h4>
                          <p className="text-gray-300">text</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
                className="bg-gray-900 rounded-lg p-8 text-left transition-all duration-200 hover:bg-gray-800 hover:scale-[1.02] cursor-pointer w-full">
                <h3 className="text-xl font-semibold mb-4 text-white">People I admire</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>text</li>
                  <li>text</li>
                  <li>text</li>
                  <li>text</li>
                  <li>text</li>
                </ul>
              </button>

              <button
                onClick={() => openModal({
                  title: "My interests",
                  content: (
                    <div className="space-y-6">
                      <p className="text-gray-300">text</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">head</h4>
                          <p className="text-gray-300">text</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">head</h4>
                          <p className="text-gray-300">text</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">head</h4>
                          <p className="text-gray-300">text</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
                className="bg-gray-900 rounded-lg p-8 text-left transition-all duration-200 hover:bg-gray-800 hover:scale-[1.02] cursor-pointer w-full">
                <h3 className="text-xl font-semibold mb-4 text-white">My interests</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>text</li>
                  <li>text</li>
                  <li>text</li>
                  <li>text</li>
                  <li>text</li>
                </ul>
              </button>

              <button
                onClick={() => openModal({
                  title: "Travelling",
                  content: (
                    <div>
                      <p className="text-gray-300 mb-6">
                        Traveling is one of my greatest passions, and I probably have my mother to thank for that. She was a pioneer in her time, turning her love for exploration into a career at a travel agency. Her explorer spirit and curiosity for the new and unexplored, definitely passed on.
                      </p>
                      <p className="text-gray-300 mb-6">
                        From hiking in the Ethiopian highlands, to a school exchange in Mumbai, to tracing the economic boom in Shenzhen, soaking in the quiet traditions of Kyoto, briefly living the American dream in Maryland, and uncovering hidden gems all across Europe. I've always chased the feeling of discovering something (and someone) new.
                      </p>
                      <p className="text-gray-300 mb-6">
                        Madrid has always been my flight hub, though Eindhoven took over for a year. Every airport feels like a portal. Every map is an invitation. And Ryanair and Iberia my biggest allies.
                      </p>
                      <p className="text-gray-300 mb-6">
                        I genuinely believe you can tell when someone's well-traveled, not by the passport stamps, but by the way they stay calm in unfamiliar situations, approach the world with curiosity, and navigate problems with creativity and empathy. Above all, being well-traveled means being respectful, humble, and deeply curious about how other people live, think, and connect.
                      </p>
                      <p className="text-gray-300 mb-6">
                        I'm a couch surfer at heart. Some of my best trips happened thanks to friends (and friends of friends): a couch in Florence, a school buddy in Beijing, or just raw-dogging the night in Ethiopia, crashing wherever the stars found us.
                      </p>
                      <p className="text-gray-300 mb-6">
                        And that's the beautiful thing about travel: the human connections. We're all in this world together.
                      </p>
                      <p className="text-gray-300">
                        Next stop? Los Angeles, summer 2025, to visit a close friend. And since I'll already be across the Atlantic, I'm swinging by Houston and Mexico City to reconnect with family.
                      </p>
                      <div className="relative w-full max-w-5xl h-[40rem] sm:h-[48rem] mx-auto mt-4">
                        <Image
                          src={getImagePath('/images/travel/TravelMap2024.png')}
                          alt="Travel Map 2024"
                          fill
                          className="object-contain rounded-lg shadow-lg"
                          priority
                        />
                      </div>
                    </div>
                  )
                })}
                className="bg-gray-900 rounded-lg p-8 text-left transition-all duration-200 hover:bg-gray-800 hover:scale-[1.02] cursor-pointer w-full">
                <h3 className="text-xl font-semibold mb-4 text-white">Travelling</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>The whole world has never been as connected as it is today. I want to see it all.</li>
                  <li>Backpacking, road trips, and city breaks</li>
                  <li>Always planning the next journey</li>
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
