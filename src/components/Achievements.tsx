
import { useEffect, useRef, useState } from 'react';

export const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Achievements
      </h2>
      
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="bg-gradient-to-br from-yellow-500/10 to-purple-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 md:p-12 text-center hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] transition-all duration-500 relative overflow-hidden">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-purple-500/5 to-blue-500/5 animate-pulse" />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-block p-4 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 rounded-full mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Top 15 – Aventus 3.0 Hackathon
            </h3>
            <p className="text-purple-300 font-medium mb-2">Dayananda Sagar CE</p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Achieved top 15 position for building Sentinel-AI, an innovative AI-driven security platform 
              that demonstrates advanced problem-solving and technical excellence.
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
          <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </section>
  );
};
