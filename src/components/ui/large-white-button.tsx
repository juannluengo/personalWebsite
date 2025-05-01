import React from "react";
import { cn } from "@/lib/utils";

type LargeWhiteButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function LargeWhiteButton({
  children,
  className,
  ...props
}: LargeWhiteButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex cursor-pointer items-center justify-center rounded-xl bg-white text-black w-full h-32 font-medium transition-colors hover:bg-gray-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
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