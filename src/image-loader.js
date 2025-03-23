export default function imageLoader({ src }) {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? '/personalWebsite' 
    : '';
  return `${baseUrl}${src}`;
} 