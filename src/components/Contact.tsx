
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">I AM READY TO CONSULT YOU</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 rounded-none h-12"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 rounded-none min-h-32 resize-none"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-none font-medium tracking-wider transition-all duration-300 hover:scale-105"
              >
                SEND
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Phone className="text-purple-400 w-6 h-6" />
              <span className="text-white text-lg">+234 811 498 7266</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-purple-400 w-6 h-6" />
              <span className="text-white text-lg">Defense Phase 5, Lahore Pakistan</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-purple-400 w-6 h-6" />
              <span className="text-white text-lg">faidayamba2002@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Bottom right text */}
        <div className="absolute bottom-8 right-8 transform rotate-90 origin-bottom-right hidden lg:block">
          <span className="text-purple-400 text-sm tracking-widest">SCROLL FOR MORE</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
