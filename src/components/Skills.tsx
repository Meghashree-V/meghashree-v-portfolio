
import { useEffect, useRef, useState } from 'react';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      skills: ["C", "Java", "Python"],
      color: "from-purple-500 to-purple-700",
      delay: 0
    },
    {
      title: "Web & Databases",
      skills: ["HTML", "CSS", "JavaScript", "Firebase", "Appwrite", "MySQL", "MongoDB"],
      color: "from-blue-500 to-blue-700",
      delay: 200
    },
    {
      title: "Frameworks",
      skills: ["React", "Next.js", "Node.js", "Spring Boot", "Solidity", "Prisma"],
      color: "from-purple-600 to-blue-600",
      delay: 400
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "Figma", "Eclipse", "VS Code"],
      color: "from-blue-600 to-purple-600",
      delay: 600
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Skills
      </h2>
      
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: `${category.delay}ms` }}
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] transition-all duration-500 group">
              <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800/80 to-gray-700/80 border border-gray-600 rounded-lg hover:border-purple-500 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105 group"
                  >
                    {/* Placeholder for skill icon */}
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold text-white">
                      {skill.charAt(0)}
                    </div>
                    <span className="text-gray-300 group-hover:text-purple-300 transition-colors font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
