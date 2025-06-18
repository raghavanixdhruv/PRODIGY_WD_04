import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="w-6 h-6 text-black" />
              <span className="text-xl font-bold text-black">Dhruv Raghavani</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-600">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-black fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">
              © 2024 Dhruv Raghavani. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;