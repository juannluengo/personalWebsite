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
  const base = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/personalWebsite' : '');
  if (path.startsWith('http')) return path;
  if (path.startsWith('/')) return `${base}${path}`;
  return `${base}/${path}`;
}
