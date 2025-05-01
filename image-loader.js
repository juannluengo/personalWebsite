export default function imageLoader({ src }) {
  const isDev = process.env.NODE_ENV === 'development';
  // For absolute URLs, don't modify
  if (src.startsWith('http')) {
    return src;
  }
  // Remove leading slash if present
  const cleanPath = src.startsWith('/') ? src.slice(1) : src;
  // In production (GitHub Pages), prefix with /personalWebsite
  if (!isDev) {
    // Ensure we don't double-prefix the path
    return cleanPath.startsWith('personalWebsite/') ? `/${cleanPath}` : `/personalWebsite/${cleanPath}`;
  }
  // In development, use the path as is, but ensure it starts with /
  return `/${cleanPath}`;
}
