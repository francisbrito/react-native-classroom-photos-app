module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
