/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/personalWebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personalWebsite' : '',
};

export default nextConfig;
