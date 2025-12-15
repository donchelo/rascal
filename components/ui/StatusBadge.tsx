import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  code: string;
  label: string;
  className?: string;
  dark?: boolean;
}

export function StatusBadge({ code, label, className, dark = false }: StatusBadgeProps) {
  return (
    <div 
      className={cn(
        "inline-flex items-center border border-current font-mono text-xs uppercase tracking-wider select-none",
        dark ? "text-rascal-cream border-rascal-cream/30 bg-rascal-black/50" : "text-rascal-black border-rascal-black/30 bg-white/50",
        className
      )}
    >
      <span className={cn("px-2 py-1 font-bold border-r border-current", dark ? "bg-rascal-cream/10" : "bg-rascal-black/5")}>
        {code}
      </span>
      <span className="px-2 py-1">
        {label}
      </span>
    </div>
  );
}

