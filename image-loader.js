export default function imageLoader({ src }) {
  // For absolute URLs, don't modify
  if (src.startsWith('http')) {
    return src;
  }

  // Remove leading slash if present and handle paths
  const cleanPath = src.startsWith('/') ? src.slice(1) : src;

  // In production, add the personalWebsite prefix
  if (process.env.NODE_ENV === 'production') {
    return `/personalWebsite/${cleanPath}`;
  }

  // In development, just use the clean path
  return `/${cleanPath}`;
}
