
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Get In Touch
      </h2>
      
      <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 text-center hover:border-purple-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.3)] transition-all duration-500">
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Ready to collaborate or have a project in mind? Let's connect and build something amazing together!
        </p>
        
        {/* Contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <a
            href="mailto:vmeghashree1@gmail.com"
            className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl hover:border-purple-400 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all duration-300 hover:scale-105"
          >
            <Mail className="text-purple-400" size={20} />
            <span className="text-white">vmeghashree1@gmail.com</span>
          </a>
          
          <a
            href="tel:+916364754673"
            className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105"
          >
            <Phone className="text-blue-400" size={20} />
            <span className="text-white">+91 6364754673</span>
          </a>
        </div>
        
        {/* Social links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Meghashree-V"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-gray-600 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all duration-300 hover:scale-110"
          >
            <Github size={24} className="text-gray-400 hover:text-purple-400 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/meghaa-v/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-gray-600 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} className="text-gray-400 hover:text-blue-400 transition-colors" />
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center mt-12 pt-8 border-t border-gray-800">
        <p className="text-gray-500">
          © 2024 Meghashree V. Built with passion and cutting-edge technology.
        </p>
      </div>
    </section>
  );
};
