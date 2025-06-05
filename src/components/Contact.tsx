
import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      // You would integrate with an email service here
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Let's Connect
      </h2>
      
      <p className="text-xl text-gray-300 text-center mb-16 leading-relaxed">
        Ready to collaborate or have a project in mind? Let's connect and build something amazing together!
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          {/* Contact methods */}
          <div className="space-y-4">
            <a
              href="mailto:vmeghashree1@gmail.com"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl hover:border-purple-400 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all duration-300 hover:scale-105"
            >
              <Mail className="text-purple-400" size={24} />
              <span className="text-white text-lg">vmeghashree1@gmail.com</span>
            </a>
            
            <a
              href="tel:+916364754673"
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105"
            >
              <Phone className="text-blue-400" size={24} />
              <span className="text-white text-lg">+91 6364754673</span>
            </a>
          </div>
          
          {/* Social links */}
          <div className="flex gap-6">
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

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(147,51,234,0.3)] transition-all duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-purple-300 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-purple-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-purple-300 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(147,51,234,0.3)] resize-none"
                placeholder="Tell me about your project or just say hello!"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-4 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      
      {/* Footer */}
      <div className="text-center mt-16 pt-8 border-t border-gray-800">
        <p className="text-gray-500">
          © 2024 Meghashree V. Built with passion and cutting-edge technology.
        </p>
      </div>
    </section>
  );
};
