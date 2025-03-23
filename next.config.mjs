/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  distDir: 'out',
  // Configure images for static export
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    unoptimized: true,
  },
  // Add basePath for GitHub Pages (replace 'your-repo-name' with your actual repo name)
  basePath: process.env.NODE_ENV === 'production' ? '/personalWebsite' : '',
  // Disable server-side features
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personalWebsite' : '',
};

export default nextConfig;
