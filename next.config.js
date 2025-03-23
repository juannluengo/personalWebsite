/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/personalWebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personalWebsite/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
