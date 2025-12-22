import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import React from 'react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl shadow-xl">
              JS
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            John Smith
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            Computer Science Student & Aspiring Developer
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Passionate about building innovative solutions and learning new technologies.
            Currently pursuing my degree and working on exciting projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Get In Touch
            </Button>
          </div>

          <div className="mt-16 animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              <ArrowDown className="h-8 w-8 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}