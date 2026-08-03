import React from 'react';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={`bg-brand-card border border-brand-border rounded-xl p-6 transition-all duration-300 ${
        hoverEffect 
          ? 'hover:border-slate-700 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1' 
          : 'shadow-sm'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-base font-bold text-brand-text-dark tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-xs text-brand-text mt-1.5 leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`mt-6 pt-4 border-t border-brand-border flex items-center justify-between ${className}`} {...props}>
    {children}
  </div>
);
