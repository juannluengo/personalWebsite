/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  distDir: 'out',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
      },
    ],
  },
  // Add basePath for GitHub Pages (replace 'your-repo-name' with your actual repo name)
  basePath: process.env.NODE_ENV === 'production' ? '/personalWebsite' : '',
  // Disable server-side features
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personalWebsite' : '',
};

export default nextConfig;
