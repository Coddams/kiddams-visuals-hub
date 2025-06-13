
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'TESTIMONIALS', href: '#testimonials' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-white font-bold text-xl">
            VideoAlchemist
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-purple-400 transition-colors duration-300 text-sm font-medium tracking-wider"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4">
            <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer">
              <span className="text-white text-xs">f</span>
            </div>
            <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer">
              <span className="text-white text-xs">in</span>
            </div>
            <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer">
              <span className="text-white text-xs">ig</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 absolute top-16 left-0 w-full border-b border-purple-500/20">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-purple-400 transition-colors duration-300 text-sm font-medium tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
