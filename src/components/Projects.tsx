
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
      description: "AI-driven security testing site",
      github: "https://github.com/Meghashree-V/Sentinel-AI",
      tech: ["AI", "Security", "Python"],
      delay: 0
    },
    {
      title: "RepoBrief",
      description: "GitHub + meeting summarizer using AI",
      github: "https://github.com/Meghashree-V/RepoBrief",
      tech: ["AI", "GitHub API", "React"],
      delay: 100
    },
    {
      title: "Complain Hub",
      description: "Complaint management using ML",
      github: "https://github.com/Meghashree-V/ComplainHub",
      tech: ["ML", "Python", "Flask"],
      delay: 200
    },
    {
      title: "HomiGo",
      description: "Web3 rental platform with smart contracts",
      github: "https://github.com/Meghashree-V/HomiGO_",
      tech: ["Web3", "Solidity", "React"],
      delay: 300
    },
    {
      title: "InfoMed",
      description: "Hospital dashboard and Twilio alerts",
      github: "#",
      tech: ["React", "Twilio", "Dashboard"],
      delay: 400
    },
    {
      title: "Career Path Recommender",
      description: "Personalized career guidance site",
      github: "#",
      tech: ["ML", "React", "Python"],
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
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              
              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* GitHub link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Github size={16} />
                <span className="text-sm">View Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
