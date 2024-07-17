/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  assetPrefix: isProd ? 'https://kn-front.github.io/Alltoon/' : '',
};

module.exports = nextConfig;
