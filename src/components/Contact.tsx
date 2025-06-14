
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MessageCircle, Instagram } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-gradient-to-t from-purple-900/20 to-black relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 animate-fade-in">I AM READY TO CONSULT YOU</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Glassmorphism */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 rounded-lg h-12 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 rounded-lg min-h-32 resize-none transition-all duration-300"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-lg font-medium tracking-wider transition-all duration-300 hover:scale-105"
              >
                SEND MESSAGE
              </Button>
            </form>
          </div>

          {/* Contact Info - Glassmorphism */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl space-y-8">
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/40 transition-all duration-300">
                <Phone className="text-purple-400 w-6 h-6" />
              </div>
              <span className="text-white text-lg">+234 811 498 7266</span>
            </div>
            
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/40 transition-all duration-300">
                <Mail className="text-purple-400 w-6 h-6" />
              </div>
              <span className="text-white text-lg">faidayamba2002@gmail.com</span>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/40 transition-all duration-300">
                <MessageCircle className="text-purple-400 w-6 h-6" />
              </div>
              <span className="text-white text-lg">Available 24/7 for urgent projects</span>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/40 transition-all duration-300">
                <Instagram className="text-purple-400 w-6 h-6" />
              </div>
              <span className="text-white text-lg">Follow my creative journey</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
