import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text' | 'gold';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-serif tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gold-400 text-black-900 hover:bg-white hover:text-black-900 font-bold",
    gold: "bg-gradient-to-r from-gold-600 to-gold-400 text-black hover:from-white hover:to-white hover:text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]",
    outline: "border border-gold-400/50 text-gold-400 hover:border-gold-400 hover:bg-gold-400/10",
    text: "text-gold-400 hover:text-white underline-offset-4 hover:underline"
  };

  const sizes = {
    sm: "text-xs px-6 py-2",
    md: "text-sm px-8 py-3",
    lg: "text-base px-12 py-4"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};