module.exports = {
  nav: [
    // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（那些随机数不是什么特殊编码）。另外，注意结尾是有斜杠的
    { text: '首页', link: '/' },
    {
      text: '文章',
      link: '/article/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
      items: [
        { text: '前端', link: '/article/web/' },
        { text: '后端', link: '/article/server/' },
        { text: 'Linux', link: '/article/linux/' },
        { text: 'Openssl', link: '/article/openssl/' },
        { text: 'Level2', link: '/article/level2/' },
        { text: '算法', link: '/article/algorithm/' },
        { text: '其他', link: '/article/other/' },
      ],
    },
    {
      text: '专栏',
      link: '/column/',
      items: [
        { text: 'Markdown', link: '/column/md/' },
        { text: 'JavaScript', link: '/column/js/' },
        { text: 'ECMAScript 6', link: '/column/es6/' },
        // { text: 'Vue3', link: '/column/vue3/'},
        // { text: 'Git入门', link: '/column/git/' },
        // { text: 'JavaScript入门', link: '/column/js/' },
        // { text: 'TypeScript入门', link: '/column/ts/' },
      ],
    },
    {
      text: '项目',
      link: '/project/',
      items: [{ text: '本站开发', link: '/project/blog/' }],
    },
    {
      text: '更多',
      link: '/more/',
      items: [
        { text: '网址收藏', items: [{ text: '收藏夹', link: '/pages/bb780f/' }] },
        // { text: '实用技巧', link: '/pages/aea657/' },
        {
          text: '摸鱼娱乐',
          items: [
            { text: 'VIP视频解析', link: '/pages/74e151/' },
            { text: '免费动漫', link: '/pages/312d52/' },
          ],
        },
      ],
    },
    { text: '关于', link: '/about/' },
    // {
    //   text: '索引',
    //   link: '/categories/',
    //   items: [
    //     { text: '分类', link: '/categories/' },
    //     { text: '标签', link: '/tags/' },
    //     { text: '归档', link: '/archives/' },
    //   ],
    // },
  ],

  navBefore: [
    {
      text: '🔑索引',
      // link: '/categories/',
      items: [
        { text: '分类', link: '/categories/' },
        { text: '标签', link: '/tags/' },
        { text: '归档', link: '/archives/' },
      ],
    },
  ],
}
