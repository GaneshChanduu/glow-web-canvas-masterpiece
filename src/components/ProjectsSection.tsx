
import React, { useState, useEffect } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Fully functional e-commerce platform with product listings, shopping cart, and secure checkout",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f",
      category: "web",
      tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "#"
    },
    {
      id: 2,
      title: "Food Delivery Website",
      description: "Responsive food delivery platform with intuitive navigation and streamlined ordering process",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "web",
      tags: ["HTML", "CSS", "Bootstrap"],
      link: "#"
    },
    {
      id: 3,
      title: "UDAN Testing Project",
      description: "Worked on Universal Digital Assistant testing for nano health and Entab International School websites",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868",
      category: "app",
      tags: ["TypeScript", "Testing", "QA"],
      link: "#"
    },
    {
      id: 4,
      title: "SaaS Testing",
      description: "Tested various SaaS applications including Workday, Zoom, Canva, and ServiceNow",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
      category: "app",
      tags: ["QA", "Testing", "SaaS"],
      link: "#"
    },
  ]);
  
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter, projects]);
  
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

    const elements = document.querySelectorAll('.projects-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-20 bg-portfolio-soft-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="projects-animate opacity-0 text-portfolio-purple text-lg font-semibold">My Portfolio</h2>
          <h3 className="projects-animate opacity-0 text-3xl md:text-4xl font-bold mt-2">Recent Projects</h3>
          <p className="projects-animate opacity-0 text-muted-foreground mt-4">
            Here's a collection of my projects and work experience. Each project demonstrates my skills and expertise in different areas.
          </p>
        </div>
        
        <div className="projects-animate opacity-0 flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 md:gap-4">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all' ? 'bg-portfolio-purple text-white' : 'bg-white dark:bg-portfolio-blue hover:bg-gray-100'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'web' ? 'bg-portfolio-purple text-white' : 'bg-white dark:bg-portfolio-blue hover:bg-gray-100'}`}
              onClick={() => setFilter('web')}
            >
              Web Development
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'app' ? 'bg-portfolio-purple text-white' : 'bg-white dark:bg-portfolio-blue hover:bg-gray-100'}`}
              onClick={() => setFilter('app')}
            >
              Testing & QA
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="projects-animate opacity-0 group">
              <div className="bg-white dark:bg-portfolio-blue rounded-xl overflow-hidden shadow-lg hover-lift">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-portfolio-purple/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <a 
                      href={project.link} 
                      className="bg-white text-portfolio-purple px-4 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold">{project.title}</h4>
                  <p className="text-muted-foreground mt-2">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="bg-portfolio-soft-purple text-portfolio-purple text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
