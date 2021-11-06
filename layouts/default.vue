<template lang="pug">
  #container
    app-top
    app-sidebar
    main
      nuxt
    app-bottom
</template>

<style lang="stylus">
html
  background-color var(--html-background-color)
*:not(i), *:not(i)::before, *:not(i)::after
  margin 0px
  padding 0px
  font-family 'Noto Sans KR', sans-serif !important
a
  text-decoration none
  color var(--html-anchor-color)
  transition-duration .2s
  &:hover
    color var(--html-anchor-hover-color)
ul
  list-style none

@media (prefers-color-scheme: light)
  :root
    --html-background-color white
    --html-anchor-color rgba(0, 0, 0, .6)
    --html-anchor-hover-color black
@media (prefers-color-scheme: dark)
  :root
    --html-background-color #1e1f21
    --html-anchor-color rgba(255, 255, 255, .85)
    --html-anchor-hover-color white
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
