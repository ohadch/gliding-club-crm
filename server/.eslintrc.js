module.exports = {
  env: {
    es2021: true,
    node: true,
    mocha: true,
  },
  ignorePatterns: [
    'node_modules/',
    'src/lib/'
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': 0,
    'no-continue': 0,
    'arrow-parens': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'class-methods-use-this': 0,
    'max-classes-per-file': 0,
    'no-unused-expressions': 0,
    'consistent-return': 0,
    'max-len': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-restricted-syntax': 0,
    'no-shadow': 0,
    'no-nested-ternary': 0,
    quotes: 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
