<template lang="pug">
  #document
    app-spy(:toc="document.toc")
    article
      h1 {{ document.title }}
      nuxt-content(:document="document")
    app-pagination(:prev="prev" :next="next")
</template>

<script>
export default {
  props: {
    document: { type: Object, required: true },
    prev: { type: Object, default: () => null },
    next: { type: Object, default: () => null }
  },
  head () {
    return {
      title: this.document.title
    }
  }
}
</script>

<style lang="stylus">
#document
  position relative
  article
    color var(--color)
    h1
      text-align center
      margin-bottom 50px
      font-weight 500
      font-size 2.1rem
    *
      word-break break-all
    h2, h3
      > a
        text-decoration none
    h2
      font-weight 400
      margin-top 25px
      margin-bottom 20px
      font-size 1.4rem
      .icon.icon-link
        background-image url('~/assets/svg/icon-hashtag.svg')
        display inline-block
        width 20px
        height 20px
        background-size 20px 20px
        margin-right 3px
        filter var(--color-filter-invert)
    h3
      font-weight 500
      margin-top 25px
      margin-bottom 20px
      font-size 1.1rem
    h4
      font-weight 500
      margin-top 25px
      margin-bottom 20px
      font-size 1rem
    p
      margin 25px 0
      line-height 1.8rem
    ol, ul
      list-style-type initial
      padding-left 20px
      li
        line-height 1.8rem
        padding 10px 0
        p
          margin 8px 0
    strong, b
      color var(--color-highlight)
      font-weight 500
    a
      text-decoration underline
      color var(--color-highlight)
    pre[class*=language-]
      border-radius 5px
      border none
      background-color #292a2d
      > code
        line-height 1.8em
    b, strong, p, blockquote
      > code
        border-radius 5px
        color var(--color-code-text)
        background-color var(--color-code-background)
        padding 2px 8px
        font-size .92rem
    blockquote
      border-color #acacac
      border-width 0 0 0 2px
      border-style solid
      padding 1px 0 0 12px
      color var(--color-blockquote-background)
      line-height 1.8em
      text-align left
      font-size 0.9rem
      margin-top 25px
      p
        margin 0
</style>
