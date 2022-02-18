const { nav, navBefore } = require('./themeConfig/nav.js')
const htmlModules = require('./themeConfig/htmlModules.js')

// 主题配置
module.exports = {
  nav,
  navBefore, // 继承后新增的前置nav，在搜索框前面
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/logo.png', // 导航栏logo
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  // 配置repo后，导航栏右侧生成相应的 repoLabel 链接，并在页面的底部生成一个默认的 "Edit this page" 链接，可通过editLinkText修改
  repo: 'foreverRuns/vuepress-vdoing-blog',
  // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为 "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
  // repoLabel: '查看源码',
  repoLink: false, // 继承后新增的配置项，不显示顶部导航栏右边 repoLabel 链接
  docsDir: 'docs', // 编辑的文件夹
  docsBranch: 'main', // 文档放在main分支下
  editLinks: true, // 启用编辑
  editLinkText: '编辑此页',

  //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//
  // 随机图片API
  // bodyBgImg: 'https://api.yimian.xyz/img?type=moe&size=1920x1080', // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
  bodyBgImg: ['https://cdn.jsdelivr.net/gh/foreverRuns/image-hosting@main/blog/bg-street.568x7lyv9a0w.webp', 'https://cdn.jsdelivr.net/gh/foreverRuns/image-hosting@main/blog/bg-club.1s9q1gb7dk1s.webp', 'https://cdn.jsdelivr.net/gh/foreverRuns/image-hosting@main/blog/bg-classroom.1kvh5rjqvccg.webp'], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
  bodyBgImgOpacity: 0.45, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

  // updateBar: { // 最近更新栏
  //   showToArticle: false, // 显示到文章页底部，默认true
  //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
  // },
  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

  // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>
  // 温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
  sidebar: 'structuring',

  // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
  author: {
    name: 'Runs', // 必需
    link: 'https://github.com/foreverRuns', // 可选的
  },

  // 博主信息，显示在首页侧边栏
  // blogger: {
  //   // 我的github头像
  //   avatar: 'https://avatars.githubusercontent.com/u/17795989?v=4',
  //   // 二次元随机头像
  //   // avatar: 'https://api.yimian.xyz/img?type=head',
  //   name: 'Runs Zheng',
  //   slogan: '就一个小学生',
  // },

  // 社交图标，显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social
  social: {
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加
    icons: [
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'mailto:894985240@qq.com',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/foreverRuns',
      },
      {
        iconClass: 'icon-erji',
        title: '听音乐',
        link: 'https://music.163.com/#/playlist?id=755597173',
      },
    ],
  },

  // 页脚信息
  footer: {
    createYear: 2022, // 博客创建年份
    copyrightInfo: 'RunsZ | <a href="https://vuepress.vuejs.org/zh/" target="_blank">VuePress</a>', // 博客版权信息，支持a标签
  },

  // 插入hmtl(广告)模块
  // htmlModules,
}
