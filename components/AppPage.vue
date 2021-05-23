<template lang="pug">
#page
  section#document(ref="document")
    slot(name="header")
    slot(name="text")
    slot(name="footer")
    ScrollSpy
</template>

<script>
import ScrollSpy from './AppScrollSpy'

export default {
  props: ['active', 'title'],
  head () {
    return {
      title: '티스토리 스킨 프레임워크, 티도리(TIDORY) ― ' + this.title
    }
  },
  mounted () {
    this.$store.commit('activeMenu', this.active)
  },
  components: {
    ScrollSpy
  }
}
</script>

<style lang="stylus">
$THEME_COLOR = #f0506e

#document
  margin-top 25px
  color rgba(0, 0, 0, .85)
  position relative
  .version
    font-weight 600
    margin-left 5px
    font-size 14px
    color $THEME_COLOR
    &::before
      content "#"
      color $THEME_COLOR
      margin-right 5px
  .header
    text-align center
    margin-bottom 50px
    h1
      font-weight 500
      font-size 2.1em
    .index
      margin-bottom 15px
      color $THEME_COLOR
      font-weight 500
      font-size 1.1em
  .paragraph
    margin 35px 0
    *
      word-break break-all
    h2, h3
      > a
        text-decoration none
        color black
    h2
      font-weight 400
      margin-bottom 35px
      font-size 1.5em
      &::before
        content "#"
        color $THEME_COLOR
        font-weight 400
        margin-right 10px
    h3
      font-weight 500
      margin-top 25px
      margin-bottom 20px
      font-size 1.2em
    h4
      font-weight 500
      margin-bottom 5px
      font-size 1.1em
    p
      margin 25px 0
      line-height 1.9em
    ol
      padding-left 20px
      li
        line-height 1.9em
        padding 10px 0
        p
          margin 8px 0
    b
      color $THEME_COLOR
      font-weight 500
    a
      text-decoration underline
    pre
      border-radius 5px
      background none
      border none
      > code
        background-color #f8f8f8
        padding 15px
    blockquote
      line-height inherit
      font-size inherit
      font-style inherit
    .blockquote-type-1
      border 1px solid rgba(0, 0, 0, .1)
      padding 15px
      p
        margin 10px 0
    .blockquote-type-2
      border-color #acacac
      border-width 0 0 0 2px
      border-style solid
      padding 1px 0 0 12px
      color #666
      line-height 1.8em
      text-align left
      font-size 0.9em
    .blockquote-type-3
      background-color #f8f8f8
      padding 15px
      font-weight 400
  .footer
    .arrows
      overflow hidden
      margin-top 50px
      a
        text-decoration none !important
      .left
        float left
        i
          margin-right 3px
      .right
        float right
        i
          margin-left 3px
@media all and (min-width: 1200px)
  #document
    padding-bottom 75px
@media all and (max-width: 1200px)
  #document
    padding-bottom 35px
</style>
