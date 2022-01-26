// 插件配置 插件名字前缀 vuepress-plugin- 可以省略
module.exports = [
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
  [
    'one-click-copy', // 代码块复制按钮
    {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'zooming', // 放大图片
    {
      // selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      selector: '.theme-vdoing-content img:not(a > img, .no-zoom)', // 排除被a标签包含的img, 排除class是no-zoom的图片(不想放大的图片加上class="no-zoom")
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    'comment', // 评论插件 'vuepress-plugin-comment'
    {
      choosen: 'gitalk',
      options: {
        clientID: '333524d9ba69991f1b12',
        clientSecret: '25a2b7dd5c9bd44ebfb9f01b4a2e5430019c9718',
        repo: 'gitalk-comment-blog', // GitHub 仓库
        owner: 'foreverRuns', // GitHub仓库所有者
        admin: ['foreverRuns'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ],
]
