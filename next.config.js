/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['scontent-iev1-1.xx.fbcdn.net', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
