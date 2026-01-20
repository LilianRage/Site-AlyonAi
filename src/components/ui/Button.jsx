import React from 'react';
import { cn } from '../../lib/utils';

const buttonVariants = {
  default: "bg-black text-white hover:bg-gray-800",
  outline: "border border-black bg-transparent hover:bg-black hover:text-white",
  ghost: "hover:bg-gray-100",
  link: "underline-offset-4 hover:underline text-black",
};

const buttonSizes = {
  default: "h-10 px-6 py-2",
  sm: "h-9 px-4 text-sm",
  lg: "h-12 px-8 text-lg",
  icon: "h-10 w-10",
};

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  children,
  ...props 
}, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-none font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
