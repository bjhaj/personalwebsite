import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // For GitHub Pages deployment - remove these lines for other hosting
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/bjhaj.github.io' : '',
  // basePath: process.env.NODE_ENV === 'production' ? '/bjhaj.github.io' : '',
};

export default nextConfig;
