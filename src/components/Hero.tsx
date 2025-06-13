
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black relative overflow-hidden flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-600/30 rounded-lg -rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-purple-400/15 rounded-lg rotate-45 animate-pulse delay-2000"></div>
      </div>

      {/* Lightning effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/4 w-1 h-20 bg-gradient-to-b from-purple-400 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-16 bg-gradient-to-b from-purple-500 to-transparent animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-purple-400 text-sm font-medium tracking-wider mb-4 animate-fade-in">
              SALEM KIDDAMS
            </p>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
              PROFESSIONAL
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                VIDEO EDITOR
              </span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-md animate-fade-in">
              Making Your Vision Look More Cool
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-none font-medium tracking-wider transition-all duration-300 hover:scale-105 animate-fade-in">
              LET'S TALK
            </Button>
          </div>

          <div className="relative">
            {/* Video editor person silhouette */}
            <div className="relative w-full h-96 bg-gradient-to-t from-purple-900/40 to-transparent rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/cf766aa2-7b43-4b33-9c47-1fa6560356a7.png" 
                alt="Salem Kiddams - Video Editor"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center animate-bounce">
              <span className="text-white font-bold text-xl">Pr</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center animate-bounce delay-1000">
              <span className="text-white font-bold">Ae</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
