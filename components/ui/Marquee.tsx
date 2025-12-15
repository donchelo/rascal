"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  text: string;
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

const speedClasses = {
  slow: "animate-marquee-slow",
  normal: "animate-marquee",
  fast: "animate-marquee-fast",
};

export function Marquee({ text, className, speed = "normal" }: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div className={cn("inline-block", speedClasses[speed])}>
        <span className="inline-block px-8">{text}</span>
        <span className="inline-block px-8">{text}</span>
        <span className="inline-block px-8">{text}</span>
        <span className="inline-block px-8">{text}</span>
      </div>
    </div>
  );
}

