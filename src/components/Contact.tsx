import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MessageCircle, Instagram } from 'lucide-react';
import FadeInOnScroll from "../components/ui/FadeInOnScroll";
import { toast } from 'react-toastify';
import Spinner from "../components/Spinner";


const SERVICE_ID = 'service_8m7c4dm';
const TEMPLATE_ID = 'template_tq1nxnp';
const PUBLIC_KEY = '-bNPLoblx9AD8u7ck';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(
        (response) => {
          toast.success("Message sent successfully! 🎉");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast.error("Something went wrong. Try again later 😢");
        }
      )
      .finally(() => setLoading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-purple-900/20 to-black relative">
      <FadeInOnScroll direction="bottom">

        {/* Spinner CSS (inject globally or move to your CSS file) */}
        {/* <style>{`
          .loader {
            width: 18px;
            height: 18px;
            border: 3px solid #fff;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            position: relative;
            animation: pulse 1s linear infinite;
            margin-left: 8px;
          }
          .loader:after {
            content: '';
            position: absolute;
            width: 18px;
            height: 18px;
            border: 3px solid #fff;
            border-radius: 50%;
            display: inline-block;
            box-sizing: border-box;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            animation: scaleUp 1s linear infinite;
          }
          @keyframes scaleUp {
            0% { transform: translate(-50%, -50%) scale(0); }
            60%, 100% { transform: translate(-50%, -50%) scale(1); }
          }
          @keyframes pulse {
            0%, 60%, 100% { transform: scale(1); }
            80% { transform: scale(1.2); }
          }
        `}</style> */}

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4 animate-fade-in">LET'S PUT THAT IDEA IN MOTION</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeInOnScroll direction="right">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 rounded-lg h-12 transition-all duration-300"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 rounded-lg h-12 transition-all duration-300"
                  />
                  <Textarea
                    name="message"
                    placeholder="Message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 rounded-lg min-h-24 resize-none transition-all duration-300"
                  />
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-lg font-medium tracking-wider transition-all duration-300 hover:scale-105"
                  >
                     {loading ? (
                        <>
                          Sending
                          <Spinner size='sm' color='#000000' />
                        </>
                     ) : (
                       "SEND MESSAGE"
                     )}
                  </Button>
                </form>
              </div>
            </FadeInOnScroll>

            {/* Contact Info */}
            <FadeInOnScroll direction="left">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl space-y-8">
                {/* Phone */}
                <a href="tel:+2348114987266" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/40 transition-all duration-300">
                    <Phone className="text-purple-400 w-6 h-6" />
                  </div>
                  <span className="text-white text-lg">+234 811 498 7266</span>
                </a>

                {/* Email */}
                <a href="mailto:faidayamba2002@gmail.com" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/40 transition-all duration-300">
                    <Mail className="text-purple-400 w-6 h-6" />
                  </div>
                  <span className="text-white text-lg">faidayamba2002@gmail.com</span>
                </a>

                {/* SMS */}
                <a href="sms:+2348114987266" className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/40 transition-all duration-300">
                    <MessageCircle className="text-purple-400 w-6 h-6" />
                  </div>
                  <span className="text-white text-lg">Send a quick message</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/saltyy___ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 group"
                >
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/40 transition-all duration-300">
                    <Instagram className="text-purple-400 w-6 h-6" />
                  </div>
                  <span className="text-white text-lg">Follow my creative journey</span>
                </a>
              </div>

            </FadeInOnScroll>
          </div>
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default Contact;
