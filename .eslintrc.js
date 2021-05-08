module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react'],
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unescaped-entities': 0,
    'react/require-default-props': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/react-in-jsx-scope': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    indent: 0,
    '@typescript-eslint/indent': [
      'error',
      2,
    ],

  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        map: [['#', './src']],
      },
    },
  },
};
