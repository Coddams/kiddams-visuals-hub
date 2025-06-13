
import React from 'react';
import { Play } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'CASH COW',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      category: 'YouTube Content'
    },
    {
      title: 'REEL',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      category: 'Social Media'
    },
    {
      title: 'VLOG',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      category: 'Personal Content'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">MY BEST EDITS</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative overflow-hidden rounded-lg bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/80 transition-colors duration-300 cursor-pointer">
                    <Play className="text-white w-6 h-6 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-purple-400 text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
