import { useState, useEffect, useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Svelte Weather App',
    image: 'https://i.ibb.co/yww6rp8/Screenshot-2025-12-02-233928.png',
    description: 'A modern weather application built using Svelte, designed to fetch and display real-time weather data through REST APIs. Implements async/await logic, JSON handling, responsive UI, and a clean component-based structure.',
    tech: 'Svelte, JavaScript, Fetch API, TailwindCSS',
    github: 'https://github.com/mohammadNafia/Weather-App',
    demo: '#',
    images: []
  },
  {
    id: 2,
    title: 'Student Management System (React CRUD)',
    image: 'https://i.ibb.co/hRW10jbF/Screenshot-2025-12-02-234125.png',
    description: 'A full CRUD system built with React, supporting adding, editing, deleting, and retrieving student data via RESTful API integration. Features include clean form handling, state management, and real-data validation.',
    tech: 'React, JavaScript, Fetch API, REST, TailwindCSS',
    github: 'https://github.com/mohammadNafia/student-app',
    demo: '#',
    images: []
  },
  {
    id: 3,
    title: 'Dynamic Form Builder (Hackathon – 2nd Place)',
    image: 'https://i.ibb.co/wN3tGjzq/Screenshot-2025-11-22-214124.png',
    description: 'A dynamic form-creation platform built during the HUB200 × Computiq × Zain hackathon (2nd Place). I served as the Frontend Engineer. The system features reusable UI components, custom fields, templates, and a management dashboard.',
    tech: 'React, TailwindCSS, JavaScript',
    github: null,
    demo: '#',
    images: [
      'https://i.ibb.co/wN3tGjzq/Screenshot-2025-11-22-214124.png',
      'https://i.ibb.co/WvXbRHYh/Screenshot-2025-11-22-230318.png'
    ]
  },
  {
    id: 4,
    title: 'Flow – AI Call Center Dashboard',
    image: 'https://i.ibb.co/q33phPn0/Screenshot-2025-12-03-000329.png',
    description: 'A modern frontend dashboard designed using React and Tailwind, developed during a hackathon event. Integrates AI-powered logic, agent flows, and scalable UI architecture in collaboration with backend engineers.',
    tech: 'React, TailwindCSS, JavaScript',
    github: null,
    demo: '#',
    images: [
      'https://i.ibb.co/q33phPn0/Screenshot-2025-12-03-000329.png',
      'https://i.ibb.co/fYRHm0bT/Screenshot-2025-12-03-000408.png',
      'https://i.ibb.co/tpL0PyVZ/photo-2025-12-03-00-19-16.jpg'
    ]
  }
];

function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
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

  function setImageIndex(projectId, index) {
    const newIndex = {};
    for (let key in currentImageIndex) {
      newIndex[key] = currentImageIndex[key];
    }
    newIndex[projectId] = index;
    setCurrentImageIndex(newIndex);
  }

  function nextImage(projectId, totalImages) {
    let current = currentImageIndex[projectId];
    if (current === undefined) {
      current = 0;
    }
    const next = (current + 1) % totalImages;
    setImageIndex(projectId, next);
  }

  function prevImage(projectId, totalImages) {
    let current = currentImageIndex[projectId];
    if (current === undefined) {
      current = 0;
    }
    const prev = (current - 1 + totalImages) % totalImages;
    setImageIndex(projectId, prev);
  }

  function getTransform(projectId) {
    let index = currentImageIndex[projectId];
    if (index === undefined) {
      index = 0;
    }
    return 'translateX(-' + (index * 100) + '%)';
  }

  return (
    <section id="projects" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center fade-in-on-scroll hover:text-accent transition-colors duration-300">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map(function(project, idx) {
            const delay = idx * 0.1 + 's';
            return (
            <div
              key={project.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 fade-in-on-scroll hover:scale-105"
              style={{ transitionDelay: delay }}
            >
              {project.images && project.images.length > 0 ? (
                project.id === 4 ? (
                  <div className="grid grid-cols-2 gap-2 p-2 bg-white/5">
                    <div className="col-span-2">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <img
                        src={project.images[1]}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <img
                        src={project.images[2]}
                        alt={project.title}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="overflow-hidden">
                      <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: getTransform(project.id) }}
                      >
                        {project.images.map(function(image, imgIndex) {
                          return (
                            <img
                              key={imgIndex}
                              src={image}
                              alt={project.title}
                              className="w-full h-64 object-cover flex-shrink-0"
                            />
                          );
                        })}
                      </div>
                    </div>
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={function() { prevImage(project.id, project.images.length); }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                          aria-label="Previous image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={function() { nextImage(project.id, project.images.length); }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                          aria-label="Next image"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                )
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-secondary text-sm mb-4 font-medium">{project.tech}</p>
                <p className="text-white/80 leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-accent/50"
                    >
                      View Code
                    </a>
                  )}
                  <a
                    href={project.demo}
                    className="px-4 py-2 bg-transparent border border-white/30 text-white rounded-lg text-sm font-medium hover:border-white/50 transition-all duration-200 hover:scale-110 hover:bg-white/10"
                  >
                    Project Details
                  </a>
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;

