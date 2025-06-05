
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const Hero = () => {
  const [introText, setIntroText] = useState('');
  const [showName, setShowName] = useState(false);
  const fullIntro = "Hello, I'm Meghashree V";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullIntro.length) {
        setIntroText(fullIntro.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowName(true), 300);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0 opacity-30">
        {/* Matrix-style falling code */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 text-xs font-mono opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                animationName: 'matrix-fall',
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 2}s`,
                animationIterationCount: 'infinite',
                animationTimingFunction: 'linear'
              }}
            >
              {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
            </div>
          ))}
        </div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        
        {/* Floating circuit lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M${Math.random() * 100},${Math.random() * 100} Q${Math.random() * 100},${Math.random() * 100} ${Math.random() * 100},${Math.random() * 100}`}
              stroke="url(#circuitGrad)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </svg>
      </div>
      
      {/* Floating tech particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {i % 4 === 0 && <div className="w-2 h-2 bg-purple-400 rounded-full opacity-70" />}
            {i % 4 === 1 && <div className="w-1 h-1 bg-blue-400 rounded-full opacity-80" />}
            {i % 4 === 2 && <div className="text-purple-400 text-xs opacity-60">&lt;/&gt;</div>}
            {i % 4 === 3 && <div className="text-blue-400 text-xs opacity-60">{ }</div>}
          </div>
        ))}
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        {/* Intro line with typing animation */}
        <div className="h-12 flex items-center justify-center mb-6">
          <p className="text-xl md:text-2xl text-purple-300 font-light">
            {introText}
            <span className="animate-pulse text-purple-400">|</span>
          </p>
        </div>
        
        {/* Name with enhanced glow effect */}
        <h1 className={`text-6xl md:text-8xl font-bold mb-16 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 ${
          showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="drop-shadow-[0_0_30px_rgba(147,51,234,0.8)] hover:drop-shadow-[0_0_50px_rgba(147,51,234,1)] transition-all duration-500">
            Meghashree V
          </span>
        </h1>
        
        {/* Tech-inspired subtitle */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${
          showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-full px-8 py-3 backdrop-blur-sm">
            <span className="text-purple-300 font-mono text-lg">
              &lt; Full Stack Developer & Creative Designer /&gt;
            </span>
          </div>
        </div>
        
        {/* Contact info with enhanced styling */}
        <div className={`flex flex-wrap justify-center gap-6 mb-12 text-gray-400 transition-all duration-1000 delay-500 ${
          showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer group">
            <MapPin size={18} className="group-hover:animate-pulse" />
            <span>Bangalore, India</span>
          </div>
          <div className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer group">
            <Mail size={18} className="group-hover:animate-pulse" />
            <span>vmeghashree1@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer group">
            <Phone size={18} className="group-hover:animate-pulse" />
            <span>+91 6364754673</span>
          </div>
        </div>
        
        {/* Enhanced social links */}
        <div className={`flex justify-center gap-6 transition-all duration-1000 delay-700 ${
          showName ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="https://github.com/Meghashree-V"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-all duration-300 hover:scale-110 group"
          >
            <Github size={24} className="group-hover:animate-pulse" />
          </a>
          <a
            href="https://www.linkedin.com/in/meghaa-v/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-gray-700 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin size={24} className="group-hover:animate-pulse" />
          </a>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1000 ${
          showName ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center hover:border-blue-400 transition-colors">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};
