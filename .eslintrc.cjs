module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'google',
    'plugin:jsdoc/recommended-typescript',
    'plugin:svelte/recommended',
    'plugin:svelte/prettier',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'valid-jsdoc': 'off',
        'require-jsdoc': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'valid-jsdoc': 'off',
        'require-jsdoc': 'off',
        'no-unused-vars': ['error', { varsIgnorePattern: '^[ssr|csr|prerender]', args: 'none' }],
        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^[ssr|csr|prerender]' }],
      },
    },
  ],
};
