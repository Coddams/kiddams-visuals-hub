
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} overflow-x-hidden transition-colors duration-500`}>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <BackToTop />
    </div>
  );
};

export default Index;
