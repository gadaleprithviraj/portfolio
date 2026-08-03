import React from 'react';

export const SectionHeading = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  ...props
}) => {
  const isCenter = align === 'center';
  
  return (
    <div
      className={`mb-12 reveal ${isCenter ? 'text-center' : 'text-left'} ${className}`}
      {...props}
    >
      <div className={`inline-flex items-center gap-2 mb-2`}>
        <span className="h-1 w-6 rounded-full bg-brand-blue"></span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
          {title}
        </span>
      </div>
      {subtitle && (
        <h2 className="text-xl md:text-2xl font-extrabold text-white mt-1.5 max-w-2xl mx-auto tracking-tight">
          {subtitle}
        </h2>
      )}
    </div>
  );
};
