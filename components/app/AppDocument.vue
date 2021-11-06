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
    document: {
      type: Object,
      required: true
    },
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
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
  color var(--document-color)
  position relative
  article
    h1
      text-align center
      margin-bottom 50px
      font-weight 500
      font-size 2.1em
    *
      word-break break-all
    h2, h3
      > a
        text-decoration none
    h2
      font-weight 400
      margin-top 25px
      margin-bottom 20px
      font-size 1.5em
      .icon.icon-link
        background-image url('~/assets/svg/icon-hashtag.svg')
        display inline-block
        width 20px
        height 20px
        background-size 20px 20px
        margin-right 3px
        filter var(--document-icon-link-filter-invert)
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
      color var(--document-strong-color)
      font-weight 500
    a
      text-decoration underline
    pre[class*=language-]
      border-radius 5px
      border none
      background-color var(--document-code-block-background-color)
      > code
        line-height 1.8em
    b, strong, p, blockquote
      > code
        border-radius 5px
        color var(--document-code-color)
        background-color var(--document-code-background-color)
        padding 2px 8px
        font-size .92rem
    blockquote
      border-color #acacac
      border-width 0 0 0 2px
      border-style solid
      padding 1px 0 0 12px
      color var(--document-blockquote-color)
      line-height 1.8em
      text-align left
      font-size 0.9em
      margin-top 25px
      p
        margin 0

@media (prefers-color-scheme: light)
  :root
    --document-color rgba(0, 0, 0, .9)
    --document-icon-link-filter-invert invert(0)
    --document-code-color #f0506e
    --document-code-background-color #f8f8f8
    --document-code-block-background-color #292a2d
    --document-strong-color #f0506e
    --document-blockquote-color #666
@media (prefers-color-scheme: dark)
  :root
    --document-color white
    --document-icon-link-filter-invert invert(1)
    --document-code-color white
    --document-code-background-color #292a2d
    --document-code-block-background-color #292a2d
    --document-strong-color #5db0d7
    --document-blockquote-color white
</style>
