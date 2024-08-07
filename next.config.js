/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: isProd ? '/Alltoon/' : '',
  basePath: isProd ? '/Alltoon' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  env: {
    BASE_URL: isProd ? '/Alltoon' : '',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
