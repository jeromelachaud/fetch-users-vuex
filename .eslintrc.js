// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [ 'standard' ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'brace-style': 0,
    'generator-star-spacing': 0,
    'comma-style': [ 'error', 'last' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'semi-spacing': [ 'error', { before: false, after: true } ],
    'no-empty': [ 'error', { 'allowEmptyCatch': true } ],
    'quote-props': [ 'error', 'as-needed' ],
    'eol-last': [ 'error', 'always' ],
    'no-useless-concat': [ 'error' ],
    // allow console during development
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-var': [ 'error' ],
    'padded-blocks': [ 'error', { classes: 'always' } ],
    'prefer-template': [ 'error' ],
    'prefer-arrow-callback': [ 'error' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'space-before-function-paren': [ 'error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'ignore',
    } ],
  }
}
