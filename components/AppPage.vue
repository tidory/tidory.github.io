<template lang="pug">
section#document
  slot(name="header")
  slot(name="text")
  slot(name="footer")
</template>

<script>
export default {
  props: ['active'],
  beforeMount() {
    this.$store.commit('activeMenu', this.active);
  }
}
</script>

<style lang="stylus">
@keyframes fadeInUp
  from
    transform TranslateY(30px)
    opacity 0
  to 
    transform TranslateX(0)
    opacity 1
#document
  animation-duration: .8s;
  animation-name: fadeInUp;
  padding-top 25px
  .version
    font-weight 600
    margin-left 5px
    font-size 14px
    color #ed5207
    &::before
      content "#"
      color #ed5207
      margin-right 5px
  .header
    text-align center
    margin-bottom 75px
    h1
      color rgba(0, 0, 0, .85)
      font-weight 500
      font-size 2.1em
    .index
      margin-bottom 15px
      color #ed5207
      font-weight 500
      font-size 1.1em
  .paragraph
    margin 35px 0
    h2
      font-weight 400
      margin-bottom 35px
      font-size 1.5em
      &::before
        content "#"
        color #ed5207
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
      color rgba(0, 0, 0, .85)
      line-height 1.9em
    b
      color #ed5207
      font-weight 500
    a
      text-decoration underline
    pre
      border-radius 5px
    .blockquote-type-1,
    .blockquote-type-3
      pre
        font-family 'Noto Sans KR', sans-serif !important
        color rgba(0, 0, 0, .85)
    .blockquote-type-1
      border 1px solid rgba(0, 0, 0, .1)
      padding 15px
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
      border-style solid
      border-width 1px
      border-color rgb(238, 238, 238)
      background-color rgb(238, 238, 238);
      padding 10px
      font-weight 300
  .footer
    .arrows
      overflow hidden
      margin-top 50px
      .left
        float left
        i
          margin-right 3px
      .right
        float right
        i
          margin-left 3px
@media all and (min-width: 1170px)
  #document
    padding-bottom 75px
@media all and (max-width: 1170px)
  #document
    padding-bottom 35px
</style>
