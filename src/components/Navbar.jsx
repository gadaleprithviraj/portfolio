import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personal } from '../data/personal';

export const Navbar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Title */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
            {personal.photo ? (
              <img
                src={personal.photo}
                alt={personal.name}
                className="w-8 h-8 rounded-full object-cover border border-brand-gold/60 shadow-sm transition-transform duration-200 hover:scale-105"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-brand-gold text-white flex items-center justify-center font-heading font-bold text-sm border border-brand-border shadow-sm">
                PG
              </div>
            )}
            <span className="font-heading font-bold text-sm tracking-wide text-brand-gold hover:text-brand-gold-hover transition-colors">
              Prithviraj's Portfolio
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-xs font-semibold tracking-wider uppercase transition-all duration-200 border-b-2 py-1 ${
                activePage === 'home'
                  ? 'border-brand-gold text-brand-text-dark'
                  : 'border-transparent text-brand-text-muted hover:text-brand-text-dark hover:border-brand-gold/40'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`text-xs font-semibold tracking-wider uppercase transition-all duration-200 border-b-2 py-1 ${
                activePage === 'about'
                  ? 'border-brand-gold text-brand-text-dark'
                  : 'border-transparent text-brand-text-muted hover:text-brand-text-dark hover:border-brand-gold/40'
              }`}
            >
              About me
            </button>
            <button
              onClick={() => handleNavClick('resume')}
              className={`text-xs font-semibold tracking-wider uppercase transition-all duration-200 border-b-2 py-1 ${
                activePage === 'resume'
                  ? 'border-brand-gold text-brand-text-dark'
                  : 'border-transparent text-brand-text-muted hover:text-brand-text-dark hover:border-brand-gold/40'
              }`}
            >
              Resume
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className={`text-xs font-semibold tracking-wider uppercase transition-all duration-200 border-b-2 py-1 ${
                activePage === 'projects'
                  ? 'border-brand-gold text-brand-text-dark'
                  : 'border-transparent text-brand-text-muted hover:text-brand-text-dark hover:border-brand-gold/40'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-xs font-semibold tracking-wider uppercase transition-all duration-200 border-b-2 py-1 ${
                activePage === 'contact'
                  ? 'border-brand-gold text-brand-text-dark'
                  : 'border-transparent text-brand-text-muted hover:text-brand-text-dark hover:border-brand-gold/40'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-text-muted hover:text-brand-text-dark hover:bg-brand-bg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-brand-border bg-white py-2 px-4 shadow-md space-y-1">
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left px-3 py-2 text-sm font-semibold ${
              activePage === 'home' ? 'text-brand-gold bg-brand-bg' : 'text-brand-text-muted hover:text-brand-text-dark'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`block w-full text-left px-3 py-2 text-sm font-semibold ${
              activePage === 'about' ? 'text-brand-gold bg-brand-bg' : 'text-brand-text-muted hover:text-brand-text-dark'
            }`}
          >
            About me
          </button>
          <button
            onClick={() => handleNavClick('resume')}
            className={`block w-full text-left px-3 py-2 text-sm font-semibold ${
              activePage === 'resume' ? 'text-brand-gold bg-brand-bg' : 'text-brand-text-muted hover:text-brand-text-dark'
            }`}
          >
            Resume
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className={`block w-full text-left px-3 py-2 text-sm font-semibold ${
              activePage === 'projects' ? 'text-brand-gold bg-brand-bg' : 'text-brand-text-muted hover:text-brand-text-dark'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`block w-full text-left px-3 py-2 text-sm font-semibold ${
              activePage === 'contact' ? 'text-brand-gold bg-brand-bg' : 'text-brand-text-muted hover:text-brand-text-dark'
            }`}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};
