
import React from 'react';
import { Play } from 'lucide-react';
import FadeInOnScroll from "../components/ui/FadeInOnScroll";


const Portfolio = () => {
  const projects = [
    {
      title: 'ANIMATED EXPLAINER',
      image: 'YouTubeCashcow.PNG',
      category: 'YouTube Content',
      description: '2d animated explainer videos for YouTube channels',
      embedUrl: 'https://www.youtube.com/embed/fq3uJOo6oLQ?si=QqPrF1qe5LilmjTJ" '
   },
   
    {
      title: 'PRODUCT ADS',
      image: 'product.PNG',
      category: 'Social Media',
      description: 'Simple and professional commercial product edits',
      embedUrl: 'https://www.youtube.com/embed/frKLyVqidYU?si=bUlMUjZL_ovWHdVJ" '
   },
    {
      title: 'REELS AND TIKTOKS',
      image: 'REEL.PNG',
      category: 'SOCIAL MEDIA CONTENT',
      description: 'Flashy attention grabbing content',
      embedUrl: '/videos/cash-cow.mp4'
   }
  ];

  const [activeProject, setActiveProject] = React.useState(null);


  return (
        <FadeInOnScroll direction="bottom">
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
        {projects.map((project, index) => {
          const direction = index === 0 ? "left" : index === 1 ? "bottom" : "right";

          return (
        <FadeInOnScroll key={project.title} direction={direction} delay={index * 0.2}>
              <div
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition-all duration-500"
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
                  <div onClick={() => setActiveProject(project)} className="absolute inset-0 flex items-center justify-center">
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
            </FadeInOnScroll>
          );
        })}
      </div>
        <div className="mt-16 text-center">
          <p className="text-gray-300 text-lg">
            Want to see more of my work? Check out my full portfolio on{" "}
            <a 
              href="https://www.behance.net/joshuakiddams" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline font-semibold"
            >
              Behance
            </a>.
          </p>
        </div>

      </div>
      {activeProject && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center">
    <div className="bg-gray-900 p-6 rounded-xl max-w-3xl w-full relative">
      <button 
        onClick={() => setActiveProject(null)} 
        className="absolute top-4 right-4 text-white text-xl"
      >
        ✕
      </button>

      <iframe
        src={activeProject.embedUrl}
        height="315" 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        referrerpolicy="strict-origin-when-cross-origin" 
        title={activeProject.title}
        className="w-full aspect-video rounded-lg mb-4"
      />


      <h3 className="text-white text-2xl font-bold mb-2">{activeProject.title}</h3>
      <p className="text-purple-400 text-sm mb-1">{activeProject.category}</p>
      <p className="text-gray-300 text-sm">{activeProject.description}</p>
    </div>
  </div>
)}

    </section>
            </FadeInOnScroll>
  );
};

export default Portfolio;
