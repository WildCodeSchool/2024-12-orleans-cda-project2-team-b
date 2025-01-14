/** @type {import("prettier").Options} */
const config = {
  plugins: ['prettier-plugin-tailwindcss', '@trivago/prettier-plugin-sort-imports'],
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  printWidth: 120,
  tabWidth: 2,
  trailingComma: 'all',

  importOrder: ['^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['importAttributes', 'typescript', 'jsx', 'decorators-legacy'],
};

export default config;
