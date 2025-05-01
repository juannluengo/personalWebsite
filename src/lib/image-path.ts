export function getImagePath(path: string): string {
  // For absolute URLs, don't modify
  if (path.startsWith('http')) {
    return path;
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production (GitHub Pages), prefix with /personalWebsite only if not already prefixed
  if (process.env.NODE_ENV === 'production') {
    // Handle the case where the path might already include the prefix
    if (cleanPath.startsWith('personalWebsite/')) {
      return `/${cleanPath}`;
    }
    return `/personalWebsite/${cleanPath}`;
  }
  
  // In development, use the path as is, but ensure it starts with /
  return `/${cleanPath}`;
}
