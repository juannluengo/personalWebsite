export function getImagePath(path: string): string {
  // For absolute URLs, don't modify
  if (path.startsWith('http')) {
    return path;
  }

  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Return the clean path (Next.js image loader will handle prefixing)
  return `/${cleanPath}`;
}
