<template lang="pug">
#container
  app-sidebar
  app-navigation
  main#main
    nuxt
  app-footer
</template>

<script>
import AppSidebar from '~/components/AppSidebar.vue'
import AppFooter from '~/components/AppFooter.vue'
import AppNavigation from '~/components/AppNavigation.vue'

export default {
  components: {
    AppSidebar,
    AppFooter,
    AppNavigation
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
    color #ed5207
@media all and (min-width: 1200px)
  #main
    width 620px
    margin 0 auto
    padding-top 125px
@media all and (max-width: 1200px)
  #main
    width 100%
    padding 0 25px
    box-sizing border-box
    img
      width 100%
</style>
