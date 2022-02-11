<template>
  <nav class="nav-links" v-if="beforeLinks.length">
    <!-- before links -->
    <div class="nav-item" v-for="item in beforeLinks" :key="item.link">
      <DropdownLink v-if="item.type === 'links'" :item="item" />
      <NavLink v-else :item="item" />
    </div>
  </nav>
</template>

<script>
import DropdownLink from '@theme/components/DropdownLink.vue'
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink, DropdownLink },

  methods: {
    resolveNavLinkItem(linkItem) {
      return Object.assign(linkItem, {
        type: linkItem.items && linkItem.items.length ? 'links' : 'link',
      })
    },
  },

  computed: {
    navBefore() {
      return this.$themeLocaleConfig.navBefore || this.$site.themeConfig.navBefore || []
    },

    beforeLinks() {
      return (this.navBefore || []).map((link) => {
        return Object.assign(this.resolveNavLinkItem(link), {
          items: (link.items || []).map(this.resolveNavLinkItem),
        })
      })
    },
  },
}
</script>

<style lang="stylus">
.nav-links
  display inline-block
  margin-right 0.5rem
  a
    line-height 1.4rem
    color inherit
    &:hover, &.router-link-active
      color $accentColor
  .nav-item
    position relative
    display inline-block
    margin-left 1.5rem
    line-height 2rem
    &:first-child
      margin-left 0
// 959
@media (max-width $MQNarrow)
  .nav-links
    .nav-item
      margin-left 1.2rem
@media (max-width $MQMobile)
  .nav-links
    .nav-item
      margin-left 0
@media (min-width $MQMobile)
  .nav-links a
    &:hover, &.router-link-active
      color var(--textColor)
  .nav-item > a:not(.external)
    &:hover, &.router-link-active
      margin-bottom -2px
      border-bottom 2px solid lighten($accentColor, 8%)
</style>
