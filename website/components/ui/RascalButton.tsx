import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface RascalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const RascalButton = forwardRef<HTMLButtonElement, RascalButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseClasses = "font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variantClasses = {
      primary: "bg-rascal-black text-rascal-cream hover:bg-rascal-red hover:text-white",
      secondary: "bg-rascal-red text-white hover:bg-rascal-black hover:text-rascal-cream",
      outline: "border-2 border-rascal-black text-rascal-black hover:bg-rascal-black hover:text-rascal-cream",
    };
    
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

RascalButton.displayName = "RascalButton";

export { RascalButton };

