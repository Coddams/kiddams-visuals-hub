
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ContactModal from './ContactModal';

const Hero = () => {
  const [currentTypeText, setCurrentTypeText] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const typeTexts = ['Artists', 'Podcasts', 'YouTubers', 'Startups', 'Creators'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTypeText((prev) => (prev + 1) % typeTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="home" className="min-h-screen bg-black relative overflow-hidden flex items-center">
        {/* Video Background Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-purple-900/30"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Animated particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
        </div>

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
                JOSH KIDDAMS
              </p>
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
                PROFESSIONAL
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  VIDEO EDITOR
                </span>
              </h1>
              <div className="text-gray-300 text-lg mb-8 max-w-md animate-fade-in">
                <span>I Create Videos For </span>
                <span className="text-purple-400 font-semibold transition-all duration-500">
                  {typeTexts[currentTypeText]}
                </span>
              </div>
              <div className="flex gap-4 animate-fade-in">
                <Button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-none font-medium tracking-wider transition-all duration-300 hover:scale-105"
                >
                  LET'S TALK
                </Button>
                <Button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-transparent border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-none font-medium tracking-wider transition-all duration-300 hover:scale-105"
                >
                  VIEW PORTFOLIO
                </Button>
              </div>
            </div>

            <div className="relative">
              {/* Video editor person with image */}
              <div className="relative w-full h-96 bg-gradient-to-t from-purple-900/40 to-transparent rounded-lg overflow-hidden group">
                <img 
                  src="/lovable-uploads/3a33e6f4-d120-4f9a-8745-bdd68ee15971.png" 
                  alt="Josh Kiddams - Video Editor"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center animate-bounce cursor-pointer">
                <span className="text-white font-bold text-xl">Pr</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center animate-bounce delay-1000 cursor-pointer">
                <span className="text-white font-bold">Ae</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Hero;
