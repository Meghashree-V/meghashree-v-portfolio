
import { useEffect, useRef, useState } from 'react';

export const Education = () => {
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

  const educationData = [
    {
      institution: "MVJ College of Engineering",
      degree: "B.E. in Computer Science",
      grade: "CGPA: 9.27",
      duration: "Nov 2022 to Present",
      delay: 0
    },
    {
      institution: "Indo Asian Girls' PU College",
      degree: "Higher Secondary",
      grade: "98%",
      duration: "July 2020 to Aug 2022",
      delay: 300
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Education
      </h2>
      
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${edu.delay}ms` }}
          >
            <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] transition-all duration-500 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-purple-400 font-medium">{edu.degree}</p>
                  <p className="text-blue-400 font-semibold">{edu.grade}</p>
                </div>
                <div className="text-gray-400 text-sm md:text-right">
                  {edu.duration}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
