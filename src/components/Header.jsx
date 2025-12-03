import { useState, useEffect } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return function() {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  let headerClass = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-white/10';
  if (scrolled) {
    headerClass += ' bg-dark/95 shadow-lg';
  } else {
    headerClass += ' bg-dark/80';
  }

  return (
    <header className={headerClass}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-semibold text-white hover:text-accent transition-colors cursor-pointer animate-scale-in">
            MN
          </div>
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map(function(item) {
              return (
                <li key={item.id}>
                  <button
                    onClick={function() { scrollToSection(item.id); }}
                    className="text-white/80 hover:text-accent transition-all duration-200 text-sm font-medium hover:scale-110"
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="md:hidden">
            <button className="text-white/80 hover:text-accent transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

