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
  --color-background white // background
  --color-sidebar-background var(--color-background) // sidebar
  --color rgba(0, 0, 0, .9) // text, icon, :hover
  --color-blur rgba(0, 0, 0, .4) // icon, a:nav
  --color-highlight #f0506e // b, strong, a:article
  --color-code-text var(--color-highlight) // code
  --color-code-background #f8f8f8 // pre[class*=language-]
  --color-blockquote-background var(--color-blur) // blockquote
  --color-border rgba(0, 0, 0, .2) // border
  --color-button-background var(--color-background) // button
  --color-button-hover-background var(--color) // button:hover
  --color-filter-invert invert(0) // logo, .icon-link
@media (prefers-color-scheme: dark)
  :root
    --color-background #1e1f21
    --color-sidebar-background #292a2d
    --color rgba(255, 255, 255, .9)
    --color-blur rgba(255, 255, 255, .6)
    --color-highlight #5db0d7
    --color-code-text var(--color)
    --color-code-background #292a2d
    --color-blockquote-background var(--color)
    --color-border rgba(255, 255, 255, .5)
    --color-button-background #353638
    --color-button-hover-background #53575c
    --color-filter-invert invert(1)
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
