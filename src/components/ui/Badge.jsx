import React from 'react';
import { cn } from '../../lib/utils';

const badgeVariants = {
  default: "bg-black text-white",
  secondary: "bg-gray-100 text-black",
  outline: "border border-black text-black bg-transparent",
};

const Badge = React.forwardRef(({ 
  className, 
  variant = "default", 
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium transition-colors",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
});

Badge.displayName = "Badge";

export { Badge, badgeVariants };
