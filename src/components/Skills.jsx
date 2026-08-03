import React from 'react';
import { Code, BarChart3, PieChart, Database, Briefcase, Cpu, Sliders } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';

export const Skills = () => {
  const getCategoryIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'programming & query languages':
        return <Code className="text-brand-blue" size={18} />;
      case 'data analytics':
        return <BarChart3 className="text-brand-blue" size={18} />;
      case 'data visualization':
        return <PieChart className="text-brand-blue" size={18} />;
      case 'databases':
        return <Database className="text-brand-blue" size={18} />;
      case 'business intelligence':
        return <Briefcase className="text-brand-blue" size={18} />;
      case 'machine learning':
        return <Cpu className="text-brand-blue" size={18} />;
      default:
        return <Sliders className="text-brand-blue" size={18} />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-bg border-t border-brand-border/60 relative">
      <div className="glow-blue bottom-10 left-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="Skills" 
          subtitle="My Technical Toolbox" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx} 
              className="flex flex-col text-left h-full bg-brand-card"
              hoverEffect={true}
            >
              <div className="flex items-center gap-3 border-b border-brand-border/60 pb-3 mb-4">
                <div className="p-2 bg-slate-900 border border-brand-border rounded-lg">
                  {getCategoryIcon(category.title)}
                </div>
                <h3 className="font-bold text-white text-sm tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-1">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 bg-slate-900 border border-brand-border text-brand-text text-[11px] font-semibold rounded-md shadow-2xs hover:border-brand-blue/40 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
