/**
 * @type {import('next').NextConfig}
 */
const config = {
  compiler: {
    emotion: true,
  },
  experimental: {
    esmExternals: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = config;
