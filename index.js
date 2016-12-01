module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      classes: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',

    './rules/best-practices.js',
    './rules/errors.js',
    './rules/es6.js',
    './rules/no-node.js',
    './rules/strict.js',
    './rules/style.js',
    './rules/variables.js',

    './rules/imports.js',
    './rules/react.js',
    './rules/react-a11y.js',
  ],
  globals: {
    global: false,
    Promise: false,
    API_URL: false,
    Audio: false,
    Bugsnag: false,
    module: false,
    Uint8Array: false,
  },
  env: {
    browser: true,
  },
};
