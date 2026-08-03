import React from 'react';
import { Mail } from 'lucide-react';
import { personal } from '../../data/personal';
import { Github, Linkedin } from './BrandIcons';

export const SocialLinks = ({ className = '', iconClassName = '' }) => {
  const links = [
    {
      name: 'LinkedIn',
      url: personal.linkedin,
      icon: Linkedin,
      colorClass: 'hover:text-[#0077b5] hover:bg-[#0077b5]/10',
    },
    {
      name: 'GitHub',
      url: personal.github,
      icon: Github,
      colorClass: 'hover:text-[#24292e] hover:bg-[#24292e]/10',
    },
    {
      name: 'Email',
      url: `mailto:${personal.email}`,
      icon: Mail,
      colorClass: 'hover:text-[#ea4335] hover:bg-[#ea4335]/10',
    },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            className={`p-2.5 rounded-lg border border-brand-border text-brand-text-muted transition-all duration-200 ${link.colorClass} ${iconClassName}`}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};
