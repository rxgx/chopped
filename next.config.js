/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  assetPrefix: './',
  images: {
    unoptimized: true
  },
  output: 'export',
  reactStrictMode: true
}

module.exports = nextConfig;
