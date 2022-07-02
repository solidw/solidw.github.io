/**
 * @type {import('next').NextConfig}
 */
const config = {
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  experimental: {
    esmExternals: true,
  },
};

module.exports = config;
