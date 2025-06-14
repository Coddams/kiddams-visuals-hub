
import React from 'react';
import { Play } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'CASH COW',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      category: 'YouTube Content',
      description: 'High-converting video content designed to maximize revenue'
    },
    {
      title: 'REEL',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
      category: 'Social Media',
      description: 'Viral short-form content optimized for engagement'
    },
    {
      title: 'VLOG',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      category: 'Personal Content',
      description: 'Cinematic storytelling for personal brands'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent animate-fade-in">
            MY BEST EDITS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-purple-500/80 group-hover:scale-110 transition-all duration-500 cursor-pointer border border-white/30 group-hover:border-purple-400/50">
                    <Play className="text-white w-6 h-6 ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-purple-400 text-sm mb-2">{project.category}</p>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
