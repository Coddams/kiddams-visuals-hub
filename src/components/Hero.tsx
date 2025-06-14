
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Hero = () => {
  const [currentText, setCurrentText] = useState('ARTISTS');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const texts = ['ARTISTS', 'PODCASTS', 'YOUTUBERS', 'STARTUPS'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = texts.indexOf(prev);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    // You can integrate with email service or contact form handler
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="home" className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Subtle animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                I CREATE VIDEOS FOR
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-500">
                  {currentText}
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Hey, I'm <span className="text-purple-400 font-semibold">Josh Kiddams</span> from saltyyAE. 
                Welcome to the cinematic realm where creativity meets technology to craft visually stunning narratives. 
                Transform your ordinary footage into extraordinary visual experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                    LET'S TALK
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-black/90 backdrop-blur-md border border-purple-500/30 text-white max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                      Let's Create Something Amazing
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                        required
                      />
                    </div>
                    <div>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-purple-500/30 text-white rounded-md px-3 py-2 focus:border-purple-400 focus:outline-none"
                        required
                      >
                        <option value="" className="bg-black">Select Project Type</option>
                        <option value="cash-cow" className="bg-black">Cash Cow Editing</option>
                        <option value="reels" className="bg-black">Reels Editing</option>
                        <option value="logo-animation" className="bg-black">Logo Animation</option>
                        <option value="podcast" className="bg-black">Podcast Edit</option>
                        <option value="other" className="bg-black">Other</option>
                      </select>
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="budget"
                        placeholder="Budget Range"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 min-h-24"
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 font-medium tracking-wider transition-all duration-300"
                    >
                      SEND MESSAGE
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              
              <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-medium tracking-wider transition-all duration-300 hover:scale-105">
                VIEW PORTFOLIO
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <img 
                src="/lovable-uploads/3a33e6f4-d120-4f9a-8745-bdd68ee15971.png"
                alt="Video Editing Setup"
                className="max-w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
