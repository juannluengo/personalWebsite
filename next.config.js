/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/personalWebsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personalWebsite/' : '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
    path: process.env.NODE_ENV === 'production' ? '/personalWebsite' : '',
  },
};

module.exports = nextConfig;
