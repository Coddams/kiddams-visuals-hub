
import React from 'react';

const About = () => {
  const skills = [
    'Cash Cow Editing',
    'Reels Editing', 
    'Logo Animation',
    'Podcast Edit'
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-8">ABOUT ME</h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            Welcome To The Cinematic Realm Of Salem, Where Creativity Meets Technology To Craft Visually Stunning Narratives. With 
            A Passion For Storytelling And A Keen Eye For Detail, I Embark On A Journey To Transform Ordinary Footage Into 
            Extraordinary Visual Experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {skills.map((skill, index) => (
            <div 
              key={skill}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-4 group-hover:bg-purple-400 transition-colors"></div>
              <h3 className="text-white font-medium text-lg tracking-wider">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
