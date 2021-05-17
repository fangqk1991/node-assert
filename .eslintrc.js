module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: null,
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    mocha: true,
    es6: true,
    node: true,
  },
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
      },
    ],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
      },
    ],
    eqeqeq: 0,
    indent: ['error', 2],
    camelcase: 0,
    'no-unused-vars': 2,
    semi: ['error', 'never'],
    'space-before-function-paren': 'off',
    'generator-star-spacing': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-useless-escape': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
}
