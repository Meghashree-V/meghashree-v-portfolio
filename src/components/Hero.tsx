
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
  {/* Main card for hero content */}
  <div className="backdrop-blur-sm bg-black/10 rounded-xl px-8 py-14 shadow-xl max-w-3xl w-full mx-auto flex flex-col items-center text-center z-10 relative overflow-hidden">
      {/* Decorative gradient background for card */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-black/0 pointer-events-none animate-pulse" />
    {/* Welcome badge */}
    <div className="inline-block mb-8 z-20 relative">
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3">
        <span className="text-purple-300 font-medium">Welcome to my Portfolio</span>
      </div>
    </div>
    {/* Typing animation */}
    <div className="mb-8">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
        {typingText}
        {typingText.length < fullText.length && (
          <span className="animate-pulse text-purple-400">|</span>
        )}
      </h1>
    </div>
    {/* Contact info */}
    <div className={`flex flex-wrap justify-center gap-6 mb-8 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] transition-all duration-1000 delay-500 ${
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
