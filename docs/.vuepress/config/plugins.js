// const { clientID, clientSecret } = require('./secrets.js')
const { appId, appKey } = require('./secrets.js')

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
    // {
    //   choosen: 'gitalk',
    //   options: {
    //     clientID,
    //     clientSecret,
    //     repo: 'gitalk-comment-blog', // GitHub 仓库
    //     owner: 'foreverRuns', // GitHub仓库所有者
    //     admin: ['foreverRuns'], // 对仓库有写权限的人
    //     // distractionFreeMode: true,
    //     pagerDirection: 'last', // 'first'正序 | 'last'倒序
    //     id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
    //     title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
    //     labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
    //     body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
    //   },
    // },

    {
      // 具体参数请看官网：https://valine.js.org/
      choosen: 'valine',
      options: {
        el: '#valine-vuepress-comment',
        appId,
        appKey,
        path: '<%- frontmatter.commentid || frontmatter.permalink %>',
        placeholder: '评论点啥 ~~~', // 评论框占位提示符, '写个昵称标识一下自己\n留下邮箱可以收到回复\n留下网址让别人访问你\n'
        avatar: 'monsterid', // 小怪物头像. 目前非自定义头像有7种默认值可选: https://valine.js.org/avatar.html
        pageSize: 10, // 评论列表分页，每页条数
        visitor: true, // 文章访问量统计
        recordIP: false, // 是否记录评论者 IP 地址
        enableQQ: true, // 是否启用昵称框自动获取 QQ 昵称和 QQ 头像, 默认关闭
      },
    },
  ],
]
