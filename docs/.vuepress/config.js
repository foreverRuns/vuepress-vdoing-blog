const themeConfig = require('./config/themeConfig.js')
const plugins = require('./config/plugins.js')
const configureWebpack = require('./config/webpack.js')

module.exports = {
  // theme: 'vdoing',
  title: "RunSS11's blog",
  description: '个人技术博客,学习笔记,技术文档。html,css,JavaScript,TypeScript,Vue3,NodeJS,Git,Github,C,Openssl,...',
  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }]
  head: [
    // 增加一个自定义的 favicon(网页标签的图标)
    // 这里的 '/' 指向 docs/.vuepress/public 文件目录
    // 即 docs/.vuepress/public/img/geass-bg.ico
    ['link', { rel: 'icon', href: '/img/icon.ico' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '个人技术博客,学习笔记,技术文档。html,css,JavaScript,TypeScript,Vue3,NodeJS,Git,Github,C,Openssl',
      },
    ],
    // 移动浏览器主题颜色
    ['meta', { name: 'theme-color', content: '#11a8cd' }],
    // 移动端阻止页面缩放
    // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}],
    // 页脚不蒜子
    // ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
  ],

  // 默认'/'。如果你想将你的网站部署到如 https://username.github.io/blog/，那么 base 应该被设置成 "/blog/",（否则页面将失去样式等文件）
  // base: '/blog/',
  // 显示代码块的行号
  markdown: {
    lineNumbers: true,
  },
  // 主题配置
  themeConfig,

  // 插件配置
  plugins,

  // webpack 配置
  configureWebpack,
}
