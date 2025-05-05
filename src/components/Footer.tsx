
import React from 'react';
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-blue text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-portfolio-light-purple mb-4">Portfolio.</h2>
            <p className="text-gray-300 max-w-md">
              I create insightful data analyses and modern web applications that deliver exceptional user experiences. Let's work together to bring your ideas to life.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/in/ganeshchandu/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-portfolio-light-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/ganeshchanduu/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-portfolio-light-purple transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-portfolio-light-purple transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-portfolio-light-purple transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-portfolio-light-purple transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-portfolio-light-purple transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-portfolio-light-purple transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-portfolio-light-purple mt-1">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <a href="mailto:ganeshchandu29@gmail.com" className="text-gray-300 hover:text-portfolio-light-purple">ganeshchandu29@gmail.com</a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-portfolio-light-purple mt-1">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+918790393917" className="text-gray-300 hover:text-portfolio-light-purple">+91 8790393917</a>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-portfolio-light-purple mt-1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-gray-300">Khammam, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400">© {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
