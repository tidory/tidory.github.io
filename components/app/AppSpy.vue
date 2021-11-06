<template lang="pug">
  aside#spy
    ul
      li(v-for="link of toc" :key="link.id" :class="{ 'h2': link.depth === 2, 'h3': link.depth === 3 }")
        a(:href="`#${(link.id)}`") {{ link.text }}
</template>

<script>
export default {
  props: {
    toc: {
      type: Array, required: true
    }
  }
}
</script>

<style lang="stylus">
$WIDTH = 180px

#spy
  position absolute
  top 0
  list-style none
  text-align left
  font-weight 400
  z-index 0
  margin-left calc(620px + 110px) !important
  height 100%
  ul
    position sticky
    top 35px
    border-left 1px dashed
    border-left-color var(--spy-border-color)
    box-sizing border-box
    width $WIDTH
    li
      padding-left 20px
      margin 8px 0
      box-sizing border-box
      max-width $WIDTH
      a
        font-size .82rem
      &.h3
        padding-left 35px
@media screen and (max-width: 1200px)
  #spy
    display none !important

@media (prefers-color-scheme: light)
  :root
    --spy-border-color rgba(0, 0, 0, .2)
@media (prefers-color-scheme: dark)
  :root
    --spy-border-color rgba(255, 255, 255, .5)
</style>
