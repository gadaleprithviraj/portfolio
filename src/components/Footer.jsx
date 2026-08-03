import React from 'react';
import { Mail } from 'lucide-react';
import { Linkedin, Github } from './ui/BrandIcons';
import { personal } from '../data/personal';

export const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About me', page: 'about' },
    { label: 'Resume', page: 'resume' },
    { label: 'Projects', page: 'projects' },
    { label: 'Contact', page: 'contact' }
  ];

  return (
    <footer className="bg-[#2a261e] text-[#d6ccbe] py-12 px-4 sm:px-6 lg:px-8 border-t border-brand-border/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full pb-8 border-b border-[#3d372c] gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-heading font-bold text-sm sm:text-base tracking-tight">
              {personal.name}
            </h3>
            <p className="text-xs text-[#a39785] mt-1 max-w-sm font-sans">
              {personal.role}
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider font-sans">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(link.page)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full pt-8 gap-4 text-xs font-sans text-[#a39785]">
          <div className="text-center md:text-left">
            <span>
              &copy; {currentYear} {personal.name}. All rights reserved.
            </span>
            <span className="block sm:inline sm:ml-3 mt-1 sm:mt-0 text-[10px] text-[#8c7e6c]">
              Built with React & Tailwind CSS. Styled after the Aristotle Google Sites theme.
            </span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded border border-[#3d372c] hover:border-[#cea964] hover:text-white flex items-center justify-center transition-all bg-[#1e1a14]/40"
              title="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="w-8 h-8 rounded border border-[#3d372c] hover:border-[#cea964] hover:text-white flex items-center justify-center transition-all bg-[#1e1a14]/40"
              title="Email"
            >
              <Mail size={14} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded border border-[#3d372c] hover:border-[#cea964] hover:text-white flex items-center justify-center transition-all bg-[#1e1a14]/40"
              title="GitHub"
            >
              <Github size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
