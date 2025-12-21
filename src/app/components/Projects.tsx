import { Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce application with user authentication, product management, and payment integration. Built with modern web technologies.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
    },
    {
      title: 'Task Management App',
      description:
        'A mobile-responsive task management application with drag-and-drop functionality, real-time updates, and collaborative features.',
      tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      github: '#',
    },
    {
      title: 'Code Snippet Manager',
      description:
        'A developer tool for organizing and sharing code snippets with syntax highlighting, tagging system, and search functionality.',
      tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Auth0'],
      github: '#',
    },
    {
      title: 'Data Visualization Dashboard',
      description:
        'An interactive dashboard for visualizing complex datasets with multiple chart types, filtering options, and export capabilities.',
      tags: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: '#',
    },
    {
      title: 'Weather Forecast App',
      description:
        'A responsive weather application that provides real-time weather data, forecasts, and location-based recommendations using external APIs.',
      tags: ['JavaScript', 'REST API', 'CSS', 'OpenWeather'],
      github: '#',
    },
    {
      title: 'Portfolio Website Generator',
      description:
        'A tool that helps developers create customizable portfolio websites with pre-built templates, theme options, and markdown support.',
      tags: ['React', 'Tailwind', 'Markdown', 'GitHub Pages'],
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl hover:shadow-blue-500/10 transition-shadow bg-gray-800 border-gray-700">
              <div className="p-6">
                <h3 className="text-xl mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="h-4 w-4" />
                  Code
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}