
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

  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume file
    link.download = 'Ganesh_Chandu_Resume.pdf'; // Suggested name for the download
    
    // Append to document
    document.body.appendChild(link);
    
    // Trigger download
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully');
  };

  const handleImageError = () => {
    console.log('Error loading image');
  };

  return (
    <section id="about" className="py-20 bg-portfolio-soft-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative about-animate opacity-0 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-purple/20 to-portfolio-light-purple/10 rounded-2xl -translate-x-6 -translate-y-6"></div>
              <img 
                src="/lovable-uploads/1e607d63-9cd1-49e0-abb6-5abbf87cb758.png" 
                alt="Dharavath Ganesh Chandu" 
                className="w-full h-full object-cover rounded-2xl shadow-lg aspect-[4/3]"
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
              <div className="absolute bottom-6 right-6 bg-white dark:bg-portfolio-blue p-4 rounded-xl shadow-lg">
                <p className="font-bold text-lg">1+ Years</p>
                <p className="text-muted-foreground text-sm">Professional Experience</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="about-animate opacity-0 text-portfolio-purple text-lg font-semibold">About Me</h2>
            <h3 className="about-animate opacity-0 text-3xl md:text-4xl font-bold">I'm a Data Analyst with expertise in Python and Data Visualization</h3>
            <p className="about-animate opacity-0 text-muted-foreground">
              Analytical and results-driven Data Analyst with strong skills in Python, SQL, Excel, and data visualization, dedicated to turning data into actionable insights.
            </p>
            <p className="about-animate opacity-0 text-muted-foreground">
              My journey began during my BTech in Computer Science and Engineering. Since then, I've worked on various projects including telco customer churn analysis and sales data visualization platforms, combining my analytical skills to extract meaningful business insights.
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
                <p className="text-muted-foreground">
                  <a href="mailto:ganeshchandu29@gmail.com" className="hover:text-portfolio-purple">ganeshchandu29@gmail.com</a>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-muted-foreground">
                  <a href="tel:+918790393917" className="hover:text-portfolio-purple">+91 8790393917</a>
                </p>
              </div>
            </div>
            <div className="about-animate opacity-0 pt-4">
              <Button 
                className="bg-portfolio-purple hover:bg-portfolio-light-purple text-white rounded-full"
                onClick={handleDownloadCV}
              >
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
