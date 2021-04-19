<template lang="pug">
footer#footer(class='uk-navbar-container uk-navbar-transparent' uk-navbar)
  div(class='uk-navbar-left')
    a(v-for="(item, index) in menu" :href="item.href" target='_blank' rel='noreferrer')
      | {{ item.label }}
      i(:class="item.class")
  div(class='uk-navbar-right')
    a#toTop(href='#' uk-scroll='target: #__TIDORY' target='_blank' rel='noreferrer')
      | 제일 위로
      i(class='fa fa-chevron-up')
</template>

<script>
export default {
  data () {
    return {
      menu: [
        { class: 'fab fa-github', href: this.$store.state.menu.community.github.href, label: this.$store.state.menu.community.github.label },
        { class: 'fab fa-npm', href: this.$store.state.menu.community.npm.href, label: this.$store.state.menu.community.npm.label }
      ]
    }
  }
}
</script>

<style lang="stylus">
$BUTTON_SIZE = 35px
$SIDEBAR_WIDTH = 260px

#footer
  width 'calc(100% - %s)' % $SIDEBAR_WIDTH
  padding 0 20px
  box-sizing border-box
  position fixed
  right 0
  bottom 20px
  font-size .92rem
  z-index 9996
  .uk-navbar-right
    #toTop,
    #theme-btn
      background-color white
      color alpha(black, .9)
      box-shadow 0 0 0 1px alpha(black, .1), 0 2px 5px alpha(black, .1)
      border-radius 25px
      border none
      cursor pointer
      transition-duration .1s
      width $BUTTON_SIZE
      height $BUTTON_SIZE
      line-height $BUTTON_SIZE
      text-align center
      border-radius 50%
      font-size 0
      i
        font-size .9rem
        line-height $BUTTON_SIZE
      &:hover
        background-color alpha(black, .9)
        color alpha(white, .9)
    #toTop
      margin-left 12px
  .uk-navbar-left
    a
      transition-duration .1s
      margin-right 10px
      color alpha(black, .3)
      font-size 0
      &:hover
        color alpha(black, .85)
      &:last-child
        margin-right 0
      i
        &.fa-github
          font-size 1.25rem
        &.fa-npm
          font-size 1.6rem
          position relative
          top:2px
  @media screen and (max-width: 1200px)
    bottom 15px
    padding 0 15px
    width 100%
    .uk-navbar-left
      display none
</style>
