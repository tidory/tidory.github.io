module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
    'plugin:vue/essential'
  ],
  globals: {
    hljs: 'readonly',
    $: 'readonly',
    UIkit: 'readonly'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-async-promise-executor': 0,
    'no-misleading-character-class': 0,
    'no-useless-catch': 0,
    'no-useless-escape': 0
  }
}
