
import React, { useEffect } from 'react';

type Skill = {
  name: string;
  percentage: number;
  color: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", percentage: 90, color: "bg-blue-500" },
        { name: "JavaScript", percentage: 85, color: "bg-yellow-500" },
        { name: "HTML/CSS", percentage: 95, color: "bg-orange-500" },
        { name: "TypeScript", percentage: 80, color: "bg-blue-600" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", percentage: 85, color: "bg-green-500" },
        { name: "Express", percentage: 80, color: "bg-gray-600" },
        { name: "MongoDB", percentage: 75, color: "bg-green-600" },
        { name: "SQL", percentage: 70, color: "bg-blue-400" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", percentage: 90, color: "bg-orange-600" },
        { name: "Docker", percentage: 65, color: "bg-blue-500" },
        { name: "AWS", percentage: 60, color: "bg-yellow-600" },
        { name: "Figma", percentage: 75, color: "bg-purple-500" },
      ]
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Animate skill bars when they come into view
            if (entry.target.classList.contains('skill-category')) {
              const bars = entry.target.querySelectorAll('.skill-progress-bar');
              bars.forEach((bar: Element, index) => {
                setTimeout(() => {
                  (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.width || "0%";
                }, index * 100);
              });
            }
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.skills-animate, .skill-category');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="skills-animate opacity-0 text-portfolio-purple text-lg font-semibold">My Skills</h2>
          <h3 className="skills-animate opacity-0 text-3xl md:text-4xl font-bold mt-2">Technical Expertise</h3>
          <p className="skills-animate opacity-0 text-muted-foreground mt-4">
            I've acquired a diverse range of skills throughout my career. Here's a comprehensive overview of my technical abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-category opacity-0 bg-white dark:bg-portfolio-blue/90 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h4 className="text-xl font-bold mb-6">{category.title}</h4>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-portfolio-purple">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`skill-progress-bar h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: "0%" }}
                        data-width={`${skill.percentage}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="skills-animate opacity-0 flex flex-col items-center p-6 bg-portfolio-soft-purple rounded-xl">
            <div className="text-4xl font-bold text-portfolio-purple">3+</div>
            <p className="text-center mt-2">Years Experience</p>
          </div>
          <div className="skills-animate opacity-0 flex flex-col items-center p-6 bg-portfolio-soft-blue rounded-xl">
            <div className="text-4xl font-bold text-blue-600">20+</div>
            <p className="text-center mt-2">Projects Completed</p>
          </div>
          <div className="skills-animate opacity-0 flex flex-col items-center p-6 bg-green-100 rounded-xl">
            <div className="text-4xl font-bold text-green-600">15+</div>
            <p className="text-center mt-2">Happy Clients</p>
          </div>
          <div className="skills-animate opacity-0 flex flex-col items-center p-6 bg-yellow-100 rounded-xl">
            <div className="text-4xl font-bold text-yellow-600">5+</div>
            <p className="text-center mt-2">Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
