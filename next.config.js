/** @type {import('next').NextConfig} */
const repo = 'personalWebsite' // Replace with your repository name if different

const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? `/${repo}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repo}/` : '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/image-loader.js',
    domains: [
      'is1-ssl.mzstatic.com',
      'is2-ssl.mzstatic.com',
      'is3-ssl.mzstatic.com',
      'is4-ssl.mzstatic.com',
      'is5-ssl.mzstatic.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'is2-ssl.mzstatic.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'is3-ssl.mzstatic.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'is4-ssl.mzstatic.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'is5-ssl.mzstatic.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'same-assets.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
