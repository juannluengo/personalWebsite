import React from 'react';
import { Button } from '@/components/ui/button';

const SkillsEducation = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-900 w-full py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills Section */}
          <div className="bg-black/30 p-6 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl text-white font-medium mb-3">Technical</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                  <li>Skill 4</li>
                  <li>Skill 5</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl text-white font-medium mb-3">Soft Skills</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                  <li>Skill 4</li>
                  <li>Skill 5</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Education Section */}
          <div className="bg-black/30 p-6 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-white/20 pb-2">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl text-white font-medium">Degree Name</h3>
                <p className="text-white/80">University Name</p>
                <p className="text-white/60 text-sm">2015 - 2019</p>
                <p className="text-white/80 mt-2">Brief description of your studies and achievements.</p>
              </div>
              
              <div>
                <h3 className="text-xl text-white font-medium">Another Degree/Certification</h3>
                <p className="text-white/80">Institution Name</p>
                <p className="text-white/60 text-sm">2013 - 2015</p>
                <p className="text-white/80 mt-2">Brief description of your studies and achievements.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Button className="bg-white text-black hover:bg-white/90 min-w-[200px]">
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkillsEducation;
