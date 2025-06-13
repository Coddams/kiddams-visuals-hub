
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'MARCUS',
      role: 'Co-Founder',
      quote: 'Perfect Communication And Exceptional Skills. This Guy Is King'
    },
    {
      name: 'PETER', 
      role: 'Manager',
      quote: 'Did A Great Job. Understood All The Requirements'
    },
    {
      name: 'JANE',
      role: 'CEO', 
      quote: 'Salem Was Wonderful To Work With. Will Definitely Hire Him Again'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">TESTIMONIALS</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-lg text-center hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{testimonial.name}</h3>
              <p className="text-purple-200 text-sm mb-6">{testimonial.role}</p>
              <p className="text-white leading-relaxed">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
