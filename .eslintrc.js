/*
 * @Date: 2021-11-10 23:23:08
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-11 00:41:00
 */
/*
 * @Date: 2021-11-10 23:23:08
 * @LastEditors: zhangheng
 * @LastEditTime: 2021-11-10 23:39:00
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
