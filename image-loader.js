export default function imageLoader({ src }) {
  // For absolute URLs, don't modify
  if (src.startsWith('http')) {
    return src;
  }

  // Remove leading slash if present
  const cleanPath = src.startsWith('/') ? src.slice(1) : src;

  // Return the correct path
  return `/${cleanPath}`;
}
