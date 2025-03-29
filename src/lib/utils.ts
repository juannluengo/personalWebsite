import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prefixes image paths with the correct base path when in production
 * This ensures images load correctly when deployed to GitHub Pages
 */
export function getImagePath(path: string): string {
  return process.env.NODE_ENV === 'production' 
    ? `/personalWebsite${path}` 
    : path;
}
