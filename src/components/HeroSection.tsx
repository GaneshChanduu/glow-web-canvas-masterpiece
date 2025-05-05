
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.hero-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-8 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="hero-animate opacity-0 inline-block text-lg bg-portfolio-soft-purple text-portfolio-purple px-4 py-2 rounded-full font-medium">
              👋 Hello, I'm Dharavath Ganesh Chandu
            </h2>
            <div className="space-y-2">
              <h1 className="hero-animate opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="text-portfolio-purple">Data Analyst</span>
              </h1>
              <p className="hero-animate opacity-0 text-lg md:text-xl text-muted-foreground max-w-lg mt-4">
                Analytical and results-driven Data Analyst with strong skills in Python, SQL, Excel, and data visualization, dedicated to turning data into actionable insights.
              </p>
            </div>
            <div className="hero-animate opacity-0 flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-portfolio-purple hover:bg-portfolio-light-purple text-white font-medium transition-colors"
              >
                View My Work
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-portfolio-purple text-portfolio-purple hover:bg-portfolio-soft-purple font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>
            <div className="hero-animate opacity-0 pt-8 flex gap-6">
              <div className="flex items-center">
                <div className="bg-portfolio-soft-purple w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-portfolio-purple font-bold text-xl">1+</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Years of</p>
                  <p className="text-muted-foreground">Experience</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-portfolio-soft-blue w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">2+</span>
                </div>
                <div className="ml-3">
                  <p className="font-medium">Completed</p>
                  <p className="text-muted-foreground">Projects</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hero-animate opacity-0 flex justify-center items-center">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/30 to-portfolio-light-purple/20 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 border-2 border-dashed border-portfolio-purple/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-portfolio-purple to-portfolio-light-purple rounded-full shadow-lg">
                <div className="absolute inset-2 bg-white dark:bg-portfolio-blue rounded-full overflow-hidden flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/e46c136f-c447-4343-b501-a4f72eeccd40.png" 
                    alt="Dharavath Ganesh Chandu" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
