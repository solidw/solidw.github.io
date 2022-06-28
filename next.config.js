module.exports = {
  experimental: {
    esmExternals: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/posts",
        permanent: true,
      },
    ];
  },
};
