<template lang="pug">
  aside#sidebar
    .__
      nuxt-link.logo(to="/")
        | 홈
        img(src="/images/logo.png" alt="티스토리 로고" width="24" height="24")
      nav
        ul(v-for="menuItem in menuItems")
          li.category {{ menuItem.category }}
          li.item(v-for="item in menuItem.items")
            .title
              nuxt-link(:to="item.path" v-if="item.path.startsWith('/')")
                | {{ item.title }}
              a(:href="item.path" target='_blank' rel='noreferrer' v-else)
                | {{ item.title }}
</template>

<script>
export default {
  data () {
    return {
      menuItems: []
    }
  },
  async fetch () {
    const docs = await this.$content('docs')
      .only(['category', 'title', 'path'])
      .sortBy('index', 'asc')
      .fetch()

    const categories = ['튜토리얼', '스케일링 업']

    categories.forEach((category) => {
      const items = docs.filter(doc => doc.category === category)
      this.menuItems.push({ category, items })
    })

    this.menuItems.push(
      {
        category: '티스토리 API',
        items: [
          { title: 'Tistory for Javascript', path: 'https://github.com/tidory/tistory.js' },
          { title: 'Tistory for PHP', path: 'https://github.com/tidory/tistory.php' },
          { title: '(Unofficial) Tistory Skin ', path: 'https://github.com/tidory/tistory-skin' }
        ]
      },
      {
        category: '메타',
        items: [
          { title: '티스토리 스킨 가이드', path: 'https://tistory.github.io/document-tistory-skin' },
          { title: '패치노트', path: 'https://github.com/tidory/cli/blob/master/CHANGELOG.md' },
          { title: '티도리 프레임워크 강좌', path: 'https://www.inflearn.com/course/%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC/#' }
        ]
      }
    )
  }
}
</script>

<style lang="stylus">
#sidebar
  position fixed
  width 260px
  height 100%
  border-right 1px solid rgba(0, 0, 0, .1)
  box-sizing border-box
  z-index 9999
  overflow hidden
  background-color var(--color-sidebar-background)
  > .__
    overflow-x hidden
    overflow-y scroll
    height 100%
    width 300px
    position absolute
    z-index 9998
  .logo
    position absolute
    left 50px
    top 35px
    font-size 0 !important
    filter var(--color-filter-invert)
  nav
    position absolute
    top 110px
    left 50px
    box-sizing border-box
    list-style none
    padding-bottom 45px
    .category
      font-weight 600
      color var(--color)
      padding 25px 0
    .item
      padding 12px 0
      font-weight 400
      font-size .96rem
      a
        color var(--color-blur)
        transition-duration unset
        text-decoration none
        &.nuxt-link-active
          color var(--color)
          font-weight 500
        &:hover
          color var(--color)
@media all and (max-width: 1200px)
  #sidebar
    display none
</style>
