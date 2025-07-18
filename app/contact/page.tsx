"use client"

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Code, 
  Send,
  Clock,
  CheckCircle,
  Copy,
  ExternalLink,
  Map
} from 'lucide-react';

const ContactSection = () => {
  const [copiedItem, setCopiedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCopy = (text, item) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "shivam.ruhela@example.com",
      color: "#00f5ff",
      copyText: "shivam.ruhela@example.com",
      href: "mailto:shivam.ruhela@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      color: "#0066ff",
      copyText: "+91XXXXXXXXXX",
      href: "tel:+91XXXXXXXXXX"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Delhi, India",
      color: "#ff006e",
      copyText: "Delhi, India",
      href: "#"
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/shivamruhela", color: "#ffffff", name: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/shivamruhela", color: "#0077b5", name: "LinkedIn" },
    { icon: Code, href: "https://portfolio.shivamruhela.com", color: "#00f5ff", name: "Portfolio" },
  ];

  return (
    <div className="min-h-screen  p-4">
      <div className="max-w-6xl mx-auto py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl p-4 bg-gradient-to-r from-slate-800/30 to-purple-800/20 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300"
                          style={{
                            background: `linear-gradient(45deg, ${contact.color}, #ff006e)`
                          }}
                        >
                          <contact.icon className="w-6 h-6 text-white" />
                          <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{contact.title}</h4>
                          <p className="text-gray-300">{contact.value}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleCopy(contact.copyText, contact.title)}
                          className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors group"
                        >
                          {copiedItem === contact.title ? (
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400 group-hover:text-white" />
                          )}
                        </button>
                        {contact.href !== "#" && (
                          <a
                            href={contact.href}
                            className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors group"
                          >
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time */}
              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-medium">Usually responds within 24 hours</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-white font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                      style={{
                        borderColor: social.color,
                        color: social.color
                      }}
                    >
                      <social.icon className="w-6 h-6" />
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        style={{ backgroundColor: social.color }}
                      />
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                        style={{ boxShadow: `0 0 20px ${social.color}40` }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

           
          </div>

          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            <LocationMap />

             {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-xl rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
                <div>
                  <h4 className="text-green-400 font-semibold text-lg">Available for Opportunities</h4>
                  <p className="text-gray-300">Open to full-time positions starting 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}

          {/* <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 shadow-2xl"> */}
            {/* <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </div>
              Send a Message
            </h3>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div> */}

            {/* <div className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
              <p className="text-sm text-blue-300">
                💡 <strong>Quick tip:</strong> Include details about your project timeline, budget, and specific requirements for a faster response.
              </p>
            </div> */}
          {/* </div> */}
        </div>

      
      </div>
    </div>
  );
};

 const LocationMap = () => (
    <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
          <Map className="w-4 h-4 text-white" />
        </div>
        My Location
      </h3>
      
      <div className="relative h-64 bg-slate-700/50 rounded-2xl overflow-hidden border border-cyan-500/20">
        {/* Simulated map with Delhi location */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30" />
        
        {/* Map markers and streets simulation */}
        <div className="absolute inset-0 p-4">
          <div className="relative h-full">
            {/* Streets */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600 transform -translate-y-1/2" />
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-600 transform -translate-x-1/2" />
            <div className="absolute top-1/4 left-1/4 right-1/4 h-0.5 bg-gray-600" />
            <div className="absolute top-3/4 left-1/4 right-1/4 h-0.5 bg-gray-600" />
            <div className="absolute top-1/4 bottom-1/4 left-1/4 w-0.5 bg-gray-600" />
            <div className="absolute top-1/4 bottom-1/4 right-1/4 w-0.5 bg-gray-600" />
            
            {/* Location marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -top-1 -left-1 w-10 h-10 bg-red-500/30 rounded-full animate-ping" />
              </div>
            </div>
            
            {/* Location info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-400" />
                <span className="text-white font-medium">Delhi, India</span>
              </div>
              <p className="text-gray-300 text-sm mt-1">Available for meetups in NCR region</p>
            </div>
          </div>
        </div>
        
        {/* Map controls */}
        <div className="absolute top-4 right-4 space-y-2">
          <button className="w-8 h-8 bg-slate-700/80 backdrop-blur-sm rounded border border-gray-600 text-white flex items-center justify-center hover:bg-slate-600/80 transition-colors">
            +
          </button>
          <button className="w-8 h-8 bg-slate-700/80 backdrop-blur-sm rounded border border-gray-600 text-white flex items-center justify-center hover:bg-slate-600/80 transition-colors">
            -
          </button>
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
        <p className="text-sm text-blue-300">
          📍 <strong>Based in Delhi NCR:</strong> Open to in-person meetings and collaborations in the region.
        </p>
      </div>
    </div>
  );


export default ContactSection;