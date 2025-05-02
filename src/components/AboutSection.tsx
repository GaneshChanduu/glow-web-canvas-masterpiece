
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
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

    const elements = document.querySelectorAll('.about-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-portfolio-soft-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative about-animate opacity-0 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-purple/20 to-portfolio-light-purple/10 rounded-2xl -translate-x-6 -translate-y-6"></div>
              <img 
                src="/lovable-uploads/d694834e-9f66-4f8d-9b92-6682c2dba571.png" 
                alt="Dharavath Ganesh Chandu" 
                className="w-full h-full object-cover rounded-2xl shadow-lg aspect-[4/3]"
              />
              <div className="absolute bottom-6 right-6 bg-white dark:bg-portfolio-blue p-4 rounded-xl shadow-lg">
                <p className="font-bold text-lg">1+ Years</p>
                <p className="text-muted-foreground text-sm">Professional Experience</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="about-animate opacity-0 text-portfolio-purple text-lg font-semibold">About Me</h2>
            <h3 className="about-animate opacity-0 text-3xl md:text-4xl font-bold">I'm a passionate full-stack developer with expertise in Java, Python, and JavaScript</h3>
            <p className="about-animate opacity-0 text-muted-foreground">
              Highly motivated individual with strong expertise in Java, Python, and JavaScript, seeking to leverage problem-solving skills in the IT industry. Adept at adapting quickly, collaborating effectively, and delivering results in fast-paced environments.
            </p>
            <p className="about-animate opacity-0 text-muted-foreground">
              My journey in web development began during my BTech in Computer Science and Engineering. Since then, I've worked on various projects ranging from e-commerce websites to food delivery platforms, and gained professional experience as a Software Quality Assurance at NistApp.
            </p>
            <div className="about-animate opacity-0 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="font-semibold text-lg">Education</h4>
                <p className="text-muted-foreground">BTech in Computer Science and Engineering</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-muted-foreground">Khammam, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-muted-foreground">ganeshchandu29@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-muted-foreground">+91 8790393917</p>
              </div>
            </div>
            <div className="about-animate opacity-0 pt-4">
              <Button className="bg-portfolio-purple hover:bg-portfolio-light-purple text-white rounded-full">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
