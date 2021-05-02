// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  distDir: 'build',
  trailingSlash: true,
  assetPrefix: '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  future: {
    webpack5: true,
  },
};
