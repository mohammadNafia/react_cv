import { useEffect, useRef } from 'react';

function Achievements() {
  const sectionRef = useRef(null);

  const achievements = [
    {
      title: 'Hackathon Awards',
      description: 'Achieved 2nd Place in the HUB200 × Computiq × Zain hackathon for building a dynamic form-builder platform. Served as the Frontend Engineer.'
    },
    {
      title: 'Flow – AI Dashboard',
      description: 'Worked as Frontend Developer in an AI-driven call center dashboard during hackathon participation.'
    },
    {
      title: 'University Robotics Exhibition – Eye Meach',
      description: 'Developed software logic for Eye Meach, a robotics system simulating human eye movement using Python, Raspberry Pi Pico, and Google Mediapipe for computer-vision tracking.'
    },
    {
      title: 'Government Robotics & AI Program',
      description: 'Completed a 1-year robotics & AI program supported by the Iraqi Prime Minister\'s Office, received recognition as a top participant.'
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
    <section id="achievements" className="section-padding bg-white/5" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center fade-in-on-scroll hover:text-accent transition-colors duration-300">Achievements</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {achievements.map(function(achievement, index) {
            const delay = index * 0.1 + 's';
            return (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 fade-in-on-scroll hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:scale-105"
                style={{ transitionDelay: delay }}
              >
                <h3 className="text-xl font-semibold text-white mb-3 hover:text-accent transition-colors">{achievement.title}</h3>
                <p className="text-white/80 leading-relaxed hover:text-white/90 transition-colors">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;

