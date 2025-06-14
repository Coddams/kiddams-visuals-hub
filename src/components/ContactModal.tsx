
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black/95 backdrop-blur-md border border-purple-500/30 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Let's Work Together
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-purple-400 mb-2">
                Full Name *
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-400 mb-2">
                Email Address *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-purple-400 mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-400 mb-2">
                Company/Brand
              </label>
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-purple-400 mb-2">
                Project Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-white/10 border border-purple-500/30 text-white rounded-md px-3 py-2 focus:border-purple-400 focus:outline-none"
              >
                <option value="" className="bg-black">Select project type</option>
                <option value="youtube" className="bg-black">YouTube Content</option>
                <option value="social-media" className="bg-black">Social Media Content</option>
                <option value="commercial" className="bg-black">Commercial/Ads</option>
                <option value="podcast" className="bg-black">Podcast Editing</option>
                <option value="other" className="bg-black">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-400 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full bg-white/10 border border-purple-500/30 text-white rounded-md px-3 py-2 focus:border-purple-400 focus:outline-none"
              >
                <option value="" className="bg-black">Select budget range</option>
                <option value="500-1000" className="bg-black">$500 - $1,000</option>
                <option value="1000-2500" className="bg-black">$1,000 - $2,500</option>
                <option value="2500-5000" className="bg-black">$2,500 - $5,000</option>
                <option value="5000+" className="bg-black">$5,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-400 mb-2">
              Timeline
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full bg-white/10 border border-purple-500/30 text-white rounded-md px-3 py-2 focus:border-purple-400 focus:outline-none"
            >
              <option value="" className="bg-black">Select timeline</option>
              <option value="asap" className="bg-black">ASAP</option>
              <option value="1-2-weeks" className="bg-black">1-2 weeks</option>
              <option value="1-month" className="bg-black">1 month</option>
              <option value="flexible" className="bg-black">Flexible</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-400 mb-2">
              Project Details *
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, vision, and what you're looking to achieve..."
              className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 min-h-24 resize-none"
              required
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button 
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
            >
              Send Message
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
