
import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const [showContent, setShowContent] = useState(false);
  const fullText = "Hello, I'm Meghashree V";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowContent(true), 500);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900">
      {/* Animated tech background elements */}
      <div className="absolute inset-0">
        {/* Glowing orbs */}
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-lg animate-bounce" style={{ animationDuration: '3s' }}></div>
        
        {/* Floating tech elements */}
        <div className="absolute top-32 left-20 animate-float" style={{ animationDelay: '0s' }}>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <span className="text-white font-bold text-lg">&lt;/&gt;</span>
          </div>
        </div>
        
        <div className="absolute top-1/4 right-32 animate-float" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300">
            <span className="text-white font-bold">{ }</span>
          </div>
        </div>
        
        <div className="absolute bottom-40 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold">⚡</span>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg shadow-lg transform rotate-6 hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold">AI</span>
          </div>
        </div>
        
        <div className="absolute bottom-32 right-1/3 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold">🚀</span>
          </div>
        </div>
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#lineGrad)"
              strokeWidth="2"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </svg>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          >
            <div className={`w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-purple-400' : 
              i % 3 === 1 ? 'bg-blue-400' : 'bg-cyan-400'
            } opacity-70`} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-5xl mx-auto px-6">
        {/* Welcome badge */}
        <div className="inline-block mb-8">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3">
            <span className="text-purple-300 font-medium">Welcome to my Portfolio</span>
          </div>
        </div>
        
        {/* Typing animation */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
            {typingText}
            <span className="animate-pulse text-purple-400">|</span>
          </h1>
        </div>
        
        {/* Main title and description */}
        <div className={`transition-all duration-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Web Developer
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Passionate Computer Science student specializing in web development and AI. 
            Proficient in various programming languages, frameworks, and ML concepts. 
            Ready to innovate in tech!
          </p>
        </div>
        
        {/* Contact info */}
        <div className={`flex flex-wrap justify-center gap-6 mb-12 text-gray-400 transition-all duration-1000 delay-500 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
        
        {/* Social links */}
        <div className={`flex justify-center gap-6 mb-12 transition-all duration-1000 delay-700 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="https://github.com/Meghashree-V"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
          >
            <Github size={24} className="group-hover:animate-pulse text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/meghaa-v/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
          >
            <Linkedin size={24} className="group-hover:animate-pulse text-white" />
          </a>
        </div>
        
        {/* CTA Button */}
        <div className={`transition-all duration-1000 delay-1000 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-105 group">
            Let's Connect
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1200 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center hover:border-blue-400 transition-colors">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
