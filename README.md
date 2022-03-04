<p align="center">
  <a href="https://www.runss.top/" rel="noopener noreferrer">
    <img width="180" src="https://cdn.jsdelivr.net/gh/foreverRuns/image-hosting@main/blog/logo.29d7zjnv9nb4.png" alt="logo">
  </a>
</p>

<h2 align="center">vuepress-vdoing-blog</h2>


## 介绍

个人博客网站，使用 [VuePress 1.x](https://vuepress.vuejs.org/zh/) 并继承 [Vdoing](https://github.com/xugaoyi/vuepress-theme-vdoing) 主题，搭建而成。

:point_right: 详细介绍 [看这里](https://runss11.gitee.io/pages/51c561/)

:point_right: 站点1：https://runss.top

:point_right: 站点2：https://runss11.gitee.io/

## 注意事项

clone 到本地时，需要在 `vuepress-vdoing-blog/docs/.vuepress/config` 下手动新建 `secrets.js`

```js
module.exports = {
  // gitalk
  // clientID: 'Your own clientID',
  // clientSecret: 'Your own clientSecret',

  // valine
  appId: 'Your own appId', // 替换为你的appId，如：kSuWQbsktacrorUwyB5jrkkW-gzGjcHsz
  appKey: 'Your own appKey', // 替换为你的appKey，如：8vbYX017fTIKYmljkjr506P6
}

```

> 提示：secrets.js 不会上传到仓库中，Github Actions 自动部署时会动态生成

## 新增的主题配置项

#### navBefore

* 类型： `array`
* 默认值：`[]`

配置顶部位于搜索框前的导航标签项，如 [本站](https://runss.top) 顶部导航的 `🔑索引` 

#### repoLink

* 类型： `boolean`
* 默认值： `true`

是否在导航栏右侧生成Github链接。 用于在配置了repo，以便能在底部生成在线修改链接，又不想在顶部导航栏右侧生成Github链接，可设置为 `false`（毕竟不太好看, 可以放到其他地方下）

> 提示：配置为true时，也需要配置 repo 才有效，即主题配置 themeConfig 中的 repo 配置了对应的仓库链接

### 新增的首页配置项

#### category

* 类型：`boolean`
* 默认值：`true`

是否显示侧边栏分类框。 用于在打开分类功能时，又不想显示在主页，可设置为 `false`

> 提示：配置为true时，也需要打开分类功能才会显示，即主题配置 themeConfig 中的 category 配置为 true

#### tag

* 类型：`boolean`
* 默认值：`true`

是否显示侧边栏标签框。 用于在打开标签功能时，又不想显示在主页，可设置为 `false`

> 提示：配置为true时，也需要打开标签功能才会显示，即主题配置 themeConfig 中的 tag 配置为 true

