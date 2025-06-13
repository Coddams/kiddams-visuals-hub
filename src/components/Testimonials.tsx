
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'MARCUS',
      role: 'Co-Founder',
      quote: 'Perfect Communication And Exceptional Skills. This Guy Is King',
      rating: 5
    },
    {
      name: 'PETER', 
      role: 'Manager',
      quote: 'Did A Great Job. Understood All The Requirements',
      rating: 5
    },
    {
      name: 'JANE',
      role: 'CEO', 
      quote: 'Salem Was Wonderful To Work With. Will Definitely Hire Him Again',
      rating: 5
    },
    {
      name: 'ALEX',
      role: 'Creative Director',
      quote: 'Outstanding video editing skills and creativity. Exceeded expectations!',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 animate-fade-in">TESTIMONIALS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="w-full flex-shrink-0 text-center px-8">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2">{testimonial.name}</h3>
                  <p className="text-purple-400 text-sm mb-6 uppercase tracking-wider">{testimonial.role}</p>
                  <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-purple-500/50 transition-all duration-300 hover:scale-110"
          >
            <span className="text-white text-xl">‹</span>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-purple-500/50 transition-all duration-300 hover:scale-110"
          >
            <span className="text-white text-xl">›</span>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
