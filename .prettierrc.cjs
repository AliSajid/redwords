module.exports = {
  insertPragma: false,
  overrides: [
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
        insertPragma: false,
      },
    },
    {
      files: '*.json',
      options: {
        parser: 'json',
        singleQuote: false,
        quoteProps: 'preserve',
        requirePragma: false,
        insertPragma: false,
      },
    },
  ],
  plugins: ['prettier-plugin-svelte'],
  printWidth: 120,
  quoteProps: 'preserve',
  requirePragma: false,
  singleQuote: true,
};
