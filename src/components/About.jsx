import { useEffect, useRef } from 'react';

function About() {
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
    <section id="about" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center fade-in-on-scroll hover:text-accent transition-colors duration-300">About</h2>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10 shadow-xl hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6 fade-in-on-scroll">
                <p className="text-white/90 leading-relaxed text-lg hover:text-white transition-colors">
                  I'm Mohammed Nafia, a Software Engineer focused on modern web development. I specialize in building responsive interfaces using Svelte and React, and integrating real APIs to deliver real user value.
                </p>
                <p className="text-white/90 leading-relaxed text-lg hover:text-white transition-colors">
                  I've participated in multiple hackathons and earned top placements, working as the Frontend Engineer in high-impact team projects. I enjoy solving UI problems, optimizing user experience, and writing clean, maintainable code.
                </p>
              </div>
              <div className="space-y-6 fade-in-on-scroll">
                <p className="text-white/90 leading-relaxed text-lg hover:text-white transition-colors">
                  Academically, I'm a student in Artificial Intelligence & Robotics Engineering at Al-Nahrain University, which gives me a strong foundation in algorithms, problem-solving, and software engineering principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

