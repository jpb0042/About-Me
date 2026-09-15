import type { NextConfig } from 'next';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(root, 'src'),
      views: path.join(root, 'src/views'),
      components: path.join(root, 'src/components'),
    };
    return config;
  },
  turbopack: {
    resolveAlias: {
      '@': path.join(root, 'src'),
      views: path.join(root, 'src/views'),
      components: path.join(root, 'src/components'),
    },
  },
};

export default nextConfig;
