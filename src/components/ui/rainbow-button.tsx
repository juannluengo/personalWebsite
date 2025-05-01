import React from "react";

import { cn } from "@/lib/utils";
type RainbowButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex animate-rainbow cursor-pointer items-center justify-center rounded-xl border-[3px] border-transparent bg-[length:200%] px-8 py-4 font-medium transition-all hover:scale-105 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",

        // Rainbow border gradient
        "bg-gradient-to-r from-[hsl(var(--color-1))] via-[hsl(var(--color-3))] to-[hsl(var(--color-5))]",
        
        // Inner container style
        "before:absolute before:inset-[2px] before:rounded-lg before:bg-black",
        
        // Glow effect
        "after:absolute after:-bottom-2 after:left-1/2 after:h-[10px] after:w-4/5 after:-translate-x-1/2 after:animate-rainbow after:rounded-full after:bg-gradient-to-r after:from-[hsl(var(--color-1))] after:via-[hsl(var(--color-3))] after:to-[hsl(var(--color-5))] after:blur-md",

        className,
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}
