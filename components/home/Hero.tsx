import React from "react";

const Hero = () => {
  return (
    <section className="h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Navbar */}
      <div className="bg-transparent text-white font-serif">
        <nav className="flex justify-between items-center px-8 py-6">
          <h1 className="text-2xl font-serif font-semibold">Kulei</h1>
        </nav>
      </div>

      {/* Background Image - Responsive */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div
          className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-cover bg-center opacity-20 z-50 transition-all duration-500"
          style={{
            backgroundImage: "url('/images/official4.jpeg')",
            maskImage:
              "linear-gradient(to left, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 0%, transparent 100%)",
          }}
        ></div>
      </div>

      {/* Subtle Ambient Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/10 rounded-full blur-sm animate-float"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 15}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6 relative z-10 font-serif">
        <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-3xl tracking-wide text-white/90">
          <span className="block mb-3 text-white/70">Levi Kulei</span>
          <span className="block text-white/90">
            Where logic meets silence,<br />and design learns to dream.
          </span>
        </h1>

        <p className="mt-8 text-neutral-400 max-w-xl text-sm md:text-base leading-relaxed font-light tracking-wide font-sans">
          I build systems that breathe — interfaces that feel.  
          Between the pulse of code and the calm of form lies a question:  
          what does it mean to create something that truly *lives*?
        </p>
      </div>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(45deg); opacity: 0.6; }
          100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
