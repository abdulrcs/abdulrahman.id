module.exports = {
  extends: 'eslint-config-next',
  parser: '@typescript-eslint/parser',
  plugins: ['chakra-ui'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'react/no-unescaped-entities': 'off',
    'chakra-ui/props-order': 'error',
    'chakra-ui/props-shorthand': 'error',
    'chakra-ui/require-specific-component': 'error',
  },
}
