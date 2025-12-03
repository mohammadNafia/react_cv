import { useEffect, useRef } from 'react';

function Skills() {
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++', 'C#', 'HTML', 'CSS']
    },
    {
      title: 'Frontend',
      skills: ['Svelte', 'React', 'TailwindCSS', 'REST APIs', 'Fetch / Async-Await', 'Axios']
    },
    {
      title: 'Tools',
      skills: ['Git / GitHub', 'Vite', 'npm / yarn']
    }
  ];

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
    <section id="skills" className="section-padding bg-white/5" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center fade-in-on-scroll hover:text-accent transition-colors duration-300">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map(function(category, index) {
            const delay = index * 0.1 + 's';
            return (
              <div key={index} className="space-y-4 fade-in-on-scroll" style={{ transitionDelay: delay }}>
                <h3 className="text-2xl font-semibold text-white mb-6 hover:text-accent transition-colors">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(function(skill, skillIndex) {
                    return (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-accent transition-all duration-200 border border-white/20 hover:scale-110 hover:shadow-lg hover:shadow-accent/30 cursor-pointer"
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;

