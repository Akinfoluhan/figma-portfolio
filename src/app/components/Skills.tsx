import { Badge } from './ui/badge';

export function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL', 'HTML/CSS'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Express', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'MongoDB', 'PostgreSQL'],
    },
    {
      category: 'Concepts',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'REST APIs', 'Agile', 'Testing'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl mb-4 text-white border-b border-gray-700 pb-2">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border border-blue-500/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}