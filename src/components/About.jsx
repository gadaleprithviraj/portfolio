import React from 'react';
import { GraduationCap, MapPin, Briefcase, BookOpen } from 'lucide-react';
import { personal } from '../data/personal';
import { skillCategories } from '../data/skills';

export const About = () => {
  const { paragraphs, quickFacts } = personal.about;

  const getIcon = (label) => {
    switch (label.toLowerCase()) {
      case 'education':
        return <GraduationCap className="text-brand-gold" size={20} />;
      case 'degree':
        return <BookOpen className="text-brand-gold" size={20} />;
      case 'focus':
        return <Briefcase className="text-brand-gold" size={20} />;
      case 'location':
        return <MapPin className="text-brand-gold" size={20} />;
      default:
        return <BookOpen className="text-brand-gold" size={20} />;
    }
  };

  return (
    <div className="bg-brand-bg min-h-screen">
      {/* Banner Header */}
      <section 
        className="relative h-[220px] w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(42, 38, 30, 0.6), rgba(42, 38, 30, 0.6)), url('https://lh3.googleusercontent.com/sitesv/AG8ngQVbTl8sVlXO6PWJLeDJJ37ArCx77KpJKU09QcDyhPj__eS6SJ0N7wxoqiK94T_rJdgyiOCcRyBbxGcMfes3KTLK3B5h3HrfcLq3oOfBQY8gsn4m8H-Fmapbp2_kGk-Xw_1i2VZRNPGv5z5WEkupYYV41-wsyNSASfnl6JIggDa79JvJHjhHgmKu5eTOH5rpDzOLugHALTl2X8NxyDsivnOxZPLkXhML5HnO7KEeHFY=w1280')`
        }}
      >
        <div className="text-center px-4 reveal active">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-2">
            About Me
          </h1>
          <p className="text-xs sm:text-base font-heading font-medium tracking-widest text-[#cea964] uppercase">
            {personal.name}
          </p>
        </div>
      </section>

      {/* Profile & Biography Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Biography */}
          <div className="lg:col-span-8 space-y-6 text-left reveal active">
            <h3 className="text-xl font-heading font-bold text-brand-text-dark gold-line gold-line-left mb-6">
              Hey there!
            </h3>
            {paragraphs.map((p, idx) => (
              <p key={idx} className="text-sm sm:text-base text-brand-text leading-relaxed font-serif">
                {p}
              </p>
            ))}
          </div>

          {/* Right: Quick Facts Grid */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 reveal active">
            {quickFacts.map((fact, idx) => (
              <div key={idx} className="gold-card p-5 flex items-start gap-4">
                <div className="p-2.5 bg-brand-bg rounded border border-brand-border">
                  {getIcon(fact.label)}
                </div>
                <div>
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-text-muted mb-1">
                    {fact.label}
                  </h4>
                  <p className="text-xs font-semibold text-brand-text-dark text-left">
                    {fact.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Technical Skills Grid */}
      <section className="border-t border-brand-border bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-heading font-bold text-brand-text-dark mb-3 gold-line">
              Technical Proficiencies
            </h3>
            <p className="text-xs text-brand-text-muted font-sans tracking-wide uppercase">
              Core Skills & Tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="gold-card p-6 bg-brand-bg/30">
                <h4 className="font-heading font-bold text-sm text-brand-gold border-b border-brand-border pb-3 mb-4">
                  {category.title}
                </h4>
                <ul className="space-y-2">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-xs font-medium text-brand-text flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
