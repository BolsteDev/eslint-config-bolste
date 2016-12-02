module.exports = {
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  ecmaFeatures: {
    jsx: true,
  },
  rules: {
    // Specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // Prevent usage of deprecated methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-deprecated': ['error'],

    'react/sort-comp': 'off',
    'react/sort-prop-types': 'warn',
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',

    // Allow dangerous html, WE KNOW WHAT WE ARE DOING
    'react/no-danger': 'off',

    'react/no-did-mount-set-state': 'error',
  },
};
