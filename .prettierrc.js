module.exports = {
  printWidth: 400, // 这里设置大一些，内容多时也不会换行
  tabWidth: 2, // 空格2
  semi: false, // 结尾是否使用分号
  singleQuote: true, // 使用单引号
  disableLanguage: ['vue'],
  htmlWhitespaceSensitivity: 'ignore',
  trailingComma: 'none' // 函数末尾是否添加逗号，注意这里经常会跟eslint冲突
}
