
import { useEffect, useRef, useState } from 'react';
import { FileText } from 'lucide-react';

export const Certifications = () => {
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

  const certifications = [
    {
      title: "Python Basics",
      provider: "HackerRank",
      type: "Programming",
      delay: 0
    },
    {
      title: "Cybersecurity",
      provider: "Cisco",
      type: "Security",
      delay: 100
    },
    {
      title: "Generative AI",
      provider: "LinkedIn",
      type: "AI/ML",
      delay: 200
    },
    {
      title: "UI/UX Design",
      provider: "Great Learning",
      type: "Design",
      delay: 300
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Certifications
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${cert.delay}ms` }}
          >
            <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-500 group hover:scale-105 cursor-pointer">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <FileText className="text-purple-400 group-hover:text-purple-300" size={24} />
              </div>
              
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                {cert.title}
              </h3>
              <p className="text-purple-400 text-sm font-medium mb-1">{cert.provider}</p>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-xs text-blue-300">
                {cert.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
