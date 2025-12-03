import { useEffect, useRef } from 'react';

function Contact() {
  const sectionRef = useRef(null);

  useEffect(function() {
    function checkVisible(entries) {
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      }
    }

    const observer = new IntersectionObserver(checkVisible, { threshold: 0.1 });

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.fade-in-on-scroll');
      for (let i = 0; i < elements.length; i++) {
        observer.observe(elements[i]);
      }
    }

    return function() {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center fade-in-on-scroll hover:text-accent transition-colors duration-300">Contact</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10 shadow-xl hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-1 fade-in-on-scroll hover:scale-105 transition-transform duration-300">
                <p className="text-white/60 text-sm font-medium uppercase tracking-wide">Email</p>
                <a
                  href="mailto:mohammadnafia1@gmail.com"
                  className="text-white hover:text-accent transition-all duration-200 text-lg hover:scale-110 inline-block"
                >
                  mohammadnafia1@gmail.com
                </a>
              </div>
              <div className="space-y-1 fade-in-on-scroll hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '0.1s' }}>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wide">Phone</p>
                <a
                  href="tel:+9647800668844"
                  className="text-white hover:text-accent transition-all duration-200 text-lg hover:scale-110 inline-block"
                >
                  +9647800668844
                </a>
              </div>
              <div className="space-y-1 fade-in-on-scroll hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '0.2s' }}>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wide">Location</p>
                <p className="text-white text-lg">Baghdad, Iraq</p>
              </div>
              <div className="space-y-1 fade-in-on-scroll hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '0.3s' }}>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wide">GitHub</p>
                <a
                  href="https://github.com/mohammadNafia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-all duration-200 text-lg hover:scale-110 inline-block"
                >
                  github.com/mohammadNafia
                </a>
              </div>
              <div className="space-y-1 md:col-span-2 fade-in-on-scroll hover:scale-105 transition-transform duration-300" style={{ transitionDelay: '0.4s' }}>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wide">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/mohammed-nafia-7b58141ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-all duration-200 text-lg hover:scale-110 inline-block"
                >
                  linkedin.com/in/mohammed-nafia-7b58141ba
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

