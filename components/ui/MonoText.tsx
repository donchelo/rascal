import { cn } from "@/lib/utils";

interface MonoTextProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "text-xs md:text-sm",
  md: "text-sm md:text-base",
  lg: "text-base md:text-lg",
};

export function MonoText({
  children,
  className,
  size = "md",
}: MonoTextProps) {
  return (
    <span
      className={cn(
        "font-mono tracking-wider",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}

