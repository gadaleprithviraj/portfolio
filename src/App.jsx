import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    // Scroll reveal observer
    const revealCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(revealCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Scroll to top on page transition
    window.scrollTo(0, 0);

    return () => observer.disconnect();
  }, [activePage]);

  return (
    <div className="relative min-h-screen flex flex-col font-sans bg-brand-bg text-brand-text">
      {/* Sticky Header Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Pages Content */}
      <main className="flex-grow pt-16">
        {activePage === 'home' && <Hero onNavigate={setActivePage} />}
        {activePage === 'about' && <About />}
        {activePage === 'resume' && <Resume />}
        {activePage === 'projects' && <Projects />}
        {activePage === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <Footer onNavigate={setActivePage} />
    </div>
  );
}

export default App;
