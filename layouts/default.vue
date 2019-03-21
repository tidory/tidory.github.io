<template lang="pug">
div#container
  app-sidebar
  app-navigation
  main#main(role="main")
    nuxt
  app-footer
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue';
import AppSidebar from '~/components/AppSidebar.vue';
import AppFooter from '~/components/AppFooter.vue';

import Prism from 'prismjs';

export default {
  components: {
    AppNavigation,
    AppSidebar,
    AppFooter
  }
}
</script>

<style lang="stylus">
*:not(i), *:not(i)::before, *:not(i)::after
  margin 0px
  padding 0px
a
  text-decoration none
  color rgba(0, 0, 0, .85)
  transition-duration .5s
  &:hover
    color #ed5207
#container
  font-family: 'Noto Sans KR', sans-serif;
@media all and (min-width: 1170px)
  #main
    width 620px
    position relative
    left 420px
    top 100px
@media all and (max-width: 1170px)
  #main
    width 100%
    padding 0 25px
    box-sizing border-box
    img
      width 100%
</style>