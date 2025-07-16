
import React from 'react';
import FadeInOnScroll from "../components/ui/FadeInOnScroll";

const About = () => {
  const skills = [
    'Cash Cow Editing',
    'Reels Editing', 
    'Logo Animation',
    'Podcast Edit'
  ];

  return (
    <FadeInOnScroll direction="bottom">
    <section id="about" className="py-20 bg-black relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Glassmorphism container */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-8 animate-fade-in">ABOUT ME</h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed animate-fade-in">
              This is my world — where storytelling meets a visual hyperdrive of post-production wizardry. I specialize in turning raw footage into compelling cinematic stories that captivate and connect. With a sharp eye for detail and a passion for powerful visuals, I bring ideas to life with purpose, precision, and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {skills.map((skill, index) => (
              <div 
                key={skill}
                className="text-center group hover:scale-105 transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-4 group-hover:bg-purple-400 transition-colors group-hover:shadow-lg group-hover:shadow-purple-500/50"></div>
                <h3 className="text-white font-medium text-lg tracking-wider">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </FadeInOnScroll>
  );
};

export default About;
