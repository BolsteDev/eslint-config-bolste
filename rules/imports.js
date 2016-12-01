module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: [
    'import',
  ],
  rules: {
    // No duplicate imports
    'import/no-duplicates': 'error',

    // Allow unresolved imports
    'import/no-unresolved': 'off',

    // No .js or .jsx extensions on imports
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
      },
    ],

    // disallow invalid exports, e.g. multiple defaults
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'error',
  },
};
