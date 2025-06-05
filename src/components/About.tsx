
import { useEffect, useRef, useState } from 'react';

export const About = () => {
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
    <section ref={sectionRef} className="py-20 px-6 max-w-6xl mx-auto bg-transparent">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-500 hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] transition-all duration-500 group bg-black/60">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            I'm a Computer Science undergraduate with a passion for building smart, user-friendly applications. 
            I love blending design and logic — from backend systems to pixel-perfect UI. 
            I enjoy solving real problems through technology and creating experiences that make a difference.
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center mt-8 gap-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
