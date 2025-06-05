
import { useEffect, useRef, useState } from 'react';
import { Github } from 'lucide-react';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Sentinel-AI",
      description: "An intelligent platform that performs automated penetration testing on websites, visualizes attacks, and provides downloadable vulnerability reports.",
      github: "https://github.com/Meghashree-V/Sentinel-AI",
      delay: 0
    },
    {
      title: "RepoBrief",
      description: "A productivity tool that summarizes GitHub repositories and transcribes meeting videos to generate key takeaways and action points.",
      github: "https://github.com/Meghashree-V/RepoBrief",
      delay: 100
    },
    {
      title: "Complain Hub",
      description: "A web-based complaint management system that uses machine learning to categorize and prioritize user-submitted issues, with real-time admin tools.",
      github: "https://github.com/Meghashree-V/ComplainHub",
      delay: 200
    },
    {
      title: "HomiGo",
      description: "A decentralized rental application that leverages blockchain smart contracts to automate bookings and prevent scheduling conflicts.",
      github: "https://github.com/Meghashree-V/HomiGO_",
      delay: 300
    },
    {
      title: "InfoMed",
      description: "A hospital management system that streamlines patient registrations, appointment tracking, and sends automated SMS alerts to reduce no-shows.",
      github: null,
      delay: 400
    },
    {
      title: "Career Path Recommender",
      description: "A platform that helps users choose tech career paths through tailored roadmaps, recommended skills, and structured learning plans.",
      github: null,
      delay: 500
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${project.delay}ms` }}
          >
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:border-purple-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all duration-500 group hover:scale-105">
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
              
              {/* GitHub link - only show if project has github URL */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github size={16} />
                  <span className="text-sm">View Code</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
