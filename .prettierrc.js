module.exports = {
  arrowParens: 'avoid', // 箭头函数参数只有一个时是否要有小括号
  // eslintIntegration: true, // 让prettier使用eslint的代码格式进行校验
  printWidth: 80, // 一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一 个tab代表几个空格数，默认为2
  useTabs: false, // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  singleQuote: false, // 字符串是否使用单引号，默认为false 双引号, true 单引号
  semi: true, // 行位是否使用分号，默认为true
  trailingComma: 'all', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  parser: 'babel', // 代码的解析引擎，默认为 babylon (1.13.0版本之前) ，与 babel 相同。
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto，
}