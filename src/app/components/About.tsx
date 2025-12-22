import { Code2, Lightbulb, Users, Trophy } from 'lucide-react';
import { Card } from './ui/card';
import React from 'react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Problem Solver',
      description: 'Passionate about tackling complex challenges with elegant solutions',
    },
    {
      icon: Lightbulb,
      title: 'Quick Learner',
      description: 'Always eager to learn new technologies and frameworks',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Experience collaborating on group projects and open source',
    },
    {
      icon: Trophy,
      title: 'Driven',
      description: 'Committed to excellence and continuous improvement',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I'm a dedicated computer science student with a passion for software development
            and technology. I love creating projects that solve real-world problems and am
            constantly expanding my skill set through coursework, personal projects, and
            internships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-shadow bg-gray-800 border-gray-700"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}