<template lang="pug">
  #bottom
    .left
      a(v-for="community in communities" :href="community.path" target='_blank' rel='noreferrer')
        | {{ community.title }}
        i(:class="community.class")
    .right
      a#toTop(href='#__nuxt')
        | 제일 위로
        i(class='fa fa-chevron-up')
</template>

<script>
export default {
  data () {
    return {
      communities: [
        { title: 'NPM', path: 'https://www.npmjs.com/package/tidory', class: 'fab fa-npm' },
        { title: 'Github', path: 'https://github.com/tidory', class: 'fab fa-github' }
      ]
    }
  }
}
</script>

<style lang="stylus">
$BUTTON_SIZE = 35px

#bottom
  width 'calc(100% - %s)' % 260px
  padding 0 20px
  box-sizing border-box
  position fixed
  right 0
  bottom 20px
  font-size .92rem
  z-index 9996
  display flex
  justify-content space-between
  .right
    #toTop
      background-color var(--bottom-button-background-color)
      color var(--bottom-button-color)
      box-shadow 0 0 0 1px rgba(0, 0, 0, .1), 0 2px 5px rgba(0, 0, 0, .1)
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
      display inline-block
      margin-left 12px
      i
        font-size .9rem
        line-height $BUTTON_SIZE
      &:hover
        background-color var(--bottom-button-hover-background-color)
        color var(--bottom-button-hover-color)
  .left
    a
      transition-duration .1s
      margin-right 10px
      color var(--bottom-icon-color)
      font-size 0
      &:hover
        color var(--bottom-icon-hover-color)
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
  #bottom
    display none

@media (prefers-color-scheme: light)
  :root
    --bottom-button-background-color white
    --bottom-button-color rgba(0, 0 ,0 , .9)
    --bottom-button-hover-background-color rgba(0, 0, 0, .9)
    --bottom-button-hover-color rgba(255, 255, 255, .9)
    --bottom-icon-color rgba(0, 0, 0, .3)
    --bottom-icon-hover-color rgba(0, 0, 0, .85)
@media (prefers-color-scheme: dark)
  :root
    --bottom-button-background-color #353638
    --bottom-button-color white
    --bottom-button-hover-background-color #53575c
    --bottom-button-hover-color rgba(255, 255, 255, .9)
    --bottom-icon-color rgba(255, 255, 255, .85)
    --bottom-icon-hover-color white
</style>
