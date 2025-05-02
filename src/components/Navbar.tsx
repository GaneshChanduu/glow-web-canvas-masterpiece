
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-portfolio-blue/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-portfolio-purple">
          Portfolio<span className="text-foreground">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-sm font-medium hover:text-portfolio-purple transition-colors">About</a>
          <a href="#skills" className="text-sm font-medium hover:text-portfolio-purple transition-colors">Skills</a>
          <a href="#projects" className="text-sm font-medium hover:text-portfolio-purple transition-colors">Projects</a>
          <a href="#contact" className="text-sm font-medium hover:text-portfolio-purple transition-colors">Contact</a>
          <Button className="bg-portfolio-purple hover:bg-portfolio-light-purple text-white rounded-full">
            Download CV
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-portfolio-blue shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-sm font-medium hover:text-portfolio-purple transition-colors py-2" onClick={toggleMobileMenu}>About</a>
            <a href="#skills" className="text-sm font-medium hover:text-portfolio-purple transition-colors py-2" onClick={toggleMobileMenu}>Skills</a>
            <a href="#projects" className="text-sm font-medium hover:text-portfolio-purple transition-colors py-2" onClick={toggleMobileMenu}>Projects</a>
            <a href="#contact" className="text-sm font-medium hover:text-portfolio-purple transition-colors py-2" onClick={toggleMobileMenu}>Contact</a>
            <Button className="bg-portfolio-purple hover:bg-portfolio-light-purple text-white w-full rounded-full">
              Download CV
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
