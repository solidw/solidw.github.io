// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require("next-transpile-modules")([
  "react-markdown",
  "react-syntax-highlighter",
]);

module.exports = withTM({
  experimental: {
    esmExternals: "loose",
  },
});
