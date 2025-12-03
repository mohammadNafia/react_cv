import './Hero.css';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-32">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in hover:scale-105 transition-transform duration-300">
          Mohammed Nafia Nadhim
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-8 font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Junior Software Engineer – Frontend Development
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Software Engineer specializing in modern frontend development using Svelte, React, and TypeScript. I build fast, clean, and real-world web interfaces powered by solid API integrations and performance-focused engineering.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://github.com/mohammadNafia"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 w-full sm:w-auto text-center hover:scale-110 hover:shadow-lg hover:shadow-accent/50"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-nafia-7b58141ba"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-200 w-full sm:w-auto text-center hover:scale-110"
          >
            LinkedIn
          </a>
          <button
            type="button"
            className="px-8 py-3 bg-transparent border-2 border-white/30 text-white rounded-lg font-medium hover:border-white/50 transition-all duration-200 w-full sm:w-auto hover:scale-110 hover:bg-white/10"
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

