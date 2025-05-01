export function getImagePath(path: string): string {
  // For absolute URLs, don't modify
  if (path.startsWith('http')) {
    return path;
  }

  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Add the personalWebsite prefix in production
  if (process.env.NODE_ENV === 'production') {
    return `/personalWebsite/${cleanPath}`;
  }

  // In development, just ensure the path starts with /
  return `/${cleanPath}`;
}
