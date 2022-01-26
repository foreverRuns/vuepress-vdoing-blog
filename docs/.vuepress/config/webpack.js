const path = require('path')

module.exports = {
  // webpack 配置
  resolve: {
    // 当你想要继承某个组件的时候，直接把源码中对应的组件复制到.vuepress/theme/components下修改，
    // 源码中其他地方用到该组件通过 @theme/components/XXX.vue 会自动地映射到子主题中对应的 XXX 组件。
    // 但是由于 vdoing主题 源码中某些组件的引用省略了.vue后缀, 比如：Layout.vue 中 import Footer from '@theme/components/Footer'
    // 这时候继承失败，会使用原主题的Footer组件，下面配置也无效不知为何，只能直接去主题源码中加上后缀 import Footer from '@theme/components/Footer.vue'
    extensions: ['.vue'], //省略 .vue后缀
    // 官方文档：主题想要被继承 所有的组件都必须使用 @theme 别名来引用其他组件。
    // 这里重新指定 @theme 为继承的vdoing主题所在目录，否则编译会出现各种组件找不到的错误（这里官网不知为何没有说明要重新指定@theme）
    alias: {
      '@theme': path.resolve(__dirname, '../../../node_modules/vuepress-theme-vdoing'),
    },
  },
}
