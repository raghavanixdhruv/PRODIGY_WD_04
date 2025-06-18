import React from 'react';
import { MapPin, GraduationCap, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-16">
            About <span className="underline decoration-4 underline-offset-8">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Working on laptop"
                className="rounded-none shadow-lg border border-gray-200"
              />
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm a passionate web developer who recently completed my Diploma in Computer Engineering. 
                I love creating clean, functional digital solutions and have experience working with 
                various technologies including Python, Java, JavaScript, and Android development.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                During my studies, I completed an internship focused on Android development where I 
                built an attendance system. I'm always eager to learn new technologies and take on 
                challenging projects that push my skills forward.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-black" />
                  <span className="text-gray-700">Diploma in Computer Engineering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-black" />
                  <span className="text-gray-700">Android Development Internship</span>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-black mb-4">Technologies I Work With</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 border border-gray-200">
                    <h4 className="font-semibold text-black mb-2">Frontend</h4>
                    <p className="text-gray-700 text-sm">React, HTML/CSS, JavaScript</p>
                  </div>
                  <div className="bg-white p-4 border border-gray-200">
                    <h4 className="font-semibold text-black mb-2">Backend</h4>
                    <p className="text-gray-700 text-sm">Node.js, Python, MongoDB</p>
                  </div>
                  <div className="bg-white p-4 border border-gray-200">
                    <h4 className="font-semibold text-black mb-2">Mobile</h4>
                    <p className="text-gray-700 text-sm">Android Development</p>
                  </div>
                  <div className="bg-white p-4 border border-gray-200">
                    <h4 className="font-semibold text-black mb-2">Design</h4>
                    <p className="text-gray-700 text-sm">UI/UX, Figma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;