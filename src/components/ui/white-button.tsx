import React from "react";
import { cn } from "@/lib/utils";

type WhiteButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function WhiteButton({
  children,
  className,
  ...props
}: WhiteButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex cursor-pointer items-center justify-center rounded-md bg-white text-black px-6 py-2 font-medium transition-colors hover:bg-gray-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
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