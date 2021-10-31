<template lang="pug">
section#document
  aside
    scrollspy(:toc="document.toc")
  header
    h1 {{ pages[index].title }}
  article
    nuxt-content(:document="document")
  footer
    .pagination
      .prev(v-if="index > 0")
        a(:href="pages[index - 1].path")
          i.fas.fa-angle-left
          | {{ pages[index - 1].title }}
      .next(v-if="index < pages.length - 1")
        a(:href="pages[index + 1].path")
          | {{ pages[index + 1].title }}
          i.fas.fa-angle-right
</template>

<script>
import Scrollspy from '~/components/scrollspy'

export default {
  components: {
    Scrollspy
  },
  props: {
    document: {
      type: Object, required: true
    }
  },
  head () {
    return {
      title: '티스토리 스킨 프레임워크, 티도리(TIDORY) ― ' + this.pages[this.index].title
    }
  },
  computed: {
    pages () {
      return this.$store.state.pages.flatMap(page => page.items)
    },
    index () {
      return this.pages.findIndex(page => page.path === this.$route.path)
    }
  }
}
</script>

<style lang="stylus">
#document
  color rgba(0, 0, 0, .85)
  position relative
</style>

<style lang="stylus">
#document
  aside
    position absolute
    top 0
    list-style none
    text-align left
    font-weight 400
    z-index 0
    margin-left calc(620px + 110px) !important
    height 100%
</style>

<style lang="stylus">
#document
  header
    text-align center
    margin-bottom 50px
    h1
      font-weight 500
      font-size 2.1em
</style>

<style lang="stylus">
#document
  article
    *
      word-break break-all
    h2, h3
      > a
        text-decoration none
        color black
    h2
      font-weight 400
      margin-top 25px
      margin-bottom 20px
      font-size 1.5em
      &::before
        content "#"
        color #f0506e
        font-weight 400
        margin-right 10px
    h3
      font-weight 500
      margin-top 25px
      margin-bottom 20px
      font-size 1.2em
    h4
      font-weight 500
      margin-top 25px
      margin-bottom 20px
      font-size 1.1em
    p
      margin 25px 0
      line-height 1.9em
    ol, ul
      list-style-type initial
      padding-left 20px
      li
        line-height 1.9em
        padding 10px 0
        p
          margin 8px 0
    strong, b
      color #f0506e
      font-weight 500
    a
      text-decoration underline
    pre[class*=language-]
      border-radius 5px
      border none
      > code
        line-height 1.8em
    b, strong, p, blockquote
      > code
        border-radius 5px
        background-color #f8f8f8
        color #f0506e
        padding 2px 8px
        font-size .92rem
    blockquote
      border-color #acacac
      border-width 0 0 0 2px
      border-style solid
      padding 1px 0 0 12px
      color #666
      line-height 1.8em
      text-align left
      font-size 0.9em
      margin-top 25px
      p
        margin 0
</style>

<style lang="stylus">
#document
  footer
    .pagination
      margin-top 50px
      overflow hidden
      a
        text-decoration none !important
      .prev
        float left
        i
          margin-right 8px
      .next
        float right
        i
          margin-left 8px
</style>

<style lang="stylus">
#container[data-theme="1"]
  header
    h1
      color white
  article
    p,
    h1, h2, h3, h4,
    ol, ul
      color white
    a, b, strong
      color #5db0d7
    h2::before
      color #5db0d7
    pre[class*=language-]
      background-color #292a2d
    p, blockquote, b, strong
      code
        background-color #292a2d
        color white
  footer
    a
      color white
</style>
