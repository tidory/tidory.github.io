<template lang="pug">
#document
  spy(:toc="document.toc")
  article
    h1 {{ document.title }}
    nuxt-content(:document="document")
    .pagination
      .prev(v-if="prev")
        nuxt-link(:to="{ params: { slug: prev.slug } }")
          i.fas.fa-angle-left
          | {{ prev.title }}
      .next(v-if="next")
        nuxt-link(:to="{ params: { slug: next.slug } }")
          | {{ next.title }}
          i.fas.fa-angle-right
</template>

<script>
import Spy from '~/components/spy'

export default {
  components: {
    Spy
  },
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
      title: '티스토리 스킨 프레임워크, 티도리(TIDORY) ― ' + this.document.title
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
        color black
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
#TIDORY[data-theme="1"]
  article
    p,
    h1, h2, h3, h4,
    ol, ul
      color white
    a, b, strong
      color #5db0d7
    h2
      .icon.icon-link
        filter invert()
    pre[class*=language-]
      background-color #292a2d
    p, blockquote, b, strong
      code
        background-color #292a2d
        color white
  .pagination
    a
      color white
</style>
