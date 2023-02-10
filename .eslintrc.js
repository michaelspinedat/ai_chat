module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { packageDir: ['./client/', './server/'] }],
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    // 'import/extensions': 'never',
  },
}
