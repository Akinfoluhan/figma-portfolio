import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function Experience() {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Tech Startup Inc.',
      period: 'June 2024 - August 2024',
      responsibilities: [
        'Developed responsive web components using React and TypeScript',
        'Collaborated with senior developers on feature implementation',
        'Participated in code reviews and agile development processes',
        'Improved application performance by 30% through optimization',
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Git'],
    },
    {
      title: 'Web Development Intern',
      company: 'Digital Solutions LLC',
      period: 'January 2024 - May 2024',
      responsibilities: [
        'Built landing pages and marketing websites from design mockups',
        'Implemented REST API integrations for dynamic content',
        'Fixed bugs and improved user experience based on feedback',
        'Wrote technical documentation for internal tools',
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'WordPress', 'REST APIs'],
    },
    {
      title: 'Teaching Assistant - Intro to Programming',
      company: 'State University',
      period: 'September 2023 - December 2023',
      responsibilities: [
        'Led weekly lab sessions for 25+ students',
        'Graded assignments and provided constructive feedback',
        'Held office hours to help students with coursework',
        'Created supplemental learning materials and coding examples',
      ],
      technologies: ['Python', 'Java', 'Data Structures', 'Algorithms'],
    },
    {
      title: 'Research Assistant - Computer Vision Lab',
      company: 'University Research Department',
      period: 'May 2023 - August 2023',
      responsibilities: [
        'Assisted in developing machine learning models for image recognition',
        'Collected and preprocessed datasets for training neural networks',
        'Conducted literature reviews on computer vision techniques',
        'Presented research findings at weekly lab meetings',
      ],
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'NumPy', 'Jupyter'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            My professional journey and hands-on experience in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-blue-500/10 transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-1">{exp.title}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>

              <div className="mb-4">
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start text-sm">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="text-xs bg-gray-700 text-gray-300 border-gray-600"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}