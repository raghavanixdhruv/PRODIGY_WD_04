import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 60 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', level: 96 },
        { name: 'Node.js', level: 88 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 90 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'UI/UX', level: 90 },
        { name: 'Git', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-16">
            My <span className="underline decoration-4 underline-offset-8">Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 border border-gray-200 p-8">
                <h3 className="text-2xl font-semibold text-black mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-black text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-300 h-2">
                        <div
                          className="bg-black h-2 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;