import React from 'react';

export const Button = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  download = false,
  target,
  rel,
  type = 'button',
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-brand-blue-hover shadow-sm hover:shadow-md focus:ring-brand-blue/50",
    secondary: "bg-brand-blue-light text-brand-blue hover:bg-blue-100 focus:ring-blue-200",
    outline: "border border-brand-border text-brand-text hover:bg-slate-50 hover:text-brand-text-dark focus:ring-slate-200",
    ghost: "text-brand-text hover:bg-slate-50 hover:text-brand-text-dark focus:ring-slate-100",
  };

  const sizes = "px-5 py-2.5 text-sm";
  const styles = `${baseStyle} ${variants[variant]} ${sizes} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        download={download}
        target={target || (download ? "_self" : "_blank")}
        rel={rel || (download ? "" : "noopener noreferrer")}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
