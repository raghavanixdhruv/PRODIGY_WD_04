import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-black p-1">
              <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                <img
                  src="https://wallpapers.com/images/high/generic-person-icon-profile-ulmsmhnz0kqafcqn-ulmsmhnz0kqafcqn.png"
                  alt="Dhruv Raghavani"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="underline decoration-4 underline-offset-8">
              Dhruv Raghavani
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Web Developer crafting clean, functional, and user-centered digital experiences
          </p>

          

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 mb-16">
            <a href="https://github.com/" className="text-gray-600 hover:text-black transition-colors duration-200">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/dhruv-raghavani-2a15922b5/" className="text-gray-600 hover:text-black transition-colors duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://gmail.com/" className="text-gray-600 hover:text-black transition-colors duration-200">
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-600 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;