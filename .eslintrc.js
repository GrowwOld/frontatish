module.exports = {
  root: true,
  extends: 'airbnb',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off'
  },
  globals: {
    fetch: false
  }
};
