<template lang="pug">
#container(:data-theme="theme")
  top
  sidebar
  main
    nuxt
  bottom
</template>

<script>
import Top from '~/components/top'
import Sidebar from '~/components/sidebar'
import Bottom from '~/components/bottom'

export default {
  components: {
    Top,
    Sidebar,
    Bottom
  },
  data () {
    return {
      theme: -1 // 1: DARK, -1: LIGHT
    }
  },
  mounted () {
    this.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 1 : -1
  }
}
</script>

<style lang="stylus">
*:not(i), *:not(i)::before, *:not(i)::after
  margin 0px
  padding 0px
  font-family 'Noto Sans KR', sans-serif !important
a
  text-decoration none
  color rgba(0, 0, 0, .85)
  transition-duration .2s
  &:hover
    color #f0506e
ul
  list-style none
</style>

<style lang="stylus">
main
  padding-top 25px
@media all and (min-width: 1200px)
  main
    width 620px
    margin 0 auto
    padding-top 125px
    padding-bottom 75px
@media all and (max-width: 1200px)
  main
    width 100%
    padding 25px
    padding-bottom 20px
    box-sizing border-box
</style>

<style lang="stylus">
#container[data-theme="1"]
  background-color #1e1f21
  a
    color rgba(255, 255, 255, .85)
    &:hover
      color white
</style>
