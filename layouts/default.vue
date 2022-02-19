<template lang="pug">
  #container
    app-top
    app-sidebar
    main
      nuxt
    app-bottom
</template>

<!-- Color Palette -->
<style lang="stylus">
:root
  --color-background #1e1f21 // background
  --color-sidebar-background #292a2d // sidebar
  --color rgba(255, 255, 255, .9) // text, icon, :hover
  --color-blur rgba(255, 255, 255, .6) // icon, a:nav
  --color-highlight #5db0d7 // b, strong, a:article
  --color-code-text var(--color) // code
  --color-code-background #292a2d // pre[class*=language-]
  --color-blockquote-background var(--color) // blockquote
  --color-border rgba(255, 255, 255, .5) // border
  --color-button-background #353638 // button
  --color-button-hover-background #53575c
  --color-filter-invert invert(1) // logo, .icon-link
</style>

<style lang="stylus">
html
  background-color var(--color-background)
*:not(i), *:not(i)::before, *:not(i)::after
  margin 0px
  padding 0px
  font-family 'Noto Sans KR', sans-serif !important
a
  text-decoration none
  color var(--color-blur)
  transition-duration .2s
  &:hover
    color var(--color)
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
    padding 20px
    padding-bottom 40px
    box-sizing border-box
</style>
