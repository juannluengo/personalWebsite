export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production (GitHub Pages), prefix with /personalWebsite
  if (process.env.NODE_ENV === 'production') {
    return `/personalWebsite/${cleanPath}`;
  }
  
  // In development, use the path as is, but ensure it starts with /
  return `/${cleanPath}`;
}
