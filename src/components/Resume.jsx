import React from 'react';
import { Download, ExternalLink, Mail } from 'lucide-react';
import { Linkedin, Github } from './ui/BrandIcons';
import { personal } from '../data/personal';

export const Resume = () => {
  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Banner Header */}
      <section 
        className="relative h-[220px] w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(42, 38, 30, 0.6), rgba(42, 38, 30, 0.6)), url('https://lh3.googleusercontent.com/sitesv/AG8ngQVNIBxwB_w_pEeOZYvHZoms-hlnLApjb0Sa7IaZBf7uKivP938NxVhLh7WFhyF9-qkx8Rqcs450O7n1tXtWRqZ0MVl1jkB6lBG8vQEGAjhzUMAGAztcILmBPJDRjXtMqE7NoQvZFyilBBtRXkKBmiOr2QSOeJmTV08QGzI6c94IheMGParX0CiWoF6aQ0M=w16383')`
        }}
      >
        <div className="text-center px-4 reveal active">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-2">
            My Resume
          </h1>
          <p className="text-xs sm:text-base font-heading font-medium tracking-widest text-[#cea964] uppercase">
            {personal.name}
          </p>
        </div>
      </section>

      {/* PDF View Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* PDF Iframe Embed (Live Preview) */}
        <div className="gold-card bg-white p-4 mb-8 relative reveal active shadow-md">
          <div className="flex items-center justify-between border-b border-brand-border pb-3 mb-4">
            <h3 className="font-heading font-bold text-xs sm:text-sm text-brand-text-dark">
              Prithviraj_Gadale_Resume.pdf
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={personal.resume}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-brand-gold hover:text-brand-gold-hover flex items-center gap-1 transition-colors"
              >
                <ExternalLink size={14} /> Open Full PDF
              </a>
            </div>
          </div>
          
          {/* Native PDF Viewer Iframe */}
          <div className="w-full bg-brand-bg rounded border border-brand-border overflow-hidden" style={{ height: '800px' }}>
            <iframe
              src={`${personal.resume}#toolbar=1`}
              className="w-full h-full border-0"
              title="Prithviraj Gadale Resume PDF Preview"
            ></iframe>
          </div>
        </div>

        {/* CTA Links */}
        <div className="flex flex-wrap justify-center gap-4 reveal active">
          <a
            href={personal.resume}
            download
            className="px-6 py-3 bg-brand-gold hover:bg-brand-gold-hover text-white text-xs font-bold uppercase tracking-wider rounded flex items-center gap-2 cursor-pointer shadow transition-all active:scale-95"
          >
            <Download size={16} /> Download PDF Copy
          </a>
        </div>

        {/* Footer Social Icons */}
        <div className="mt-16 pt-8 border-t border-brand-border/60 max-w-sm mx-auto reveal active">
          <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-brand-text-muted mb-4">
            Professional Channels
          </p>
          <div className="flex justify-center items-center gap-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-brand-border hover:border-brand-gold text-brand-text-muted hover:text-brand-gold flex items-center justify-center bg-white transition-all hover:scale-105"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="w-10 h-10 rounded-full border border-brand-border hover:border-brand-gold text-brand-text-muted hover:text-brand-gold flex items-center justify-center bg-white transition-all hover:scale-105"
              title="Email Address"
            >
              <Mail size={18} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-brand-border hover:border-brand-gold text-brand-text-muted hover:text-brand-gold flex items-center justify-center bg-white transition-all hover:scale-105"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
