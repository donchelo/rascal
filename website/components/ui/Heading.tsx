import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm";
  uppercase?: boolean;
  className?: string;
}

const sizeClasses = {
  xl: "text-6xl md:text-8xl lg:text-9xl",
  lg: "text-4xl md:text-6xl lg:text-7xl",
  md: "text-2xl md:text-4xl lg:text-5xl",
  sm: "text-xl md:text-2xl lg:text-3xl",
};

export function Heading({
  children,
  as: Component = "h1",
  size = "lg",
  uppercase = true,
  className,
}: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-bold tracking-tight",
        sizeClasses[size],
        uppercase && "uppercase",
        className
      )}
    >
      {children}
    </Component>
  );
}

