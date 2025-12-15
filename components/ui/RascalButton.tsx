import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface RascalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const RascalButton = forwardRef<HTMLButtonElement, RascalButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    // Tom Sachs style: Sharp edges, heavy borders, 'tape' feel
    const baseClasses = "font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none relative group overflow-hidden border-2";
    
    const variantClasses = {
      primary: "bg-rascal-black text-rascal-cream border-rascal-black hover:bg-rascal-cream hover:text-rascal-black",
      secondary: "bg-rascal-red text-white border-rascal-red hover:bg-white hover:text-rascal-red hover:border-rascal-red",
      outline: "bg-transparent border-current text-current hover:bg-current hover:text-white", // Adapts to parent color
    };
    
    const sizeClasses = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
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
        {/* Interaction decoration */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current opacity-0 group-hover:opacity-100 transition-opacity"></span>
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current opacity-0 group-hover:opacity-100 transition-opacity"></span>
        
        <span className="relative z-10 flex items-center gap-2">
           {children}
        </span>
      </button>
    );
  }
);

RascalButton.displayName = "RascalButton";

export { RascalButton };
