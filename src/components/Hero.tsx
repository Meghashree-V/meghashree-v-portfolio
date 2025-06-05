
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Aspiring Full Stack Developer & Creative Designer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {/* Name with glow effect */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent animate-fade-in">
          <span className="drop-shadow-[0_0_30px_rgba(147,51,234,0.5)]">
            Meghashree V
          </span>
        </h1>
        
        {/* Typing animation */}
        <div className="h-20 flex items-center justify-center mb-8">
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            {typedText}
            <span className="animate-pulse text-purple-400">|</span>
          </p>
        </div>
        
        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-400">
          <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <MapPin size={18} />
            <span>Bangalore, India</span>
          </div>
          <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail size={18} />
            <span>vmeghashree1@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
            <Phone size={18} />
            <span>+91 6364754673</span>
          </div>
        </div>
        
        {/* Social links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Meghashree-V"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/meghaa-v/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-gray-700 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
