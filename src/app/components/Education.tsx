import { GraduationCap } from 'lucide-react';
import { Card } from './ui/card';

export function Education() {
  const education = [
    {
      icon: GraduationCap,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'State University',
      period: '2022 - 2026',
      details: [
        'Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems',
        'Member of Computer Science Club',
      ],
    },
    {
      icon: GraduationCap,
      degree: 'Bachelor of Science in Mechanical Engineering',
      institution: 'State University',
      period: '2022 - 2026',
      details: [
        'Relevant Coursework: Thermodynamics, Fluid Mechanics, CAD Design, Manufacturing Processes',
        'Member of Engineering Society',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <Card key={index} className="p-8 bg-gray-900 shadow-lg border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2 text-white">{edu.degree}</h3>
                    <p className="text-lg text-gray-300 mb-1">{edu.institution}</p>
                    <p className="text-gray-500 mb-4">{edu.period}</p>
                    <ul className="space-y-2">
                      {edu.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-gray-400 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}