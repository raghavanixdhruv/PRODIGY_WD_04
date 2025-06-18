import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Lead development of enterprise web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.',
      achievements: [
        'Increased application performance by 40%',
        'Led a team of 5 developers',
        'Implemented microservices architecture'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect implementations.',
      achievements: [
        'Built 15+ responsive web applications',
        'Reduced load times by 60%',
        'Implemented automated testing suites'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      period: '2019 - 2020',
      description: 'Specialized in creating interactive user interfaces and optimizing user experiences for various client websites and applications.',
      achievements: [
        'Improved user engagement by 35%',
        'Created reusable component library',
        'Collaborated with UX designers'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Stanford University',
      period: '2015 - 2019',
      description: 'Graduated Magna Cum Laude with focus on Software Engineering and Human-Computer Interaction.'
    },
    {
      degree: 'Full-Stack Web Development Bootcamp',
      school: 'General Assembly',
      period: '2019',
      description: 'Intensive 12-week program covering modern web development technologies and best practices.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Experience & <span className="text-blue-400">Education</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
                Work Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-500/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                    
                    <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                      
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <Calendar className="w-6 h-6 text-blue-400 mr-3" />
                Education
              </h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-purple-500/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                    
                    <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                      
                      <p className="text-purple-400 font-medium mb-3">{edu.school}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;