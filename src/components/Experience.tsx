
import { useEffect, useRef, useState } from 'react';

export const Experience = () => {
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

  const experiences = [
    {
      title: "Design Lead",
      organization: "Nova Innovative Compskey Club",
      duration: "Dec 2024 – Present",
      description: "Led the creation of websites, posters, and event visuals.",
      delay: 0
    },
    {
      title: "Design Team Member",
      organization: "Software Development Club",
      duration: "Sept 2023 – Present",
      description: "Designed logos, banners, and workshop promotions.",
      delay: 200
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Experience
      </h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${exp.delay}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.7)]"></div>
              
              {/* Content */}
              <div className="ml-16 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] transition-all duration-500 group">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                  {exp.title}
                </h3>
                <p className="text-purple-400 font-medium mb-1">{exp.organization}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.duration}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
