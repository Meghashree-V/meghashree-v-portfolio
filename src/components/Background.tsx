// src/components/Background.tsx
const Background = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    {/* Radial gradients */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3),transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(147,51,234,0.2),transparent_50%)]" />

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
        <span className="text-white font-bold">{'{}'}</span>
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

    {/* Keyframes for floating animation */}
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
  </div>
);


export default Background;
